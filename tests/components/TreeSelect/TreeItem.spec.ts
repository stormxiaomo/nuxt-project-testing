import {shallowMount} from "@vue/test-utils";
import TreeItem from "../../../src/components/TreeSelect/TreeItem.vue"

describe("TreeItem spec", () => {

  it("should test mount", () => {
    const onChangeHandler = jest.fn();

    const wrapper = shallowMount(TreeItem, {
      methods: {
        onChangeHandler
      },
    });

    expect(onChangeHandler.mock.calls.length).toBe(0);
    wrapper.find('input').trigger('change');
    expect(onChangeHandler.mock.calls.length).toBe(1);
  })
});