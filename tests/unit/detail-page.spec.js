import { createLocalVue, shallowMount } from "@vue/test-utils";
import Detail from "../../src/views/Detail";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("Detail page testing", () => {
  // creating a mock store
  let actions;
  let mutations;
  let store;
  let state;
  beforeEach(() => {
    state = {
      count: 0,
      products: null,
      productDetail: {
        id: "keira-expandable-dining-table-h8815",
        name: "Keira Expandable Dining Table",
        links: {
          www: "https://www.westelm.com/products/keira-expandable-dining-table-h8815/",
        },
        priceRange: {
          selling: {
            high: 1299,
            low: 1199,
          },
        },
        thumbnail: {
          size: "m",
          meta: "",
          alt: "",
          rel: "thumbnail",
          width: 363,
          href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202128/0341/keira-expandable-dining-table-m.jpg",
          height: 363,
        },
        hero: {
          size: "m",
          meta: "",
          alt: "",
          rel: "hero",
          width: 363,
          href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202128/0341/keira-expandable-dining-table-m.jpg",
          height: 363,
        },
        images: [
          {
            size: "m",
            meta: "",
            alt: "",
            rel: "althero",
            width: 363,
            href: "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202128/0341/keira-expandable-dining-table-1-m.jpg",
            height: 363,
          },
        ],
        swatches: [],
        messages: [],
        flags: [
          {
            bopisSuppress: false,
            rank: 3,
            id: "newcore",
          },
        ],
        reviews: {
          recommendationCount: 0,
          likelihood: 0,
          reviewCount: 0,
          averageRating: 0,
          id: "keira-expandable-dining-table-h8815",
          type: "GROUP_REVIEWS",
        },
      },
    };
    actions = {
      getJsonData: jest.fn(),
    };
    mutations = {
      setProductDetail: jest.fn(),
      setProductData: jest.fn(),
    };
    store = new Vuex.Store({
      state,
      actions,
      mutations,
    });
  });
  it("should have computed property data", function () {
    const wrapper = shallowMount(Detail, { store, localVue });
    console.log(wrapper.html())
  });
});
