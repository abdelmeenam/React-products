import { IProduct } from "@/interfaces";
import { ProductListActions } from "./ProductListActions";

// shared interface for ProductCard component
// interface IProductCard {
//   product: IProduct;
// }
interface IProductCard extends IProduct {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ProductCard = ({
  id,
  name,
  description,
  price,
  open,
  setOpen,
}: IProductCard) => {
  return (
    <div key={id} className="space-y-3 rounded-lg border p-3">
      <img src="https://m.media-amazon.com/images/I/51XaH0EBvXL._UF1000,1000_QL80_.jpg" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <span>🟢</span>
        <span>🟢</span>
        <span>🟢</span>
      </div>
      <div className="flex justify-between">
        <span>{price}</span>
        <span>Cars</span>
      </div>
      <ProductListActions open={open} setOpen={setOpen} />
    </div>
  );
};
