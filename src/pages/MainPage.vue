<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div id="container" class="container-fluid">
    <div id="title" class="text-center mt-3">
      <h3>{{ title }}</h3>
    </div>
    <section id="flexSection" class="d-flex justify-content-evenly mt-5">
      <div id="leftPart" class="item">
        <sheep-form @updateList="updateSheepList()" />
      </div>
      <div id="right-part" class="item">
        <sheep-list ref="sheepList" />
      </div>
    </section>
  </div>
</template>

<script>
import SheepForm from "@/components/SheepForm.vue";
import SheepList from "@/components/SheepList.vue";

export default {
  name: "MainPage",
  components: {
    SheepForm,
    SheepList,
  },
  data() {
    return {
      title: "Adicionar Ovelhas",
    };
  },
  methods: {
    updateSheepList() {
      this.$refs.sheepList.getSheeps();
    },
  },
};
</script>

<style>
#container {
  width: 100%;
}

#leftPart {
  width: 52em;
  max-width: 52em;
}

#rightPart {
  width: 52em;
  max-width: 52em;
}
</style>
