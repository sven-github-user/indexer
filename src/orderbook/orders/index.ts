export * as looksRare from "@/orderbook/orders/looks-rare";
export * as openDao from "@/orderbook/orders/opendao";
export * as wyvernV23 from "@/orderbook/orders/wyvern-v2.3";

export type OrderKind =
  | "wyvern-v2"
  | "wyvern-v2.3"
  | "looks-rare"
  | "opendao-erc721"
  | "opendao-erc1155";
