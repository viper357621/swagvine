<script setup>
import { ref } from "vue";
import useAuthUser from "../composables/UseAuthUser";
import { useRouter } from "vue-router";
import { useUserStore } from '../store/useUserStore'
// Use necessary composables
const router = useRouter();
const { login, loginWithSocialProvider } = useAuthUser();
const user = useUserStore();

// keep up with form data
const form = ref({
  email: "",
  password: "",
});
// call the proper login method from the AuthUser composable
// on the submit of the form
const handleLogin = async (provider) => {
  try {
    provider
      ? await loginWithSocialProvider(provider)
      : await login(form.value);
    router.push({ name: "Me" });
  } catch (error) {
    alert(error.message);
  }
};
</script>
<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css" integrity="sha512-RvQxwf+3zJuNwl4e0sZjQeX7kUa3o82bDETpgVCH2RiwYSZVDdFJ7N/woNigN/ldyOOoKw8584jM4plQdt8bhA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
<body>  
    
   <div class="fullscreen-container">
    <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" style="border-bottom:solid 10px;border-color:purple;">
      <div class="container">
        <a href="../" class="navbar-brand">SwagVine</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
           
          </ul>
          <ul class="navbar-nav ms-md-auto">
            <li class="nav-item">
              <a target="_blank" rel="noopener" class="nav-link" href="https://github.com/thomaspark/bootswatch/"><i class="bi bi-github"></i> How it Works</a>
            </li>
            <li class="nav-item">
              <a target="_blank" rel="noopener" class="nav-link" href="https://twitter.com/bootswatch"><i class="bi bi-twitter"></i> Live Feed</a>
            </li>
            <li class="nav-item">
              <a target="_blank" rel="noopener" class="nav-link" href="https://twitter.com/bootswatch"><i class="bi bi-twitter"></i>Blog</a>
            </li>
              <li class="nav-item" >
                <button style="color:white;background:purple;">Login</button>
              </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="col6">
            <strong style="font-size:50px;">
              FREE GIFT CARDS
            </strong>
         </div>
      <div class="col4">
        <h4>Join for Free</h4>
        <br>
            <div class="form-group">
                <div class="row-ico-holder">
                    <i class="fas fa-at"></i>
                </div>
                  <input  v-model="form.email" class="textfield" type="text" id="username" name="username" placeholder="Email Address" autocomplete="off">
            </div>
            <br>
            <div class="form-group">
                <div class="row-ico-holder">
                    <i class="fas fas fa-lock"></i>
                </div>
                  <input  v-model="form.password" class="textfield" type="text" id="username" name="username" placeholder="Password" autocomplete="off">
            </div>
            <br>
                <div class="form-group">
                <div class="row-ico-holder">
                    <i class="fas fas fa-lock"></i>
                </div>
                  <input  v-model="form.cpassword" class="textfield" type="text" id="username" name="username" placeholder="Confirm Password" autocomplete="off">
            </div>
            <br>
            <div class="form-button-holder">
                <button type="submit" class="btn btn-primary btn-block button-form formSubmitBtn" style="width:100%;letter-spacing:.7px;font-size:16px;font-weight:900;">Sign Up Now</button>
            </div>
                <div class="row-for-alt-text">
                    or
                </div>

                      <div class="social-button-holder form-row-input" style="background-color:red;">
                    <a class="social-button social-fb btn btn-block btn-fb" href="">
               <span class="svg_icon facebook-ico">
                <i class="fab fa-google-plus-square" style="font-size:25px;"></i>
               </span>
               <span style="width:100%;letter-spacing:.7px;font-size:16px;font-weight:900;">Sign Up With Google</span></a>
       
                </div>
      </div>

    
   </div>


</body>

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

.row-for-alt-text{
    width: 100%;
    position: relative;
    text-align: center;
    color: #5a5d5e;
    font-family: open sans,sans-serif;
    font-size: 13px;
    font-weight: 400;
    margin: 0 0 15px;
    margin-top: 10px;
}

.btn.btn-fb{
    color: #fff;
    background-color: #4368B1;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
       width: 100%;
}

.row-ico-holder{
    position: absolute;
    margin-top: 1%;
    margin-left:1.5%;
    font-size: 20px;
}
.textfield{
box-shadow: inset 0 0 4px rgb(0 0 0 / 35%);
    border-radius: 5px;
    border: 1px solid #c0cacd;
    background-color: #fff;
    transition: border .3s,box-shadow .3s;
    color: #4a4a4a;
    font-family: open sans,sans-serif;
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    padding: 15px 15px 15px 60px;
}

.textfield:focus {
  background-color:none;
  border-block-color: white;
}


.fullscreen-container {
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(53deg, rgb(158, 212, 216) 6%, rgba(188,81,218,1) 61%);

}

.col6{
  /* max-width: 400px;
  min-width: 300px; */
  width: 58%;
  padding: 100px 55px 20px;
  /* background: rgba(247, 241, 241, 0.315); */
  color: white;
  border-radius: 10px;
  float: left;
  margin-right: 100px;
  margin-top: 10%;
}

.col4{
  width: 25%;
  padding: 30px 25px 20px;
  background: white;
  border-radius: 10px;
  margin-right:85px;
  margin-top: 10%;
  float: right;
  border:solid 10px;
  border-color: rgba(110, 73, 73, 0.185);
  border-radius: 12px 12px 12px 12px;
  -moz-border-radius: 12px 12px 12px 12px;
  -webkit-border-radius: 12px 12px 12px 12px;
  border: 0px solid #000000;
    
}
.login-container {
  width: 66.66666667%;
  max-width: 400px;
  min-width: 300px;
  padding: 30px 25px 20px;
  background: white;
  border-radius: 10px;
  margin-right: 100px;
  margin-top: 10%;

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