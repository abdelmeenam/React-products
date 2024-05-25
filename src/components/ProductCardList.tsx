import fakeProductList from "@/lib/fakeData";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { EditProductDialog } from "./dialogs/EditProductDialog";
import { IProduct } from "@/interfaces";

export const ProductCardList = () => {
  const [open, setOpen] = useState(false);
  const [selectedproduct, setSelectedProduct] = useState<IProduct>(
    {} as IProduct,
  );

  return (
    <>
      <div className="container ">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fakeProductList.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              open={open}
              setOpen={setOpen}
              setSelectedProduct={setSelectedProduct}
            />
          ))}

          <EditProductDialog
            open={open}
            setOpen={setOpen}
            selectedproduct={selectedproduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>
    </>
  );
};
