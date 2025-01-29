import { IProduct } from "@/types/products";

export default function useLocalStorage(key: string) {
  const setItem = (value: IProduct[]) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as IProduct[]) : [];
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return { setItem, getItem, removeItem };
}
