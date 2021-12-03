import { mount } from '@vue/test-utils';
import TheFormPay from '@/components/TheFormPay.vue';

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheFormPay);
    expect(wrapper.vm).toBeTruthy();
  });
});
