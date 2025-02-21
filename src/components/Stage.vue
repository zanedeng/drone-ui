<template>
  <section :class="{ stage: true, 'has-steps': hasSteps}">
    <header>
      <Status :status="stage.status"/>
      <span :title="stage.name">{{ stage.name }}</span>
      <time-elapsed v-if="stage.started" :started="stage.started" :stopped="stage.started">
        <Hint position="top" align="right" showOn="hover">Full stage duration</Hint>
      </time-elapsed>
      <IconArrowDropdown v-if="hasSteps" direction="down" class="arrow-dropdown"/>
    </header>

    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import Status from "./Status.vue";
import TimeElapsed from "./TimeElapsed.vue";
import IconArrowDropdown from "./icons/IconArrowDropdown.vue";
import Hint from "./Hint";

export default {
  name: "Stage",
  props: {
    stage: { type: Object, required: true }
  },
  components: {
    Hint,
    Status,
    TimeElapsed,
    IconArrowDropdown
  },
  computed: {
    hasSteps() {
      return this.stage.steps && this.stage.steps.length;
    }
  }
};
</script>

<style scoped lang="scss">
.stage {
  background: rgba(0, 0, 0, .15);
  box-shadow: 0 2px 4px 0 rgba(25, 45, 70, .05);
  border: 1px solid #333;
  border-radius: 3px;
  box-sizing: border-box;
  user-select: none;
}

header {
  align-items: center;
  border-bottom: solid 1px rgba(160, 160, 160, 0.2);
  display: flex;
  height: 40px;
  padding: 0 15px;
  user-select: none;
  color: #888;
}

.status {
  flex-shrink: 0;
}

span {
  flex-grow: 1;
  font-weight: 600;
  margin-left: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.time-elapsed {
  font-size: 13px;
  font-weight: 400;
  flex-shrink: 0;
  color: #666;
  position: relative;

  .hint {
    white-space: nowrap;
  }
}

.arrow-dropdown {
  display: none;
  color: rgba(25, 45, 70, 0.6);
}

.content {
  > *:first-child {
    margin-top: 10px;
  }

  > *:last-child {
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
@import "../assets/styles/variables";

.stage > .content {
  > .step-container {
    &:first-of-type .step:after {
      top: 50%;
    }

    &:last-of-type .step:after {
      bottom: 50%;
    }

    > a {
      display: block;
      color: #888;

      &:hover,
      &:focus {
        background: $step-selected-bg-color;

        .status.status-running svg circle {
          fill: $step-selected-bg-color;
        }
      }
    }
  }
}
</style>
