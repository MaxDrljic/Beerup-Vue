<template>
  <div id="app">
    <!-- HEADER
    =============================================-->
    <header class="site-header" role="banner">
      <!-- NAVBAR
      =============================================-->
      <nav class="navbar navbar-expand-sm navbar-dark sm-transparent">
        <div class="container">
          <div class="logo-container">
            <a class="navbar-brand symbol" href="/">
              <img src="symbol.svg" alt="Symbol">
            </a>
            <a class="navbar-brand logo" href="/">
              <img src="logo.svg" alt="Logo">
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i class="fas fa-bars"></i>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item px-3 active">
                <router-link class="nav-link" to="/">
                  <span class="nav-span">Home</span>
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item px-3">
                <router-link class="nav-link" to="/favorites">
                  <span class="nav-span">Favorites</span>
                </router-link>
              </li>
              <li class="nav-item ml-4 bordered-link">
                <router-link class="nav-link" to="/join">JOIN</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,900");

#app {
  font-family: "Montserrat", Helvetica, sans-serif;
  font-size: 16px;
  background: #000000 url("~/public/pattern.png") top right repeat;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.main-container {
  padding: 20px;
  width: 90%;
  height: auto;
  position: relative;
  left: 80px;
  right: 80px;
  z-index: 1;
  background-color: #ffffff;
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
  color: #ffc80a;
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

/* NAVIGATION */
.logo-container {
  margin-top: 10px;
  padding-right: 10px;
  display: inline-block;
  cursor: pointer;
}

.logo-container .logo {
  margin: -10px;
}

.nav-item {
  padding-top: 20px;
  font-weight: bold;
  letter-spacing: 0.2em;
  line-height: 14px;
  color: #fff;
  cursor: default;
}

.nav-link .nav-span,
.nav-link .nav-span:after,
.nav-link .nav-span:before {
  transition: all 0.2s;
}

.nav-link .nav-span:hover {
  padding-bottom: 5px;
  border-bottom: 3px solid #ffc80a;
}

.nav-link .nav-span.active {
  border-bottom: 3px solid #ffc80a;
}

.bordered-link {
  margin-top: 10px;
  height: 51px;
  width: 130px;
  border-radius: 34px;
  border: 3px solid #ffc80a;
  padding: 10px;
  text-align: center;
  line-height: 10px;
}
</style>
