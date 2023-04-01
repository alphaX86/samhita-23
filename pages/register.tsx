/**
 * Copyright 2023 alphaX86
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import { META_DESCRIPTION } from '@lib/constants';

export default function RegisterForm() {
  const meta = {
    title: 'Register Form - Samhita 23',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Register Form" description={meta.description} />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <form>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    // className="border border-gray-400 focus:border-yellow-500 focus:ring-yellow-500 focus:outline-none px-4 py-2 rounded-lg w-full"
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover: border-yellow-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-5">
                <label
                  htmlFor="eventWorkshop"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Event/Workshop
                </label>
                <div className="mt-2">
                  <select
                    id="eventWorkshop"
                    name="eventWorkshop"
                    autoComplete="eventWorkshop-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="N/A">Choose</option>
                    <option value="E1">Event 1</option>
                    <option value="E2">Event 2</option>
                    <option value="E3">Event 3</option>
                    <option value="E4">Event 4</option>
                    <option value="E5">Event 5</option>
                    <option value="E6">Event 6</option>
                    <option value="E7">Event 7</option>
                    <option value="E8">Event 8</option>
                    <option value="E9">Event 9</option>
                    <option value="E10">Event 10</option>
                    <option value="E11">Event 11</option>
                    <option value="E12">Event 12</option>
                    <option value="E13">Event 13</option>
                    <option value="W1">Workshop 1</option>
                    <option value="W2">Workshop 2</option>
                    <option value="W3">Workshop 3</option>
                    <option value="W4">Workshop 4</option>
                    <option value="W5">Workshop 5</option>
                    <option value="W6">Workshop 6</option>
                    <option value="W7">Workshop 7</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="ticketNo"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Ticket Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="ticketNo"
                    id="ticketNo"
                    value="-"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="college" className="block text-sm font-medium leading-6 text-white">
                  College Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="college"
                    id="college"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-white">
                Cancel
              </button>
              <button
                type="submit"
                className="border border-solid border-white-500 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </Page>
  );
}
