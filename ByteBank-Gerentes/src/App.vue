<template>
  <div id="app">
    <barra-navegacao/>
    <router-view/>
  </div>
</template>

<script>
import BarraNavegacao from '@/components/BarraNavegacao'
export default {
  components: {
    "barra-navegacao": BarraNavegacao
  }
}
</script>

<style>

</style>
