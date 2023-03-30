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
        <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Event/Workshop Registration
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" method='post'>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  </div>
                  <div>
                      <label htmlFor="ticket" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ticket Number</label>
                      <input type="text" name="ticket-number" id="ticket-number" placeholder="1" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event/Workshop</label>
                      <select name="type" id="type" placeholder="---" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> 
                        <option value="N/A">N/A</option>
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
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full bg-blue text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register Event</button>
              </form>
          </div>
      </div>
        </section>
      </Layout>
    </Page>
  );
}
