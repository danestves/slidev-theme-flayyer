<template>
  <div class="relative grid grid-cols-12">
    <SvgBubles />

    <div :class="[image ? 'col-span-8' : 'col-span-12']">
      <slot />
    </div>
    <div v-if="image" class="col-span-4">
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
});
</script>
