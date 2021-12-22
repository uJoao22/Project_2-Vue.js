export const logoutMixin = {
    methods: {
        efetuarLogout() {
          this.$store.commit('DESLOGAR_USUARIO')
          localStorage.removeItem("token");
          this.$router.push({ name: "login" });
        }
      }
}