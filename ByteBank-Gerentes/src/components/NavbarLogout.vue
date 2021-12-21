<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'novo.usuario' }">Cadastre-se</router-link>
    </li>
  </ul>
</template>