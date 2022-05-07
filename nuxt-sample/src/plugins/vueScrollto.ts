/*
 * vue-scrolltoプラグインを拡張して、指定のエレメントのDOM描画完了が確認できてからスクロールをするプラグイン
 * (this as any).$scroll.do(idName) で実行
 */
import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -60
});

export default (context: any, inject: any) => {
  const scroll = {
    counter: 0,
    do(hash: string): void {
      this.counter = 0;
      const headerHeight: number =
        document.getElementsByClassName("zHeader")[0]?.clientHeight ?? 60;

      if (hash && hash.match(/^#.+$/)) {
        this.scrollTo(hash, headerHeight);
      }
    },
    scrollTo(hash: string, headerHeight: number) {
      const targetElement = document.getElementById(hash.replace("#", ""));

      if (targetElement) {
        this.counter = 0;
        VueScrollTo.scrollTo(hash, {
          offset: -headerHeight
        });
      } else if (this.counter < 50) {
        setTimeout(() => {
          this.counter++;
          this.scrollTo(hash, headerHeight);
        }, 200);
      }
    }
  };
  inject("scroll", scroll);
};
