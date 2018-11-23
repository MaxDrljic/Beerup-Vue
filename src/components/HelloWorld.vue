<template>
  <div>
    {{ info }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers/1")
      .then(response => (this.info = response));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
