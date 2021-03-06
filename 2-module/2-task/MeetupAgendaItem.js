import { agendaItemIcons, agendaItemTitles } from './data.js';

const template = `
<div class="meetup-agenda__item">
  <div class="meetup-agenda__item-col">
    <img class="icon" alt="icon" :src="iconPath" />
  </div>
  <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
  <div class="meetup-agenda__item-col">
    <h5 class="meetup-agenda__title">{{ agendaTitle }}</h5>
    <p v-if="agendaItem.type==='talk'">
        <span>{{ agendaItem.speaker }}</span>
        <span class="meetup-agenda__dot"></span>
        <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
    </p>
    <p>{{ agendaItem.description }}</p>
  </div>
</div>
`;

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',
  template,
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    iconPath() {
      return `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`;
    },
    agendaTitle() {
      return this.agendaItem.title || agendaItemTitles[this.agendaItem.type];
    },
  },
};
