<template>
  <div class="fullscreen bg-primary text-dark text-center q-pa-lg flex flex-center error-404">
    <div>
      <div class="text-h4 error-404__code">
        404
      </div>

      <div class="text-h4 error-404__message">
        The dimension you're looking for is not real.
      </div>

      <q-btn
        class="q-mt-xl text-h6 q-px-xl error-404__button"
        color="dark"
        text-color="primary"
        to="/"
        label="Return to your galaxy"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error404',
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: $breakpoint-xs) {
  .error-404 {
    &__code {
      font-size: 1.5rem;
    }
    &__message {
      font-size: 1.5rem;
    }
    &__button {
      font-size: 1rem;
    }
  }
}
</style>
