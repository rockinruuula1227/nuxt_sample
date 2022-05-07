<template>
  <label class="a-form-checkbox" :class="className">
    <input
      type="checkbox"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="change"
    />
    <span><slot /></span>
  </label>
</template>

<script lang="ts">
import { Component, PropSync, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class Checkbox extends Vue {
  @PropSync("checked", { type: Boolean, default: false })
  isChecked!: boolean;

  @Prop({ type: String, required: false })
  className!: string;

  @Prop({ type: String, required: true })
  name!: string;

  @Prop({ type: String, required: true })
  value!: string;

  @Prop({ type: Function, required: false })
  changeFunc!: Function;

  change(event: any): any {
    this.isChecked = (event as any).target.checked;

    if (this.changeFunc) {
      return this.changeFunc(this.name, this.value, this.isChecked);
    }
  }
}
</script>

<style lang="scss" scoped>
.a-form-checkbox {
  input {
    display: none;
  }

  span {
    cursor: pointer;
    display: inline-block;
    line-height: 24px;
    position: relative;
    padding-left: 32px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid $gray;
      width: 24px;
      height: 24px;
    }
  }

  input:checked + span:after {
    content: "✔️";
    position: absolute;
    text-align: center;
    vertical-align: middle;
    top: 0px;
    left: 0px;
    width: 24px;
    height: 24px;
  }
}
</style>
