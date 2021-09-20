<template>
  <div class="column q-mb-md record-item col-xs-12 col-sm-6">
    <span class="text-grey-6">{{ label }}</span>
    <strong class="text-grey-4">{{ value || 'Information not available' }}</strong>
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

<style lang="scss" scoped>
.record-item {
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
