import fakeProductList from "@/lib/fakeData";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { IProduct } from "@/interfaces";
import { EditProductDialog } from "./dialogs/EditProductDialog";
import { DestroyProductDialog } from "./dialogs/DestroyProductDialog";
import { useToast } from "@/components/ui/use-toast";

export const ProductCardList = () => {
  const [productList, setProductList] = useState<IProduct[]>(fakeProductList);
  const [selectedproductIndex, setSelectedProductIndex] = useState<number>(-1);

  const [open, setOpen] = useState(false);
  const [openDestroy, setOpenDestroy] = useState(false);

  const [selectedproduct, setSelectedProduct] = useState<IProduct>(
    {} as IProduct,
  );

  const { toast } = useToast();

  return (
    <>
      <div className="container ">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productList.map((product, idx) => (
            <ProductCard
              product={product}
              key={product.id}
              open={open}
              setOpen={setOpen}
              setSelectedProduct={setSelectedProduct}
              setSelectedProductIndex={setSelectedProductIndex}
              productList={productList}
              setProductList={setProductList}
              productIdx={idx}
              openDestroy={openDestroy}
              setOpenDestroy={setOpenDestroy}
            />
          ))}

          <EditProductDialog
            open={open}
            setOpen={setOpen}
            selectedproduct={selectedproduct}
            setSelectedProduct={setSelectedProduct}
            selectedproductIndex={selectedproductIndex}
            productList={productList}
            setProductList={setProductList}
          />

          <DestroyProductDialog
            productList={productList}
            setProductList={setProductList}
            productIdx={selectedproductIndex}
            setOpenDestroy={setOpenDestroy}
            openDestroy={openDestroy}
            setSelectedProductIndex={setSelectedProductIndex}
          />
        </div>
      </div>
    </>
  );
};
