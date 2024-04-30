<template>
  <div class="w-full lg:w-64 flex flex-col sm:flex-row">
    <button
      class="w-full h-10 flex items-center justify-center sm:mt-4 bg-my-orange rounded uppercase text-base cursor-pointer mt-7"
      onclick="ym(51454457,'reachGoal','donat_click')"
      @click="goToYandexDisk"
    >
      Скачать
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const SCRIPT_CLOUD_LINK = process.env.NUXT_ENV_SCRIPT_CLOUD_LINK || '';

export default Vue.extend({
  name: 'TheDownload',
  data() {
    return {
      scriptLink: SCRIPT_CLOUD_LINK,
    };
  },
  methods: {
    goToYandexDisk() {
      location.href = this.scriptLink;
    },
  },
});
</script>
