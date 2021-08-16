<template>
  <div>
    <form id="form">
      <label for="fNumber" class="form-label">Número da Ovelha</label>
      <div id="formNumber" class="input-group mb-3">
        <input
          id="fNumber"
          class="form-control"
          v-model="sheep.number"
          type="number"
          min="1"
          max="999"
        />
      </div>
      <label for="fBreed" class="form-label">Raça da Ovelha</label>
      <div id="formBreed" class="input-group mb-3">
        <select id="fBreed" class="form-select" v-model="sheep.breed">
          <option v-for="(breed, index) in breeds" :key="index">{{
            breed
          }}</option>
        </select>
      </div>
      <label for="fColor" class="form-label">Cor da Ovelha</label>
      <div id="formColor" class="input-group mb-3">
        <select id="fColor" class="form-select" v-model="sheep.color">
          <option v-for="(color, index) in colors" :key="index">{{
            color
          }}</option>
        </select>
      </div>
      <label for="fSex" class="form-label">Sexo da Ovelha</label>
      <div id="formSex" class="input-group mb-3">
        <div id="fSex">
          <div class="form-check">
            <input
              v-model="sheep.sex"
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="M"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Macho
            </label>
          </div>
          <div class="form-check">
            <input
              v-model="sheep.sex"
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="F"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Fêmea
            </label>
          </div>
        </div>
      </div>
      <div id="formButton">
        <button @click.prevent="createSheep" class="btn btn-success">
          Cadastrar
        </button>
      </div>
    </form>
    <div
      v-if="errorSheep"
      class="alert alert-danger alert-dismissible"
      role="alert"
      id="liveAlert"
    >
      <strong>{{ errorMessage }}</strong>
      <button
        @click.prevent="closeError()"
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
  name: "SheepForm",
  mixins: [FButils],
  data() {
    return {
      sheep: {
        number: "",
        breed: "",
        color: "",
        sex: "M",
        uid: "",
      },
      breeds: [
        "Dorper",
        "Hampshire Down",
        "Lacaune",
        "Morada Nova",
        "Santa Inês",
        "Suffolk",
        "S.R.D.",
      ],
      colors: [
        "Preto",
        "Preto Malhado",
        "Branco",
        "Branco Mascarado",
        "Mouro",
        "Mouro Malhado",
        "Castanho",
      ],
      errorSheep: false,
      errorMessage: "",
    };
  },
  methods: {
    createSheep() {
      this.sheepExist(this.sheep.number).then(() => {
        if (this.sheep.number < 1 || this.sheep.number > 999) {
          // Erro de intervalo
          this.errorSheep = true;
          this.errorMessage =
            "O Número deve ser estar entre 0 e 1000. Tente de novo!!!";
          setTimeout(() => {
            this.closeError();
          }, 5000);
        } else if (this.sheepExistVar) {
          // Erro de número já existente
          this.errorSheep = true;
          this.errorMessage = "O Número informado já existe. Tente de novo!!!";
          setTimeout(() => {
            this.closeError();
          }, 5000);
        } else if (this.sheep.color === "") {
          // Erro de cor não selecionada
          this.errorSheep = true;
          this.errorMessage = "Uma Cor precisa ser definida. Tente de novo!!!";
          setTimeout(() => {
            this.closeError();
          }, 5000);
        } else {
          // Sem erros
          if (this.sheep.breed === "") {
            this.sheep.breed = "S.R.D.";
          }

          this.sheep.uid = this.getUID();
          this.addSheep(this.sheep);
          this.$emit("updateList");
        }

        this.sheep.number = "";
        this.sheep.breed = "";
        this.sheep.color = "";
        this.sheep.sex = "M";
        this.sheepExistVar = false;
      });
    },
    closeError() {
      this.errorSheep = false;
      this.errorMessage = "";
    },
  },
};
</script>

<style>
form {
  margin: 10em;
  margin-top: 0px;
}

.form-check-label {
  margin-left: 0.5em;
}
</style>
