<template>
  <div class="w-full min-h-full bg-my-primary flex flex-col justify-between">
    <header class="w-full h-24 relative">
      <div
        class="w-full bg-my-secondary xl:bg-transparent xl:w-width-bg h-full absolute z-0"
      >
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            class="fill-current text-my-secondary"
            d="M0 0 L100 0 L96 100 L0 100"
          />
        </svg>
      </div>
      <div
        class="container h-full flex items-center relative z-10 px-4 md:px-14"
      >
        <img class="w-44 h-7" src="@/assets/img/logo.svg" alt="Логотип" />
      </div>
    </header>

    <div class="container font-my-secondary text-white px-4">
      <!-- <div class="container-content"> -->
      <h1 class="mt-7 mb-10 text-center text-2xl md:text-3xl xl:text-4xl">
        {{ contentTitle }} *
      </h1>
      <div class="w-full h-full flex flex-col justify-center items-center mb-7">
        <TheYoutubeVideo :code="videoCode"></TheYoutubeVideo>

        <div class="mt-5">
          <ul class="text-lg sm:text-xl lg:text-2xl">
            <li
              v-for="(item, index) in contentList"
              :key="`contentItem$-${index}`"
              class="py-2"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <footer class="w-full pt-10 lg:pt-0 lg:h-40 flex relative">
      <div
        class="w-full bg-my-secondary xl:bg-transparent xl:w-width-bg h-full absolute bottom-0 right-0 z-0"
      >
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            class="fill-current text-my-secondary"
            d="M100 100 L100 0 L6 0 L0 100"
          />
        </svg>
      </div>
      <div
        class="container w-full flex flex-col-reverse justify-center lg:flex-row lg:justify-around items-center font-my-secondary relative z-10 md:pl-4 xl:pl-14"
      >
        <div class="my-10 lg:my-0 lg:mr-auto text-my-gray">
          <p class="text-lg text-center">Все вопросы на почту:</p>
          <p class="text-lg text-center">{{ supportEmail }}</p>
          <p class="text-xs mt-3 px-2">
            * Протестировано в программе Базис Мебельщик 8-10 версиях
          </p>
        </div>
        <TheDownload class="sm:pr-20 lg:mr-4 xl:mr-10"></TheDownload>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheYoutubeVideo from '@/components/TheYoutubeVideo.vue';
import TheDownload from '~/components/TheDownload.vue';

export default Vue.extend({
  name: 'Index',
  components: {
    TheDownload,
    TheYoutubeVideo,
  },
  computed: {
    contentTitle(): string {
      return 'Профессиональный скрипт Базис мебельщик двери купе';
    },
    videoCode(): string {
      return 'hAbVZvjJsuo';
    },
    contentList(): string[] {
      return [
        'Анимация дверей!',
        '10 Видов профилей',
        '8 дверей и 10 разделителей',
        'Выбор расположения дверей',
        'Выбор дверей, купе или распашные',
        'Возможность редактировать скрипт под свой нужды',
      ];
    },
    supportEmail(): string {
      return 'profscript@yandex.ru';
    },
  },
});
</script>
