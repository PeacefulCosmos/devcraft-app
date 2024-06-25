import { ProductId } from "../types";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>Details about product {params.productId}</h1>
    </>
  );
}
