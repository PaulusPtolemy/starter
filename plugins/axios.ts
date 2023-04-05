import axios from "axios"

import { ProductsService } from "~/services/Products.service"

let $api: IApi
export interface IApi {
    productsService: ProductsService
}

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()

    const $axios = axios.create({
        baseURL: runtimeConfig.public.baseUrl,
    })

    $axios.interceptors.request.use(config => {
        console.info(`Making request to ${config.url} ...`)
        return config
    })

    $axios.interceptors.response.use(response => {
        console.log(`✔ Request to ${response.config.url} success`)
        return response
    })

    $api = {
        productsService: new ProductsService($axios)
    }

    return {
        provide: {
            api: $api
        }
    }
})

export { $api }