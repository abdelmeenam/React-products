import { Button } from "./ui/button";

interface ProductListActionsProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ProductListActions = ({
  open,
  setOpen,
}: ProductListActionsProps) => {
  return (
    <>
      <div className="flex justify-between gap-5">
        <Button className="flex-1" onClick={() => setOpen(!open)}>
          Edit
        </Button>
        <Button className="flex-1" variant={"destructive"}>
          Destroy
        </Button>
      </div>
    </>
  );
};
