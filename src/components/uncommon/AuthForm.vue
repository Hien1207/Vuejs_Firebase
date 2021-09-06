<template>
  <div class="auth-form">
    <form @submit.prevent="methods">
      <div class="auth-form__container">
        <label class="auth-form__input-label" for="email">Email</label>
        <input
          id="email"
          :value="email"
          @input="$emit('update:email', $event.target.value)"
          type="email"
          class="auth-form__input"
          required
        />
      </div>
      <div class="auth-form__container">
        <label class="auth-form__input-label" for="password">Password</label>
        <input
          id="password"
          :value="password"
          @input="$emit('update:password', $event.target.value)"
          type="password"
          class="auth-form__input"
          required
        />
      </div>
      <button type="submit" class="auth-form__submit">Login</button>
      <div class="auth-form__password">
        <p>Forgot Password?</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    methods: Function,
    password: String,
    email: String
    },
};
</script>

<style lang="scss" scoped>
.auth-form {
  &__container {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }
  &__input-label {
    color: var(--gray-text);
    font-size: 14px;
  }
  &__input {
    border-bottom: 1px solid #cccccc;
    font-family: futura-regular;
    font-size: var(--nomal-text);
  }
  &__input::placeholder {
    padding: 2px;
  }
  &__input:hover {
    border-color: #000000;
  }
  &__input:focus {
    border-color: var(--blue-hover);
  }
  &__submit {
    width: 100%;
    background-color: var(--blue-hover);
    cursor: pointer;
    color: #ffffff;
    padding: 10px 0;
    font-size: var(--nomal-text);
  }
  &__password {
  }
}
</style>
