<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "app",
  components: {
    Main
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,900");

#app {
  font-family: "Montserrat", Helvetica, sans-serif;
  font-size: 16px;
  background: #000000 url("/assets/img/pattern.png") top right repeat;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  color: #ffffff;
}

a {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Overwrites Bootstrap default behavior */
a.nav-link {
  color: white !important;
}

span {
  color: #fff;
}

input[type="text"],
input[type="email"],
input[type="number"] {
  color: #292929;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 19px;
}

/* MODAL CLOSE */
.close {
  color: #FFC80A;
  font-size: 3rem;
  position: relative;
  top: 3.7vh;
  padding-right: 2vw;
}

/* RADIO INPUT */
.styled-radio {
  position: absolute;
  opacity: 0;
}

.styled-radio + label {
  position: relative;
  cursor: pointer;
  padding: 0;
}

.styled-radio + label:before {
  content: "";
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  width: 20px;
  height: 20px;
  background: white;
}

.styled-radio:hover + label:before {
  border: 2px solid #9fa3a7;
  border-radius: 50%;
}

.styled-radio:focus + label:before {
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
}

.styled-radio:checked + label:before {
  padding: 2px;
  background: #ffc80a;
  border: 2px solid #9fa3a7;
  background-clip: content-box;
  border-radius: 50%;
}

.styled-radio:checked + label:after {
  content: "";
  position: absolute;
  left: 4px;
  top: 8px;
  background: #ffc80a;
  width: 4px;
  height: 5px;
}

/* CHECKBOX INPUT */
.styled-checkbox {
  position: absolute;
  opacity: 0;
}

.styled-checkbox + label {
  position: relative;
  cursor: pointer;
  padding: 0;
}

.styled-checkbox + label:before {
  content: "";
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  width: 20px;
  height: 20px;
  background: white;
}

.styled-checkbox:hover + label:before {
  border: 2px solid #9fa3a7;
}

.styled-checkbox:focus + label:before {
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
}

.styled-checkbox:checked + label:before {
  border: 2px solid #9fa3a7;
}

.styled-checkbox:checked + label:after {
  content: "";
  position: absolute;
  left: 4px;
  top: 8px;
  background: #ffc80a;
  width: 4px;
  height: 5px;
  box-shadow: 2px 0 0 #ffc80a, 4px 0 0 #ffc80a, 4px -2px 0 #ffc80a,
    4px -4px 0 #ffc80a, 4px -6px 0 #ffc80a, 4px -8px 0 #ffc80a;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
