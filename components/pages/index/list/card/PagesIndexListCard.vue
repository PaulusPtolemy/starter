<template>
  <el-card>
    <nuxt-img :src="card.image" loading="lazy" />
    <div class="test">
      <span> {{ card.name }}</span>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { IProduct } from "~/shared/types/products";

export interface Props {
  card: IProduct;
}

defineProps<Props>();
</script>

<style lang="scss">
.test {
  @apply mr-2 flex justify-end px-0;
}
</style>
