<template>
  <a
    v-if="isBlank"
    class="a-link-text"
    :class="className"
    :href="href"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
  <a v-else-if="href.match(/https?:\/\//)" class="a-link-text" :class="className" :href="href">
    <slot />
  </a>
  <nuxt-link v-else class="a-link-text" :class="className" :to="href">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class LinkText extends Vue {
  @Prop({ type: String, required: false })
  className!: string;

  @Prop({ type: String, default: "" })
  href!: string;

  @Prop({ type: Boolean, default: false })
  isBlank!: boolean;
}
</script>

<style lang="scss" scoped>
  .a-link-text {
    text-decoration: underline;
  }
</style>