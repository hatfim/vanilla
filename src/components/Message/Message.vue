<template>
    <p :class="styles.message"><slot></slot></p>
</template>

<script setup lang="ts">
import * as styles from "./Message.css";
</script>