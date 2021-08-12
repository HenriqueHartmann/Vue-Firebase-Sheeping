<template>
    <div>
        <form id="form">
          <label for="fNumber" class="form-label">Número da Ovelha</label>
          <div id="formNumber" class="input-group mb-3">
            <input id="fNumber" class="form-control" v-model="sheep.number" type="number" min="1" max="999"/>
          </div>
          <label for="fBreed" class="form-label">Raça da Ovelha</label>
          <div id="formBreed" class="input-group mb-3">
            <select id="fBreed" class="form-select" v-model="sheep.breed">
              <option v-for="(breed, index) in breeds" :key="index">{{ breed }}</option>
            </select>
          </div>
          <label for="fColor" class="form-label">Cor da Ovelha</label>
          <div id="formColor" class="input-group mb-3">
            <select id="fColor" class="form-select" v-model="sheep.color">
              <option v-for="(color, index) in colors" :key="index">{{ color }}</option>
            </select>
          </div>
          <label for="fSex" class="form-label">Sexo da Ovelha</label>
          <div id="formSex" class="input-group mb-3">
              <div id="fSex">
                <div class="form-check">
                <input v-model="sheep.sex" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="M" checked />
                <label class="form-check-label" for="flexRadioDefault1">
                    Macho
                </label>
                </div>
                <div class="form-check">
                <input v-model="sheep.sex" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="F" />
                <label class="form-check-label" for="flexRadioDefault2">
                    Fêmea
                </label>
                </div>
              </div>
          </div>
          <div id="formButton">
            <button @click.prevent="addSheep" class="btn btn-success">Cadastrar</button>
          </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'SheepForm',
        props: {
            sheeps: Array
        },
        data() {
            return {
                sheep: {
                number: "",
                breed: "",
                color: "",
                sex: "M"
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
                ]
            }
        },
        methods: {
            addSheep() {
                if (this.sheep.number < 1 || this.sheep.number > 999) {
                    alert("O Número deve ser estar entre 0 e 1000. Tente de novo!!!");
                }
                else if (this.sheep.color === "") {
                    alert("Uma Cor precisa ser definido. Tente de novo!!!"); 
                }
                else {
                    if (this.sheep.breed === "") {
                        this.sheep.breed = "S.R.D.";
                    }

                    this.sheeps.push({
                        number: this.sheep.number,
                        breed: this.sheep.breed,
                        color: this.sheep.color,
                        sex: this.sheep.sex,
                    });
                }

                this.sheep.number = "";
                this.sheep.breed = ""; 
                this.sheep.color = "";
                this.sheep.sex = "M";
            },
        }
    }
</script>

<style>
    form {
        margin: 10em;
        margin-top: 0px
    }

    .form-check-label {
        margin-left: 0.5em;
    }
</style>
