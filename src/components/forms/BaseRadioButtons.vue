<template>
  <div class="base-radio-buttons">
    <div class="option" v-for="(oName, oValue) in options" :key="oValue">
      <input type="radio"
             :name="name"
             :value="oValue"
             :checked="oValue === value"
             :id="`${name}-${oValue}`"
             @change="$emit('input', $event.target.value)"/>
      <label :for="`${name}-${oValue}`">{{ oName }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseRadioButtons",
  props: {
    name: { type: String, required: true },
    value: { type: String, required: true },
    options: { type: Object, required: true }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/mixins";

.option {
  display: inline-block;
  margin-right: 70px;

  @include tablet {
    margin: 0;
    display: block;

    & + .option {
      margin-top: 10px;
    }
  }
}

input {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
}

label {
  position: relative;
  padding-left: 27px;
  line-height: 20px;
  display: inline-block;
  cursor: pointer;
}

label:before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(180, 180, 180, 0.5);
  border-radius: 50%;
  top: 0;
  left: 0;
  background-color: #333;
}

label:hover:before {
  border-color: #0564d7;
}

input:focus + label:before {
  box-shadow: 0 0 4px 1px #0564d7;
}

input:checked + label:before {
  background: #0564d7;
  border-color: transparent;
}

input:checked + label:after {
  content: "";
  position: absolute;
  left: 6px;
  top: 6px;
  width: 9px;
  height: 6px;
  border: solid white;
  border-width: 0 0 2px 2px;
  transform: rotate(-45deg);
  box-sizing: border-box;
}
</style>
