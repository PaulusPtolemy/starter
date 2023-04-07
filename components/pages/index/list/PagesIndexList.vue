<template>
  <div>
    <pages-index-list-card
      v-for="card in cardsList"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script setup lang="ts">
import { IProduct } from "~/shared/types/products";

export interface Props {
  cardsList: IProduct[] | null;
}

defineProps<Props>();
</script>

<style></style>
