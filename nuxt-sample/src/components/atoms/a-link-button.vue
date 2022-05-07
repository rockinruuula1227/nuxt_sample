<template>
  <a
    v-if="isBlank"
    class="a-link-button"
    :class="className"
    :href="href"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
  <a v-else-if="href.match(/https?:\/\//)" class="a-link-button" :class="className" :href="href">
    <slot />
  </a>
  <nuxt-link v-else class="a-link-button" :class="className" :to="href">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class LinkButton extends Vue {
  @Prop({ type: String, required: false })
  className!: string;

  @Prop({ type: String, default: "" })
  href!: string;

  @Prop({ type: Boolean, default: false })
  isBlank!: boolean;
}
</script>

<style lang="scss" scoped>
  .a-link-button {
    border-radius: 1.5em;
    display: inline-block;
    line-height: 1.5em;
    min-width: 10em;
    padding: 0.75em 1em;
    text-align: center;
    text-decoration: none;
  }
</style>