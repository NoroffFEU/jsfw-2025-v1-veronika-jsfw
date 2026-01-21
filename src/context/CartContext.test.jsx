import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "./CartContext";

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

test("adding product to cart", () => {
  const { result } = renderHook(() => useCart(), { wrapper });

  const product = { id: 1, title: "Test product", discountedPrice: 100 };

  act(() => {
    result.current.addToCart(product);
  });

  expect(result.current.cart).toHaveLength(1);
  expect(result.current.cart[0].title).toBe("Test product");
});
