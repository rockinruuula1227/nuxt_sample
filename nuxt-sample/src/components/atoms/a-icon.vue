<template>
  <i class="a-icon" :class="className"></i>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({ type: String, required: false })
  className!: string;
}
</script>

<style lang="scss" scoped>
  .a-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: 50% 50% no-repeat;
    background-size: contain;

    &.--blank {
      background-image: url("../../assets/img/icon/blank.svg");
    }

    &.--pdf {
      background-image: url("../../assets/img/icon/pdf.svg");
    }

    &.--download {
      background-image: url("../../assets/img/icon/download.svg");
    }
  }
</style>