<script setup lang="ts">
import damageProcessSteps from '@/data/damageProcessSteps'
import DamageProcess from '@/components/DamageProcessSteps.vue'

import { ref } from 'vue'

const isDebug = ref(false)
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
      <DamageProcess :steps="damageProcessSteps" />
    </v-col>

    <v-col v-if="isDebug">
      <pre>
        {{ damageProcessSteps }}
      </pre>
    </v-col>
  </v-row>
</template>
