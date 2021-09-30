import Vue from 'vue'
import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent'
import ChildComponent from '@/components/ChildComponent'

describe('ParentComponent', () => {
  it("displays 'Emitted!' when custom event is emitted", async() => {
    const wrapper = mount(ParentComponent)
    wrapper.findComponent(ChildComponent).vm.$emit('custom')
    await Vue.nextTick()
    expect(wrapper.html()).toContain('Emitted!')
  })
})