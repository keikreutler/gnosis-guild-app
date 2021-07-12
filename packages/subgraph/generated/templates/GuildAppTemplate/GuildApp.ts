// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class InitializedGuild extends ethereum.Event {
  get params(): InitializedGuild__Params {
    return new InitializedGuild__Params(this);
  }
}

export class InitializedGuild__Params {
  _event: InitializedGuild;

  constructor(event: InitializedGuild) {
    this._event = event;
  }

  get _creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _subPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _subscriptionPeriod(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _metadata(): InitializedGuild_metadataStruct {
    return this._event.parameters[4].value.toTuple() as InitializedGuild_metadataStruct;
  }
}

export class InitializedGuild_metadataStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get baseURI(): string {
    return this[2].toString();
  }

  get metadataCID(): string {
    return this[3].toString();
  }
}

export class NewSubscription extends ethereum.Event {
  get params(): NewSubscription__Params {
    return new NewSubscription__Params(this);
  }
}

export class NewSubscription__Params {
  _event: NewSubscription;

  constructor(event: NewSubscription) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class PausedGuild extends ethereum.Event {
  get params(): PausedGuild__Params {
    return new PausedGuild__Params(this);
  }
}

export class PausedGuild__Params {
  _event: PausedGuild;

  constructor(event: PausedGuild) {
    this._event = event;
  }

