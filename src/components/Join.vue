<template>
  <!-- HERO SECTION
  =============================================-->
  <div>
    <Hero title="JOIN UP!"></Hero>

    <!-- MAIN SECTION
    =============================================-->
    <section>
      <div class="main-container">
        <div class="container">
          <div class="row">
            <div class="col-xl-3"></div>
            <div class="col-xl-6 main-content">
              <h2 class="join-heading">Quick, join up before we
                <br>drink all the beer!
              </h2>

              <form class="join-form" @submit.prevent="processForm">
                <div class="form-group pt-5">
                  <label class="pb-4" for="fullName">PERSONAL INFORMATION</label>
                  <input
                    type="text"
                    class="form-control"
                    name="fullName"
                    id="fullName"
                    v-model="user.fullName"
                    aria-describedby="fullNameHelp"
                    placeholder="Full name"
                    required
                  >
                </div>
                <div class="form-group pt-5">
                  <label class="pb-4" for="contact">CONTACT INFORMATION</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    v-model="user.email"
                    placeholder="Email"
                    required
                  >
                </div>
                <div class="form-group pt-4">
                  <input
                    type="number"
                    class="form-control"
                    name="phone"
                    id="phone"
                    v-model="user.phone"
                    placeholder="Phone Number"
                  >
                </div>
                <div class="form-check pt-5">
                  <p class="rsvp">RSVP</p>
                  <input
                    class="styled-radio form-check-input"
                    type="radio"
                    name="rsvp"
                    id="rsvp1"
                    v-model="user.rsvp1"
                    value="option1"
                    checked
                  >
                  <label class="form-check-label" for="rsvp1">I’m coming!</label>
                </div>
                <div class="form-check pt-2">
                  <input
                    class="styled-radio form-check-input"
                    type="radio"
                    name="rsvp"
                    id="rsvp2"
                    v-model="user.rsvp2"
                    value="option2"
                  >
                  <label class="form-check-label" for="rsvp2">Maybe?</label>
                </div>
                <div class="form-check pt-2">
                  <input
                    class="styled-radio form-check-input"
                    type="radio"
                    name="rsvp"
                    id="rsvp3"
                    v-model="user.rsvp3"
                    value="option3"
                  >
                  <label class="form-check-label" for="rsvp3">Can’t make it</label>
                </div>

                <div class="form-group pt-5">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    v-model="user.message"
                    rows="4"
                    placeholder="Something you’d like to add?"
                  ></textarea>
                </div>

                <div class="form-check pt-5">
                  <input
                    class="styled-checkbox form-check-input"
                    type="checkbox"
                    value
                    name="subscribe1"
                    id="subscribe1"
                    v-model="user.subscribe1"
                    checked
                  >
                  <label class="form-check-label" for="subscribe1">Let me know about future beerups!</label>
                </div>
                <div class="form-check pt-3">
                  <input
                    class="styled-checkbox form-check-input"
                    type="checkbox"
                    value
                    name="subscribe2"
                    id="subscribe2"
                    v-model="user.subscribe2"
                  >
                  <label
                    class="form-check-label"
                    for="subscribe2"
                  >Remind me one day before this beerup!</label>
                </div>

                <button type="submit" @click="processForm()" class="btn join-up">JOIN UP</button>
              </form>

              <img class="img-fluid cap-bottom cap-bottom-join" src="cap.png" alt="cap">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Hero from "@/components/Hero.vue";

export default {
  name: "Join",
  components: {
    Hero
  },
  data() {
    return {
      user: {
        fullName: "",
        email: "",
        phone: null,
        rsvp1: true,
        rsvp2: false,
        rsvp3: false,
        message: "",
        subscribe1: true,
        subscribe2: false
      },
      response: ""
    };
  },
  methods: {
    /* When Join Now button is clicked, Axios POST call is triggered */
    /* Axios call returns entered values in the console */
    processForm: function() {
      axios({
        method: "POST",
        url: "https://httpbin.org/post",
        timeout: 5000,
        data: this.user,
        headers: { "content-type": "application/json" }
      }).then(
        result => {
          this.response = result.data;
          console.log(this.response.data);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>

<style scoped>
.main-container {
  margin-top: -22rem;
}

/* === JOIN ===  */
.join-heading {
  padding-top: 10px;
  color: #212121;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
}

.join-up {
  margin: 50px 0;
  margin-left: 33%;
  height: 61px;
  width: 235px;
  max-width: 100%;
  border-radius: 49.5px;
  background-color: #ffc80a;
  color: #292929;
  font-size: 12px;
  font-weight: bold;
  word-wrap: break-word;
  letter-spacing: 2.4px;
  line-height: 14px;
}

.form-group label {
  color: #292929;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
}

.form-check-label {
  color: #000000;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 19px;
}

.rsvp {
  margin-left: -20px;
  color: #212121;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
}
</style>
