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
import ColorCircle from "../ColorCircle";
import { COLORS } from "@/constants/colors";
import React from "react";

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedproduct: IProduct;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  selectedproductIndex: number;
  productList: IProduct[];
  setProductList: (value: IProduct[]) => void;
  tempSelectedColors: string[];
  setTempSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
}

export const EditProductDialog = ({
  open,
  setOpen,
  selectedproduct,
  setSelectedProduct,
  productList,
  selectedproductIndex,
  setProductList,
  tempSelectedColors,
  setTempSelectedColors,
}: IProps) => {
  const onSaveChanges = () => {
    const updatedProductList = [...productList];
    updatedProductList[selectedproductIndex] = selectedproduct;
    setProductList(updatedProductList);
    setOpen(!open);
  };

  console.log(selectedproduct.category);

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
                  price: Number(e.target.value),
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

          <div>
            <Label>Standard Colors:</Label>
            <div className="flex items-center space-x-2">
              {COLORS.map((color) => (
                <span
                  key={color}
                  style={{ backgroundColor: color }}
                  className="cursor-pointer rounded-sm p-1 text-xs"
                  onClick={() => {
                    // ** 1.Check if color exits on selectedColor state
                    if (selectedproduct.colors.includes(color)) {
                      return;
                    }
                    setSelectedProduct((prev) => {
                      return {
                        ...prev,
                        colors: [...prev.colors, color],
                      };
                    });
                  }}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Colors</Label>
            <div className="flex flex-wrap items-center space-x-2">
              {selectedproduct.colors.map((color, idx) => (
                <ColorCircle
                  key={idx}
                  color={color}
                  onClick={() => {
                    // ** Check if color exists, filter it out
                    if (tempSelectedColors.includes(color)) {
                      setTempSelectedColors((prev) =>
                        prev.filter((item) => item !== color),
                      );
                      return;
                    }
                    setTempSelectedColors((prev) => [...prev, color]);
                  }}
                />
              ))}
            </div>
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
