import fakeProductList from "@/lib/fakeData";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { EditProductDialog } from "./dialogs/EditProductDialog";

export const ProductCardList = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container ">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fakeProductList.map((product) => (
            <ProductCard {...product} open={open} setOpen={setOpen} />
          ))}

          <EditProductDialog open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};
