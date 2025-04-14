<script setup lang="ts">
import { ProcessItem } from '@/lib/process-item'
import { ref } from 'vue'

const items = ref<ProcessItem[]>([
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
  {
    type: 'KVA_REQUESTED',
    title: 'KVA angefragt',
    timestamp: '2025-04-10T11:30:00Z',
    contact: 'Autohaus Meier',
    status: 'angefragt',
    location: 'Wolfsburg',
    comment: 'Bitte Rückmeldung bis 12.04.',
  },
  {
    type: 'KVA_RECEIVED',
    title: 'KVA erhalten',
    timestamp: '2025-04-11T14:22:00Z',
    contact: 'Autohaus Meier',
    status: 'eingegangen',
    location: 'System',
    comment: 'KVA mit 6 Positionen.',
    referenceId: 'KVA-001',
  },
  {
    type: 'LEASE_APPROVAL',
    title: 'Freigabe Leasing',
    timestamp: '2025-04-12T09:00:00Z',
    contact: 'Leasing AG',
    status: 'freigegeben',
    location: 'Onlineportal',
    comment: 'Genehmigt bis 2000 EUR.',
    referenceId: 'LEASE-APP-001',
  },
  {
    type: 'FLEET_APPROVAL',
    title: 'Freigabe Fuhrparkmanager',
    timestamp: '2025-04-12T11:45:00Z',
    contact: 'Sven Fuhrmann',
    status: 'freigegeben',
    location: 'intern',
    comment: 'Rückmeldung an Fahrer erfolgt.',
    referenceId: 'FLEET-APP-001',
  },
  {
    type: 'INSURANCE_APPROVAL',
    title: 'Freigabe Versicherung',
    timestamp: '2025-04-13T08:30:00Z',
    contact: 'AllSecure Versicherung',
    status: 'freigegeben',
    location: 'Versicherungsportal',
    comment: 'Schadennummer AS-2025-38217',
    referenceId: 'INS-APP-001',
  },
  {
    type: 'WORKSHOP_APPOINTMENT',
    title: 'Werkstatttermin vereinbart',
    timestamp: '2025-04-13T15:20:00Z',
    contact: 'Autohaus Meier',
    status: 'terminiert',
    location: 'Wolfsburg',
    comment: 'Termin am 16.04. um 09:00',
    referenceId: 'TERM-001',
  },
  {
    type: 'REPAIRED',
    title: 'Auto repariert',
    timestamp: '2025-04-17T17:00:00Z',
    contact: 'Autohaus Meier',
    status: 'abgeschlossen',
    location: 'Wolfsburg',
    comment: 'Stoßfänger und Kennzeichenhalter ersetzt.',
  },
  {
    type: 'PROCESS_COMPLETED',
    title: 'Vorgang abgeschlossen',
    timestamp: '2025-04-18T10:00:00Z',
    contact: 'Lea Abwicklung',
    status: 'geschlossen',
    location: 'intern',
    comment: 'Fahrzeug übergeben und dokumentiert.',
  },
])

/**
 * TODO: Disable this when challenge completed
 */
const isDebug = ref(true)
</script>

<template>
  <v-row>
    <v-col cols="12">
      <h1>📋 Coding Interview Task: Visualize a Damage Process</h1>

      <h2>🎯 Goal</h2>
      <p>
        Your task is to implement a <strong>clean, user-friendly UI</strong> to visualize the steps
        of a damage claim process (Schadenprozess). The focus is on
        <strong>visual presentation</strong> and <strong>structured display</strong> of data—not
        backend logic.
      </p>

      <h2>🧩 Task Description</h2>
      <p>
        We provide you with a list of 10 process steps in a fixed order, each representing one stage
        in the damage handling workflow (e.g., image upload, approval, repair, etc.). See
        <code>process-item.d.ts</code>
      </p>

      <h2>🧪 Your Challenge</h2>
      <p>
        Build a <strong>responsive UI component</strong> that visualizes the process
        <strong>as a timeline or step-based flow</strong>. Use your creativity and best practices in
        frontend development.
      </p>

      <h2>✅ Requirements</h2>
      <ul>
        <li>Display all 10 steps in chronological order.</li>
        <li>
          Show <code>title</code>, <code>timestamp</code>, <code>status</code>, and optionally other
          fields (you decide what's relevant).
        </li>
        <li>Highlight the current or active step (if desired).</li>
        <li>Use a clear visual structure (timeline, cards, vertical stepper, etc.).</li>
        <li>Code must be clean and readable.</li>
      </ul>
    </v-col>

    <v-col cols="12">
      <h2>Prozess Visualisierung</h2>
    </v-col>

    <v-col v-if="isDebug">
      <pre>
        {{ items }}
      </pre>
    </v-col>
  </v-row>
</template>
