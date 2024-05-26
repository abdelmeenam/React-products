import { IProduct } from "@/interfaces";
import { Button } from "./ui/button";

interface ProductListActionsProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  product: IProduct;
  setSelectedProduct: (product: IProduct) => void;
  setSelectedProductIndex: (index: number) => void;
  productIdx: number;
  productList: IProduct[];
  setProductList: (productList: IProduct[]) => void;
  openDestroy: boolean;
  setOpenDestroy: (value: boolean) => void;
}

export const ProductListActions = ({
  open,
  setOpen,
  product,
  setSelectedProduct,
  setSelectedProductIndex,
  productIdx,
  openDestroy,
  setOpenDestroy,
}: ProductListActionsProps) => {
  const onEdit = () => {
    // To show the dialog, we need to set the selected product
    setSelectedProduct(product);
    setOpen(!open);
    // set the selected product index
    setSelectedProductIndex(productIdx);
  };

  const onDestroy = () => {
    setSelectedProductIndex(productIdx);
    setOpenDestroy(!openDestroy);
  };

  return (
    <>
      <div className="flex justify-between gap-5">
        <Button className="flex-1" onClick={onEdit}>
          Edit
        </Button>
        <Button className="flex-1" variant={"destructive"} onClick={onDestroy}>
          Destroy
        </Button>
      </div>
    </>
  );
};
