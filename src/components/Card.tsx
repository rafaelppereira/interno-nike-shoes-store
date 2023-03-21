import { useRouter } from "next/router";
import { MapTrifold } from "phosphor-react";
import { useCart } from "../hooks/useCart";

interface CardProps {
  id: number;
  name: string;
  slug: string;
  in_stock: number;
  original_price: number;
  price: number;
  thumbnail: string;
}

export function Card(props: CardProps) {
  const { isLoadingAddProductInCart } = useCart();

  const router = useRouter();

  function handleRedirectToPageProductSingle(slug: string) {
    router.push(`/product/${slug}`);
  }

  return (
    <div className="hover:ring-2 hover:ring-gray-300 transition-all border border-gray-100 rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full object-cover h-60"
        src={props.thumbnail}
        alt="Sneaker Alpha Bounce"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg text-gray-600">{props.name}</h1>
          <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs ring ring-yellow-400 animate-pulse">
            Restam {props.in_stock}
          </span>
        </div>

        <span className="text-sm text-red-600 relative before:absolute before:w-full before:h-[1px] before:bg-red-600 before:top-1/2 before:-translate-y-1/1">
          {props.original_price}
        </span>
        <br />

        <span className="mt-5 inline-flex text-md bg-green-600 text-white px-3 py-1 rounded-full ring ring-green-300">
          {props.price}
        </span>
        <span className="mt-4 text-sm text-green-600 flex items-center gap-2">
          <MapTrifold size={20} />
          Frete gratís para todo o Brasil
        </span>

        <button
          type="button"
          onClick={() => handleRedirectToPageProductSingle(props.slug)}
          title="Clique para adicionar ao carrinho"
          className="w-full mt-5 bg-black text-white flex items-center justify-center uppercase text-sm py-3 hover:opacity-90 transition-all"
        >
          {isLoadingAddProductInCart ? (
            <div className="w-4 h-4 border-t-2 border-white  animate-spin block rounded-full"></div>
          ) : (
            <span>Comprar</span>
          )}
        </button>
      </div>
    </div>
  );
}
