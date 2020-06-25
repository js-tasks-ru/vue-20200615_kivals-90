import { MeetupAgendaItem } from './MeetupAgendaItem.js';

const template = `
<div class="meetup-agenda">
  <meetup-agenda-item
    v-for="agendaItem in agenda"
    :agendaItem="agendaItem"
    :key="agendaItem.id"
  ></meetup-agenda-item>
</div>
`;

export const MeetupAgenda = {
  name: 'MeetupAgenda',
  template,
  components: {
    MeetupAgendaItem,
  },
  props: {
    agenda: Array,
    required: true,
  },
};
