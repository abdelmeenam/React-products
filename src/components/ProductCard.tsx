import { IProduct } from "@/interfaces";
import { ProductListActions } from "./ProductListActions";
import ColorCircle from "./ColorCircle";

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
  setOpenDestroy: (value: boolean) => void;
  openDestroy: boolean;
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
  openDestroy,
  setOpenDestroy,
}: IProductCard) => {
  const { id, title, description, colors, price, category } = product;

  return (
    <div key={id} className="space-y-3 rounded-lg border p-3">
      <img
        src="data:image/jpeg;base64,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"
        className="h-70 w-full object-cover"
      />
      <h3>{title}</h3>
      <p className="h-20">{description}</p>
      <div className="flex items-center space-x-1">
        {colors.map((color, idx) => (
          <ColorCircle key={idx} color={color} onClick={() => {}} />
        ))}
      </div>
      <div className="flex justify-between">
        <span>{price}</span>
        <span>{category}</span>
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
        setOpenDestroy={setOpenDestroy}
        openDestroy={openDestroy}
      />
    </div>
  );
};
