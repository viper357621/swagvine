<script setup>
import { ref, onMounted } from "vue";
import useAuthUser from "../../composables/UseAuthUser";
import { useRouter } from "vue-router";
import { useUserStore } from "../../store/useUserStore";
// Use necessary composables
const router = useRouter();
const { updateProfile } = useAuthUser();
const user = useUserStore();

// keep up with form data

// website: "",
//   firstName: "",
//   lastName: "",
//   username: "",
const website = ref("");
const firstName = ref("");
const lastName = ref("");
const username = ref("");
// call the proper login method from the AuthUser composable
// on the submit of the forms
// const handleLogin = async (provider) => {
//   try {
//     provider
//       ? await loginWithSocialProvider(provider)
//       : await login(form.value);
//     router.push({ name: "Me" });
//   } catch (error) {
//     alert(error.message);
//   }
// };

const handleUpdate = async () => {
  const form = {
    website: website.value,
    firstName: firstName.value,
    lastName: lastName.value,
    username: username.value,
    avatar_url: website.value,
  };
  console.log(form);
  try {
    useAuthUser().updateProfile(form);
    //router.push({ name: "Me" });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div class="container bootstrap snippets bootdey">
    <h1 class="text-primary">Edit Profile</h1>
    <hr />
    <div class="row">
      <!-- left column -->
      <div class="col-md-3">
        <div class="text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            class="avatar img-circle img-thumbnail"
            alt="avatar"
          />
          <h6>Upload a different photo...</h6>

          <input type="file" class="form-control" />
        </div>
      </div>

      <!-- edit form column -->
      <div class="col-md-9 personal-info">
        <!-- <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a>
          <i class="fa fa-coffee"></i>
          This is an <strong>.alert</strong>. Use this to show important
          messages to the user.
        </div> -->
        <h3>Personal info</h3>

        <div class="form-group">
          <label class="col-lg-3 control-label"
            >First name:{{ firstName }}</label
          >
          <div class="col-lg-8">
            <input class="form-control" type="text" v-model="firstName" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-lg-3 control-label">Last name:</label>
          <div class="col-lg-8">
            <input class="form-control" type="text" v-model="lastName" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-lg-3 control-label">Username:</label>
          <div class="col-lg-8">
            <input class="form-control" type="text" v-model="username" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-lg-3 control-label">Website:</label>
          <div class="col-lg-8">
            <input class="form-control" type="text" v-model="website" />
          </div>
        </div>
        <button class="btn btn-primary my-3" @click="handleUpdate">
          Submit
        </button>
      </div>
    </div>
  </div>
  <hr />
</template>

<style>
body {
  margin-top: 20px;
}
.avatar {
  width: 200px;
  height: 200px;
}
</style>
