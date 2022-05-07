<template>
  <h3 class="a-heading-level3" :class="className">
    <slot />
  </h3>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class HeadingLevel3 extends Vue {
  @Prop({ type: String, required: false })
  className!: string;
}
</script>

<style lang="scss" scoped>
  .a-heading-level3 {
    border-bottom: 2px solid $gray;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.5;
    padding-bottom: 4px;
  }
</style>