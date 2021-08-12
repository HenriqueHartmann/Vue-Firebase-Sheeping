import * as fb from "@/plugins/firebase";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errorAuth: false,
      alreadyExists: false,
    };
  },
  methods: {
    async authentication() {
      try {
        await fb.auth
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            this.$router.push({ name: "main" });
          });
      } catch (error) {
        this.errorAuth = true;

        /*const errorCode = error.code;
        switch (errorCode) {
          case "auth/wrong-password":
            this.errorAuth = true;
            break;
          case "auth/invalid-email":
            this.errorAuth = true;
            break;
          case "auth/user-not-found":
            this.errorAuth = true;
            break;
          default:
            this.errorAuth = true;
            break;
        }*/
      }
    },
    async createAccount() {
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
    },
    signOut() {
      fb.auth.signOut().then(() => {
        this.$router.push({ name: "auth" });
      });
    },
  },
};
