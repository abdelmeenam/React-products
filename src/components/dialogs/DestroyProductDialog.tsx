import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { IProduct } from "@/interfaces";

interface IProps {
  productList: IProduct[];
  setProductList: (value: IProduct[]) => void;
  productIdx: number;
  openDestroy: boolean;
  setOpenDestroy: (value: boolean) => void;
  setSelectedProductIndex: (value: number) => void;
}

export const DestroyProductDialog = ({
  productList,
  setProductList,
  productIdx,
  openDestroy,
  setOpenDestroy,
  setSelectedProductIndex,
}: IProps) => {
  const handleDestroy = () => {
    const newProductList = [...productList];
    newProductList.splice(productIdx, 1);
    setProductList(newProductList);
    setOpenDestroy(false);
    setSelectedProductIndex(-1);
  };

  return (
    <AlertDialog open={openDestroy} onOpenChange={setOpenDestroy}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Destroy Product</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Are you sure you want to destroy this product?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleDestroy}>Yes</AlertDialogAction>
          <AlertDialogCancel>No</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
