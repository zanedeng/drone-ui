<template>
  <input class="base-input" :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: String
  }
};
</script>

<style scoped>
input {
  color: #888;
  border: 1px solid rgba(180, 180, 180, 0.2);
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px 15px;
  height: 40px;
  line-height: 20px;
  background: #333;
}

input[type="search"] {
  -webkit-appearance: none;
}

input:focus {
  border-color: #0564d7;
  outline: none;
}

input::placeholder {
  color: rgba(180, 180, 180, 0.2);
}
</style>
