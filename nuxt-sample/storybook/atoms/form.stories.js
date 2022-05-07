import checkbox from "~/components/atoms/a-form-checkbox.vue";

export default {
  title: "Atoms/Form",
  component: "AtomsForm"
};

export const Checkbox = () => ({
  components: { checkbox },
  template: "<checkbox :checked='true' name='test' value='test'>チェックボックスです</checkbox>"
});
