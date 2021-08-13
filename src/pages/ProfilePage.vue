<template>
  <div class="container">
      <form class="mt-5">
          <label for="fName" class="form-label">Name</label>
          <div class="inpuy-group mb-3">
              <input v-model="name" id="fName" class="form-control" type="text">
          </div>
          <div>
              <button class="btn btn-success">Salvar</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            name: "",
        }
    }
}
</script>

<style>
</style>
