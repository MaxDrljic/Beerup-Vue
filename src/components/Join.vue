<template>
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

            <form class="join-form">
              <div class="form-group pt-5">
                <label class="pb-4" for="fullName">PERSONAL INFORMATION</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  aria-describedby="fullNameHelp"
                  placeholder="Full name"
                >
              </div>
              <div class="form-group pt-5">
                <label class="pb-4" for="contact">CONTACT INFORMATION</label>
                <input type="email" class="form-control" id="contact" placeholder="Email">
              </div>
              <div class="form-group pt-4">
                <input type="number" class="form-control" id="contact" placeholder="Phone Number">
              </div>
              <div class="form-check pt-5">
                <p class="rsvp">RSVP</p>
                <input
                  class="styled-radio form-check-input"
                  type="radio"
                  name="rsvp"
                  id="rsvp1"
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
                  value="option3"
                >
                <label class="form-check-label" for="rsvp3">Can’t make it</label>
              </div>

              <div class="form-group pt-5">
                <textarea
                  class="form-control"
                  id="textarea"
                  rows="4"
                  placeholder="Something you’d like to add?"
                ></textarea>
              </div>

              <div class="form-check pt-5">
                <input
                  class="styled-checkbox form-check-input"
                  type="checkbox"
                  value
                  id="subscribe1"
                  checked
                >
                <label class="form-check-label" for="subscribe1">Let me know about future beerups!</label>
              </div>
              <div class="form-check pt-3">
                <input
                  class="styled-checkbox form-check-input"
                  type="checkbox"
                  value
                  id="subscribe2"
                >
                <label
                  class="form-check-label"
                  for="subscribe2"
                >Remind me one day before this beerup!</label>
              </div>

              <button type="submit" class="btn join-up">JOIN UP</button>
            </form>

            <img class="img-fluid cap-bottom" src="cap.png" alt="cap">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Join"
};
</script>

<style scoped>
/* === JOIN ===  */
.join-heading {
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
