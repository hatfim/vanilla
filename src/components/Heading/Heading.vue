<template>
    <h1 :class="styles.root"><slot></slot></h1>
</template>

<script setup lang="ts">
import * as styles from "./Heading.css";
</script>