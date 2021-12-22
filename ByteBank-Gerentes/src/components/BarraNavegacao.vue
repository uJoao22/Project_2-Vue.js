<template>
  <nav class="navbar navbar-expand navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <navbar-login v-if="usuarioEstaLogado"/>
        <navbar-logout v-else/>
    </div>
  </nav>
</template>

<script>
import NavbarLogin from "./NavbarLogin";
import NavbarLogout from "./NavbarLogout";
import { mapGetters } from 'vuex'

export default {
  components: {
    'navbar-login': NavbarLogin,
    'navbar-logout': NavbarLogout
  },

  computed: {
    ...mapGetters(['usuarioEstaLogado'])
  }
};
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>