  get _isPaused(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class RenewSubscription extends ethereum.Event {
  get params(): RenewSubscription__Params {
    return new RenewSubscription__Params(this);
  }
}

export class RenewSubscription__Params {
  _event: RenewSubscription;

  constructor(event: RenewSubscription) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SubscriptionPriceChanged extends ethereum.Event {
  get params(): SubscriptionPriceChanged__Params {
    return new SubscriptionPriceChanged__Params(this);
  }
}

export class SubscriptionPriceChanged__Params {
  _event: SubscriptionPriceChanged;

  constructor(event: SubscriptionPriceChanged) {
    this._event = event;
  }

  get _tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _subPrice(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Unsubscribed extends ethereum.Event {
  get params(): Unsubscribed__Params {
    return new Unsubscribed__Params(this);
  }
}

export class Unsubscribed__Params {
  _event: Unsubscribed;

  constructor(event: Unsubscribed) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class UpdatedMetadata extends ethereum.Event {
  get params(): UpdatedMetadata__Params {
    return new UpdatedMetadata__Params(this);
  }
}

export class UpdatedMetadata__Params {
  _event: UpdatedMetadata;

  constructor(event: UpdatedMetadata) {
    this._event = event;
  }

  get _metadataURI(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get _tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get beneficiary(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GuildApp__subscriptionByOwnerResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class GuildApp extends ethereum.SmartContract {
  static bind(address: Address): GuildApp {
    return new GuildApp("GuildApp", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  approvedTokens(): Array<Address> {
    let result = super.call(
      "approvedTokens",
      "approvedTokens():(address[])",
      []
    );

    return result[0].toAddressArray();
  }

  try_approvedTokens(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "approvedTokens",
      "approvedTokens():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMetadata(): string {
    let result = super.call("getMetadata", "getMetadata():(string)", []);

    return result[0].toString();
  }

  try_getMetadata(): ethereum.CallResult<string> {
    let result = super.tryCall("getMetadata", "getMetadata():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSubscriptionExpiryFor(_account: Address): BigInt {
    let result = super.call(
      "getSubscriptionExpiryFor",
      "getSubscriptionExpiryFor(address):(uint256)",
      [ethereum.Value.fromAddress(_account)]
    );

    return result[0].toBigInt();
  }

  try_getSubscriptionExpiryFor(_account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSubscriptionExpiryFor",
      "getSubscriptionExpiryFor(address):(uint256)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSubscriptionIdFor(_account: Address): BigInt {
    let result = super.call(
      "getSubscriptionIdFor",
      "getSubscriptionIdFor(address):(uint256)",
      [ethereum.Value.fromAddress(_account)]
    );

    return result[0].toBigInt();
  }

  try_getSubscriptionIdFor(_account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSubscriptionIdFor",
      "getSubscriptionIdFor(address):(uint256)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  guildBalance(_tokenAddress: Address): BigInt {
    let result = super.call("guildBalance", "guildBalance(address):(uint256)", [
      ethereum.Value.fromAddress(_tokenAddress)
    ]);

    return result[0].toBigInt();
  }

  try_guildBalance(_tokenAddress: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "guildBalance",
      "guildBalance(address):(uint256)",
      [ethereum.Value.fromAddress(_tokenAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasActiveSubscription(_account: Address): boolean {
    let result = super.call(
      "hasActiveSubscription",
      "hasActiveSubscription(address):(bool)",
      [ethereum.Value.fromAddress(_account)]
    );

    return result[0].toBoolean();
  }

  try_hasActiveSubscription(_account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasActiveSubscription",
      "hasActiveSubscription(address):(bool)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  initialized(): boolean {
    let result = super.call("initialized", "initialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_initialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialized", "initialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isActive(): boolean {
    let result = super.call("isActive", "isActive():(bool)", []);

    return result[0].toBoolean();
  }

  try_isActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isActive", "isActive():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isSubscriptionOwner(_tokenId: BigInt, _holder: Address): boolean {
    let result = super.call(
      "isSubscriptionOwner",
      "isSubscriptionOwner(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_holder)
      ]
    );

    return result[0].toBoolean();
  }

  try_isSubscriptionOwner(
    _tokenId: BigInt,
    _holder: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isSubscriptionOwner",
      "isSubscriptionOwner(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_holder)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  metadataCID(): string {
    let result = super.call("metadataCID", "metadataCID():(string)", []);

    return result[0].toString();
  }

  try_metadataCID(): ethereum.CallResult<string> {
    let result = super.tryCall("metadataCID", "metadataCID():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  subPrice(): BigInt {
    let result = super.call("subPrice", "subPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_subPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("subPrice", "subPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  subscriptionByOwner(param0: Address): GuildApp__subscriptionByOwnerResult {
    let result = super.call(
      "subscriptionByOwner",
      "subscriptionByOwner(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new GuildApp__subscriptionByOwnerResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_subscriptionByOwner(
    param0: Address
  ): ethereum.CallResult<GuildApp__subscriptionByOwnerResult> {
    let result = super.tryCall(
      "subscriptionByOwner",
      "subscriptionByOwner(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GuildApp__subscriptionByOwnerResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  subscriptionPeriod(): BigInt {
    let result = super.call(
      "subscriptionPeriod",
      "subscriptionPeriod():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_subscriptionPeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "subscriptionPeriod",
      "subscriptionPeriod():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenAddress(): Address {
    let result = super.call("tokenAddress", "tokenAddress():(address)", []);

    return result[0].toAddress();
  }

  try_tokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenAddress", "tokenAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _subPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _subscriptionPeriod(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _metadata(): InitializeCall_metadataStruct {
    return this._call.inputValues[4].value.toTuple() as InitializeCall_metadataStruct;
  }

  get allowanceModule(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall_metadataStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get baseURI(): string {
    return this[2].toString();
  }

  get metadataCID(): string {
    return this[3].toString();
  }
}

export class PauseGuildCall extends ethereum.Call {
  get inputs(): PauseGuildCall__Inputs {
    return new PauseGuildCall__Inputs(this);
  }

  get outputs(): PauseGuildCall__Outputs {
    return new PauseGuildCall__Outputs(this);
  }
}

export class PauseGuildCall__Inputs {
  _call: PauseGuildCall;

  constructor(call: PauseGuildCall) {
    this._call = call;
  }

  get pause(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class PauseGuildCall__Outputs {
  _call: PauseGuildCall;

  constructor(call: PauseGuildCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetMetadataCall extends ethereum.Call {
  get inputs(): SetMetadataCall__Inputs {
    return new SetMetadataCall__Inputs(this);
  }

  get outputs(): SetMetadataCall__Outputs {
    return new SetMetadataCall__Outputs(this);
  }
}

export class SetMetadataCall__Inputs {
  _call: SetMetadataCall;

  constructor(call: SetMetadataCall) {
    this._call = call;
  }

  get _metadataCID(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetMetadataCall__Outputs {
  _call: SetMetadataCall;

  constructor(call: SetMetadataCall) {
    this._call = call;
  }
}

export class SubscribeCall extends ethereum.Call {
  get inputs(): SubscribeCall__Inputs {
    return new SubscribeCall__Inputs(this);
  }

  get outputs(): SubscribeCall__Outputs {
    return new SubscribeCall__Outputs(this);
  }
}

export class SubscribeCall__Inputs {
  _call: SubscribeCall;

  constructor(call: SubscribeCall) {
    this._call = call;
  }

  get _tokenURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SubscribeCall__Outputs {
  _call: SubscribeCall;

  constructor(call: SubscribeCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UnsubscribeCall extends ethereum.Call {
  get inputs(): UnsubscribeCall__Inputs {
    return new UnsubscribeCall__Inputs(this);
  }

  get outputs(): UnsubscribeCall__Outputs {
    return new UnsubscribeCall__Outputs(this);
  }
}

export class UnsubscribeCall__Inputs {
  _call: UnsubscribeCall;

  constructor(call: UnsubscribeCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnsubscribeCall__Outputs {
  _call: UnsubscribeCall;

  constructor(call: UnsubscribeCall) {
    this._call = call;
  }
}

export class UpdateSubscriptionPriceCall extends ethereum.Call {
  get inputs(): UpdateSubscriptionPriceCall__Inputs {
    return new UpdateSubscriptionPriceCall__Inputs(this);
  }

  get outputs(): UpdateSubscriptionPriceCall__Outputs {
    return new UpdateSubscriptionPriceCall__Outputs(this);
  }
}

export class UpdateSubscriptionPriceCall__Inputs {
  _call: UpdateSubscriptionPriceCall;

  constructor(call: UpdateSubscriptionPriceCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newSubPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateSubscriptionPriceCall__Outputs {
  _call: UpdateSubscriptionPriceCall;

  constructor(call: UpdateSubscriptionPriceCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _beneficiary(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
