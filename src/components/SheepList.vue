<template>
    <div>
        <div v-if="sheeps.length == 0">
          <p>Nenhuma Ovelha Cadastrada</p>
        </div>
        <div v-else class="table-wrapper-scroll-y my-custom-scrollbar">
          <table id="itemTable" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>N°</th>
                <th>Raça</th>
                <th>Cor</th>
                <th>Sexo</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              <tr v-for="(s, index) in sheeps" :key="index">
                <th>{{ s.number }}</th>
                <th>{{ s.breed }}</th>
                <th>{{ s.color }}</th>
                <th>{{ s.sex }}</th>
                <th>
                  <button @click.prevent="delSheep(index)" class="btn btn-danger">Delete</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SheepList',
        props: {
            sheeps: Array
        },
        methods: {
            delSheep(index) {
                this.sheeps.splice(index, 1);
            }
        }
    }
</script>

<style>
  p {
    text-align: center;
  }

  .my-custom-scrollbar {
    position: relative;
    height: 16em;
    overflow: auto;
  }

  .table-wrapper-scroll-y {
    display: block;
  }

  #tableBody tr th {
    vertical-align: middle;
    text-align: center;
  }
</style>
