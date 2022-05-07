<template>
  <h2 class="a-heading-level2" :class="className">
    <slot />
  </h2>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class HeadingLevel2 extends Vue {
  @Prop({ type: String, required: false })
  className!: string;
}
</script>

<style lang="scss" scoped>
  .a-heading-level2 {
    border-left: 4px solid $gray;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.5;
    padding-left: 8px;    
  }
</style>