<template>
  <Panel name="builds-feed" :opened="opened" side="right" class="builds-feed-panel">
    <portal to="status-bar">
      <BuildsFeedIndicator :collection="$store.state.buildsFeed" @click.native="toggle" :filled="opened"/>
    </portal>

    <BuildsFeed>
      <Button slot="header" outline borderless @click.native="toggle">
        <IconCancel/>
      </Button>
    </BuildsFeed>
  </Panel>
</template>

<script>
import Panel from "@/components/Panel";
import BuildsFeed from "@/views/BuildsFeed";
import BuildsFeedIndicator from "@/components/BuildsFeedIndicator";
import Button from "@/components/buttons/Button";
import IconCancel from "@/components/icons/IconCancel";

export default {
  name: "BuildsFeedPanel",
  components: {
    Panel,
    BuildsFeed,
    BuildsFeedIndicator,
    Button,
    IconCancel
  },
  mounted() {
    if (this.$store.state.buildsFeed.status === "empty") {
      this.$store.dispatch("fetchBuildsFeed");
    }
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables";

.builds-feed-panel {
  .page-header {
    padding: 0 ($header-padding-side - 10px) 0 $header-padding-side;
  }

  .alert {
    margin: 0 $header-padding-side;
    box-shadow: none;
    color: rgba(180, 180, 180, 0.5);
  }

  .repo-item.media-mobile {
    border: none;
    border-top: 1px solid rgba(180, 180, 180, 0.3);
    border-bottom: 1px solid rgba(180, 180, 180, 0.3);
    box-shadow: none;
    border-radius: 0;

    @if ($header-padding-side != 15px) {
      padding-left: $header-padding-side;
      padding-right: $header-padding-side;
    }
  }

  .repo-link.hover-type-box-shadow:focus .repo-item,
  .repo-link.hover-type-box-shadow:hover .repo-item {
    box-shadow: none;

    .header {
      color: #0564d7;
    }
  }

  .list-item + .list-item {
    margin-top: 0;

    .repo-item {
      border-top: 0;
    }
  }
}
</style>
