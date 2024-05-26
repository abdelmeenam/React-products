import { IProduct } from "@/interfaces";
import { ProductListActions } from "./ProductListActions";

// shared interface for ProductCard component
// interface IProductCard {
//   product: IProduct;
// }
interface IProductCard {
  product: IProduct;
  open: boolean;
  setOpen: (value: boolean) => void;
  setSelectedProduct: (product: IProduct) => void;
  setSelectedProductIndex: (index: number) => void;
  productIdx: number;
  productList: IProduct[];
  setProductList: (productList: IProduct[]) => void;
}

export const ProductCard = ({
  product,
  open,
  setOpen,
  setSelectedProduct,
  setSelectedProductIndex,
  productIdx,
  productList,
  setProductList,
}: IProductCard) => {
  return (
    <div key={product.id} className="space-y-3 rounded-lg border p-3">
      <img src="https://m.media-amazon.com/images/I/51XaH0EBvXL._UF1000,1000_QL80_.jpg" />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div>
        <span>🟢</span>
        <span>🟢</span>
        <span>🟢</span>
      </div>
      <div className="flex justify-between">
        <span>{product.price}</span>
        <span>Cars</span>
      </div>

      <ProductListActions
        open={open}
        setOpen={setOpen}
        product={product}
        setSelectedProduct={setSelectedProduct}
        setSelectedProductIndex={setSelectedProductIndex}
        productIdx={productIdx}
        productList={productList}
        setProductList={setProductList}
      />
    </div>
  );
};
