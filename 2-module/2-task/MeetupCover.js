const template = `
<div class="meetup-cover" :style="imageUrl">
    <h1 class="meetup-cover__title">{{ title }}</h1>
</div>
`;
export const MeetupCover = {
  template: template,
  props: {
    link: {
      type: String,
    },
    title: {
      link: String,
    },
  },
  computed: {
    imageUrl() {
      return `--bg-url: url('${this.link}')`;
    },
  },
};
