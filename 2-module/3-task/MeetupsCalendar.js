/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */
const template = `
<div class="rangepicker">
  <div class="rangepicker__calendar">
    <div class="rangepicker__month-indicator">
      <div class="rangepicker__selector-controls">
        <button class="rangepicker__selector-control-left" @click="changeMonth('prev')"></button>
        <div>{{ userDate }}</div>
        <button class="rangepicker__selector-control-right" @click="changeMonth('next')"></button>
      </div>
    </div>
    <div class="rangepicker__date-grid">
    <div v-for="day in calendarDays"
        class="rangepicker__cell"
        :class="{ 'rangepicker__cell_inactive': !day.isActive }"
    > {{day.value}}
        <a
            v-if="day.meetupsList && day.meetupsList.length"
            v-for="meetupItem in day.meetupsList"
            class="rangepicker__event">
            {{ meetupItem }}</a>
    </div>
    </div>
  </div>
</div>
`;

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template,
  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  computed: {
    calendarDays() {
      return this.createCalendar(this.startOfMonth, this.countDays);
    },
    countDays() {
      return this.calcCountDays(this.currentDate);
    },
    /*
    Возвращает день недели первого дня месяца
     */
    startOfMonth() {
      return (
        new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
        ).getDay() || 7
      );
    },
    userDate() {
      return this.currentDate.toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long',
      });
    },
  },
  methods: {
    /*
    Расчитать кол-во дней в указанном месяце
     */
    calcCountDays(date) {
      return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
    },
    /*
    Создать модель календарь
     */
    createCalendar(startOfMonth, countDays) {
      let calendar = [];
      this.createLastMonthDays(calendar, startOfMonth);
      this.createCurrentMonthDays(calendar, countDays);
      this.createNextMonthDays(calendar);
      return calendar;
    },
    /*
    Создать часть модели календаря, отвечающую за отображение пред. месяца
     */
    createLastMonthDays(calendar, startOfMonth) {
      const lastMonth = new Date(this.currentDate);
      lastMonth.setMonth(this.currentDate.getMonth() - 1);
      let initValue = this.calcCountDays(lastMonth) - startOfMonth + 1;
      for (let i = 1; i < startOfMonth; i++) {
        let day = {};
        day.isActive = false;
        day.value = initValue + i;
        calendar.push(day);
      }
    },
    /*
    Создать часть модели календаря, отвечающую за отображение след. месяца
     */
    createCurrentMonthDays(calendar, countDays) {
      for (let i = 1; i <= countDays; i++) {
        let day = {};
        day.value = i;
        day.isActive = true;
        day.meetupsList = this.getMeetupsPerDay(i);
        calendar.push(day);
      }
    },
    createNextMonthDays(calendar) {
      let initValue = 1;
      while (calendar.length % 7) {
        let day = {};
        day.isActive = false;
        day.value = initValue;
        calendar.push(day);
        initValue++;
      }
    },
    /*
    Получить массив наименований митапов за дату
     */
    getMeetupsPerDay(dayNumber) {
      let meetupNames = [];
      //Получаем объек даты за указанный день с нулевым временем
      const currentDate = new Date(this.currentDate);
      currentDate.setDate(dayNumber);
      currentDate.setHours(0, 0, 0, 0);
      this.meetups.forEach((meetup) => {
        const meetupDate = new Date(meetup.date);
        //Обнуляем время для корректного сравнения
        meetupDate.setHours(0, 0, 0, 0);
        if (meetupDate.getTime() === currentDate.getTime()) {
          meetupNames.push(meetup.title);
        }
      });
      return meetupNames;
    },
    /*
    Обработка переключения месяца
     */
    changeMonth(direction) {
      const newMonth =
        direction === 'prev'
          ? this.currentDate.getMonth() - 1
          : this.currentDate.getMonth() + 1;
      this.currentDate = new Date(this.currentDate.getFullYear(), newMonth);
    },
  },
};
