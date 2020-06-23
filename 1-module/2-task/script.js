import Vue from '/vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data: {
    meetup: {
      //todo Хак
      agenda: [],
    },
  },

  async mounted() {
    this.meetup = await this.fetchMeetup();
  },

  computed: {
    clientMeetup() {
      return {
        ...this.meetup,
        cover: getMeetupCoverLink(this.meetup),
        localeDate: new Date(this.meetup.date).toLocaleDateString(
          navigator.language,
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        ),
        agenda:
          this.meetup.agenda || this.meetup.agenda.length > 0
            ? this.meetup.agenda.map((agenda) => ({
                ...agenda,
              iconPath: `/assets/icons/icon-${agendaItemIcons[agenda.type]}.svg`,
              title: agenda.title || agendaItemTitles[agenda.type],
            }))
            : [],
      };
    },
  },

  methods: {
    // TODO Add catch handler
    async fetchMeetup() {
      const response = await fetch(`${API_URL}/meetups/${MEETUP_ID}`);
      return await response.json();
    },
  },
});
