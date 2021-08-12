<template>
  <div class="container container-fluid mt-5">
    <div class="text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        height="250"
        fill="currentColor"
        class="bi bi-rainbow"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 4.5a7 7 0 0 0-7 7 .5.5 0 0 1-1 0 8 8 0 1 1 16 0 .5.5 0 0 1-1 0 7 7 0 0 0-7-7zm0 2a5 5 0 0 0-5 5 .5.5 0 0 1-1 0 6 6 0 1 1 12 0 .5.5 0 0 1-1 0 5 5 0 0 0-5-5zm0 2a3 3 0 0 0-3 3 .5.5 0 0 1-1 0 4 4 0 1 1 8 0 .5.5 0 0 1-1 0 3 3 0 0 0-3-3zm0 2a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 4 0 .5.5 0 0 1-1 0 1 1 0 0 0-1-1z"
        />
      </svg>
    </div>
    <sign-in v-if="accountExists" @changeType="accountExists = $event" />
    <sign-up v-else @changeType="accountExists = $event" />
  </div>
</template>

<script>
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";

export default {
  name: "Auth",
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      accountExists: true,
    };
  },
};
</script>

<style></style>
