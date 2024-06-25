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

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { IProduct } from "@/interfaces";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { v4 as uuid } from "uuid";
import ColorCircle from "../ColorCircle";
import { COLORS } from "@/constants/colors";

interface IProps {
  openAdd: boolean;
  setOpenAdd: (value: boolean) => void;
  productList: IProduct[];
  setProductList: (value: IProduct[]) => void;
  tempSelectedColors: string[];
  setTempSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 2 characters." }),
  imageUrl: z.string().url({ message: "Please enter a valid URL." }),
  price: z.coerce.number().min(1, { message: "Price must be at least 1." }),
  category: z
    .string()
    .min(2, { message: "Category must be at least 2 characters." }),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters." }),
});

export const AddProductDialog = ({
  openAdd,
  setOpenAdd,
  productList,
  setProductList,
  tempSelectedColors,
  setTempSelectedColors,
}: IProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      price: 0,
      category: "",
      description: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // console.log(data);
    setProductList([
      { id: uuid(), colors: tempSelectedColors, ...data },
      ...productList,
    ]);
    setOpenAdd(false);
    form.reset();
    setTempSelectedColors([]);
  };

  return (
    <Dialog open={openAdd} onOpenChange={setOpenAdd}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2 py-4 ">
              <div className="gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>title</FormLabel>
                      <FormControl>
                        <Input placeholder="Product title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Image URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex-1 gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">
                            m@example.com
                          </SelectItem>
                          <SelectItem value="m@google.com">
                            m@google.com
                          </SelectItem>
                          <SelectItem value="m@support.com">
                            m@support.com
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="gap-4 space-y-1">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center space-x-2">
              {tempSelectedColors.length
                ? tempSelectedColors.map((color, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-xs"
                      style={{ backgroundColor: color }}
                    >
                      {color}
                    </span>
                  ))
                : null}
            </div>

            <div className="flex flex-row gap-4 space-y-1">
              <label>Colors</label>
              <div className="flex items-center space-x-2">
                {COLORS.map((color, idx) => (
                  <ColorCircle
                    key={idx}
                    color={color}
                    onClick={() => {
                      if (tempSelectedColors.includes(color)) {
                        setTempSelectedColors((prev) =>
                          prev.filter((c) => c !== color),
                        );
                        return;
                      }

                      setTempSelectedColors((prev) => [...prev, color]);
                    }}
                  />
                ))}
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
