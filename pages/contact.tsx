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

import { GetStaticProps } from 'next';

import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import styles from '../components/contact.module.css';

import { META_DESCRIPTION } from '@lib/constants';
import RegGrid from '@components/reg-grid';

export default function Contact() {
  const meta = {
    title: 'Contact - Samhita 23',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Contact" description={meta.description} />
        <div className="border-2 border-solid border-yellow rounded-md p-4 flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <h1>Ask us!</h1>
          <form>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border border-white-500">
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value="-"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    readOnly
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="sm:col-span-full">
              <label htmlFor="query" className="block text-sm font-medium leading-6 text-white">
                Write your query to us!
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="query"
                  id="query"
                  className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover: border-yellow-500"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="border border-solid border-white-500 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <br></br>
        <div className={styles.contact}>
          SAMHITA’23 is a 2-day fest comprising of both onsite and online events.
          <br />
          It will offer more than 20 events on various technological levels. It also includes
          workshops on the latest IT trends.
          <br />
          The fest will be held on 15th and 16th April 2023. <br />
          <br />
          Contact:{' '}
          <a className="text-white" href="mailto:">
            Mail here
          </a>{' '}
          <br />
          Phone:{' '}
          <a className="text-white" href="tel:">
            +91 1234567890
          </a>
          <br />
          <br></br>
          Location: Madras Institute of Technology, <br />
          MIT Road, Radha Nagar, Chromepet, Chennai - 44, Tamil Nadu, India<br></br>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3717430175943!2d80.13755331480728!3d12.948047990871313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20of%20Technology%2C%20Anna%20University!5e0!3m2!1sen!2sin!4v1680352333111!5m2!1sen!2sin"
            width="70%"
            height="70%"
          ></iframe>
        </div>
      </Layout>
    </Page>
  );
}
