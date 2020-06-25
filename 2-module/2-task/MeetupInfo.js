const template = `
<ul class="info-list">
  <li>
    <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
    {{ meetup.organizer }}
  </li>
  <li>
    <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
    {{ meetup.place }}
  </li>
  <li>
    <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
    <time datetime="2020-01-01">{{ localeDate }}</time>
  </li>
</ul>
`;
export const MeetupInfo = {
  template,
  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
  computed: {
    localeDate() {
      return new Date(this.meetup.date).toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
