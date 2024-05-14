import { Button } from "./components/ui/button";
import fakeProductList from "./lib/fakeData";

function App() {
  return (
    <>
      <div className="container ">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fakeProductList.map((product) => (
            <div
              key={product.id}
              className="space-y-3 rounded-lg border p-3 duration-500"
            >
              <img src="https://m.media-amazon.com/images/I/51XaH0EBvXL._UF1000,1000_QL80_.jpg" />
              <h3>{product.name}</h3>
              <p cla>{product.description}</p>
              <div>
                <span>🟢</span>
                <span>🟢</span>
                <span>🟢</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>{product.price}</span>
                <span>Cars</span>
              </div>
              <div className="flex items-center justify-between gap-3  ">
                <Button className="flex-1">Edit</Button>
                <Button className="flex-1" variant={"destructive"}>
                  Destroy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
