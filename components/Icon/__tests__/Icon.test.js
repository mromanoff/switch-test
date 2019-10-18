import { shallowMount } from '@vue/test-utils';
import Icon from '../Icon.vue';

describe('Icon.vue', () => {
  let wrapper;
  let options;

  beforeEach(() => {
    options = {
      propsData: {
        name: 'car',
      },
    };
    wrapper = shallowMount(Icon, options);
  });

  it('renders default Icon', () => {
    expect(wrapper.is('svg')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['Icon', 'Icon--medium', 'Icon--default']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders modified Icon', () => {
    wrapper = shallowMount(Icon, {
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
