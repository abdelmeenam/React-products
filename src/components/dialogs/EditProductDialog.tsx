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

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const EditProductDialog = ({ open, setOpen }: IProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button className="flex-1">Edit</Button>
      </DialogTrigger> */}

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4 ">
          <div className="gap-4 space-y-1">
            <Label htmlFor="name" className="text-right">
              Tile
            </Label>
            <Input id="name" className="col-span-3" name="name" />
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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
