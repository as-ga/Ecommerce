import { server } from "../redux/store";
import { CartItem } from "../types/types";
import { Button } from "./ui/button.tsx";
import { Link } from "react-router-dom";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      key={name}
    >
      <div className="p-4">
        <img
          src={`${server}/${photo}`}
          alt={name}
          width="200"
          height="200"
          className="mx-auto aspect-square overflow-hidden rounded-lg object-cover"
        />

        <h3 className="text-sm font-medium leading-none mt-4">{name}</h3>
        {/* <p className="text-sm text-gray-500">{name}</p> */}
        <h4 className="text-sm font-medium mt-2">₹{price}</h4>
      </div>
      <div className="border-t p-4 flex items-center justify-between">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          onClick={() =>
            handler({ productId, price, name, photo, stock, quantity: 1 })
          }
        >
          Add to cart
        </button>
        <Link to="/cart">
          <Button>Buy now</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
