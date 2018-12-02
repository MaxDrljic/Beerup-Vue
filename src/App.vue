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
                <router-link tag="span" class="nav-link" to="/">
                  <span class="nav-span">Home</span>
                </router-link>
              </li>
              <li class="nav-item px-3">
                <router-link tag="span" class="nav-link" to="/favorites">
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

    <!-- FOOTER
    =============================================-->
    <footer>
      <div class="container footer-container">
        <div class="row">
          <!-- LOGO -->
          <div class="col-xl-4 main-logo-container">
            <a class="symbol-footer" href="/">
              <img src="symbol-footer.svg" alt="Symbol">
            </a>
            <a class="logo" href="/">
              <img src="logo.svg" alt="Logo">
            </a>
          </div>
          <!-- FOOTER NAVBAR -->
          <div class="col-xl-4 col-md-2">
            <nav class="navbar footer-navbar navbar-expand-lg bg-transparent">
              <ul class="navbar-nav footer-links ml-auto">
                <li class="nav-item px-3 active">
                  <router-link tag="span" class="nav-link" to="/">
                    <span class="nav-span">HOME</span>
                  </router-link>
                </li>
                <li class="nav-item px-3">
                  <router-link tag="span" class="nav-link" to="/favorites">
                    <span class="nav-span">FAVORITES</span>
                  </router-link>
                </li>
                <li class="nav-item ml-4">
                  <router-link tag="span" class="nav-link join-link" to="/join">
                    <span class="nav-span join-span">JOIN</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>

          <!-- SOCIAL MEDIA ICONS -->
          <div class="col-xl-4 col-md-10 clearfix social-container">
            <a href="https://www.facebook.com" class="badge social facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" class="badge social twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/" class="badge social linkedin">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.pinterest.com/" class="badge social pinterest">
              <i class="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- COPYRIGHT -->
      <div class="container copyright-container">
        <p class="copyright-text text-center">&copy; 2018 All rights reserved.</p>
      </div>
    </footer>
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
  margin-top: -5rem;
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

.disabled {
  color: gray !important;
  pointer-events: none;
}

