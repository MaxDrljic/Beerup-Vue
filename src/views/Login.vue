<template>
  <div class="login">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 mx-auto">
          <h3 class="sign-in-header">Sign in</h3>
          <input class="sign-in-input form-control" type="text" v-model="email" placeholder="Email">
          <br>
          <input
            class="sign-in-input form-control"
            type="password"
            v-model="password"
            placeholder="Password"
          >
          <br>
          <button class="connection btn beerup-button" @click="login">Connect</button>
          <p class="sign-in-p">You don't have an account? You can
            <router-link to="/sign-up">create one in a minute!</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Well done! You are now connected.");
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
.login {
  margin-top: 8%;
}

.sign-in-header {
  padding-bottom: 10px;
}

.sign-in-input {
  margin: 10px 0;
  width: 80%;
  padding: 15px;
}

.connection {
  margin-top: 10px;
}

.sign-in-p {
  margin-top: 40px;
  color: #fff;
  font-size: 13px;
}

.sign-in-p a {
  text-decoration: underline;
  cursor: pointer;
}

.sign-in-p a:hover {
  color: #ffc80a;
}
</style>
