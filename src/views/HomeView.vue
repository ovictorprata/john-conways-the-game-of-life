<template>
  <div class="GOL">
    <navbar-app />
    <section class="hero primary-background is-fullheight">
      <!-- Main Content -->
      <div class="main-content-app">
        <div class="container is-paddingless">
          <div class="columns box is-fullwidth is-gapless">
            <div class="column is-12">
              <transition mode="out-in" name="fade">
                <keep-alive>
                  <app-grid
                    v-if="mainComponent == 'gamePage'"
                    :message="message"
                    :current-speed="speed"
                  />
                </keep-alive>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <app-controller
                :is-running="isRunning"
                :main-component="mainComponent"
                @send="delegate($event)"
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
// Imports
import Vue from "vue";
import Controller from "@/components/ControllerGame.vue";
import Grid from "@/components/GridBoard.vue";
export default {
  name: "App",
  components: {
    "app-grid": Grid,
    "app-controller": Controller,
  },
  data() {
    return {
      // The message that gets send down to app-grid at a steady interval
      message: "",
      // Booleans to determine what to show to the client
      isRunning: false,
      // Used to determine the speed the application runs at
      speed: 100,
      intervalID: 0,
      // Variables to determine which page/scenario to show
      mainComponent: "gamePage",
      selectedScenario: "scenario",
    };
  },
  created() {},
  methods: {
    /**
     * Gets called whenever a button is pressed
     * from the Controller component and delegates the
     * appropriate action based on param.
     *
     * @param {string} event - the event
     */
    delegate: function (event) {
      if (event === "play") {
        this.isRunning = !this.isRunning;
        this.restartInterval();
      } else {
        this.updateMessage(event);
      }
    },
    /**
     * Updates  message  that gets passed
     * down to the grid component as a prop and
     * then resets the message on the next tick.
     *
     * @param {string} newMessage - the new message to be set
     */
    updateMessage: function (newMessage) {
      this.message = newMessage;
      Vue.nextTick(this.resetMessage);
    },
    /**
     * Resets the current message to an
     * empty string.
     */
    resetMessage: function () {
      this.message = "";
    },
    /**
     * Restarts the current interval that
     * is used to call the updateMessage method.
     */
    restartInterval: function () {
      clearInterval(this.intervalID);
      if (this.isRunning) {
        this.intervalID = setInterval(
          this.updateMessage,
          50000 / this.speed,
          "nextStep"
        );
      }
    },
  },
};
</script>

<style lang="scss">
html,
body {
  background-image: linear-gradient(
    to right top,
    #ff0000,
    #db0000,
    #840000,
    #620000
  );
  color: #000;
  font-family: "Dosis", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.main-content-app {
  align-items: stretch !important;
  padding-top: 18px;
  padding-bottom: 12px;
}
.footer {
  padding: 1rem;
  background-color: transparent;
}
.hr {
  position: relative;
  border-top: 2px solid #414b5c;
  margin: 0px;
  bottom: 0;
}
// The transitions used to switch out my page components as well as
// the import/export modal
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s linear;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
