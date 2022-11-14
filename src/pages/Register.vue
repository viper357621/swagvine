<script setup>
import { ref } from "vue";
import useAuthUser from "../composables/UseAuthUser";
import { useRouter } from "vue-router";

// Use necessary composables
const router = useRouter();
const { register, loginWithGoogle } = useAuthUser();

// Form reactive ref to keep up with the form data
// const form = ref({
//   username: "",
//   email: "",
//   password: "",
// });

const username = ref("");
const email = ref("");
const password = ref("");

// function to hand the form submit
const handleSubmit = async () => {
  //console.log(form.value);
  try {
    // use the register method from the AuthUser composable
    var resData = await register({
      email: email.value,
      password: password.value,
    });

    if (resData.error) {
      if (
        resData.error ==
        "AuthApiError: Password should be at least 6 characters"
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password should be at least 6 characters",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: " Invalid  credentials Input",
        });
      }
    } else {
      router.push({ name: "EmailConfirmation", query: { email: email.value } });
    }
  } catch (error) {
    console.log(error);
  }
};

const handleLoginGoogle = async (provider) => {
  try {
    loginWithGoogle();
    //router.push({ name: "Me" });
  } catch (error) {
    alert(error.message);
  }
};
</script>
<template>
  <div class="container" style="background-color: black">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="card login-content shadow-lg border-0">
          <div class="card-body">
            <div class="text-center">
              <img
                src="https://i.ibb.co/M8w4j87/swagvine-logo.png"
                width="300"
              />
              <h3 class="text-logo">Register</h3>
            </div>
            <br />
            <form class="text-center">
              <input
                class="form-control border-0"
                v-model="username"
                name="username"
                placeholder="Type Your Username"
                required
              />
              <br />
              <input
                class="form-control border-0"
                v-model="email"
                name="email"
                placeholder="Type Your Email"
                required
              />
              <br />
              <input
                class="form-control border-0"
                v-model="password"
                name="password"
                type="password"
                placeholder="Type Your Password"
                required
              />
              <br />
              <button
                class="btn btn-primary btn-sm border-0"
                type="button"
                @click="handleSubmit()"
              >
                Register
              </button>
              <br />
              or
              <br />
              <div class="g-sign-in-button" @click="handleLoginGoogle" style="background-color:white; color:black">
                <div class="content-wrapper">
                  <div class="logo-wrapper">
                    <img
                      src="https://developers.google.com/identity/images/g-logo.png"
                    />
                  </div>
                  <span class="text-container">
                    <span>Sign Up with Google</span>
                  </span>
                </div>
              </div>

              <p class="forgot"><a href="">Forgot Password?</a></p>
            </form>
          </div>
          <div class="nomember">
            <p class="text-center">
              Do you have an Account?
              <router-link to="/login">Login Here</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
}

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

.fullscreen-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(
    53deg,
    rgba(25, 191, 203, 1) 6%,
    rgba(188, 81, 218, 1) 61%
  );
}

.login-container {
  width: 50%;
  max-width: 400px;
  min-width: 300px;
  padding: 50px 25px 20px;
  background: white;
  border-radius: 10px;
}

.header {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.8rem;
}

.input-group input {
  font-size: 0.9rem;
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 2px solid hsl(0, 0%, 83%);
}

.input-group input:focus {
  box-shadow: 0 0 0 1px hsl(178, 100%, 50%);
  border-bottom: 2px solid hsl(0, 0%, 83%, 0%);
}

.button {
  margin: 20px 0;
  padding: 10px 0;
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  background: linear-gradient(
    53deg,
    rgba(25, 191, 203, 1) 6%,
    rgba(188, 81, 218, 1) 73%
  );
  color: white;
  font-size: 1rem;
}

.button:focus {
  box-shadow: 0 0 0 1px hsl(178, 100%, 50%);
}

.signup-header {
  text-align: center;
  font-weight: 200;
  font-size: 0.9rem;
  margin-top: 75px;
}

.social-icons {
  margin-top: 20px;
}

.social-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-links {
  text-decoration: none;
}

.fa-brands {
  font-size: 1.75rem;
}

.fa-facebook {
  border-radius: 50%;
  background: white;
  color: #435892;
}

.fa-twitter {
  border-radius: 50%;
  padding: px;
  color: #4aa0e8;
  background-color: white;
}

.fa-google {
  color: #d64e44;
}
</style> -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

#body {
  background-color: #0278ae;
  font-family: "Lato", sans-serif;
}

.login-content {
  max-width: 450px;
  width: 100%;
  height: 550px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -286px;
  border-radius: 8px;
}

.logo {
  width: 128px;
  height: 128px;
  margin: 5px;
}

.text-logo {
  text-align: center;
  font-weight: bold;
  font-size: 32px;
}

.form-control {
  width: 18rem;
  height: 3rem;
  left: 65px;
  position: relative;
  border-radius: 5px;
  background-color: rgba(239, 237, 253, 255);
}

.btn {
  font-size: 22px;
  background: linear-gradient(
    53deg,
    rgba(25, 191, 203, 1) 6%,
    rgba(188, 81, 218, 1) 73%
  );
  border: none;
  width: 18rem;
  height: 3rem;
  border-radius: 5px;
}

.btn:hover {
  background-color: blue;
}

.nomember {
  background-color: #e4dede;
  padding: 10px;
  padding-top: 20px;
  border-radius: 0px 0px 5px 5px;
}

.nomember a {
  text-decoration: none;
}

.forgot {
  position: relative;
  right: -20%;
}

.forgot a {
  text-decoration: none;
  font-size: 14px;
  color: rgba(239, 237, 253, 255);
}

.copyright {
  color: white;
  padding: 15px;
}

/*support google chrome*/
/* .form-control::-webkit-input-placeholder {
  color: #00000036;
} */

/*support mozilla*/
.form-control:-moz-input-placeholder {
  color: red;
}

/*support internet explorer*/
.form-control:-ms-input-placeholder {
  color: red;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
.g-sign-in-button {
  margin: 10px;
  display: inline-block;
  width: 240px;
  height: 50px;
  background-color: #4285f4;
  color: #fff;
  border-radius: 1px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
}
.g-sign-in-button:hover {
  cursor: pointer;
  -webkit-box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
  box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
}
.g-sign-in-button:active {
  background-color: #3367d6;
  transition: background-color 0.2s;
}
.g-sign-in-button .content-wrapper {
  height: 100%;
  width: 100%;
  border: 1px solid transparent;
}
.g-sign-in-button img {
  width: 18px;
  height: 18px;
}
.g-sign-in-button .logo-wrapper {
  padding: 15px;
  background: #fff;
  width: 48px;
  height: 100%;
  border-radius: 1px;
  display: inline-block;
}
.g-sign-in-button .text-container {
  font-family: Roboto, arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0.21px;
  font-size: 16px;
  line-height: 48px;
  vertical-align: top;
  border: none;
  display: inline-block;
  text-align: center;
  width: 180px;
}
</style>
