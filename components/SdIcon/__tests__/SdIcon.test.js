import { shallowMount } from '@vue/test-utils';
import SdIcon from '../SdIcon.vue';

describe('SdIcon.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SdIcon, {
      context: {
        props: { size: 'medium' },
      },
    });
  });

  it('renders default SdIcon', () => {
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['VhButton', 'VhButton--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified SdIcon', () => {
    wrapper = shallowMount(SdIcon, {
      propsData: {
        name: 'Test Name',
        color: 'red',
        size: 'large',
      },
    });
    expect(wrapper.props().color).toBe('red');
    expect(wrapper.props().name).toBe('Test Name');
    expect(wrapper.props().size).toBe('large');
    expect(wrapper).toMatchSnapshot();
  });
});
