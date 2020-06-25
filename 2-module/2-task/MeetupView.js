import { MeetupCover } from './MeetupCover.js';
import { getMeetupCoverLink } from './data.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';

const template = `
<div>
  <meetup-cover :link="getImageUrl()" :title="meetup.title"></meetup-cover>

  <div class="container">
    <div class="meetup">
      <div class="meetup__content">
        <h3>Описание</h3>
        <meetup-description :description="meetup.description"></meetup-description>

        <h3>Программа</h3>
        <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
      </div>
      <div class="meetup__aside">
        <meetup-info :meetup="meetup"></meetup-info>
      </div>
    </div>
  </div>
</div>
`;

export const MeetupView = {
  name: 'MeetupView',
  template,
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda,
  },
  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl() {
      return getMeetupCoverLink(this.meetup);
    },
  },
};
