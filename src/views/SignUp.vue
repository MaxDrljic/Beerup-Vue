<template>
  <div class="sign-up">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 mx-auto">
          <h3 class="sign-up-header">Create a new account!</h3>
          <input class="sign-up-input form-control" type="text" v-model="email" placeholder="Email">
          <br>
          <input
            class="sign-up-input form-control"
            type="password"
            v-model="password"
            placeholder="Password"
          >
          <br>
          <button class="sign-up-b btn beerup-button" @click="signUp">Sign Up</button>
          <span class="go-back">Or go back to
            <router-link to="/login">login</router-link>.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Your account has been created!");
            this.$router.replace("/");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.sign-up {
  margin-top: 8%;
}

.sign-up-header {
  padding-bottom: 10px;
}

.sign-up-input {
  margin: 10px 0;
  width: 80%;
  padding: 15px;
}

.sign-up-b {
  margin-top: 10px;
  font-size: 13px;
}

.go-back {
  display: block;
  margin-top: 40px;
  font-size: 12px;
}

.go-back a {
  text-decoration: underline;
  cursor: pointer;
}

.go-back a:hover {
  color: #ffc80a;
}
</style>
