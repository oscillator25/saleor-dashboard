/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderRefundProductsInput, OrderErrorCode, AddressTypeEnum, DiscountValueTypeEnum, FulfillmentStatus, OrderDiscountType, OrderEventsEmailsEnum, OrderEventsEnum, PaymentChargeStatusEnum, WarehouseClickAndCollectOptionEnum, OrderStatus, OrderAction, JobStatusEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: OrderFulfillmentRefundProducts
// ====================================================

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_errors {
  __typename: "OrderError";
  code: OrderErrorCode;
  field: string | null;
  addressType: AddressTypeEnum | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_variant {
  __typename: "ProductVariant";
  id: string;
  quantityAvailable: number;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_unitDiscount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_undiscountedUnitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_undiscountedUnitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_undiscountedUnitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_undiscountedUnitPrice_gross;
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_undiscountedUnitPrice_net;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_unitPrice_gross;
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_unitPrice_net;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_thumbnail {
  __typename: "Image";
  url: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine {
  __typename: "OrderLine";
  id: string;
  isShippingRequired: boolean;
  variant: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  quantityToFulfill: number;
  unitDiscount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_unitDiscount;
  unitDiscountValue: any;
  unitDiscountReason: string | null;
  unitDiscountType: DiscountValueTypeEnum | null;
  undiscountedUnitPrice: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_undiscountedUnitPrice;
  unitPrice: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_unitPrice;
  thumbnail: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine_thumbnail | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines {
  __typename: "FulfillmentLine";
  id: string;
  quantity: number;
  orderLine: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines_orderLine | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_warehouse {
  __typename: "Warehouse";
  id: string;
  name: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment {
  __typename: "Fulfillment";
  id: string;
  lines: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_lines | null)[] | null;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
  warehouse: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment_warehouse | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_billingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_billingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_billingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_discounts_amount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_discounts {
  __typename: "OrderDiscount";
  id: string;
  type: OrderDiscountType;
  calculationMode: DiscountValueTypeEnum;
  value: any;
  reason: string | null;
  amount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_discounts_amount;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_discount_amount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_discount_oldAmount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_discount {
  __typename: "OrderEventDiscountObject";
  valueType: DiscountValueTypeEnum;
  value: any;
  reason: string | null;
  amount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_discount_amount | null;
  oldValueType: DiscountValueTypeEnum | null;
  oldValue: any | null;
  oldAmount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_discount_oldAmount | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_relatedOrder {
  __typename: "Order";
  id: string;
  number: string | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_app {
  __typename: "App";
  id: string;
  name: string | null;
  appUrl: string | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines_discount_amount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines_discount_oldAmount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines_discount {
  __typename: "OrderEventDiscountObject";
  valueType: DiscountValueTypeEnum;
  value: any;
  reason: string | null;
  amount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines_discount_amount | null;
  oldValueType: DiscountValueTypeEnum | null;
  oldValue: any | null;
  oldAmount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines_discount_oldAmount | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines_orderLine {
  __typename: "OrderLine";
  id: string;
  productName: string;
  variantName: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines {
  __typename: "OrderEventOrderLineObject";
  quantity: number | null;
  itemName: string | null;
  discount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines_discount | null;
  orderLine: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines_orderLine | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events {
  __typename: "OrderEvent";
  id: string;
  amount: number | null;
  shippingCostsIncluded: boolean | null;
  date: any | null;
  email: string | null;
  emailType: OrderEventsEmailsEnum | null;
  invoiceNumber: string | null;
  discount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_discount | null;
  relatedOrder: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_relatedOrder | null;
  message: string | null;
  quantity: number | null;
  transactionReference: string | null;
  type: OrderEventsEnum | null;
  user: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_user | null;
  app: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_app | null;
  lines: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events_lines | null)[] | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_variant {
  __typename: "ProductVariant";
  id: string;
  quantityAvailable: number;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_unitDiscount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_undiscountedUnitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_undiscountedUnitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_undiscountedUnitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_undiscountedUnitPrice_gross;
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_undiscountedUnitPrice_net;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_unitPrice_gross;
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_unitPrice_net;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_thumbnail {
  __typename: "Image";
  url: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine {
  __typename: "OrderLine";
  id: string;
  isShippingRequired: boolean;
  variant: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  quantityToFulfill: number;
  unitDiscount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_unitDiscount;
  unitDiscountValue: any;
  unitDiscountReason: string | null;
  unitDiscountType: DiscountValueTypeEnum | null;
  undiscountedUnitPrice: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_undiscountedUnitPrice;
  unitPrice: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_unitPrice;
  thumbnail: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine_thumbnail | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines {
  __typename: "FulfillmentLine";
  id: string;
  quantity: number;
  orderLine: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines_orderLine | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_warehouse {
  __typename: "Warehouse";
  id: string;
  name: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments {
  __typename: "Fulfillment";
  id: string;
  lines: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_lines | null)[] | null;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
  warehouse: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments_warehouse | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_variant {
  __typename: "ProductVariant";
  id: string;
  quantityAvailable: number;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_unitDiscount {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_undiscountedUnitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_undiscountedUnitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_undiscountedUnitPrice {
  __typename: "TaxedMoney";
  currency: string;
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_undiscountedUnitPrice_gross;
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_undiscountedUnitPrice_net;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_unitPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_unitPrice_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_unitPrice {
  __typename: "TaxedMoney";
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_unitPrice_gross;
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_unitPrice_net;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_thumbnail {
  __typename: "Image";
  url: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines {
  __typename: "OrderLine";
  id: string;
  isShippingRequired: boolean;
  variant: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  quantityToFulfill: number;
  unitDiscount: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_unitDiscount;
  unitDiscountValue: any;
  unitDiscountReason: string | null;
  unitDiscountType: DiscountValueTypeEnum | null;
  undiscountedUnitPrice: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_undiscountedUnitPrice;
  unitPrice: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_unitPrice;
  thumbnail: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines_thumbnail | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingAddress_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingAddress {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingAddress_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_deliveryMethod_ShippingMethod {
  __typename: "ShippingMethod";
  id: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_deliveryMethod_Warehouse {
  __typename: "Warehouse";
  id: string;
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
}

export type OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_deliveryMethod = OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_deliveryMethod_ShippingMethod | OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_deliveryMethod_Warehouse;

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingPrice_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingPrice {
  __typename: "TaxedMoney";
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingPrice_gross;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_subtotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_subtotal_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_subtotal {
  __typename: "TaxedMoney";
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_subtotal_gross;
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_subtotal_net;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_total_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_total_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_total_tax {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_total {
  __typename: "TaxedMoney";
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_total_gross;
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_total_net;
  tax: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_total_tax;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_totalAuthorized {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_totalCaptured {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_undiscountedTotal_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_undiscountedTotal_gross {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_undiscountedTotal {
  __typename: "TaxedMoney";
  net: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_undiscountedTotal_net;
  gross: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_undiscountedTotal_gross;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_user {
  __typename: "User";
  id: string;
  email: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_availableShippingMethods_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_availableShippingMethods {
  __typename: "ShippingMethod";
  id: string;
  name: string;
  price: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_availableShippingMethods_price | null;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_invoices {
  __typename: "Invoice";
  id: string;
  number: string | null;
  createdAt: any;
  url: string | null;
  status: JobStatusEnum;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_channel {
  __typename: "Channel";
  isActive: boolean;
  id: string;
  name: string;
  currencyCode: string;
  slug: string;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order {
  __typename: "Order";
  id: string;
  metadata: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_metadata | null)[];
  privateMetadata: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_privateMetadata | null)[];
  billingAddress: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_billingAddress | null;
  isShippingRequired: boolean;
  canFinalize: boolean;
  created: any;
  customerNote: string;
  discounts: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_discounts[] | null;
  events: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_events | null)[] | null;
  fulfillments: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_fulfillments | null)[];
  lines: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_lines | null)[];
  number: string | null;
  isPaid: boolean;
  paymentStatus: PaymentChargeStatusEnum;
  shippingAddress: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingAddress | null;
  deliveryMethod: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_deliveryMethod | null;
  shippingMethod: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingMethod | null;
  shippingMethodName: string | null;
  collectionPointName: string | null;
  shippingPrice: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_shippingPrice;
  status: OrderStatus;
  subtotal: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_subtotal;
  total: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_total;
  actions: (OrderAction | null)[];
  totalAuthorized: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_totalAuthorized;
  totalCaptured: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_totalCaptured;
  undiscountedTotal: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_undiscountedTotal;
  user: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_user | null;
  userEmail: string | null;
  availableShippingMethods: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_availableShippingMethods | null)[] | null;
  invoices: (OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_invoices | null)[] | null;
  channel: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order_channel;
}

export interface OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts {
  __typename: "FulfillmentRefundProducts";
  errors: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_errors[];
  fulfillment: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_fulfillment | null;
  order: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts_order | null;
}

export interface OrderFulfillmentRefundProducts {
  orderFulfillmentRefundProducts: OrderFulfillmentRefundProducts_orderFulfillmentRefundProducts | null;
}

export interface OrderFulfillmentRefundProductsVariables {
  input: OrderRefundProductsInput;
  order: string;
}
