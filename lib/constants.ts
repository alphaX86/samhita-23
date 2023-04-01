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

export const SITE_URL = 'https://samhita-23.vercel.app';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'Samhita 2023';
export const SITE_NAME_MULTILINE = ['Samhita', ''];
export const SITE_NAME = 'Samhita - ITA';
export const META_DESCRIPTION =
  '';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = '15-16 April 2023';
export const SHORT_DATE = 'April 15-16 - 9:00am IST';
export const FULL_DATE = 'Apr 15th 9am Indian Standard Time (GMT+5:30)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/alphax86/samhita-23';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Events',
    route: '/event'
  },
  {
    name: 'Workshops',
    route: '/workshop'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  //{
  //  name: 'Sponsors',
  //  route: '/sponsors'
  //},
  {
    name: 'Register',
    route: '/register'
  },
  {
    name: 'Contact',
    route: '/contact'
  }
];

export type TicketGenerationState = 'default' | 'loading';
