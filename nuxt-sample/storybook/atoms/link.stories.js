import linkText from "~/components/atoms/a-link-text.vue";
import linkButton from "~/components/atoms/a-link-button.vue";
import icon from "~/components/atoms/a-icon.vue";

export default {
  title: "Atoms/Link",
  component: "AtomsLink"
};

export const LinkText = () => ({
  components: { linkText },
  template: "<linkText href='https://google.com'>テキストリンク</linkText>"
});

export const LinkTextBlank = () => ({
  components: { linkText, icon },
  template: "<linkText href='https://google.com' :isBlank='true'>テキストリンク<icon className='--blank' /></linkText>"
});


export const LinkButton = () => ({
  components: { linkButton },
  template: "<linkButton className='bg-gray-500 text-white' href='https://google.com'>テキストリンク</linkButton>"
});

export const LinkButtonBlank = () => ({
  components: { linkButton, icon },
  template: "<linkButton className='bg-gray-500 text-white' href='https://google.com' :isBlank='true'>テキストリンク<icon className='--blank text-white stroke-current' /></linkButton>"
});
