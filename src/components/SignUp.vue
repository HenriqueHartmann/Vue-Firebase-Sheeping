<template>
  <div>
    <h2 class="text-center">Cadastre-se</h2>
    <form id="form">
      <label for="fName" class="form-label">Name</label>
      <div id="formName" class="input-group mb-3">
        <input
          id="fName"
          class="form-control"
          v-model="user.name"
          type="text"
        />
      </div>
      <label for="fEmail" class="form-label">Email</label>
      <div id="formEmail" class="input-group mb-3">
        <input
          id="fEmail"
          class="form-control"
          v-model="user.email"
          type="email"
        />
      </div>
      <label for="fPass" class="form-label">Password</label>
      <div id="formPass" class="input-group mb-3">
        <input
          id="fPass"
          class="form-control"
          v-model="user.password"
          type="password"
        />
      </div>
      <div class="d-flex justify-content-between">
        <div id="formButton">
          <button @click.prevent="create" class="btn btn-success">Criar</button>
        </div>
        <div>
          <p id="redirect" @click="changeTo">
            Já possui uma conta. Clique aqui!
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FButils from "@/mixins/firebaseUtils.js";

export default {
  name: "SignUp",
  mixins: [FButils],
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    changeTo() {
      this.$emit("changeType", true);
    },
    create() {
      this.createAccount().then(() => {
        this.changeTo();
      });
    },
  },
};
</script>

<style>
#redirect:hover {
  color: gray;
  cursor: pointer;
}
</style>
