<template>
  <div>
    <!-- Beer Modal -->
    <CrateModal :favorite="selectedFavorite"></CrateModal>

    <!--
      HERO SECTION
      =============================================
    -->
    <Hero title="FAVORITES"></Hero>

    <!--
      MAIN SECTION
      =============================================
    -->
    <section>
      <div class="main-container">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-md-6 col-xs-12 main-content">
              <h3 class="beer-heading">My favorite beers</h3>
              <small class="text-muted">Note: Double-click to remove from favorites!</small>
              <Sort></Sort>
              <div class="container">
                <div class="row">
                  <div class="col-md-3 p-0" v-for="favorite in favorites" :key="favorite.id">
                    <b-card-group deck>
                      <b-card @dblclick="removeFavorite(favorite.id);">
                        <div class="row no-gutters">
                          <div class="col-auto">
                            <b-link
                              href="#"
                              v-b-modal="'crateModal'"
                              @click="sendFavorite(favorite);"
                            >
                              <img :src="favorite.image_url" class="card-img-top" alt="Beer Image">
                            </b-link>
                          </div>
                          <div class="col card-text-container">
                            <div class="card-block pl-2">
                              <h5 class="card-title beer-title">{{ favorite.name }}</h5>
                              <small class="text-muted ibu">
                                IBU
                                <span class="ibu-span fav-ibu">
                                  {{
                                  favorite.ibu
                                  }}
                                </span>
                              </small>
                              <br class="d-none d-sm-block">
                              <small class="text-muted abv">
                                ABV
                                <span class="abv-span fav-abv">{{ favorite.abv }} %</span>
                              </small>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </b-card-group>
                  </div>
                  <img class="img-fluid cap-bottom" style="left: 75%" src="cap.png" alt="cap">
                </div>
              </div>
            </div>

            <!-- Crate Section -->
            <Crate></Crate>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Crate from "./Crate";
import CrateModal from "@/components/CrateModal.vue";
import Hero from "@/components/Hero.vue";
import Sort from "@/components/Sort.vue";

export default {
  name: "Favorites",
  components: {
    Hero,
    Crate,
    CrateModal,
    Sort
  },
  data() {
    return {
      loading: true,
      errored: false,
      modalShow: false,
      selectedFavorite: ""
    };
  },
  computed: mapState(["favorites"]),
  methods: {
    removeFavorite: function(id) {
      this.$store.dispatch("removeFavorite", id);
    },
    sendFavorite(favorite) {
      this.selectedFavorite = favorite;
    }
  }
};
</script>

<style scoped>
.main-container {
  margin-top: -22rem;
}
</style>
