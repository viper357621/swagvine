<script setup>
import useAuthUser from "../composables/UseAuthUser";
import { useRouter } from "vue-router";

const user = useAuthUser();
const router = useRouter();

function logOut() {
  user.logout();
  console.log("Logout");
  router.push({ name: "Login" });
}
</script>

<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />

  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />

  <body>
    <div class="wrapper">
      <div class="body-overlay"></div>

      <!-- Sidebar  -->
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>
            <img
              src="https://i.ibb.co/M8w4j87/swagvine-logo.png"
              style="min-width: 200px; min-height: 60px"
            />
          </h3>
        </div>
        <ul class="list-unstyled components">
          <li>
            <h5>Earn Points</h5>
            <hr />
          </li>

          <li class="active">
            <a href="#" class="dashboard"
              ><i class="material-icons">home</i><span>Home</span></a
            >
          </li>
          <li>
            <a href="#" class="dashboard"
              ><i class="material-icons">sticky_note_2</i><span>Survey</span></a
            >
          </li>
          <li>
            <a href="#" class="dashboard"
              ><i class="material-icons">slideshow</i><span>Watch</span></a
            >
          </li>
          <li>
            <a href="#" class="dashboard"
              ><i class="material-icons">sell</i><span>Offercs</span></a
            >
          </li>

          <li>
            <h5>Rewards</h5>
            <hr />
          </li>

          <li>
            <a href="#" class="dashboard"
              ><i class="material-icons">redeem</i
              ><span>Gift Card & Cash</span></a
            >
          </li>

          <li>
            <h5>My Account</h5>
            <hr />
          </li>

          <li>
            <a href="#" class="dashboard"><span>Inbox</span></a>
          </li>
          <li>
            <a href="#" class="dashboard"><span>Profile</span></a>
          </li>
          <li>
            <a href="#" class="dashboard"><span>About Me</span></a>
          </li>
          <li>
            <a href="#" class="dashboard"><span>Invite Friends</span></a>
          </li>
          <li>
            <a href="#" class="dashboard" @click="logOut"
              ><span>Log Out</span></a
            >
          </li>
        </ul>
      </nav>

      <!-- Page Content  -->
      <div id="content">
        <div class="top-navbar">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                class="d-xl-block d-lg-block d-md-mone d-none"
              >
                <span class="material-icons">arrow_back_ios</span>
              </button>

              <div style="width: 30%"></div>
              <button
                class="d-inline-block d-lg-none ml-auto more-button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="material-icons">more_vert</span>
              </button>

              <div
                class="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
                id="navbarSupportedContent"
              >
                <ul class="nav navbar-nav ml-auto">
                  <li class="dropdown nav-item active">
                    <a href="#" class="nav-link" data-toggle="dropdown">
                      <span class="material-icons">notifications</span>
                      <span class="notification">4</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#">You have 5 new messages</a>
                      </li>
                      <li>
                        <a href="#">You're now friend with Mike</a>
                      </li>
                      <li>
                        <a href="#">Wish Mary on her birthday!</a>
                      </li>
                      <li>
                        <a href="#">5 warnings in Server Console</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span class="material-icons">apps</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span class="material-icons">person</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span class="material-icons">settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="main-content">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col-md-3">
                  <div class="card card-01">
                    <img
                      class="card-img-top"
                      src="https://i.ibb.co/fN9TKDc/ss1.png"
                      alt="Card image cap"
                      width="120"
                      height="170"
                    />
                    <div class="card-body">
                      <span class="badge-box"><i class="fa fa-check"></i></span>
                      <h5 class="card-title">CPX Research</h5>
                      <p class="card-text">Earn up to $10/10,000 points</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="card card-01">
                    <img
                      class="card-img-top"
                      src="https://i.ibb.co/8sD4Fxf/ss2.png"
                      alt="Card image cap"
                      width="120"
                      height="170"
                    />
                    <div class="card-body">
                      <span class="badge-box"><i class="fa fa-check"></i></span>

                      <h5 class="card-title">CINT Wall</h5>
                      <p class="card-text">Earn up to $10/10,000 points</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="card card-01">
                    <img
                      class="card-img-top"
                      src="https://i.ibb.co/V3yk33d/ss3.png"
                      alt="Card image cap"
                      width="120"
                      height="170"
                    />
                    <div class="card-body">
                      <span class="badge-box"><i class="fa fa-check"></i></span>

                      <h5 class="card-title">PeanutLabs</h5>
                      <p class="card-text">Earn up to $10/10,000 points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

*,
::after,
::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  -webkit-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}
a:hover {
  text-decoration: none;
}

