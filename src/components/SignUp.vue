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
          <button @click.prevent="createAccount" class="btn btn-success">
            Criar
          </button>
        </div>
        <div>
          <p id="changeState" @click="changeState(true)">
            Já possui uma conta. Clique aqui!
          </p>
        </div>
      </div>
    </form>
    <div
      v-if="errorAuth"
      class="alert alert-danger alert-dismissible"
      role="alert"
      id="liveAlert"
    >
      <strong>Alguma coisa deu errado. Tente de novo!</strong>
      <button
        @click.prevent="errorAuth = !errorAuth"
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
import FButils from "@/mixins/firebaseUtils.js";

export default {
  name: "SignUp",
  mixins: [FButils],
};
</script>

<style>
#form {
  margin-bottom: 5em;
}

#changeState:hover {
  color: gray;
  cursor: pointer;
}

.alert {
  margin-left: 10em;
  margin-right: 10em;
}
</style>
