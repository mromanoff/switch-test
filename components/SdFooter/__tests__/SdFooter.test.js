import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueObserveVisibility from 'vue-observe-visibility';
import VueRouter from 'vue-router';
import Footer from '../SdFooter';
import experiment from '~/mixins/experiment';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueObserveVisibility);
localVue.use(VueRouter);
localVue.mixin(experiment);

describe('Footer', () => {
  let wrapper;
  let getters;
  let actions;
  let store;
  let router;

  beforeEach(() => {
    window.scrollTo = jest.fn().mockImplementation(function() {});

    getters = {
      'ui/getAdhesionContainerHeight': () => jest.fn(),
      'ui/getCurrentTab': () => jest.fn(),
      'ui/getPageName': () => 'report',
      'env/getExperimentTrackingName': () => '',
    };

    actions = {
      'ui/setCurrentTab': jest.fn(),
    };

    store = new Vuex.Store({ getters, actions });
    router = new VueRouter();

    wrapper = shallowMount(Footer, {
      stubs: ['vh-container', 'vh-logo', 'nuxt-link'],
      store,
      router,
      localVue,
    });

    wrapper.setMethods({ handleLink: jest.fn() });
  });

  it('handle VIN Check link properly', () => {
    wrapper.find('[data-jest="vin-report"]').trigger('click');
    expect(wrapper.vm.handleLink).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.handleLink).toHaveBeenCalledWith('vin-report');
  });

  it('handle Car Research link properly', () => {
    wrapper.find('[data-jest="car-research"]').trigger('click');
    expect(wrapper.vm.handleLink).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.handleLink).toHaveBeenCalledWith('car-research');
  });

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
