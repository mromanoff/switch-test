import { shallowMount } from '@vue/test-utils';
import SdSvgSprite from '../SvgSprite.vue';

describe('SdSvgSprite.vue', () => {
  const wrapper = shallowMount(SdSvgSprite);

  it('renders svg sprite', () => {
    expect(wrapper.is('svg')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
