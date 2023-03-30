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

import { NextApiRequest, NextApiResponse } from 'next';
import { RegEvent } from '@lib/types';
import validator from 'validator';
import { eventRegister,  } from '@lib/db-api';

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

export default async function regEvent(
  req: NextApiRequest,
  res: NextApiResponse<RegEvent | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(501).json({
      error: {
        code: 'method_unknown',
        message: 'This endpoint only responds to POST'
      }
    });
  }

  const email: string = ((req.body.email as string) || '').trim().toLowerCase();
  const ticket: string = req.body.ticketNumber as string;
  const type: string = req.body.type as string;
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: {
        code: 'bad_email',
        message: 'Invalid email'
      }
    });
  }

  // let createdAt: number = Date.now();
  let statusCode = 200;
  
  const newReg = await eventRegister(email, ticket, type);
  statusCode = 200;

  return res.status(statusCode).json({
    email,
    type
  });
}
