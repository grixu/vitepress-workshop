import { describe, it, expect } from 'vitest'
import {mount} from "@vue/test-utils";
import Button from "@/components/button";

describe('Button', () => {
  it('#1 Given button when clicked then emit event', async () => {
    // GIVEN
    const wrapper = mount(Button, {
      props: {
        primary: true,
      }
    })

    // WHEN
    await wrapper.find('[data-testid="button"]').trigger('click')

    // THEN
    expect(wrapper.emitted()['click']).toBeTruthy()
  })
})