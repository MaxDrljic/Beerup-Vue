<template>
  <div class="login">
    <h3>Sign in</h3>
    <input class="sign-in-input" type="text" v-model="email" placeholder="Email">
    <br>
    <input class="sign-in-input" type="password" v-model="password" placeholder="Password">
    <br>
    <button class="connection" @click="login">Connection</button>
    <p class="sign-in-p">You don't have an account? You can
      <router-link to="/sign-up">create one in a minute!</router-link>
    </p>
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
          function(user) {
            alert("Well done! You are now connected.");
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
.login {
  margin-top: 40px;
}

.sign-in-input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

.connection {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
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
</style>