/*-----------------------------
	News Ticker
------------------------------*/
.acme-news-ticker {
  background: #fff;
  position: relative;
  height: 45px;
  border: 1px solid #1974d2;
  margin-top: 45px;
}
@media (min-width: 768px) {
  .acme-news-ticker {
    margin-top: 0;
  }
}
.acme-news-ticker-label {
  background: #1974d2;
  padding: 10px;
  width: auto;
  float: left;
  margin-right: 15px;
  line-height: normal;
  height: 100%;
  color: #fff;
}
@media (max-width: 575px) {
  .acme-news-ticker-label {
    position: absolute;
    top: -45px;
  }
}
.acme-news-ticker-box {
  height: 100%;
  padding-top: 10px;
  overflow: hidden;
}
@media (max-width: 575px) {
  .acme-news-ticker-box {
    padding-left: 10px;
    padding-right: 120px;
  }
}
.acme-news-ticker-box ul {
  width: 100%;
  list-style-type: none !important;
  padding: 0;
  margin: 0;
}
.acme-news-ticker-box ul li a {
  text-decoration: none;
}
.acme-news-ticker-controls {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
}
.acme-news-ticker-controls button {
  height: 100%;
  background: #f6f6f6;
  padding: 0;
  width: 40px;
  border-color: #eeeeee;
  border-style: solid;
  border-width: 0 0 0 1px;
  cursor: pointer;
  display: inline-block;
}
.acme-news-ticker-controls button:hover {
  background: #eeeeee;
}
.acme-news-ticker-controls button.acme-news-ticker-arrow {
  margin: 0;
  display: inline-block;
  position: relative;
}
.acme-news-ticker-controls button.acme-news-ticker-arrow:after {
  border-color: #999;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  content: "";
  display: inline-block;
  height: 8px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 8px;
}
.acme-news-ticker-controls button.acme-news-ticker-pause {
  position: relative;
  display: inline-block;
}
.acme-news-ticker-controls button.acme-news-ticker-pause:before {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  border-color: #999;
  border-style: solid;
  border-width: 0 2px 0;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.acme-news-ticker-controls.acme-news-ticker-horizontal-controls
  button.acme-news-ticker-prev:after {
  -webkit-transform: translate(-50%, -50%) rotate(135deg);
  -ms-transform: translate(-50%, -50%) rotate(135deg);
  transform: translate(-50%, -50%) rotate(135deg);
}
.acme-news-ticker-controls.acme-news-ticker-horizontal-controls
  button.acme-news-ticker-next:after {
  -webkit-transform: translate(-50%, -50%) rotate(315deg);
  -ms-transform: translate(-50%, -50%) rotate(315deg);
  transform: translate(-50%, -50%) rotate(315deg);
}
.acme-news-ticker-controls.acme-news-ticker-vertical-controls
  button.acme-news-ticker-prev:after {
  -webkit-transform: translate(-50%, -50%) rotate(225deg);
  -ms-transform: translate(-50%, -50%) rotate(225deg);
  transform: translate(-50%, -50%) rotate(225deg);
}
.acme-news-ticker-controls.acme-news-ticker-vertical-controls
  button.acme-news-ticker-next:after {
  -webkit-transform: translate(-50%, -50%) rotate(405deg);
  -ms-transform: translate(-50%, -50%) rotate(405deg);
  transform: translate(-50%, -50%) rotate(405deg);
}

body,
html {
  line-height: 1.8;
  font-family: "Roboto", sans-serif;
  color: #555e58;
  text-transform: capitalize;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-weight: 400;
  margin: 0px;
  padding: 0px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4 {
  font-weight: 400;
  line-height: 1.5em;
}

p {
  font-size: 15px;
  margin: 12px 0 0;
  line-height: 24px;
}

a {
  color: #333;
  font-weight: 400;
}

button:focus {
  box-shadow: none;
  outline: none;
  border: none;
}

button {
  cursor: pointer;
}

ul,
ol {
  padding: 0;
  margin: 0px;
  list-style: none;
}

a,
a:hover,
a:focus {
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
}

/*=======================================================
  material-icons  copy & paste form site google material-icons
  ==================================================*/

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),
    url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
    url(https://example.com/MaterialIcons-Regular.ttf) format("truetype");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}

/*=======================================================
  material-icons  copy & paste form site google material-icons
  ==================================================*/

.wrapper {
  position: relative;
  width: 100%;
  overflow: auto;
}

/* ---------------------------------------------------
    SIDEBAR STYLE start
----------------------------------------------------- */

#sidebar {
  position: fixed;
  height: 100vh !important;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  width: 260px;
  overflow: auto;
  transition: all 0.3s;
  background: #ffffff;
  box-shadow: 0 10px 10px -12px rgb(0 0 0 / 1%), 0 4px 10px 0px rgb(0 0 0 / 10%),
    0 8px 10px -5px rgb(0 0 0 / 10%);
}

#sidebar::-webkit-scrollbar {
  width: 5px;
  border-radius: 10px;
  background-color: #eee;
  display: none;
}
#sidebar::-webkit-scrollbar-thumbs {
  width: 5px;
  border-radius: 10px;
  background-color: #333;
  display: none;
}

