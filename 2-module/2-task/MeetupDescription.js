const template = `
  <p class="meetup-description">{{ description }}</p>
`;

export const MeetupDescription = {
  template,
  props: {
    description: {
      type: String,
    },
  },
};
