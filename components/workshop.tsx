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

import cn from 'classnames';
import { Workshop, Talk } from '@lib/types';
import styles from './schedule.module.css';
import TalkCard from './talk-card';

function WorkshopRow({ workshop }: { workshop: Workshop }) {
  // Group talks by the time block
  const timeBlocks = workshop.schedule.reduce((allBlocks: any, talk) => {
    allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
    return allBlocks;
  }, {});

  return (
    <div key={workshop.name} className={styles.row}>
      <h3 className={cn(styles['workshop-name'], styles[workshop.slug])}>
        <span>{workshop.name}</span>
      </h3>
      <div className={cn(styles.talks, styles[workshop.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime].map((talk: Talk, index: number) => (
              <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allworkshops: Workshop[];
};

export default function WorkshopT({ allworkshops }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {allworkshops.map(workshop => (
          <WorkshopRow key={workshop.slug} workshop={workshop} />
        ))}
      </div>
    </div>
  );
}
