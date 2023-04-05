<template>
  <h1 class="text-3xl font-bold underline">
    <span>
      {{ $t('hello') }}
    </span>
    <div @click="setLocale('ja')">
      {{ locale }}
    </div>
    {{ productList }}
  </h1>
</template>

<script lang="ts">
import { useProductsStore } from "~/store/products";

export default defineComponent({
  name:'IndexPage',

  async setup() {
    const { locale, locales, setLocale } = useI18n()
    const productsStore = useProductsStore()
    await productsStore.getProducts()

    const { productList } = productsStore

    return {
      productList,
      setLocale,
      locale,
      locales
    }
  }
})
</script>