<template>
  <div class="slidev-layout relative grid grid-cols-12">
    <SvgBubles />

    <div :class="[image ? contentCols : 'col-span-12']">
      <slot />
    </div>
    <div v-if="image" :class="[imageCols, imageFirst && 'order-first']">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Dependencies
import { defineProps } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: false,
  },
  imageFirst: {
    type: Boolean,
    required: false,
    default: false
  },
  contentCols: {
    type: String,
    required: false,
    default: 'col-span-8'
  },
  imageCols: {
    type: String,
    required: false,
    default: 'col-span-4'
  }
});
</script>
