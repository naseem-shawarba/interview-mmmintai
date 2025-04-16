<template>
  <div class="d-flex justify-center">
    <v-timeline align="start" side="end">
      <v-timeline-item
        v-for="(step, index) in props.steps"
        :key="step.type"
        dot-color="grey"
        fill-dot
        width="100%"
      >
        <template #icon>
          <div class="step-number">
            {{ index + 1 }}
          </div>
        </template>

        <div>
          <DamageProcessStepDetails :step="step" />
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { ProcessItem } from '@/lib/process-item'
import { formatTimestamp } from '@/lib/format'
import DamageProcessStepDetails from '@/components/DamageProcessStepDetails.vue'

interface Props {
  steps: ProcessItem[]
}

const props = defineProps<Props>()
</script>
