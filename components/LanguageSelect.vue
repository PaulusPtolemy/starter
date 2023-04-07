<template>
  <el-select
    v-model="chosenLocale"
    class="m-2"
    placeholder="Select"
    size="large"
    @change="onSelectChange($event)"
  >
    <el-option
      v-for="localeName in locals"
      :key="localeName"
      :label="localeName"
      :value="localeName"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale, locales, setLocale } = useI18n();

const chosenLocale = ref(locale);

const locals = computed(() => {
  return locales.value.map((e) => (typeof e === "string" ? e : e.code));
});

function onSelectChange(value: string) {
  setLocale(value);
}
</script>
