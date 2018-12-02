<template>
  <tr>
    <th class="sort-header">SORT BY:</th>
    <th class="pl-2 sort-option" @click="orderByName()">Name</th>
    <th class="pl-2 sort-option" @click=" orderByIbu()">IBU</th>
    <th class="pl-2 sort-option" @click="orderByAbv()">ABV</th>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sort",
  methods: {
    orderByName: function() {
      this.$store.dispatch("orderByName");
    },
    orderByIbu: function() {
      this.$store.dispatch("orderByIbu");
    },
    orderByAbv: function() {
      this.$store.dispatch("orderByAbv");
    }
  }
};
</script>

<style>
</style>
