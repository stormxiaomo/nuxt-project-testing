import {shallowMount} from "@vue/test-utils";
import index from "../../../src/components/TreeSelect/index.vue";


describe("TreeSelect index spec", () => {
    
    it("should test mount", () => {
        const onCheckedList = jest.fn();
        const onChangeHandler = jest.fn();
        const isCheck = jest.fn();
        const updateChekedList = jest.fn();
    
        const wrapper = shallowMount(index, {
          propsData: {
            onCheckedList,
          },
          methods: {
            onChangeHandler,
            isCheck,
            updateChekedList
          },
        });
    
        expect(onChangeHandler.mock.calls.length).toBe(0);
        expect(isCheck.mock.calls.length).toBe(0);
        expect(updateChekedList.mock.calls.length).toBe(0);
        // wrapper.find('TreeItem').trigger('change');
        // wrapper.trigger('change');
        // expect(onChangeHandler.mock.calls.length).toBe(1);
      })
      
});