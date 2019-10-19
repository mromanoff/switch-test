import { createLocalVue, shallowMount } from '@vue/test-utils';
import Footer from '../SdFooter';

const localVue = createLocalVue();

describe('Footer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Footer, {
      localVue,
    });
  });

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
