import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import DamageProcessStepDetails from '../DamageProcessStepDetails.vue'
import { ProcessItem } from '../../lib/process-item.dt'

const step: ProcessItem = {
  type: 'CALL_RECEIVED',
  title: 'Schadenmeldung telefonisch eingegangen',
  timestamp: '2025-04-10T08:45:00Z',
  contact: 'Max Mustermann',
  status: 'erfasst',
  location: 'Kundencenter Berlin',
  comment: 'Kratzer am Stoßfänger gemeldet.',
  referenceId: 'CALL-001',
  amount: 0,
}
const stepWithoutOptional: ProcessItem = {
  ...step,
  comment: undefined,
  referenceId: undefined,
}

describe('DamageProcessStepDetails', () => {
  const vuetify = createVuetify({ components, directives })

  it('renders properly', () => {
    const wrapper = mount(DamageProcessStepDetails, {
      global: {
        plugins: [vuetify],
      },
      props: { step },
    })
    expect(wrapper.text()).toContain('Schadenmeldung telefonisch eingegangen')
    expect(wrapper.text()).toContain('Initiiert am 10.04.2025, 10:45')
    expect(wrapper.text()).toContain('Kontakt: Max Mustermann')
    expect(wrapper.text()).toContain('erfasst')
    expect(wrapper.text()).toContain('Ort: Kundencenter Berlin')
    expect(wrapper.text()).toContain('Referenz: CALL-001')
    expect(wrapper.text()).toContain('Kommentar: Kratzer am Stoßfänger gemeldet.')
  })

  it('does not render comment or referenceId if not provided', () => {
    const wrapper = mount(DamageProcessStepDetails, {
      global: { plugins: [vuetify] },
      props: { step: stepWithoutOptional },
    })

    expect(wrapper.text()).not.toContain('Kommentar:')
    expect(wrapper.text()).not.toContain('Referenz:')
  })
})
