<script setup lang="ts"></script>

<template>
  <v-row>
    <v-col cols="12">
      <h1>📋 Coding Challenge: Dropfield + Image Gallery</h1>

      <h2>🎯 Goal</h2>
      <p>
        The goal of this task is to implement a small interactive UI where users can
        <strong>drag and drop images</strong> into a "drop area" and display the images in an
        interactive gallery.
      </p>

      <h2>🧩 Task Description</h2>
      <p>Extend this view with two components:</p>
      <ul>
        <li><strong>Dropfield Component</strong> - accepts a list of image files from the user</li>
        <li>
          <strong>ImageGallery Component</strong> - displays the uploaded image in a previews.
        </li>
        <li>Make it possible to zoom, rotate and cycle through the images in the gallery</li>
        <li>Handle image previews in memory (no backend or upload logic necessary).</li>
      </ul>

      <h2>✅ Requirements</h2>
      <ul>
        <li>
          The user should be able to drag and drop one or multiple image files into the drop field.
        </li>
        <li>The dropped files should be of type <code>.jpg, .jpeg, .png, .webp</code>.</li>
        <li>The dropped files should be previewed as thumbnails in the image gallery below.</li>
        <li>The components should be reusable and cleanly structured.</li>
      </ul>
    </v-col>
  </v-row>
</template>
