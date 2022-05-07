import listQA from "~/components/atoms/a-list-qa.vue";

export default {
  title: "Atoms/List",
  component: "AtomsList"
};

export const ListQA = () => ({
  components: { listQA },
  template: "<listQA><template v-slot:dt>タイトルタイトルタイトルタイトルタイトル</template><template v-slot:dd>本文です。本文です。本文です。本文です。<br>本文です。本文です。本文です。本文です。</template></listQA>"
});
