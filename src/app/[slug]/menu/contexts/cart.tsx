"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

export interface CartProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
  decreaseProductQuantity: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<CartProduct[]>([]);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addProduct = (product: CartProduct) => {
    //
    //
    //
    const productIsAlreadyOnTheCart = products.some(
      (prevProducts) => prevProducts.id == product.id,
    );
    if (!productIsAlreadyOnTheCart) {
      return setProducts((prev) => [...prev, product]);
    }

    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id == product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }
        return prevProduct;
      });
    });
  };

  const decreaseProductQuantity = (productsId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id != productsId) {
          return prevProduct;
        }
        if (prevProduct.quantity == 1) {
          return prevProduct;
        }
        return { ...prevProduct, quantity: prevProduct.quantity - 1 };

        return prevProduct;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        isOpen, // shorthand operator
        products, // shorthand operator
        toggleCart, // shorthand operator
        addProduct,
        decreaseProductQuantity,
        // isOpen: isOpen,
        // products: products,
        // toggleCart: toggleCart,
        // addProduct: addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
