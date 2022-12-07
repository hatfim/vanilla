<template>
  <Container>
    <Heading>Theming with Vanilla Extract</Heading>
    <Message>A message that changes font-size and line-height at breakpoints.</Message>
    <p
      :class="sprinkles({
        text: {
          mobile: 'small',
          tablet: 'medium',
          desktop: 'large'
        }
      })"
    >
      Another, but inline this time.
    </p>
  </Container>
</template>

<script setup lang='ts'>
import Container from './components/Container/Container.vue'
import Heading from './components/Heading/Heading.vue'
import Message from './components/Message/Message.vue';
import { sprinkles } from './styles/sprinkles.css';


</script>