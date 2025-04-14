<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['drop'])
const isDragging = ref(false)
const color = ref('indigo')

const props = withDefaults(defineProps<{ accept: string }>(), {
  accept: '.jpg, .jpeg',
})

const btnText = 'Datei wählen'
/**
 * FIXME: We have to translate this to german, as our customers are 100% german.
 */
const cardText = 'Drop files here'

function dragOver() {
  isDragging.value = true
}

function dragLeave() {
  isDragging.value = false
}

function onFileInput(event: Event) {
  const input = event.target as HTMLInputElement
  handleFileList(input.files)
}

function onFileDrop(event: DragEvent) {
  isDragging.value = false

  const files = event.dataTransfer?.files
  if (files) {
    handleFileList(files)
  }
}

function handleFileList(files: FileList) {
  for (const file of files) {
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase()
    const isAccepted = props.accept.includes(fileExtension)

    if (!isAccepted) {
      throw new Error('Invalid File')
    }
  }

  emit('drop', files)
}
</script>

<template>
  <v-card
    id="dropfield"
    class="mx-auto spaced contain"
    :variant="isDragging ? 'tonal' : 'outlined'"
    :color="color"
    @dragover.prevent="dragOver"
    @dragleave.prevent="dragLeave"
    @drop.prevent="onFileDrop($event)"
    max-width="500"
    max-height="100%"
  >
    <v-card-text>
      <v-row align="center" no-gutters>
        <v-col class="text-h2 d-flex justify-center" cols="12">
          <v-icon> mdi-paperclip </v-icon>
          <span>{{ cardText }}</span>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn variant="text" @click="$refs.uploader.click()">
        {{ btnText }}
      </v-btn>
    </v-card-actions>

    <input
      name="file"
      ref="uploader"
      type="file"
      style="display: none"
      :accept="props.accept"
      @change="onFileInput"
      multiple
    />
  </v-card>
</template>

<style scoped>
.spaced {
  margin-bottom: 35px;
}

.grabbable {
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

/* (Optional) Apply a "closed-hand" cursor during drag operation. */
.grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}

.contain {
  padding: 1em;
}
</style>
