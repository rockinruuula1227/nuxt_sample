<template>
  <h3 class="a-heading-level4" :class="className">
    <slot />
  </h3>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class HeadingLevel4 extends Vue {
  @Prop({ type: String, required: false })
  className!: string;
}
</script>

<style lang="scss" scoped>
  .a-heading-level4 {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.5;
  }
</style>