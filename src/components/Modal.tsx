import { Minus, Plus, X } from "phosphor-react";
import { useCart } from "../hooks/useCart";

export function Modal() {
  const { cart, handleToggleCart } = useCart();

  return (
    <div className="fixed left-0 top-0 w-full h-full p-10 bg-gray-150 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full h-[calc(100vh-5rem)] rounded-xl overflow-hidden">
        <header className="w-full bg-black text-white flex items-center justify-between px-6 h-12">
          <h1>Carrinho de compras</h1>
          <button onClick={handleToggleCart} type="button">
            <X size={20} />
          </button>
        </header>
        <div className=" flex items-start h-full pb-10">
          <div className="h-full flex-1 border-r border-gray-200 p-6 flex flex-col gap-4 overflow-y-auto">
            {cart.map((cart) => {
              return (
                <div
                  key={cart.id}
                  className="p-4 shadow-md border border-gray-200 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center ">
                    <img
                      className="w-28 h-28 object-cover rounded-lg"
                      src={cart.thumbnail}
                      alt={cart.name}
                    />
                    <div className="ml-4">
                      <h1 className="text-xl text-gray-600">{cart.name}</h1>
                      <p className="text-gray-500 font-light max-w-sm text-sm mt-2">
                        {cart.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs ring ring-yellow-400 animate-pulse">
                      {cart.in_stock} restantes
                    </span>

                    <div className="flex items-center justify-between gap-3 bg-gray-200 mt-3 rounded-lg px-3 py-1">
                      <span>
                        <Minus size={15} />
                      </span>
                      <span>0</span>
                      <span>
                        <Plus size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
