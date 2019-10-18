import { shallowMount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button.vue', () => {
  let wrapper;

  // TEST functional component with passing props: https://vue-test-utils.vuejs.org/api/options.html#context

  beforeEach(() => {
    wrapper = shallowMount(Button, {
      context: {
        props: { size: 'medium' },
      },
      slots: {
        default: 'Test Button',
      },
    });
  });

  it('renders default button', () => {
    expect(wrapper.isFunctionalComponent).toBe(true);
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--primary', 'Button--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: { disabled: true },
      },
      slots: {
        default: 'Primary Button',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--disabled', 'Button--primary', 'Button--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders primary button', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: { variation: 'primary' },
      },
      slots: {
        default: 'Primary Button',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--primary', 'Button--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders secondary button', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: { variation: 'secondary' },
      },
      slots: {
        default: 'Secondary Button',
      },
    });
    expect(wrapper.rootNode.tag).toBe('button');
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--secondary', 'Button--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders text button', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: { variation: 'text' },
      },
      slots: {
        default: 'Text Button',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--text', 'Button--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small button', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: { size: 'small' },
      },
      slots: {
        default: 'Small Button',
      },
    });
    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--primary', 'Button--small']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders large button', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: { size: 'large' },
      },
      slots: {
        default: 'Large Button',
      },
    });

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--primary', 'Button--large']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders HREF button as A TAG', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: { href: 'https://vehiclehistory.com' },
      },
      slots: {
        default: 'Nuxt-link A TAG Button',
      },
    });

    expect(wrapper.is('a')).toBe(true);
    expect(wrapper.attributes().href).toBe('https://vehiclehistory.com');
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--primary', 'Button--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders NUXT button as A TAG', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: {
          nuxt: true,
          href: 'https://vehiclehistory.com',
        },
      },
      slots: {
        default: 'Nuxt-link A TAG Button',
      },
      stubs: ['nuxt-link'],
    });

    expect(wrapper.is('nuxt-link-stub')).toBe(true);
    expect(wrapper.attributes().to).toBe('https://vehiclehistory.com');
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--primary', 'Button--medium']);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders full width button', () => {
    wrapper = shallowMount(Button, {
      context: {
        props: { block: true },
      },
      slots: {
        default: 'Block Button',
      },
    });

    expect(wrapper.is('button')).toBe(true);
    expect(wrapper.classes()).toStrictEqual(['Button', 'Button--block', 'Button--primary', 'Button--medium']);
    expect(wrapper).toMatchSnapshot();
  });
});
