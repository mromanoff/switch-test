import { shallowMount } from '@vue/test-utils';
import SdContainer from '../SdContainer.vue';

describe('SdContainer.vue', () => {
  let wrapper;

  it('renders default SdContainer', () => {
    wrapper = shallowMount(SdContainer);

    expect(wrapper).toMatchSnapshot();
  });
});
