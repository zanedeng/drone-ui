<template>
  <div class="base-checkbox">
    <input type="checkbox"
           :id="name"
           :checked="value"
           @change="$emit('input', $event.target.checked)"
    />
    <label :for="name">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    name: { type: String, default: () => Math.random().toString() },
    value: { type: Boolean, required: true }
  }
};
</script>

<!-- TODO: Think about extracting common code from BaseCheckbox and BaseRadioButtons -->

<style scoped>
.base-checkbox {
  display: inline-block;
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
  border-radius: 3px;
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
