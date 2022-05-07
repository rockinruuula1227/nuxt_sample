<template>
  <div ref="observeElement" class="a-observer" @click="trigger" />
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator";
import * as observerProp from "~/types/components/a-observer";

@Component
export default class Observer extends Vue {
  @Prop({ type: Function, required: false })
  triggerFunc!: Function;

  @Prop({ type: Object, required: false })
  options!: observerProp.Observer;

  @Prop({ type: Boolean, required: true })
  enable!: Boolean;

  observer: any = null;

  observeElement: any = null;

  @Watch("enable")
  changeEnable(newValue) {
    if (this.observer != null && newValue != null) {
      if (newValue) {
        this.observer.observe(this.observeElement);
      } else {
        this.observer.unobserve(this.observeElement);
      }
    }
  }

  mounted(): void {
    const options = this.options ? this.options : {};
    this.observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) {
        this.trigger();
      }
    }, options);
    this.observeElement = (this as any).$refs.observeElement;
    if (this.enable) {
      this.observer.observe(this.observeElement);
    }
  }

  trigger(): any {
    if (this.triggerFunc) {
      return this.triggerFunc();
    }
  }
}
</script>

<style lang="scss" scoped>
.a-observer {
  background: $lightGray;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  opacity: 0;
}
</style>
