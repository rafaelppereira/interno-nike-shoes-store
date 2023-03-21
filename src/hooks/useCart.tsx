import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../lib/axios";

interface ProductImages {
  id: number;
  url: string;
}

interface ProductProps {
  id: number;
  name: string;
  slug: string;
  description: string;
  in_stock: number;
  original_price: number;
  price: number;
  thumbnail: string;
  product_images: ProductImages[];
}

export function useCart() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoadingAddProductInCart, setIsLoadingAddProductInCart] =
    useState(false);

  const [cart, setCart] = useState<ProductProps[]>([]);
  const [isActiveCart, setIsActiveCart] = useState(true);

  async function catchProducts() {
    try {
      api.get("/products").then((response) => {
        const productFormatted = response.data.map((product: ProductProps) => {
          const result = {
            ...product,
            original_price: product.original_price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            }),
            price: product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            }),
          };

          return result;
        });

        setProducts(productFormatted);
      });
    } catch (err) {
      console.log(err);
    }
  }

  function catchProductsInLocalStorage() {
    const storagedCart = localStorage.getItem("@NikeStore:cart");

    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
    } else {
      setCart([]);
    }
  }

  useEffect(() => {
    catchProducts();
    catchProductsInLocalStorage();
  }, []);

  async function handleAddProductInCart(productId: number) {
    setIsLoadingAddProductInCart(true);

    setTimeout(() => {
      toast.success(`Produto foi adicionado ao carrinho`);

      const findProduct = products.find((product) => product.id === productId);

      if (!findProduct) {
        return toast.error("Produto não foi encontrado");
      }

      localStorage.setItem(
        "@NikeStore:cart",
        JSON.stringify([
          ...cart,
          {
            id: findProduct.id,
            name: findProduct.name,
            description: findProduct.description,
            in_stock: findProduct.in_stock,
            original_price: findProduct.original_price,
            price: findProduct.price,
            thumbnail: findProduct.thumbnail,
            product_images: findProduct.product_images,
          },
        ])
      );

      setIsLoadingAddProductInCart(false);
    }, 1000);
  }

  function handleToggleCart() {
    setIsActiveCart(!isActiveCart);
  }

  return {
    products,
    handleAddProductInCart,
    cart,
    isLoadingAddProductInCart,
    isActiveCart,
    handleToggleCart,
  };
}
