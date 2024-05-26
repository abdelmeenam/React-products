import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { IProduct } from "@/interfaces";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedproduct: IProduct;
  setSelectedProduct: (product: IProduct) => void;
  selectedproductIndex: number;
  productList: IProduct[];
  setProductList: (value: IProduct[]) => void;
}

export const EditProductDialog = ({
  open,
  setOpen,
  selectedproduct,
  setSelectedProduct,
  productList,
  selectedproductIndex,
  setProductList,
}: IProps) => {
  const onSaveChanges = () => {
    const updatedProductList = [...productList];
    updatedProductList[selectedproductIndex] = selectedproduct;
    setProductList(updatedProductList);
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4 ">
          <div className="gap-4 space-y-1">
            <Label htmlFor="name" className="text-right">
              Tile
            </Label>
            <Input
              value={selectedproduct.title}
              id="title"
              className="col-span-3"
              name="title"
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedproduct,
                  title: e.target.value,
                })
              }
            />
          </div>

          <div className="gap-4 space-y-1">
            <Label htmlFor="imageUrl" className="text-right">
              Image Url
            </Label>
            <Input
              value={selectedproduct.imageUrl}
              id="imageUrl"
              className="col-span-3"
              name="imageUrl"
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedproduct,
                  imageUrl: e.target.value,
                })
              }
            />
          </div>

          <div className="gap-4 space-y-1">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              value={selectedproduct.price}
              id="price"
              className="col-span-3"
              name="price"
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedproduct,
                  price: e.target.value,
                })
              }
            />
          </div>

          <div className="flex-1 gap-4 space-y-1">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="gap-4 space-y-1">
            <Label htmlFor="Description" className="text-right">
              Description
            </Label>
            <Textarea
              id="Description"
              className="col-span-3"
              name="description"
              value={selectedproduct.description}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedproduct,
                  description: e.target.value,
                })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onSaveChanges}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
