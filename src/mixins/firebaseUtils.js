import * as fb from "@/plugins/firebase";

export default {
  data() {
    return {
      user: {
        id: "",
        email: "",
        password: "",
        name: "",
      },
      errorAuth: false,
      alreadyExists: true,
      loadingAuth: false,
      sheeps: [],
    };
  },
  methods: {
    // Account

    changeState(value) {
      this.$emit("changeState", value);
    },

    getUID() {
      return fb.auth.currentUser.uid;
    },

    async authentication() {
      if (fb.auth.currentUser) {
        this.signOut();
      }
      this.loadingAuth = true;
      try {
        await fb.auth
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            this.$router.push({ name: "main" });
          });
      } catch (error) {
        this.errorAuth = true;
        setTimeout(() => {
          this.errorAuth = false;
        }, 5000);
      }
      this.loadingAuth = false;
    },

    async createAccount() {
      if (fb.auth.currentUser) {
        this.signOut();
      }
      this.loadingAuth = true;
      try {
        await fb.auth
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            const profile = {
              name: this.user.name,
              uid: fb.auth.currentUser.uid,
            };
            this.addProfile(profile).then(() => {
              this.changeState(true);
            });
          });
      } catch (error) {
        this.errorAuth = true;
        setTimeout(() => {
          this.errorAuth = false;
        }, 5000);
      }
      this.loadingAuth = false;
    },

    signOut() {
      fb.auth.signOut();
    },

    // PROFILE

    async addProfile(profile) {
      await fb.db.collection("profile").add(profile);
    },

    async getProfile() {
      let user = fb.auth.currentUser;

      const profile = await fb.db
        .collection("profile")
        .where("uid", "==", user.uid)
        .get();

      const profileData = profile.docs[0];
      this.user.id = profileData.id;
      this.user.name = profileData.data().name;
    },

    async updateProfile() {
      await fb.db
        .collection("profile")
        .doc(this.user.id)
        .update({
          name: this.user.name,
        });
    },

    // SHEEP

    async addSheep(sheep) {
      await fb.db.collection("sheep").add(sheep);
    },

    async getSheeps() {
      this.sheeps = [];
      let uid = this.getUID();

      const logSheeps = await fb.db
        .collection("sheep")
        .where("uid", "==", uid)
        .get();

      for (let doc of logSheeps.docs) {
        this.sheeps.push({
          id: doc.id,
          number: doc.data().number,
          breed: doc.data().breed,
          color: doc.data().color,
          sex: doc.data().sex,
        });
      }
    },

    async delSheep(id) {
      await fb.db
        .collection("sheep")
        .doc(id)
        .delete()
        .then(() => {
          this.getSheeps();
        });
    },
  },
};
