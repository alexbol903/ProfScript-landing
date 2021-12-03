<template>
  <div>
    <form
      class="flex flex-col sm:flex-row"
      method="POST"
      action="https://money.yandex.ru/quickpay/confirm.xml"
    >
      <input type="hidden" name="receiver" :value="paymentData.ymNumber" />
      <input
        type="hidden"
        name="formcomment"
        :value="paymentData.description"
      />
      <input type="hidden" name="short-dest" :value="paymentData.description" />
      <input type="hidden" name="label" :value="paymentData.label" />
      <input type="hidden" name="quickpay-form" value="donate" />
      <input type="hidden" name="targets" :value="paymentData.transaction" />
      <input type="hidden" name="comment" value />
      <input type="hidden" name="need-fio" value="false" />
      <input type="hidden" name="need-email" value="true" />
      <input type="hidden" name="need-phone" value="false" />
      <input type="hidden" name="need-address" value="false" />
      <input type="hidden" name="successURL" :value="paymentData.successURL" />
      <input type="hidden" name="paymentType" :value="paymentType" />

      <div
        class="flex items-center sm:items-start mb-3 sm:mb-0 sm:mr-3 sm:-mt-1"
      >
        <div
          tabindex="0"
          class="w-9 h-9 p-1 rounded mr-1 cursor-pointer"
          :class="{
            'border border-white': isYmType,
          }"
          @click="setPcType"
          @keypress.space="setPcType"
        >
          <img src="~/assets/img/yandex-money.png" alt="Yandex money icon" />
        </div>
        <div
          tabindex="0"
          class="w-9 h-9 p-1 rounded cursor-pointer"
          :class="{
            'border border-white': !isYmType,
          }"
          @click="setAcType"
          @keypress.space="setAcType"
        >
          <img src="~/assets/img/bank-card.png" alt="Bank card icon" />
        </div>
      </div>

      <div class="w-full lg:w-64">
        <div class="relative">
          <input
            id="sum"
            type="visible"
            name="sum"
            :value="paymentData.defaultSum"
            data-type="number"
            class="w-full text-right px-2 rounded"
          />
          <div
            class="absolute top-1/2 left-0 transform -translate-y-1/2 text-xs ml-2"
          >
            <span v-if="isYmType" class="text-xs"
              >{{ paymentData.types.PC }}:</span
            >
            <span v-else class="text-xs">{{ paymentData.types.AC }}:</span>
          </div>
          <span
            class="absolute -bottom-6 left-1/2 sm:top-1/2 -translate-x-1/2 sm:bottom-auto sm:left-full pl-2 transform sm:-translate-y-1/2 sm:translate-x-0 text-white"
            >{{ paymentData.currency }}</span
          >
        </div>
        <input
          type="submit"
          value="Скачать"
          class="w-full h-10 sm:mt-4 bg-my-orange rounded uppercase text-base cursor-pointer mt-7"
          onclick="ym(51454457,'reachGoal','donat_click')"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

enum EPaymentType {
  AC = 'AC',
  MC = 'MC',
  PC = 'PC',
}
type IPaymentTypes = {
  [key in EPaymentType]: string;
};

interface IPaymentData {
  currency: string;
  description: string;
  label: string;
  successURL: string;
  defaultSum: number;
  transaction: string;
  types: IPaymentTypes;
  ymNumber: number;
}

const SCRIPT_CLOUD_LINK = process.env.SCRIPT_CLOUD_LINK || '';

export default Vue.extend({
  name: 'TheFormPay',
  data() {
    return {
      isYmType: true,
      paymentType: EPaymentType.PC,
    };
  },
  computed: {
    paymentData(): IPaymentData {
      return {
        currency: 'рублей',
        description: 'Помощь проекту ProfScript, скрипт дверей купе',
        label: 'donate_profscript',
        successURL: SCRIPT_CLOUD_LINK,
        defaultSum: 100,
        transaction: 'Транзакция в помощь проекту ProfScript',
        types: {
          AC: 'Банковская карта',
          MC: 'Мобильный телефон',
          PC: 'Яндекс деньги',
        },
        ymNumber: 41001754460633,
      };
    },
  },
  methods: {
    setPcType(): void {
      this.isYmType = true;
      this.paymentType = EPaymentType.PC;
    },
    setAcType(): void {
      this.isYmType = false;
      this.paymentType = EPaymentType.AC;
    },
  },
});
</script>
