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
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
  },
  computed: {
    imageUrl() {
      return this.link ? `--bg-url: url('${this.link}')` : '';
    },
  },
};
