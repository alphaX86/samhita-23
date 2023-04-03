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

import Link from 'next/link';
import Image from 'next/image';
import { Speaker } from '@lib/types';
import styles from './speakers-grid.module.css';

type Props = {
  speakers: Speaker[];
};

export default function SpeakersGrid({ speakers }: Props) {
  return (
    <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
      {speakers.map(speaker => (
        <Link key={speaker.name} href={`/speakers/${speaker.slug}`}>
          <a role="button" tabIndex={0}>
            <div className="border-solid hover:border-double border-yellow-800 hover:border-yellow-300 bg-grid-pattern bg-cover bg-no-repeat flex flex-col flex-wrap max-w-md h-full w-full lg:max-w-full lg:flex mx-auto md:flex-row bg-black rounded-lg shadow-lg overflow-hidden mx-8 mb-8">
              <div className="md:w-1/3 items-center justify-center p-5">
                <img
                  src={speaker.image.url}
                  alt="your-image-description-here"
                  className="w-20 h-20 object-cover rounded-full object-center"
                />
              </div>
              <div className="p-4 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2 text-white">{speaker.name}</h2>
                <p className="text-white-600 text-base mb-4">{speaker.title}</p>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-white-300 font-bold leading-none">{speaker.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>

    /* <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden  mb-8">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="title"
      />
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-2xl">"title"</h1>
        <p className="text-gray-600 text-sm mt-1">"description"</p>
      </div>
    </div>
    
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8" >
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="title"
      />
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-2xl">"title"</h1>
        <p className="text-gray-600 text-sm mt-1">"description"</p>
      </div>
    </div> */
    // <div className="container-fluid grid gap-2 lg:grid-cols-2 mx-8 ">
    //             {speakers.map(speaker => (
    //               <Link key={speaker.name} href={`/speakers/${speaker.slug}`}>
    //                 <a role="button" tabIndex={0} >
    //                   <div className="flex max-w-md w-full lg:max-w-full lg:flex ">
    //                     <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundColor:'red',backgroundImage: 'url("components/img/card-left.jpg")'}} title="Woman holding a mug">
    //                     <img className="w-16 md:w-32 lg:w-48" src="..." style={{backgroundColor:'red',backgroundImage: 'url("components/img/card-left.jpg")'}}></img>
    //                     </div>
    //                     <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    //                       <div className="mb-8">
    //                         <div className="text-gray-900 font-bold text-xl mb-2">{speaker.name}</div>
    //                         <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //                         lsjflksdjflsdjflkdsjflksdjflksjdlkfjdslkfjdslkj</p>
    //                       </div>
    // <div className="flex items-center">
    //   <img className="w-10 h-10 rounded-full mr-4" src={speaker.image.url} alt="Avatar of Jonathan Reinink" />
    //   <div className="text-sm">
    //     <p className="text-gray-900 font-bold leading-none">{speaker.company}</p>
    //   </div>
    // </div>
    //                     </div>
    //                   </div>
    //                 </a>
    //               </Link>
    //             ))}
    //   </div>
  );
}
