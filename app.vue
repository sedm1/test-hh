<template>
  <LayoutTheHeader></LayoutTheHeader>
  <NuxtPage
  @OpenModalWindow="IsModalOpen=true"
  ></NuxtPage>
  <transition name="modal-fade">
    <LazyModalWindow 
    @CloseModalWindow="IsModalOpen=false"
    v-if="IsModalOpen"
    ></LazyModalWindow>
  </transition>
  
</template>
<script setup>
let IsModalOpen = ref(false)
</script>
<style lang="sass">
*
  padding: 0
  margin: 0
  box-sizing: border-box
  font-family: "Inter", system-ui
.container
  padding: 0px 10px
  margin: 0 auto
  max-width: 1520px
  width: 100%
.section__title
  font-size: 30px
  font-weight: 700
.modal-fade-enter-active, .modal-fade-leave-active 
  transition: opacity 0.3s

.modal-fade-enter, .modal-fade-leave-to 
  opacity: 0
input, textarea
  outline: 0

</style>