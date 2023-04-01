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
import EventT from '@components/event';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllEvents } from '@lib/cms-api';
import { Event } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  allEvents: Event[];
};

export default function EventPage({ allEvents }: Props) {
  const meta = {
    title: 'Events - Samhita 23',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Events" description={meta.description} />
        <EventT allevents={allEvents} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents
    },
    revalidate: 60
  };
};
