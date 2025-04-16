import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import DamageProcessSteps from '../DamageProcessSteps.vue'
import DamageProcessStepDetails from '../DamageProcessStepDetails.vue'
import { ProcessItem } from '../../lib/process-item.dt'

const steps: ProcessItem[] = [
  {
    type: 'CALL_RECEIVED',
    title: 'Schadenmeldung telefonisch eingegangen',
    timestamp: '2025-04-10T08:45:00Z',
    contact: 'Max Mustermann',
    status: 'erfasst',
    location: 'Kundencenter Berlin',
    comment: 'Kratzer am Stoßfänger gemeldet.',
    referenceId: 'CALL-001',
    amount: 0,
  },
  {
    type: 'IMAGES_RECEIVED',
    title: 'Schadenbilder übermittelt',
    timestamp: '2025-04-10T10:05:00Z',
    contact: 'Max Mustermann',
    status: 'eingegangen',
    location: 'Upload-Portal',
    comment: '4 Bilder vom Fahrzeugheck.',
  },
]

describe('DamageProcessSteps', () => {
  const vuetify = createVuetify({ components, directives })
  it('renders the correct number of timeline items', () => {
    const wrapper = mount(DamageProcessSteps, {
      props: {
        steps,
      },
      global: {
        plugins: [vuetify],
      },
    })

    const items = wrapper.findAllComponents({ name: 'v-timeline-item' })
    expect(items.length).toBe(steps.length)
  })

  it('displays the correct step numbers', () => {
    const wrapper = mount(DamageProcessSteps, {
      props: {
        steps,
      },
      global: {
        plugins: [vuetify],
      },
    })

    const stepNumbers = wrapper.findAll('.step-number')
    stepNumbers.forEach((node, index) => {
      expect(node.text()).toBe((index + 1).toString())
    })
  })

  it('passes each step to DamageProcessStepDetails', () => {
    const wrapper = mount(DamageProcessSteps, {
      props: {
        steps,
      },
      global: {
        plugins: [vuetify],
      },
    })

    const detailComponents = wrapper.findAllComponents(DamageProcessStepDetails)
    expect(detailComponents.length).toBe(steps.length)

    detailComponents.forEach((comp, index) => {
      expect(comp.props('step')).toEqual(steps[index])
    })
  })
})
