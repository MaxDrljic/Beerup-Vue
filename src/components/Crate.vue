<template>
  <div class="col-xl-4 col-md-6 col-xs-12 side-container">
    <img class="img-fluid cap-top" src="cap.png" alt="cap" />
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
          :class="{ disabled: activeCrate1 === true || activeCrate3 === false }"
          @click="activeCrate();"
          id="first-crate"
          data-toggle="tab"
          href="#"
          role="tab"
          aria-controls="first-crate"
          aria-selected="true"
        >
          <span
            class="crate-span"
            :class="{ disabledSpan: activeCrate1 === true }"
            >ONE</span
          >
        </a>
      </li>
      <li class="nav-item crate-item">
        <a
          class="nav-link crate-link"
          :class="{ disabled: activeCrate2 === true || activeCrate3 === true }"
          @click="activeCrate();"
          id="second-crate"
          data-toggle="tab"
          href="#"
          role="tab"
          aria-controls="second-crate"
          aria-selected="false"
        >
          <span
            class="crate-span"
            :class="{ disabledSpan: activeCrate2 === true }"
            >TWO</span
          >
        </a>
      </li>
      <li class="nav-item crate-item">
        <a
          class="nav-link crate-link"
          :class="{ disabled: activeCrate3 === true || activeCrate1 === true }"
          @click="activeCrate();"
          id="third-crate"
          data-toggle="tab"
          href="#"
          role="tab"
          aria-controls="third-crate"
          aria-selected="false"
        >
          <span
            class="crate-span"
            :class="{ disabledSpan: activeCrate3 === true }"
            >THREE</span
          >
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
        <img class="img-fluid crate-image" src="crate.png" alt="Beer crate" />
        <p class="crate-instructions text-center pt-3 ml-5 pl-4">
          Beers In Crate: {{ crateCount1 }}
        </p>
      </div>
      <div
        class="tab-pane"
        id="two-tab"
        role="tabpanel"
        aria-labelledby="two-crate"
      >
        <img class="img-fluid crate-image" src="crate.png" alt="Beer crate" />
        <p class="crate-instructions text-center pt-3 ml-5 pl-4">
          Beers In Crate: {{ crateCount2 }}
        </p>
      </div>
      <div
        class="tab-pane"
        id="three-tab"
        role="tabpanel"
        aria-labelledby="three-crate"
      >
        <img class="img-fluid crate-image" src="crate.png" alt="Beer crate" />
        <p class="crate-instructions text-center pt-3 ml-5 pl-4">
          Beers In Crate: {{ crateCount3 }}
        </p>
      </div>
    </div>

    <div class="crate-text-container text-center">
      <p class="crate-instructions">
        Add a beer to have it appear in the crate.
      </p>
      <small class="name-caption">— Captain Obvious</small>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Crate",
  methods: {
    activeCrate: function() {
      this.$store.dispatch("activeCrate");
    }
  },
  computed: mapState([
    "activeCrate1",
    "activeCrate2",
    "activeCrate3",
    "crate1",
    "crate2",
    "crate3",
    "crateCount1",
    "crateCount2",
    "crateCount3"
  ])
};
</script>

<style></style>
