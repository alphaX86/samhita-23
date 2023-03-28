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

import { GetStaticProps, GetStaticPaths } from 'next';

import Page from '@components/page';
//import SpeakerSection from '@components/speaker-section';
import Layout from '@components/layout';

import { getAllReg } from '@lib/cms-api';
import { Reg } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';
import RegSection from '@components/reg-section';

type Props = {
    speaker: Reg;
};

export default function RegPage({ speaker }: Props) {
  const meta = {
    title: 'Register - Samhita 23',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <RegSection reg={speaker} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const reg = await getAllReg();
  const currentSpeaker = reg.find((s: Reg) => s.slug === slug) || null;

  if (!currentSpeaker) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      speaker: currentSpeaker
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const speakers = await getAllReg();
  const slugs = speakers.map((s: Reg) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
