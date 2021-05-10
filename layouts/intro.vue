<template>
  <div class="relative h-full intro grid grid-cols-12">
    <SvgBubles />

    <div
      :class="['slidev-layout my-auto', image ? 'col-span-8' : 'col-span-12']"
    >
      <slot />
    </div>

    <div v-if="image" class="col-span-4" :style="style">
      <div
        v-if="floatingImage"
        class="absolute top-1/2 transform -translate-y-1/2 right-[100px]"
      >
        <img :src="floatingImage" alt="" class="w-[450px]" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Dependencies
import { computed, defineProps } from "vue";

// Utils
import { handleBackground } from "../utils";

const props = defineProps({
  image: {
    type: String,
    required: false,
  },
  floatingImage: {
    type: String,
    required: false,
  },
});

const style = computed(() => handleBackground(props.image));
</script>
