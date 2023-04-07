import { defineStore } from "pinia";
import { $api } from "~/plugins/api";
import { IProduct } from "~/shared/types/products";

export const useProductsStore = defineStore("productsStore", () => {
  const productList = ref<IProduct[]>([]);

  const getProducts = async () => {
    productList.value = await $api.productsService.getProducts();
    return productList.value;
  };

  const removeItem = () => {
    productList.value.shift();
  };

  return {
    productList,
    getProducts,
    removeItem,
  };
});
