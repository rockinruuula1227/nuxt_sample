import level1 from "~/components/atoms/a-heading-level1.vue";
import level2 from "~/components/atoms/a-heading-level2.vue";
import level3 from "~/components/atoms/a-heading-level3.vue";
import level4 from "~/components/atoms/a-heading-level4.vue";

export default {
  title: "Atoms/Heading",
  component: "AtomsHeading"
};

export const Level1 = () => ({
  components: { level1 },
  template: "<level1 className='bg-gray-500 text-white'>level1のタイトル</lebel1>"
});
export const Level2 = () => ({
  components: { level2 },
  template: "<level2>level2のタイトル</lebel2>"
});
export const Level3 = () => ({
  components: { level3 },
  template: "<level3>level3のタイトル</lebel3>"
});
export const Level4 = () => ({
  components: { level4 },
  template: "<level4>level4のタイトル</lebel4>"
});
export const TailwindSample = () => ({
  components: { level2, level4 },
  template: "<div><level2 className='text-red-700'>Tailwindでカラーを変える</level2><level4 className='mt-8 text-blue-500'>※ただしTailwindよりもScopedCSSのほうが詳細度が高いため、<br>Tailwindで変更できるのはコンポーネントのCSSで宣言されていないものに限る</level4></div>"
});
