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
import { Job, Sponsor, Stage, Speaker, Reg, Event, Workshop, EvReg } from '@lib/types';

import * as datoCmsApi from './cms-providers/dato';
import * as contentfulApi from './cms-providers/contentful';
import * as prismicApi from './cms-providers/prismic';

let cmsApi: {
  getAllSpeakers: () => Promise<Speaker[]>;
  getAllStages: () => Promise<Stage[]>;
  getAllSponsors: () => Promise<Sponsor[]>;
  getAllJobs: () => Promise<Job[]>;
  getAllReg: () => Promise<Reg[]>;
  getAllEvReg: () => Promise<EvReg[]>;
  getAllEvents: () => Promise<Event[]>;
  getAllWorkshops: () => Promise<Workshop[]>;
};

if (process.env.PRISMIC_REPO_ID) {
  cmsApi = prismicApi;
} else {
  cmsApi = {
    getAllSpeakers: () => Promise.resolve([]),
    getAllStages: () => Promise.resolve([]),
    getAllSponsors: () => Promise.resolve([]),
    getAllJobs: () => Promise.resolve([]),
    getAllReg: () => Promise.resolve([]),
    getAllEvReg: () => Promise.resolve([]),
    getAllEvents: () => Promise.resolve([]),
    getAllWorkshops: () => Promise.resolve([])
  };
}

export async function getAllSpeakers(): Promise<Speaker[]> {
  return cmsApi.getAllSpeakers();
}

export async function getAllStages(): Promise<Stage[]> {
  return cmsApi.getAllStages();
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  return cmsApi.getAllSponsors();
}

export async function getAllJobs(): Promise<Job[]> {
  return cmsApi.getAllJobs();
}

export async function getAllReg(): Promise<Reg[]> {
  return cmsApi.getAllReg();
}

export async function getAllEvReg(): Promise<EvReg[]> {
  return cmsApi.getAllEvReg();
}

export async function getAllEvents(): Promise<Event[]> {
  return cmsApi.getAllEvents();
}

export async function getAllWorkshops(): Promise<Workshop[]> {
  return cmsApi.getAllWorkshops();
}
