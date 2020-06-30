<template>
  <div class="toasts">
    <div
      v-for="message in filteredMessages"
      class="toast"
      :class="message.type === 'success' ? 'toast_success' : 'toast_error'"
    >
      <app-icon
        :icon="message.type === 'success' ? 'check-circle' : 'alert-circle'"
      />
      <span>{{ message.text }}</span>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

const DELAY = 5000;

export default {
  name: 'AppToast',

  components: { AppIcon },

  data() {
    return {
      messages: [],
    };
  },

  computed: {
    filteredMessages() {
      return this.messages.filter((message) => !message.hide);
    },
  },

  methods: {
    error(message) {
      let messageObj = this.makeMessageObject(message, 'error');
      messageObj.setTimer(DELAY);
      this.messages.push(messageObj);
    },

    success(message) {
      let messageObj = this.makeMessageObject(message, 'success');
      messageObj.setTimer(DELAY);
      this.messages.push(messageObj);
    },

    makeMessageObject(message, type) {
      return {
        text: message,
        setTimer(delay) {
          setTimeout(() => {
            this.hide = true;
          }, delay);
        },
        type,
        hide: false,
      };
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
