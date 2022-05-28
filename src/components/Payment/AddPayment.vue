<template>
  <div class="bg-gray-50">
    <div
      class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Checkout</h2>

      <form class="w-1/2 mx-auto lg:gap-x-12 xl:gap-x-16">
        <div>
          <div>
            <h2 class="text-lg font-medium text-gray-900">
              Contact information
            </h2>

            <div class="mt-4">
              <label
                for="email-address"
                class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
                >First name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  autocomplete="given-name"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
                >Last name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  autocomplete="family-name"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="address"
                class="block text-sm font-medium text-gray-700"
                >Address</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="address"
                  id="address"
                  autocomplete="street-address"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="city" class="block text-sm font-medium text-gray-700"
                >City</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
                >Country</label
              >
              <div class="mt-1">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div>
              <label
                for="region"
                class="block text-sm font-medium text-gray-700"
                >State / Province</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="postal-code"
                class="block text-sm font-medium text-gray-700"
                >Postal code</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="phone" class="block text-sm font-medium text-gray-700"
                >Phone</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <!-- Payment -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Payment</h2>

            <div class="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
              <div class="col-span-4">
                <label
                  for="card-number"
                  class="block text-sm font-medium text-gray-700"
                  >Card number</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    autocomplete="cc-number"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-4">
                <label
                  for="name-on-card"
                  class="block text-sm font-medium text-gray-700"
                  >Name on card</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="name-on-card"
                    name="name-on-card"
                    autocomplete="cc-name"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-3">
                <label
                  for="expiration-date"
                  class="block text-sm font-medium text-gray-700"
                  >Expiration date (MM/YY)</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autocomplete="cc-exp"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="cvc" class="block text-sm font-medium text-gray-700"
                  >CVC</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    autocomplete="csc"
                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
