import icon from "~/components/atoms/a-icon.vue";

export default {
  title: "Atoms/Icon",
  component: "AtomsIcon"
};

export const IconBlank = () => ({
  components: { icon },
  template: "<icon className='--blank' />"
});

export const IconPdf = () => ({
  components: { icon },
  template: "<icon className='--pdf' />"
});

export const IconDownload = () => ({
  components: { icon },
  template: "<icon className='--download' />"
});
