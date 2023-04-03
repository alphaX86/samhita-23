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
        <div className="border-2 border-solid rounded-md p-3 flex flex-col items-center justify-center h-80 w-auto">
          <h1>Ask us!</h1>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdhCXzQLekK9zD7rumd7S3ksUDBCRTHcZqixwXtVxZ45TKkig/viewform?embedded=true" width="2000" height="3000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        <br></br>
        <div className={styles.contact}>
          SAMHITA’23 is a 2-day fest comprising of both onsite and online events.
          <br />
          It will offer more than 20 events on various technological levels. It also includes 10
          workshops on the latest IT trends.
          <br />
          The fest will be held on 15th and 16th April 2023. <br />
          <br />
          Contact Email:{' '}
          <a className="text-white" href="mailto:chairmanita@mitindia.edu">
          chairmanita@mitindia.edu
          </a>{' '}
          <br />
          Phone (Events):{' '}
          <a className="text-white" href="tel:9080527253">
            Fazith - +91 90805 27253
          </a>
          <br/>
          Phone (Workshops):{' '}
          <a className="text-white" href="tel:6382807597">
            Rozen - +91 63828 07597
          </a>
          <br/>
          Phone (General):{' '}
          <a className="text-white" href="tel:9952548248">
            Sanjay - +91 99525 48248
          </a>
          <br />
          Phone (Payments):{' '}
          <a className="text-white" href="tel:9360411346">
            Pradeep - +91 93604 11346
          </a>
          <br />
          Phone (Chairman):{' '}
          <a className="text-white" href="tel:6382899284">
            Yaswanth - +91 63828 99284
          </a>
          <br></br>
          Location: Madras Institute of Technology, <br />
          MIT Road, Radha Nagar, Chromepet, Chennai - 44, Tamil Nadu, India<br></br>
          <p className='text-white'>Landmarks:</p>
          Nearest Bus Stop: <a className='text-white' href='https://www.google.com/maps/search/chromepet+bus+stand/@12.9514492,80.1379962,17z/data=!3m1!4b1'>Chromepet Bus Stop</a><br/>
          Nearest Railway Station: <a className='text-white' href='https://www.google.com/maps/dir//Chrompet+Railway+station,+X42R%2BPCG,+Chrompet+Train+Station,+Railway,+Radha+Nagar,+Chromepet,+tambaram,+Tamil+Nadu+600044/@12.9526663,80.1405786,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525fe680010e35:0xaae8d5abdbe40b93!2m2!1d80.1444318!2d12.9535269'>Chromepet Railway Station</a><br/>
          Nearest Metro Stop: <a className='text-white' href='https://www.google.com/maps/dir//St.+Thomas+Mount+Metro,+Collectors+Nagar,+Alandur,+Chennai,+Tamil+Nadu/@12.9954274,80.1287898,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a526750a12d32a5:0xd642a8f9dbb24727!2m2!1d80.1988314!2d12.9952695'>St Thomas Mount Metro (Green Lane)</a> (12 kms from Chromepet Railway), <br/> <a className='text-white' href='https://www.google.com/maps/dir//Chennai+Airport+Metro,+Airport+Road,+Meenambakkam,+Chennai,+Tamil+Nadu/@12.9940807,80.1687516,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525e221bb4165d:0xe19c2ca3cd395ff!2m2!1d80.1642095!2d12.9808255'>Airport Metro (Blue Lane)</a> (6.4 kms from Chromepet Railway)<br/><br/>
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