#sidebar:hover::-webkit-scrollbar {
  display: block;
}
#sidebar:hover::-webkit-scrollbar-thumbs {
  display: block;
}

#sidebar .sidebar-header {
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
}

.sidebar-header h3 {
  color: #333;
  font-size: 17px;
  margin: 0px;
  text-transform: uppercase;
  transition: all 0.5s ease;
  font-weight: 600;
}

.sidebar-header h3 img {
  width: 45px;
  margin-right: 10px;
}

#sidebar ul li {
  padding: 2px 7px;
}

#sidebar ul li.active > a {
  color: #333;
  background-color: rgba(200, 200, 200, 0.2);
}

#sidebar ul li a:hover {
  color: #333;
  background-color: rgba(200, 200, 200, 0.2);
}

.dropdown-toggle::after {
  position: absolute;
  right: 10px;
  top: 23px;
}

#sidebar ul li.drodown {
  position: sticky;
}

#sidebar ul.components {
  padding: 20px 0;
}

#sidebar ul li a {
  padding: 10px;
  line-height: 30px;
  border-radius: 5px;
  font-size: 15px;
  position: relative;
  font-weight: 400;
  display: block;
}

#sidebar ul li a span {
  text-transform: capitalize;
  display: inline-block;
}

#sidebar ul li a i {
  position: relative;
  margin-right: 10px;
  top: 5px;
  color: #555555;
  margin-left: 10px;
}

/* ---------------------------------------------------
   sidebar end
----------------------------------------------------- */

/*=======================================================
   main-content navbar-design start
   ===============================================*/

#content {
  position: relative;
  transition: all 0.3s;
  background-color: #eeeeee;
}

.top-navbar {
  width: 100%;
  z-index: 9;
  position: relative;
}

.main-content {
  padding: 10px 20px 0px 20px;
  position: relative;
  width: 100%;
}

.navbar {
  background: linear-gradient(
    53deg,
    rgba(25, 191, 203, 1) 6%,
    rgba(188, 81, 218, 1) 61%
  );
  color: #ffffff;
}

.navbar-brand {
  color: #ffffff;
}

.navbar button {
  background-color: transparent;
  border: none;
}
.navbar button span {
  color: #fff;
}

#sidebarCollapse {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  margin-right: 20px;
  border: none;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.09);
}

#sidebarCollapse span {
  margin: 9px;
  padding: 0px;
}

.navbar-nav > li.active {
  color: #ffffff;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.08);
}

.navbar-nav > li > a {
  color: #ffffff;
}

.navbar .notification {
  position: absolute;
  top: 5px;
  right: 10px;
  display: block;
  font-size: 9px;
  border: 0px;
  font-size: 10px;
  background: #d9534f;
  min-width: 15px;
  text-align: center;
  padding: 1px 5px;
  height: 15px;
  border-radius: 2px;
  line-height: 14px;
}

.navbar-nav > li.show .dropdown-menu {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  visibility: visible;
}

.dropdown-menu li > a {
  font-size: 13px;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 2px;
  font-weight: 400;
  transition: all 150ms linear;
}

.navbar-nav > .active > a:focus {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.08);
}

.navbar-nav li a {
  position: relative;
  display: block;
  padding: 10px 15px !important;
}

/*=======================================================
   main-content navbar-design end
   ===============================================*/

/*=======================================================
   main-content navbar-design start
   ===============================================*/

/*=======================================================
   main-content inner design like card start
   ===============================================*/

.card {
  margin: 10px 0;
}

.card {
  border-radius: 0px !important;
}

.card {
  display: inline-block;
  position: relative;
  border: none !important;
  width: 100%;
  margin: 15px 0;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
}

.card-stats .card-header {
  float: left;
  text-align: center;
}

.card .card-header {
  padding: 15px 20px 0;
  z-index: 3;
  background-color: #fff !important;
  border-bottom: none;
}

.card .card-footer .stats .material-icons {
  position: relative;
  top: 4px;
  font-size: 16px;
}

.card-stats .card-header span {
  font-size: 36px;
  line-height: 56px;
  width: 56px;
  height: 56px;
}

.icon.icon-warning {
  color: #ff9800;
}

.icon.icon-rose {
  color: #e91e63;
}
.icon.icon-success {
  color: #4caf50;
}
.icon.icon-info {
  color: #00bcd4;
}
.card .card-footer {
  margin: 0 7px 0px;
  padding-top: 10px;
  background-color: #fff;
  border-top: 1px solid #eeeeee;
}

.text-info {
  color: #03a9f4 !important;
}

.card-stats .card-content {
  text-align: right;
  padding-top: 10px;
}

