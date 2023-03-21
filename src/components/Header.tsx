import Image from "next/image";
import Link from "next/link";
import { List, ShoppingCartSimple } from "phosphor-react";

import JordanIcon from "../assets/jordan-icon.svg";
import NikeIcon from "../assets/nike-icon.svg";
import { useCart } from "../hooks/useCart";

export function Header() {
  const { cart, handleToggleCart } = useCart();

  return (
    <header className="flex flex-col fixed left-0 top-0 w-full z-40">
      <div className="w-full bg-gray-100 h-10 border-b border-gray-200">
        <div className="max-w-7xl w-full px-8 mx-auto h-full flex items-center justify-between ">
          <div className="flex items-center gap-2 select-none">
            <Image src={JordanIcon} alt="Logo da Air Jordan" width={20} />
            <h1 className="uppercase font-bold text-gray-800">Snikers</h1>
          </div>

          <div className="flex items-center text-xs select-none">
            <button
              type="button"
              className="border-r border-gray-300 flex h-10 items-center justify-center px-3 hover:brightness-75 transition-all"
            >
              Ajuda
            </button>
            <button
              type="button"
              className="border-r border-gray-300 h-10 items-center justify-center px-3 hover:brightness-75 transition-all hidden md:flex"
            >
              Junte-se a nós
            </button>
            <button
              type="button"
              className=" flex h-10 items-center justify-center px-3 hover:brightness-75 transition-all"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full bg-white border-b border-gray-100">
        <div className="w-full max-w-7xl px-8 mx-auto h-20 flex items-center justify-between">
          <Link href="/">
            <Image src={NikeIcon} alt="Logo oficial da Nike" width={70} />
          </Link>

          <div className=" items-center gap-4 text-sm text-gray-600 font-light hidden lg:flex">
            <Link className="hover:brightness-75 transition-all" href="/">
              Lançamentos
            </Link>
            <Link className="hover:brightness-75 transition-all" href="/">
              Feminino
            </Link>
            <Link className="hover:brightness-75 transition-all" href="/">
              Masculino
            </Link>
            <Link className="hover:brightness-75 transition-all" href="/">
              Infantil
            </Link>
            <Link className="hover:brightness-75 transition-all" href="/">
              SNEAKERS
            </Link>
            <Link className="hover:brightness-75 transition-all" href="/">
              Ícones
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <input
              className="w-44 bg-gray-100 px-4 hidden lg:block rounded-lg h-10 focus:ring-2 focus:ring-gray-300 outline-none transition-all placeholder:text-sm duration-300"
              type="text"
              placeholder="Buscar"
            />
            <button
              onClick={handleToggleCart}
              type="button"
              className="text-gray-500 relative "
            >
              <ShoppingCartSimple size={25} />

              <div className="absolute right-0 top-0 bg-red-500  w-4 h-4 text-white rounded-full text-xs flex items-center justify-center">
                {cart.length}
              </div>
            </button>

            <button type="button" className="text-gray-500 relative ">
              <List size={28} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
