<template>
  <!--
    BEER MODAL
    =============================================
  -->
  <b-modal
    id="crateModal"
    hide-footer
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-xl-6 col-md-6">
              <img class="crate-modal-img img-fluid" :src="favorite.image_url" alt="beer">
            </div>
            <div class="col-xl-6 col-md-6 beer-modal-container pt-4">
              <h4 class="beer-modal-header pb-4 d-none d-sm-block">{{ favorite.name }}</h4>
              <small class="ibu pt-4">
                IBU
                <span class="ibu-span">{{ favorite.ibu }}</span>
              </small>
              <br class="d-none d-sm-block">
              <small class="abv">
                ABV
                <span class="abv-span">{{ favorite.abv }}%</span>
              </small>
              <p class="beer-modal-paragraph pt-2">
                <small class="text-muted">Description:</small>
                {{ favorite.description | truncate(200, "...") }}
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer mx-auto mb-4">
          <button
            @click="addToCrate(favorite);"
            type="button"
            class="btn beerup-button add-to-crate"
          >ADD TO CRATE</button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "CrateModal",
  props: ["favorite"],
  methods: {
    // Add to crate method
    addToCrate: function(favorite) {
      this.$store.dispatch("addToCrate", favorite);
    }
  },
  filters: {
    // Used for shortening the description
    truncate: function(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  }
};
</script>

<style></style>
