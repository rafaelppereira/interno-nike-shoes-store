import Head from "next/head";

import { Card } from "../components/Card";
import { Modal } from "../components/Modal";
import { useCart } from "../hooks/useCart";

export default function Home() {
  const { products, isActiveCart } = useCart();

  return (
    <>
      <Head>
        <title>Nike store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-banner bg-fixed  bg-cover bg-center bg-no-repeat w-full h-[80vh] mt-[7.5rem] bg-gray-100 flex">
        <div className="w-full h-full  bg-gray-150 flex flex-col items-center justify-center px-8">
          <strong className="text-white text-center text-4xl lg:text-5xl font-bold uppercase">
            Novos lançamentos
          </strong>
          <p className="mt-4 max-w-md text-md lg:text-lg text-center text-gray-200">
            Nossa nova coleção chegou! fique por dentro das novidades do novo
            ano de 2023.
          </p>

          <button
            type="button"
            className="mt-10 animate-bounce bg-white px-8 py-3 text-md uppercase text-gray-700 font-medium hover:bg-transparent hover:border-2 hover:border-gray-300 hover:animate-none transition-all hover:text-white hover:backdrop-blur-lg"
          >
            Conhecer coleção
          </button>
        </div>
      </div>

      <div className="my-10">
        <div className="w-full max-w-7xl px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                slug={product.slug}
                in_stock={product.in_stock}
                original_price={product.original_price}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            );
          })}
        </div>
      </div>

      {/* {isActiveCart && <Modal />} */}
    </>
  );
}
