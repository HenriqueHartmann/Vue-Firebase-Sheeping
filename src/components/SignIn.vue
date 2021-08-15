<template>
  <div>
    <h2 class="text-center">Login</h2>
    <form id="form">
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
          <button
            v-if="!loadingAuth"
            @click.prevent="authentication"
            class="btn btn-success"
          >
            Login
          </button>
          <button v-else class="btn btn-success" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
        <div>
          <p id="changeState" @click="changeState(false)">
            Não tem uma conta. Clique aqui!
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
  name: "SignIn",
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
