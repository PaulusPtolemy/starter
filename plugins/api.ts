import { $fetch } from "ofetch";

import { ProductsService } from "~/services/Products.service";

let $api: IApi;
export interface IApi {
  productsService: ProductsService;
}

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  const fetchWrapper = $fetch.create({
    baseURL: runtimeConfig.public.baseUrl,

    async onRequest({ request }) {
      console.log(`Making request to ${request} ...`);
    },

    async onRequestError({ request, error }) {
      console.log(`Request to ${request} failed with: ${error}`);
    },

    async onResponse({ request, response }) {
      console.log(
        `Response from ${request} ---> Success with ${response.status} status`
      );
    },

    async onResponseError({ request, response, error }) {
      console.log(
        `Response from ${request} ---> Failed with ${response.status} status with: ${error}`
      );
    },
  });

  $api = {
    productsService: new ProductsService(fetchWrapper),
  };

  return {
    provide: {
      api: $api,
    },
  };
});

export { $api };
