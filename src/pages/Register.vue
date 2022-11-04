
<script setup>
import { ref } from "vue";
import useAuthUser from "../composables/UseAuthUser";
import { useRouter } from "vue-router";

// Use necessary composables
const router = useRouter();
const { register } = useAuthUser();

// Form reactive ref to keep up with the form data
const form = ref({
  name: "",
  email: "",
  password: "",
});

// function to hand the form submit
const handleSubmit = async () => {
  try {

        // use the register method from the AuthUser composable
    await register(form.value);

        // and redirect to a EmailConfirmation page the will instruct
        // the user to confirm they're email address
    router.push({
      name: "EmailConfirmation",
      query: { email: form.value.email },
    });
  } catch (error) {
    alert(error.message);
  }
};
</script>
<template>
  
<body>
  <div class="fullscreen-container">
    <div class="login-container">
      <h1 class="header">Register</h1>
      <form class="form" @submit.prevent="handleSubmit()">
        <div class="input-group">
          <label for="username">Username</label>
          <input  v-model="form.name" type="text" id="username" name="username" placeholder="Type your username">
        </div>
        <div class="input-group">
          <label for="username">Email</label>
          <input  v-model="form.email" type="email" id="username" name="username" placeholder="Type your username">
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input v-model="form.password"  type="password" id="password" name="password" placeholder="Type your password">
        </div>
        <button class="button">Login</button>
      </form>
      
      <h3 class="signup-header">Or Sign In here</h3> 
      
      <div class="social-icons">
        <ul class="social-list">
         
          <router-link to="/login" style="  text-decoration: underline; background-color: transparent;">Log In</router-link>
        </ul>
      </div>  
      
    </div>
  </div>
</body>
  <!-- <form class="max-w-lg m-auto" @submit.prevent="handleSubmit">
    <h1 class="text-3xl mb-5">Register</h1>
    <label>Name <input v-model="form.name" type="text" /></label>
    <label>Email <input v-model="form.email" type="email" /></label>
    <label>Password <input v-model="form.password" type="password" /></label>
    <button>Register</button>
  </form> -->
</template>



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
  background: linear-gradient(53deg, rgba(25,191,203,1) 6%, rgba(188,81,218,1) 61%);

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
  font-size: .8rem;
}

.input-group input {
  font-size: .9rem;
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
  background: linear-gradient(53deg, rgba(25,191,203,1) 6%, rgba(188,81,218,1) 73%);
  color: white;
  font-size: 1rem;
}

.button:focus {
  box-shadow: 0 0 0 1px hsl(178, 100%, 50%);
}

.signup-header {
  text-align: center;
  font-weight: 200;
  font-size: .9rem;
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
  color: #4AA0E8;
  background-color: white;
}

.fa-google {
  color: #D64E44;
}






</style>