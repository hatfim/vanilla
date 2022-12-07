<template>
    <button @click="handleClick" :class="styles.root[variation]"><slot /></button>
</template>
<script setup lang="ts">
import * as styles from "./Button.css";

const props = defineProps({
  /**
   * Variation of the button
   */
  variation: {
    type: String as PropType<ComponentVariation>,
    default: 'primary',
  },
});

const emit = defineEmits<{
  /**
   * Event fire after user click button.
   * @event click
   * @type {object}
   * @arg event return event object
   */
  (e: 'click', event: object): void
}>()

function handleClick(event: object) {
  emit('click', event)
}

</script>