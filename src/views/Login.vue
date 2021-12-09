<template>
  <div class="container">
    <div class="login">
      <form action="/login" method="POST">
        <div class="logo"><Logo /></div>
        <BaseInput name="username" placeholder="用户名" type="text" />
        <BaseInput name="password" placeholder="密码" type="password" />
        <Button type="submit" theme="primary" size="l">登录</Button>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/logos/Logo.vue";
import BaseInput from "@/components/forms/BaseInput.vue";
import Button from "@/components/buttons/Button.vue";

export default {
  name: "login",
  components: {
    Logo,
    BaseInput,
    Button
  }
};
</script>

<style scoped>
div.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.login {
  width: 340px;
  padding: 70px 20px 30px;
  border-radius: 5px;
  background-color: rgba(75, 75, 75, .25);
  position: relative;
}

.logo {
  text-align: center;
  padding: 16px;
  margin-bottom: 30px;
  position: absolute;
  top: 0px;
  left: 50%;
  margin-left: -41px;
  border-radius: 50%;
}

.logo > svg {
  width: 50px;
  height: 50px;
}

form input {
  margin-bottom: 30px;
  width: 100%;
}

.button {
  width: 100%;
}
</style>
