import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";
import { api } from "../../lib/axios";

interface CardProps {
  id: number;
  name: string;
  slug: string;
  in_stock: number;
  original_price: number;
  price: number;
  thumbnail: string;
}

interface ProductSingleProps {
  slug: string;
}

export default function ProductSingle({ slug }: ProductSingleProps) {
  const [singleProduct, setSingleProduct] = useState({} as CardProps);

  const { products } = useCart();

  useEffect(() => {
    if (slug) {
      const findProduct = products.find(
        (product) => product.slug === String(slug)
      );

      if (!findProduct) {
        // toast.error("Produto não existe");
      } else {
        setSingleProduct(findProduct);
      }
    }
  }, [products]);

  return (
    <>
      <Head>
        <title>Nike Shocks - Tênis ideal para você</title>
      </Head>
      <section className="mt-[7.5rem] pt-10">
        <div className="flex items-center max-w-7xl mx-auto px-8">
          <div className="flex-1 ">
            <span className="text-gray-500 text-sm">
              Calçados &gt; Masculino &gt; Nova coleção
            </span>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <img
                className="w-full h-[250px] object-cover"
                src={singleProduct?.thumbnail}
                alt=""
              />
              <img
                className="w-full h-[250px] object-cover"
                src={singleProduct?.thumbnail}
                alt=""
              />
              <img
                className="w-full h-[250px] object-cover"
                src={singleProduct?.thumbnail}
                alt=""
              />

              <img
                className="w-full h-[250px] object-cover"
                src={singleProduct?.thumbnail}
                alt=""
              />
            </div>
          </div>
          <div className="flex-1  mt-16 px-8">
            <div className="flex flex-col  justify-between">
              <h1 className="text-3xl text-gray-500 font-semibold">
                {singleProduct?.name}
              </h1>
              <p className="mt-2 text-gray-500 font-light">
                Dolor pariatur amet proident sit. Cupidatat sint deserunt dolore
                cupidatat nisi eiusmod elit laboris laboris commodo enim dolor.
                Quis anim magna Lorem cupidatat duis occaecat deserunt ex velit
                Lorem laboris exercitation consequat.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-lg inline text-red-600 relative before:absolute before:w-full before:h-[1px] before:bg-red-600 before:top-1/2 before:-translate-y-1/1">
                  {singleProduct?.original_price}
                </span>

                <span className=" inline-flex text-md bg-green-600 text-white px-3 py-1 rounded-full ring ring-green-300">
                  {singleProduct?.price}
                </span>
              </div>

              <div className="grid grid-cols-6 gap-4 mt-10">
                <div className="border border-gray-400 w-20 h-20 flex items-center justify-center text-lg text-gray-500">
                  37
                </div>
                <div className="border border-gray-400 w-20 h-20 flex items-center justify-center text-lg text-gray-500">
                  38
                </div>
                <div className="border border-gray-400 w-20 h-20 flex items-center justify-center text-lg text-gray-500">
                  39
                </div>
                <div className="border border-gray-400 w-20 h-20 flex items-center justify-center text-lg text-gray-500">
                  40
                </div>
                <div className="border border-gray-400 w-20 h-20 flex items-center justify-center text-lg text-gray-500">
                  41
                </div>

                <div className="border border-gray-400 w-20 h-20 flex items-center justify-center text-lg text-gray-500">
                  42
                </div>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-black mt-10 text-white hover:opacity-75 transition-all"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths = () => {
  let slug: never[] = [];

  const paths = slug;

  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx: any) => {
  const { slug } = ctx.params;

  return {
    props: {
      slug,
    },
    revalidate: 60 * 60 * 60,
  };
};
