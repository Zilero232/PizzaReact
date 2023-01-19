import { CartItem } from "../redux/cart/types";
import { calcTotalPrice } from "./CallTotalPrice";

export const getCartFromLC = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const { totalPrice, totalCount } = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
    totalCount,
  };
};
