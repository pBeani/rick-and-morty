<template>
  <div>
    <span>{{ label }}:</span>
    <strong>{{ value || 'Information not available' }}</strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RecordItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
});
</script>