.card .card-content {
  padding: 15px 20px;
  position: relative;
}

.card .card-content .category {
  margin-bottom: 0;
}
.card .category:not([class*="text-"]) {
  color: #555555;
  font-size: 14px;
  font-weight: 400;
}

.card .card-title:not(.card-calendar .card-title) {
  margin-top: 0;
  margin-bottom: 5px;
}

.card-stats .card-title {
  margin: 0;
}

.card .card-footer .stats {
  line-height: 22px;
  color: #555555;
  font-size: 15px;
}

.card .card-footer div {
  display: inline-block;
}

.card .card-header-text h4 {
  margin-top: 0;
  margin-bottom: 3px;
  font-size: 19px;
  font-weight: 400;
  color: #222222;
  text-decoration: none;
}

.table > thead > tr > th {
  border-bottom-width: 1px;
  font-size: 16px;
  font-weight: 400;
}

.card .card-content {
  padding: 15px 20px;
  position: relative;
}

.streamline .sl-primary {
  border-left-color: #188ae2;
}

.streamline .sl-item {
  position: relative;
  padding-bottom: 12px;
  border-left: 1px solid #ccc;
}

.streamline .sl-item:before {
  content: "";
  position: absolute;
  left: -6px;
  top: 0;
  background-color: #ccc;
  width: 12px;
  height: 12px;
  border-radius: 100%;
}
.streamline .sl-primary:before,
.streamline .sl-primary:last-child:after {
  background-color: #188ae2;
}

.streamline .sl-danger:before,
.streamline .sl-danger:last-child:after {
  background-color: #ff5b5b;
}

.streamline .sl-success {
  border-left-color: #10c469;
}

.streamline .sl-success:before,
.streamline .sl-success:last-child:after {
  background-color: #10c469;
}

.streamline .sl-warning {
  border-left-color: #f9c851;
}

.streamline .sl-warning:before,
.streamline .sl-warning:last-child:after {
  background-color: #f9c851;
}

.streamline .sl-danger {
  border-left-color: #ff5b5b;
}
.streamline .sl-item .sl-content {
  margin-left: 24px;
}

.streamline .sl-item .text-muted {
  color: inherit;
  opacity: 0.6;
  font-size: 12px;
}

.streamline .sl-item p {
  font-size: 14px;
  color: #333;
}

/*=======================================================
   main-content inner design like card end
   ===============================================*/

/*=============================================
  footer design start
  =========================================*/

.footer {
  border-top: 1px solid #e7e7e7;
}

footer {
  padding: 10px 0;
  position: relative;
  width: 100%;
}

footer ul li {
  display: inline-block;
}

footer ul li a {
  color: inherit;
  padding: 15px;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 3px;
  text-decoration: none;
  position: relative;
  display: block;
}

footer .copyright {
  padding: 15px;
  font-size: 14px;
  margin: 0;
}

/*=============================================
  footer design end
  =========================================*/

#sidebar.show-nav,
.body-overlay.show-nav {
  transform: translatex(0%);
  opacity: 1;
  display: block;
  visibility: visible;
  z-index: 15;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media only screen and (min-width: 992px) {
  #sidebar.active {
    width: 80px;
    height: 100% !important;
    position: absolute !important;
    overflow: visible !important;
    top: 0 !important;
    z-index: 666;
    float: left !important;
    bottom: 0 !important;
  }

  #sidebar.active .sidebar-header h3 span {
    display: none;
    transition: all 0.5s ease;
  }

  #sidebar.active ul li a span {
    display: none;
    transition: all 0.5s ease;
  }

  #sidebar.active .dropdown-toggle::after {
    display: none;
    transition: all 0.5s ease;
  }

  #content {
    width: calc(100% - 260px);
    position: relative;
    float: right;
    transition: all 0.3s;
    background-color: #ffffff;
  }

  #content.active {
    width: calc(100% - 80px);
  }

  #sidebar.active .menu {
    position: absolute;
    left: 81px;
    background-color: white;
    width: 180px;
    height: auto;
    margin: 5px 0;
    top: 0;
    border: 1px solid #dcd9d9;
    z-index: 4;
  }
}

@media only screen and (min-width: 992px) {
  .dropdown-menu {
    border: 0;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
    transform: translate3d(0, -20px, 0);
    visibility: hidden;
    transition: all 150ms linear;
    display: block;
    min-width: 15rem;
    right: 0;
    left: auto;
    opacity: 0;
  }
}

/*===============small-screen overlay sidebar design media queries==============*/

@media only screen and (max-width: 992px) {
  #sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 10;
    width: 260px;
    transform: translatex(-100%);
    transition: all 150ms linear;
    box-shadow: none !important;
  }

  .body-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    transition: all 150ms linear;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
/*===============small-screen overlay sidebar design media queries==============*/

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
</style>
