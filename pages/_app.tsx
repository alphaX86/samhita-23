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

import { SSRProvider, OverlayProvider } from 'react-aria';
import { SessionProvider } from 'next-auth/react';
import { Session} from 'next-auth';
import '@styles/global.css';
import '@styles/nprogress.css';
import '@styles/chrome-bug.css';
import type { AppProps } from 'next/app';
import NProgress from '@components/nprogress';
import ResizeHandler from '@components/resize-handler';
import { useEffect } from 'react';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps<{ session: Session }>) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  const AppMainComponent = Component as any;

  return (
    <SessionProvider session={pageProps.session}>
      <SSRProvider>
        <OverlayProvider>
          <HMSRoomProvider>
            <AppMainComponent {...pageProps} />
            <Analytics />
            <ResizeHandler />
            <NProgress />
          </HMSRoomProvider>
        </OverlayProvider>
      </SSRProvider>
    </SessionProvider>
  );
}
