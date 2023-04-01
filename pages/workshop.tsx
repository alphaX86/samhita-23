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
import WorkshopT from '@components/workshop';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllWorkshops } from '@lib/cms-api';
import { Workshop } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  allWorkshops: Workshop[];
};

export default function WorkshopPage({ allWorkshops }: Props) {
  const meta = {
    title: 'Workshops - Samhita 23',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Workshops" description={meta.description} />
        <WorkshopT allworkshops={allWorkshops} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allWorkshops = await getAllWorkshops();

  return {
    props: {
      allWorkshops
    },
    revalidate: 60
  };
};
