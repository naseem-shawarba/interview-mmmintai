<template>
  <div>
    <div class="font-weight-bold mb-1 pt-2">{{ step.title }}</div>
    <v-card class="pa-3" elevation="2">
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center text-grey-darken-1">
          <v-icon size="18" class="mr-1">mdi-clock-start</v-icon>
          <span class="text-caption font-italic">
            Initiiert am {{ formatTimestamp(step.timestamp) }}
          </span>
        </div>
        <v-chip small class="ml-4 text-wrap">{{ step.status }}</v-chip>
      </div>

      <div class="text-body-2 mt-2">
        <div><strong>Kontakt:</strong> {{ step.contact }}</div>
        <div><strong>Ort:</strong> {{ step.location }}</div>
        <div v-if="step.referenceId"><strong>Referenz:</strong> {{ step.referenceId }}</div>
        <div v-if="step.comment" class="mt-1"><strong>Kommentar:</strong> {{ step.comment }}</div>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ProcessItem } from '@/lib/process-item'
import { formatTimestamp } from '@/lib/format'

defineProps<{
  step: ProcessItem
}>()
</script>
