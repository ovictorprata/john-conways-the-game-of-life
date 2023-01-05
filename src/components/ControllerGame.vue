<template>
  <div class="box">
    <div class="field has-addons has-addons-centered is-marginless">
      <p class="control">
        <button
          :disabled="mainComponent !== 'gamePage'"
          :class="isRunning ? 'green' : 'red'"
          class="button"
          title="play"
          @click="send('play')"
        >
          <v-icon v-show="!isRunning">mdi-play</v-icon>
          <v-icon v-show="isRunning">mdi-pause</v-icon>
        </button>
      </p>
      <p class="control">
        <button
          :disabled="mainComponent !== 'gamePage'"
          class="button"
          title="clear grid"
          @click="send('redoSession')"
        >
          <v-icon> mdi-restart</v-icon>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isRunning: {
      default: false,
      type: Boolean,
    },
    mainComponent: {
      default: "gamePage",
      type: String,
    },
  },
  methods: {
    /**
     * emits the action that is requested
     * by the client up to the App component.
     *
     * @param {string} event - the event
     */
    send: function (event) {
      this.$emit("send", event);
    },
  },
};
</script>

<style scoped>
.box {
  padding: 0;
}
.green {
  background-color: hsla(120, 77%, 26%, 0.6);
}
.red {
  background-color: hsla(0, 67%, 31%, 0.6);
}
</style>
