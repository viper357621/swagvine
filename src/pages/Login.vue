<script setup>
import { ref, onMounted } from "vue";
import useAuthUser from "../composables/UseAuthUser";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/useUserStore";
// Use necessary composables
const router = useRouter();
const { login, loginWithSocialProvider, loginWithGoogle, findUserLogin } =
  useAuthUser();
const user = useUserStore();

// keep up with form data
const email = ref("");
const password = ref("");

// call the proper login method from the AuthUser composable
// on the submit of the forms
const handleLogin = async (provider) => {
  try {
    var resData = await login({ email: email.value, password: password.value });

    console.log(resData.error);
    if (resData.error) {
      if (resData.error == "AuthApiError: Invalid login credentials") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid login credentials",
        });
      } else if (resData.error == "AuthApiError: Email not confirmed") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: " Email not confirmed",
        });
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are now Login",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push({ name: "Me" });
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
            </div>
            <h3 class="text-logo">Sign In</h3>
            <br />
            <form class="text-center" @submit.prevent="handleLogin()">
              <input
                class="form-control border-0"
                v-model="email"
                placeholder="Type Your Email"
                required
              />
              <br />
              <input
                class="form-control border-0"
                v-model="password"
                placeholder="Type Your Password"
                required
              />
              <br />
              <button class="btn btn-primary btn-sm border-0" type="submit">
                Login
              </button>
              <br />
              or
              <br />
              <div class="g-sign-in-button" @click="handleLoginGoogle">
                <div class="content-wrapper">
                  <div class="logo-wrapper">
                    <img
                      src="https://developers.google.com/identity/images/g-logo.png"
                    />
                  </div>
                  <span class="text-container">
                    <span>Sign in with Google</span>
                  </span>
                </div>
              </div>

              <p class="forgot"><a href="">Forgot Password?</a></p>
            </form>
          </div>
          <div class="nomember">
            <p class="text-center">
              Not a member?
              <router-link to="/register">Create an Account</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="max-w-lg m-auto">
    <h1>{{user.isLogin}}</h1>
    <form @submit.prevent="handleLogin()">
      <h1 class="text-3xl mb-5">Login</h1>
      <label>Email <input v-model="form.email" type="email" /></label>
      <label>Password <input v-model="form.password" type="password" /></label>
      <button>Login</button>
      <router-link to="/forgotPassword">Forgot Password?</router-link>
    </form>
    <div class="mt-5">
      <a @click.prevent="handleLogin('github')">Github</a>
    </div>
  </div> -->
</template>

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
