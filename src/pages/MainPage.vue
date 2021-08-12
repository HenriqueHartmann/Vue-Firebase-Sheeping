<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div id="container" class="container-fluid">
    <div id="title" class="text-center mt-3">
      <h3>{{ title }}</h3>
    </div>
    <section id="flexSection" class="d-flex justify-content-evenly mt-5">
      <div id="leftPart" class="item">
        <sheep-form :sheeps="sheeps" />
      </div>
      <div id="right-part" class="item">
        <sheep-list :sheeps="sheeps" />
      </div>
    </section>
  </div>
</template>

<script>
import SheepForm from "@/components/SheepForm.vue";
import SheepList from "@/components/SheepList.vue";

export default {
  name: "MainPage",
  mixins: [],
  components: {
    SheepForm,
    SheepList,
  },
  data() {
    return {
      title: "Adicionar Ovelhas",
      sheeps: [],
    };
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
