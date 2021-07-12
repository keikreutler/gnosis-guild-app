import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BigNumber, utils } from "ethers";
import { useWeb3Context } from "../context/Web3Context";
import { useContributorContext } from "../context/ContributorContext";

import { useGuild } from "./useGuild";
import { useContributorProfile } from "./useContributorProfile";
import { useSubscriber } from "./useSubscriber";
import { fetchGuild } from "../graphql";

type Contribution = {
  submitContribution: (
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string
  ) => Promise<void>;
  contributionTx: () => Promise<void>;
  contributeText: string;
  contributeLoading: boolean;
  setContributeLoading: (arg0: boolean) => void;
  modalFooter: string;
};

export const useContribute = (): Contribution => {
  const [contributeLoading, setContributeLoading] = useState(false);
  const [modalFooter, setModalFooter] = useState("");
  const { subscribed, setSubscribed, setSubscriber } = useSubscriber();
  const {
    account,
    providerChainId,
    ethersProvider,
    cpk,
    getProxyBalance,
    getBalanceOf,
  } = useWeb3Context();
  const { name, email, guildMinimumAmount } = useContributorContext();
  const { subscribe, unsubscribe } = useGuild();
  const { guildId } = useParams<{ guildId: string }>();
  const { saveContributorProfile } = useContributorProfile();
  const { subscriber } = useSubscriber();
  const [guildMetadata, setGuildMetadata] = useState<any>();

  useEffect(() => {
    const _fetchGuild = async () => {
      const meta = await fetchGuild(guildId, providerChainId || 4); // TODO: fetch default Network
      if (meta) {
        setGuildMetadata(meta);
      }
    };
    _fetchGuild();
  }, [guildId, providerChainId]);

  const submitContribution = async (
    tokenAddress: string,
    contributorName: string,
    contributorEmail: string,
    guildMinimumAmount: string
  ): Promise<void> => {
    if (!ethersProvider) {
      console.error("EthersProvider has not been set yet");
      return;
    }

    setContributeLoading(true);
    try {
      const tx = await subscribe(
        providerChainId,
        ethersProvider,
        guildId,
        tokenAddress,
        guildMinimumAmount
      );
      if (tx) {
        await tx.wait();
      }
      console.log("Saving Contributor");
      console.log(contributorName);
      console.log(contributorEmail);
      await saveContributorProfile(contributorName, contributorEmail);
      setContributeLoading(false);
    } catch (error) {
      // TODO: Show an pop-up error
    }
  };

  const submitContributionTx = async () => {
    setModalFooter(
      cpk
        ? "Creating Subscription using a Proxy..."
        : "Approving tokens & creating subscription..."
    );
    setContributeLoading(true);

    const bnValue = utils.parseEther(guildMinimumAmount);
    const proxyBalance = cpk?.address
      ? await getProxyBalance(guildMetadata.tokenAddress)
      : BigNumber.from("0");
    const balance = await getBalanceOf(account, guildMetadata.tokenAddress);

    if (balance.lt(bnValue) && cpk?.address && proxyBalance.lt(bnValue)) {
      // TODO: popup error
      console.error("Not Enough balance");
      setModalFooter("Tx Failed. Not Enough Balance!");
      return;
    }

    await submitContribution(
      guildMetadata.tokenAddress,
      name,
      email,
      guildMinimumAmount
    );
    setContributeLoading(false);
    setSubscribed(true);
    await setSubscriber();
  };

  const unsubscribeTx = async () => {
    if (!ethersProvider) {
      return;
    }
    setModalFooter("Cancelling Subscription...");
    setContributeLoading(true);
    const tx = await unsubscribe(
      subscriber.keyId.toString(),
      guildMetadata.id,
      ethersProvider
    );

    if (tx) {
      await tx.wait();
    }

    setContributeLoading(false);
    setSubscribed(false);
    setSubscriber();
  };
  const loadingText = subscribed
    ? "Cancelling Contribution..."
    : "Sending Contribution...";
  const staticText = subscribed ? "Cancel Contribution" : "Contribute";
  const contributeText = !contributeLoading ? staticText : loadingText;
  const contributionTx = subscribed ? unsubscribeTx : submitContributionTx;

  return {
    submitContribution,
    contributionTx,
    contributeText,
    contributeLoading,
    setContributeLoading,
    modalFooter,
  };
};
