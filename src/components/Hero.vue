<template>
  <!-- HERO - FOR FAVORITES & JOIN
  =============================================-->
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-md-12 join-container">
          <h1 class="joinup-heading">{{ title }}</h1>
        </div>
        <div class="col-xl-4 col-md-12 clearfix">
          <img class="illustration float-right" src="illustration.png" alt="Beerup Illustration">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: ["title"]
};
</script>

<style>
</style>
