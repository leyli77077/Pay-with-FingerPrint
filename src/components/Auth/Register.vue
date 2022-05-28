<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "../../router";

const email = ref("");
const password = ref("");
const retypePassword = ref("");

const emailIsReady = ref(false);

function onSubmit() {
  if (!email.value) {
    return;
  }
  emailIsReady.value = true;
}

async function onSecondSubmit() {
  if (password.value !== retypePassword.value) {
    return;
  }

  const res = await axios.post("http://localhost:3000/users", {
    email: email.value,
    username: "User",
    password: password.value,
  });

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
    router.push({
      name: "HomeView",
    });
  }
}
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 overflow-hidden relative"
        :class="{
          'h-96': emailIsReady,
        }"
      >
        <form
          @submit.prevent="onSubmit"
          class="space-y-6 transition-transform will-change-transform w-full"
          :class="{
            '-translate-x-[120%]': emailIsReady,
          }"
        >
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              E-mail address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                v-model="email"
                autocomplete="email"
                placeholder="E-mail address"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
          </div>
        </form>

        <form
          @submit.prevent="onSecondSubmit"
          class="space-y-6 transition-transform w-[82%] will-change-transform absolute top-1/2 left-1/2 transform -translate-y-[68%] translate-x-[150%]"
          :class="{
            '-translate-x-[50%]': emailIsReady,
          }"
        >
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                v-model="password"
                placeholder="Password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Retype Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                placeholder="Retype Password"
                v-model="retypePassword"
                type="password"
                autocomplete="current-password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>

        <div
          class="mt-6 relative"
          :class="{
            'mt-40': emailIsReady,
          }"
        >
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <router-link
                :to="{ name: 'SignInView' }"
                class="px-2 bg-white text-blue-700"
              >
                Have an account? Sign In
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
