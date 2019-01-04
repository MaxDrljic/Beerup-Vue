<template>
  <div class="sign-up">
    <h3>Create a new account!</h3>
    <input class="sign-up-input" type="text" v-model="email" placeholder="Email">
    <br>
    <input class="sign-up-input" type="password" v-model="password" placeholder="Password">
    <br>
    <button class="sign-up-b" @click="signUp">Sign Up</button>
    <span class="go-back">or go back to
      <router-link to="/login">login</router-link>.
    </span>
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
          function(user) {
            alert("Your account has been created!");
          },
          function(err) {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}

.sign-up-input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

.sign-up-b {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}

.go-back {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
