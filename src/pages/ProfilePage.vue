<template>
  <div class="container">
      <form class="mt-5">
          <label for="fName" class="form-label">Name</label>
          <div class="inpuy-group mb-3">
              <input v-model="user.name" id="fName" class="form-control" type="text">
          </div>
          <div>
              <button @click.prevent="updateProfile" class="btn btn-success">Salvar</button>
          </div>
      </form>
  </div>
</template>

<script>
import FButils from "@/mixins/firebaseUtils.js";

export default {
    name: "Profile",
    mixins: [FButils],
    created: function() {
        this.getProfile();
    },
}
</script>

<style>
</style>
