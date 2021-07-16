/* eslint-disable */
import Home from "../../src/views/Home.vue";
import Vuex from "vuex";
import {createLocalVue, shallowMount} from "@vue/test-utils";
const localVue = createLocalVue();
localVue.use(Vuex);
describe('Home page testing', () => {
    // creating a mock store
    let actions;
    let mutations;
    let store;
    let state;
    beforeEach(() => {
        state = {
            count: 0,
            products: null,
            productDetail: null,
        };
        actions = {
            getJsonData: jest.fn()
        };
        mutations = {
            setProductDetail: jest.fn(),
            setProductData: jest.fn(),
        };
        store = new Vuex.Store({
            state,
            actions,
            mutations
        });
    })
    it('should call getJsonData from actions and getting the json data', function () {
        const wrapper = shallowMount(Home, {store, localVue});
        expect(actions.getJsonData).toHaveBeenCalled();
    });
    it('should ', function () {

    });
})
