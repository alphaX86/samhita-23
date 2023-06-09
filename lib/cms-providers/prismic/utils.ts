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
export function richTextAsText(richTextField: any) {
  if (Object.prototype.toString.call(richTextField) !== '[object Array]') {
    return '';
  }
  return richTextField.map((block: any) => block.text).join(' ');
}

export function getLinkUrl(linkField: any) {
  return linkField && linkField.url ? linkField.url : '';
}
