import { defineStore } from "pinia"
import { $api } from "~/plugins/axios"

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
    const productList = ref<IProduct[]>([])

    const getProducts = async () : Promise<void> => {
        productList.value = await $api.productsService.getProducts()
    }

    return {
        productList,
        getProducts
    }
})