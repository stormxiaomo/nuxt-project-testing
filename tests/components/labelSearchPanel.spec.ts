import {mount} from "@vue/test-utils";
import labelSearchPanel from "../../src/components/labelSearchPanel.vue";
import {mockPermissions} from "../../dummies/mockPermissions";

describe('labelSearchPanel', () => {
  it('labelSearchPanel props', () => {
    const wrapper = mount(labelSearchPanel, {
      propsData: {
        permissions: mockPermissions
      }
    })
    expect(wrapper.props().permissions).toBe(mockPermissions)
  })
})