.disabledSpan {
  color: gray !important;
  pointer-events: none !important;
  border-bottom: 4px solid #f05638 !important;
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

.sort-header {
  font-size: 14px;
}

.sort-option {
  font-size: 12px;
  cursor: pointer;
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

.logo {
  padding-left: 4px;
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
  color: rgb(177, 174, 174);
  cursor: pointer;
}

.nav-link.router-link-active.router-link-exact-active {
  border-bottom: 3px solid #ffc80a;
}

.active,
span.nav-span {
  font-size: 12px;
}

.join-span.router-link-active.router-link-exact-active {
  border: none;
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

/* ===  HERO SECTION === */
.hero {
  margin-top: 95px;
}

.beerster {
  font-size: 14px;
  letter-spacing: 2.8px;
  line-height: 17px;
}

.heading-join,
.favourites-heading,
.joinup-heading {
  padding-top: 25px;
  font-size: 90px;
  line-height: 90px;
}

.beerup-button {
  margin-top: 35px;
  height: 48px;
  width: 172px;
  border-radius: 49.5px;
  background-color: #ffc80a;
  color: #292929;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2.4px;
  line-height: 14px;
}

/* ===  MAIN SECTION === */

.main-content {
  padding-top: 20px;
}

.beer-heading,
.crate-heading {
  margin-top: 2.5rem;
  color: #212121;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
}

.card-group {
  max-width: 25%;
  padding-top: 10px;
}

.card {
  width: 20%;
  height: 20%;
}

.card-img-top {
  width: 2.2vw;
  height: 17vh;
  object-fit: cover;
}

.beer-title {
  word-break: break-all;
  color: #292929;
  font-size: 0.8vw;
  font-weight: bold;
  line-height: 17px;
  text-transform: uppercase;
}

.card-text-container {
  word-break: keep-all;
}

.ibu-span,
.abv-span {
  color: #292929;
}

/* CRATE SECTION */

.crate-heading {
  padding: 1rem 0 0 85px;
}

.nav-item.crate-item a,
.crate-span {
  margin: 0;
  margin: 8px;
  padding: 0;
  padding-bottom: 25px;
  color: #3f4750 !important;
  font-size: 14px;
  letter-spacing: 2.8px;
  line-height: 17px;
}

.crate-tabs {
  margin-left: 30px;
}

.nav-link.crate-link {
  cursor: pointer;
}

.nav-link .crate-span,
.nav-link .crate-span:after,
.nav-link .crate-span:before {
  transition: all 0.2s;
}

.nav-link .crate-span:hover {
  padding-bottom: 5px;
  border-bottom: 4px solid #f05638;
}

.nav-link .crate-span.active {
  border-bottom: 4px solid #f05638;
}

.crate-instructions {
  font-family: "Open Sans";
  color: #3f4750;
  font-size: 12px;
  line-height: 32px;
}

.name-caption {
  color: #9fa3a7;
  font-family: "Open Sans";
  font-size: 12px;
  line-height: 32px;
}

.crate-text-container {
  padding: 0;
  margin: 0;
  margin: 20px 0 0 80px;
}

/* === FOOTER === */

footer {
  margin-top: 5%;
}

.footer-container {
  padding-bottom: 3%;
  border-bottom: 1px solid rgba(255, 200, 10, 0.32);
}

.symbol-footer {
  padding: 0 5px 5px 0;
}

.footer-navbar {
  padding: 0;
}

.footer-links li {
  margin: 0;
  padding: 0;
  letter-spacing: 2.4px;
}

/* SOCIAL MEDIA ICONS */
.badge.social {
  font-size: 1.2em;
  text-align: center;
  line-height: 42px;
  padding: 0 8%;
}

.badge.social i {
  float: right;
}

.social-container {
  padding-left: 13%;
}

.badge.social.facebook:hover {
  color: #3b5998;
}

.badge.social.twitter:hover {
  color: #55acee;
}

.badge.social.linkedin:hover {
  color: #0078b5;
}

.badge.social.pinterest:hover {
  color: #bd081b;
}

/* COPYRIGHT */

.copyright-container {
  margin-bottom: -5%;
  padding-top: 0.5%;
  padding-bottom: 3%;
}

.copyright-text {
  padding-top: 22px;
  color: #9fa3a7;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  line-height: 22px;
}

/* === BEER MODAL === */

.heart-outline {
  position: fixed;
  border: none;
  cursor: pointer;
  top: -8vh;
  text-decoration: none;
  color: darkgray;
  font-size: 2.6em;
}

.heart-outline:hover {
  text-decoration: none;
  color: rgba(255, 0, 0, 0.466);
}

.favorited {
  text-decoration: none;
  color: rgba(255, 0, 0, 0.466);
}

.modal-content {
  border: none;
}

.beer-modal-img {
  max-width: 50%;
  max-height: 50%;
}

.crate-modal-img {
  width: 50%;
  height: 80%;
}

.beer-modal-container {
  margin-left: -6%;
}

.beer-modal-header {
  text-transform: uppercase;
  margin-bottom: -3px;
  color: #212121;
  font-size: 36px;
  line-height: 36px;
}

.ibu,
.abv {
  color: #9fa3a7;
  font-family: "Open Sans";
  font-size: 14px;
  line-height: 26px;
}

.ibu-span,
.abv-span {
  padding-left: 5px;
  color: #3f4750;
  font-size: 14px;
  font-weight: bold;
  line-height: 26px;
}

.fav-ibu,
.fav-abv {
  word-break: keep-all;
}

p.beer-modal-paragraph {
  color: #111;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 26px;
}

.add-to-crate {
  margin-right: -35%;
}

/* CAP IMAGES */
.cap-top {
  position: relative;
  top: -35px;
  left: 255px;
}

.cap-bottom {
  position: absolute;
  bottom: -1.8rem;
  left: 50%;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
