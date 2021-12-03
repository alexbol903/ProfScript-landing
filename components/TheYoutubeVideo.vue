<template>
  <div v-if="code" class="w-full lg:w-673px">
    <div
      class="youtube-preview w-full h-0 pb-56-25% relative z-0 cursor-pointer"
      @click="showPreview = !showPreview"
    >
      <div v-if="showPreview">
        <picture>
          <source
            :srcset="`https://i.ytimg.com/vi_webp/${code}/maxresdefault.webp`"
            type="image/webp"
          />
          <img
            :src="`https://i.ytimg.com/vi/${code}/maxresdefault.jpg`"
            :alt="`Video-${code}`"
            class="w-full h-full absolute top-0 left-0"
          />
        </picture>
      </div>
      <button
        v-if="showPreview"
        type="button"
        class="youtube-button w-16 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        :class="{ hidden: !showPreview }"
        aria-label="Запустить видео"
      >
        <svg height="48" viewBox="0 0 68 48" width="68">
          <path
            class="youtube-button-bg fill-current text-my-button-gray opacity-80 transition"
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
          />
          <path class="fill-current text-white" d="M 45,24 27,14 27,34" />
        </svg>
      </button>
      <iframe
        v-if="!showPreview"
        :src="`https://www.youtube.com/embed/${code}?rel=0&showinfo=0&autoplay=1`"
        class="w-full h-full absolute top-0 left-0"
        allowfullscreen
        allow="autoplay"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheYoutubeVideo',
  props: {
    code: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      showPreview: true,
    };
  },
});
</script>

<style scoped>
.youtube-preview:hover .youtube-button-bg,
.youtube-button:focus .youtube-button-bg {
  @apply text-my-button-red;
}
</style>
