/**
 * 商品データのリポジトリ
 * 現在はモックデータを返すが、将来的にはAPI連携に差し替え可能
 */

export type ProductStatus = "in_stock" | "low_stock" | "out_of_stock";

export type Product = {
  id: string;
  name: string;
  price: number;
  status: ProductStatus;
};

const mockProducts: Product[] = [
  { id: "1", name: "ワイヤレスイヤホン", price: 12800, status: "in_stock" },
  { id: "2", name: "スマートウォッチ", price: 34500, status: "in_stock" },
  { id: "3", name: "ポータブルスピーカー", price: 8900, status: "low_stock" },
  { id: "4", name: "ノイズキャンセリングヘッドホン", price: 29800, status: "in_stock" },
  { id: "5", name: "モバイルバッテリー", price: 3980, status: "out_of_stock" },
  { id: "6", name: "USBハブ", price: 2480, status: "in_stock" },
  { id: "7", name: "ワイヤレス充電器", price: 4500, status: "low_stock" },
  { id: "8", name: "タブレットスタンド", price: 1980, status: "in_stock" },
];

/**
 * 商品一覧を取得する
 * 将来的にはAPIからデータを取得するように変更可能
 */
export async function getProducts(): Promise<Product[]> {
  // TODO: API連携時はここをfetchに差し替え
  return mockProducts;
}

/**
 * ステータスの表示ラベルを取得する
 */
export function getStatusLabel(status: ProductStatus): string {
  const labels: Record<ProductStatus, string> = {
    in_stock: "在庫あり",
    low_stock: "残りわずか",
    out_of_stock: "在庫なし",
  };
  return labels[status];
}
