<template>
    <div id="container" :class="isDarkTheme ? darkTheme : lightTheme">
        <slot />
        <Button  @click="switchTheme" variation="primary"> Switch to {{ isDarkTheme ? 'light' : 'dark' }}</Button>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { darkTheme, lightTheme } from "../../styles/theme.css"
import "../../styles/global.css";

import Button from '../Button/Button.vue'

const isDarkTheme = ref(false)

function switchTheme(event: object) {
  isDarkTheme.value = !isDarkTheme.value;
}
</script>