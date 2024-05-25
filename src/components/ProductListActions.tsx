import { IProduct } from "@/interfaces";
import { Button } from "./ui/button";

interface ProductListActionsProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  product: IProduct;
  setSelectedProduct: (product: IProduct) => void;
}

export const ProductListActions = ({
  open,
  setOpen,
  product,
  setSelectedProduct,
}: ProductListActionsProps) => {
  const onEdit = () => {
    setSelectedProduct(product);
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-between gap-5">
        <Button className="flex-1" onClick={onEdit}>
          Edit
        </Button>
        <Button className="flex-1" variant={"destructive"}>
          Destroy
        </Button>
      </div>
    </>
  );
};
