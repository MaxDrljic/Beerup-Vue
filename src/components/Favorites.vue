<template>
  <!-- HERO SECTION
  =============================================-->
  <div>
    <Hero title="FAVORITES"></Hero>

    <!-- MAIN SECTION
    =============================================-->
    <section>
      <div class="main-container">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-md-6 col-xs-12 main-content">
              <h3 class="beer-heading">My favorite beers</h3>
              <div class="container">
                <div class="row">
                  <div class="col-md-3 p-0" v-for="favorite in favorites" :key="favorite.id">
                    <b-card-group deck>
                      <b-card @dblclick="removeFavorite(favorite.id)">
                        <div class="row no-gutters">
                          <div class="col-auto">
                            <img :src="favorite.image_url" class="card-img-top" alt="Beer Image">
                          </div>
                          <div class="col card-text-container">
                            <div class="card-block pl-2">
                              <h5 class="card-title beer-title">{{ favorite.name }}</h5>
                              <small class="text-muted ibu">
                                IBU
                                <span class="ibu-span">{{ favorite.ibu }}</span>
                              </small>
                              <br class="d-none d-sm-block">
                              <small class="text-muted abv">
                                ABV
                                <span class="abv-span">{{ favorite.abv }}%</span>
                              </small>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </b-card-group>
                  </div>
                </div>
              </div>
            </div>

            <img class="img-fluid cap-bottom" src="cap.png" alt="cap">
            <div class="col-xl-4 col-md-6 col-xs-12 side-container">
              <img class="img-fluid cap-top" src="cap.png" alt="cap">
              <h3 class="crate-heading">Crate</h3>

              <!-- CRATE TABS -->
              <ul
                class="nav nav-tabs justify-content-center crate-tabs"
                id="crateTab"
                role="tablist"
              >
                <li class="nav-item crate-item">
                  <a
                    class="nav-link crate-link active"
                    id="current-crate"
                    data-toggle="tab"
                    href="#current-crate"
                    role="tab"
                    aria-controls="current-crate"
                    aria-selected="true"
                  >
                    <span class="crate-span">ONE</span>
                  </a>
                </li>
                <li class="nav-item crate-item">
                  <a
                    class="nav-link crate-link"
                    id="two-crate"
                    data-toggle="tab"
                    href="#two-crate"
                    role="tab"
                    aria-controls="two-crate"
                    aria-selected="false"
                  >
                    <span class="crate-span">TWO</span>
                  </a>
                </li>
                <li class="nav-item crate-item">
                  <a
                    class="nav-link crate-link"
                    id="three-crate"
                    data-toggle="tab"
                    href="#three-crate"
                    role="tab"
                    aria-controls="three-crate"
                    aria-selected="false"
                  >
                    <span class="crate-span">THREE</span>
                  </a>
                </li>
              </ul>

              <!-- TAB CONTENT -->
              <div class="tab-content text-right">
                <div
                  class="tab-pane active"
                  id="current-tab"
                  role="tabpanel"
                  aria-labelledby="current-crate"
                >
                  <img class="img-fluid crate-image" src="crate.png" alt="Beer crate">
                </div>
              </div>

              <div class="crate-text-container text-center">
                <p class="crate-instructions">Add a beer to have it appear in the crate.</p>
                <small class="name-caption">— Captain Obvious</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hero from "@/components/Hero.vue";

export default {
  name: "Favorites",
  components: {
    Hero
  },
  data() {
    return {
      loading: true,
      errored: false,
      modalShow: false
    };
  },
  computed: mapState(["favorites"]),
  methods: {
    removeFavorite: function(id) {
      this.$store.dispatch("removeFavorite", id);
    }
  }
};
</script>

<style scoped>
.main-container {
  margin-top: -22rem;
}
</style>
