import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProducts, getStatusLabel, type ProductStatus } from "@/repository/product-repository";

export const metadata = {
  title: "ダッシュボード | Next.js Demo",
  description: "商品一覧を表示するダッシュボードページ",
};

function StatusBadge({ status }: { status: ProductStatus }) {
  const colorClasses: Record<ProductStatus, string> = {
    in_stock: "bg-green-100 text-green-800",
    low_stock: "bg-yellow-100 text-yellow-800",
    out_of_stock: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClasses[status]}`}
    >
      {getStatusLabel(status)}
    </span>
  );
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
}

export default async function DashboardPage() {
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">ダッシュボード</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>商品名</TableHead>
            <TableHead className="text-right">価格</TableHead>
            <TableHead>ステータス</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell className="text-right">{formatPrice(product.price)}</TableCell>
              <TableCell>
                <StatusBadge status={product.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
