<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ul role="list" class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="cart in carts" :key="cart.id" class="col-span-1 bg-white rounded-lg divide-y divide-gray-200"
      style="box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"
    >
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3 w-full">
            <h3 class="text-gray-900 text-sm font-medium truncate">
             <span>CVC: </span>
             {{cart.cvc}}
            </h3>
          </div>
          <div class="flex items-center space-x-3 w-full">
            <h1 class="mt-2 text-indigo-900 text-xl font-medium truncate">Payment Security</h1>
          </div>
          <div class="items-center w-full">
            <p class="mt-5 mb-1 my-auto  text-black-500 font-bold tracking-wide text-2xl truncate">{{ cart.card_number }}</p>
          </div>
          <div class="flex justify-between items-center w-full mt-3">
            <div class="text-black-700 font-medium">
              <h3>{{ cart.cardholder }}</h3>
            </div>
            <div class="text-black-700 font-medium">
              <span>{{ cart.date }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a :href="`mailto:`" class="relative -mr-px w-0 flex-1  inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <TrashIcon class="w-5 h-5 text-red-400" aria-hidden="true" />
              <span class="ml-3">Delete</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a :href="`tel:`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <PencilAltIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Edit</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { TrashIcon, PencilAltIcon } from '@heroicons/vue/solid'

const carts = [
  {
    id: '1',
    card_number: '1234 5678 9876 5432',
    date: '12/24',
    cardholder: 'CARDHOLDER NAME',
    cvc: '232',
  },
  {
    id: '2',
    card_number: '1234 5678 9876 5432',
    date: '03/24',
    cardholder: 'CARDHOLDER NAME',
    cvc: '232',
  },
  {
    id: '3',
    card_number: '1234 5678 9876 5432',
    date: '09/28  ',
    cardholder: 'CARDHOLDER NAME',
    cvc: '232',
  },
  {
    id: '4',
    card_number: '1234 5678 9876 5432',
    date: '09/28  ',
    cardholder: 'CARDHOLDER NAME',
    cvc: '232',
  },
  {
    id: '5',
    card_number: '1234 5678 9876 5432',
    date: '09/28  ',
    cardholder: 'CARDHOLDER NAME',
    cvc: '232',
  },
  {
    id: '6',
    card_number: '1234 5678 9876 5432',
    date: '09/28  ',
    cardholder: 'CARDHOLDER NAME',
    cvc: '232',
  },
]
</script>