<template>
  <select :value="value" @input="$emit('input', $event.target.value)">
    <option v-for="option in options" :key="option[0]" :value="option[0]">{{ option[1] }}</option>
  </select>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: null,
    options: Array
  }
};
</script>

<style scoped>
select {
  color: #888;
  border: 1px solid rgba(180, 180, 180, 0.2);
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 0 30px 0 15px;
  height: 40px;
  line-height: 40px;
  -webkit-appearance: none;
  background: #333 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><polygon fill='#98a1ab' points='0,30 100, 30 50,90'/></svg>") no-repeat center right 10px;
  background-size: 10px;
}

select:focus {
  border-color: #0564D7;
  outline: none;
}

select::placeholder {
  color: rgba(180, 180, 180, 0.2);
}
</style>
