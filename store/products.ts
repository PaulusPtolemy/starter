import { defineStore } from "pinia"
import { $api } from "~/plugins/api"

export interface IProduct {
    id: number;
    name: string;
    description: string;
    ean: string;
    upc: string;
    image: string;
    images?: IProductImages[] | null;
    net_price: number;
    taxes: number;
    price: string;
    categories?: number[] | null;
    tags?: string[] | null;
}
export interface IProductImages {
    title: string;
    description: string;
    url: string;
}


export const useProductsStore = defineStore('productsStore', () => {
    const productList = ref<IProduct[]>(null)


    const getProducts = async () => {
        productList.value = await $api.productsService.getProducts()
        return productList.value
    }

    const removeItem = () => {
        productList.value.shift()
    }

    return {
        productList,
        getProducts,
        removeItem
    }
})