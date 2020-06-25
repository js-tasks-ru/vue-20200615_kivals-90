import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const template = `
<div>
    <meetup-view :meetup="meetup"></meetup-view>
</div>
`;

export const MeetupPage = {
  template,
  components: {
    MeetupView,
  },
  data() {
    return {
      meetup: {},
    };
  },
  async mounted() {
    this.meetup = await fetchMeetup(MEETUP_ID);
  },
};
