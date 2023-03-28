/**
 * Copyright 2020 Vercel Inc.
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
        <div className={styles.contact}>
        SAMHITA’23 is a 2-day fest comprising of both onsite and online events. 
        <br />It will offer more than 20 events on various technological levels. It also includes workshops on the latest IT trends.
        <br />The fest will be held on 15th and 16th April 2023. <br /><br />
        Contact: Email here <br />
        Phone: +91 1234567890 <br />
        Location: Madras Institute of Technology, Chennai - 44, Tamil Nadu, India 
        </div>
      </Layout>
    </Page>
  );
}
