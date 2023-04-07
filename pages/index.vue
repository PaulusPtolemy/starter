<template>
  <div>
    <el-button
      type="primary"
      :disabled="isEmptyList"
      @click="productsStore.removeItem()"
    >
      {{ $t("removeFirstCard") }}
    </el-button>
    <span>
      {{ $t("hello") }}
    </span>
    <lazy-pages-index-list v-if="!isEmptyList" :cards-list="data" />
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "~/store/products";
import { isEmpty } from "lodash";

const productsStore = useProductsStore();

const { data } = await useAsyncData("products", () =>
  productsStore.getProducts()
);

const isEmptyList = computed(() => {
  return isEmpty(data.value);
});
</script>
