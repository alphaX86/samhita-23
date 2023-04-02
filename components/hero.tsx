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
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';
import { color } from '@prismicio/helpers/dist/isFilled';
import { useEffect, useState } from 'react';

function Timer() {
	const event = new Date("2023-04-15").getTime()
 
	const [days, setDays] = useState("😎")
	const [hours, setHours] = useState("😎")
	const [minutes, setMinutes] = useState("😎")
	const [seconds, setSeconds] = useState("😎")
 
	const [isEventOver, setIsEventOver] = useState(false)
 
	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime()
			const distance = event - now
 
			if (distance < 0) {
				setIsEventOver(true)
				clearInterval(interval)
				return
			}
 
			setDays(Math.floor(distance / (1000 * 60 * 60 * 24)).toString())
			setHours(
				Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				).toString()
			)
			setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString())
			setSeconds(Math.floor((distance % (1000 * 60)) / 1000).toString())
		}, 1000)
 
		return () => {
			clearInterval(interval)
		}
	}, [event])
 
	return isEventOver ? (
		<></>
	) : (
		<div className={styles.timer}>
			<div className={styles.timerItem}>
				<span className={styles.timerNumber}>{days}</span>
				<span className={styles.timerText}>Days</span>
			</div>
			<div className={styles.timerItem}>
				<span className={styles.timerNumber}>{hours}</span>
				<span className={styles.timerText}>Hrs</span>
			</div>
			<div className={styles.timerItem}>
				<span className={styles.timerNumber}>{minutes}</span>
				<span className={styles.timerText}>Mins</span>
			</div>
			<div className={styles.timerItem}>
				<span className={styles.timerNumber}>{seconds}</span>
				<span className={styles.timerText}>Secs</span>
			</div>
		</div>
	)
}

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      
      <h3 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.herotext)}>
        Welcome to 
        <br className={styleUtils['show-on-desktop']} /> {BRAND_NAME} 
      </h3>
      
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Offline</strong>
        </p>
      </div>
	  <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.timer)}>
      	<Timer />
	  </div>
    </div>
  );
}
