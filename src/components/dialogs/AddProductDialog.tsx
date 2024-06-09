import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
  openAdd: boolean;
  setOpenAdd: (value: boolean) => void;
  productList: IProduct[];
  setProductList: (value: IProduct[]) => void;
}

export const AddProductDialog = ({
  openAdd,
  setOpenAdd,
  productList,
  setProductList,
}: IProps) => {
  const onSaveChanges = () => {
    console.log("hello");
  };

  return (
    <Dialog open={openAdd} onOpenChange={setOpenAdd}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4 ">
          <div className="gap-4 space-y-1">
            <Label htmlFor="name" className="text-right">
              Tile
            </Label>
            <Input id="title" className="col-span-3" name="title" />
          </div>

          <div className="gap-4 space-y-1">
            <Label htmlFor="imageUrl" className="text-right">
              Image Url
            </Label>
            <Input id="imageUrl" className="col-span-3" name="imageUrl" />
          </div>

          <div className="gap-4 space-y-1">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input id="price" className="col-span-3" name="price" />
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
