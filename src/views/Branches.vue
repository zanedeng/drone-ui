<template>
  <div class="branches-page">
    <AlertError v-if="showState === 'loadingError'" :error="collection.error"/>
    <Loading v-if="showState === 'loading'" text="Loading builds"/>

    <template v-if="showState === 'data'">
      <Card v-if="items.length < 1">Your Build List is Empty.</Card>

      <router-link v-for="build in items" :key="build.id" :to="`/${slug}/${build.number}`">
        <BranchItem hoverable
                    :branch="build.target"
                    :status="build.status"
                    :build="build"
                    :linkRepo="repo"/>
      </router-link>
    </template>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import BranchItem from "@/components/list-items/BranchItem.vue";
import Loading from "@/components/Loading.vue";
import AlertError from "@/components/AlertError.vue";

export default {
  name: "Branches",
  components: {
    Card,
    BranchItem,
    Loading,
    AlertError
  },
  mounted() {
    // todo proper fetch action
    const { name, namespace } = this.$route.params;
    this.$store.dispatch("fetchBuilds", { name, namespace, page: 1 });
  },
  computed: {
    slug() {
      return this.$route.params.namespace + "/" + this.$route.params.name;
    },
    repo() {
      return this.$store.state.repos[this.slug];
    },
    collection() {
      // todo use proper collection;
      const collection = this.$store.state.builds[this.slug];
      return collection ? { ...collection, data: collection.data } : null;
    },
    items() {
      // todo remove slice
      return this.collection ? Object.values(this.collection.data).slice(0, 2).map(x => x.data) : [];
    },
    showState() {
      if (!this.collection) return;
      if (this.collection.lStatus === "error") return "loadingError";
      if (this.collection.dStatus === "present") return "data";
      if (this.collection.lStatus === "loading") return "loading";
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/mixins";

.branches-page {
  a {
    display: block;

    + a {
      margin-top: 10px;
    }
  }
}
</style>
