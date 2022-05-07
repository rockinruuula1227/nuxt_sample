<template>
  <h2 class="a-heading-level1" :class="className">
    <slot />
  </h2>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class HeadingLevel1 extends Vue {
  @Prop({ type: String, required: false })
  className!: string;
}
</script>

<style lang="scss" scoped>
  .a-heading-level1 {
    align-items: center;
    background-size: cover;
    display: flex;
    font-size: 3rem;
    font-weight: bold;
    height: 100px;
    justify-content: center;
    line-height: 1.5;
  }
</style>