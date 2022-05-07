<template>
  <dl
    class="a-list-qa"
    :class="className"
  >
    <dt @click="isOpen = !isOpen"><slot name="dt" /></dt>
    <dd :class="{'--open': isOpen}"><slot name="dd" /></dd>
  </dl>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class ListQA extends Vue {
  @Prop({ type: String, required: false })
  className!: string;

  isOpen: boolean = false;
}
</script>

<style lang="scss" scoped>
  .a-list-qa {
    dt {
      align-items: center;
      cursor: pointer;
      display: flex;
      font-size: 1.8rem;
      line-height: 3rem;

      &:before {
        content: "Q";
        font-size: 3rem;
        padding-right: 4px;
      }
    }

    dd {
      align-items: flex-start;
      display: flex;
      margin-top: 16px;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: $transition;

      &:before {
        content: "A";
        font-size: 3rem;
        padding-right: 8px;
      }

      &.--open {
        max-height: 100vh;
        opacity: 1;
      }
    }
  }
</style>