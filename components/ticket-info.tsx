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

import styles from './ticket-info.module.css';
import styleUtils from './utils.module.css';
import Logo from './logo';
import pic from '../public/icon-192x192.png'
import { DATE, SITE_URL } from '@lib/constants';
import VercelLogo from '@components/icons/icon-platform';

const siteUrl = new URL(SITE_URL);
const siteUrlForTicket = `${siteUrl.host}${siteUrl.pathname}`.replace(/\/$/, '');

export default function TicketInfo({ logoTextSecondaryColor = 'var(--accents-5)' }) {
  const createdBy = (
    <div className={styles['created-by']}>
      
    </div>
  );
  return (
    <div className={styles.info}>
      <div className={styles.logo}>
      <img src="https://raw.githubusercontent.com/alphaX86/samhita-23/main/public/apple-touch-icon.png" alt='logo' width="60px" height="60px"/>
      </div>
      <div className={styles.date}>
        <div>{DATE}</div>
        <div>OFFLINE</div>
      </div>
      <div className={styleUtils['hide-on-mobile']}>{createdBy}</div>
      <div className={styles.url}>{siteUrlForTicket}</div>
      <div className={styleUtils['show-on-mobile']}>{createdBy}</div>
    </div>
  );
}
