<template>
  <textarea :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    value: String
  }
};
</script>

<style scoped>
textarea {
  color: #888;
  border: 1px solid rgba(180, 180, 180, 0.2);
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 0 15px;
  height: 40px;
  line-height: 40px;
  background-color: #333;
}

textarea:focus {
  border-color: #0564D7;
  outline: none;
}

textarea::placeholder {
  color: rgba(180, 180, 180, 0.2);
}
</style>
