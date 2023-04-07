<template>
  <el-card>
    <nuxt-img
      :src="card.image"
      loading="lazy"
    />
    <div>
      <span> {{ card.name }}</span>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
import { IProduct } from '~/store/products'

export interface Props {
  card: IProduct
}

defineProps<Props>()
  
</script>
  
<style>
  
</style>