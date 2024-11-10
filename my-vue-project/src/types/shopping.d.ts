import type { Item } from "@/constants"

/**
 * 商品の情報を管理するインターフェース
 * 商品名、単価、数量のプロパティを含みます。
 */
export interface Order {
  id: Item;  // 商品コード
  unitPrice: number;  // 単価
  quantity: number;  // 数量
}
