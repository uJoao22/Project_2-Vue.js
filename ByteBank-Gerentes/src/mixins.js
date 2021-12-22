import router from './router'
import store from './store'

export const logoutMixin = {
    methods: {
        efetuarLogout() {
          store.commit('DESLOGAR_USUARIO')
          localStorage.removeItem("token");
          router.push({ name: "login" });
        }
      }
}