import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  const totalPrice = items.reduce((sum, obg) => {
    return obg.price * obg.count + sum;
  }, 0);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return { totalPrice, totalCount };
};
