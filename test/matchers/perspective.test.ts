import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { readFileSync } from 'fs';
import path from 'path';
import { getTailwindOutput, format, loadTestCssFile } from '../setup/util';
import matchCss from '../setup/matchCss';


describe('perspective Matcher', () => {

       it('returns correct classes for default theme', async () => {

              let result = await getTailwindOutput(`<div>
                     <div class="perspective-200"></div>
                     <div class="perspective-400"></div>
                     <div class="perspective-600"></div>
                     <div class="perspective-800"></div>
                     <div class="perspective-1000"></div>
                     <div class="perspective-1200"></div>
                     <div class="perspective-1400"></div>
                     <div class="perspective-1600"></div>
              </div>`);

              expect(result.css).toMatchCss(loadTestCssFile('perspective.test.css'));
       });
       it('returns correct classes for applied values', async () => {

              let result = await getTailwindOutput(`<div>
                     <div class="perspective-[100px]"></div>
                     <div class="perspective-[300]"></div>
                     <div class="perspective-[300px]"></div>
                     <div class="perspective-[70vh]"></div>
                     <div class="perspective-[454vw]"></div>
                     <div class="perspective-[100rem]"></div>
              </div>`);

              matchCss(result.css, `
                     .perspective-\\[100px\\]{
                            perspective: 100px;
                     }
                     .perspective-\\[100rem\\]{
                            perspective: 100rem;
                     }
                     .perspective-\\[300\\]{
                            perspective: 300px;
                     }
                     .perspective-\\[300px\\]{
                            perspective: 300px;
                     }
                     .perspective-\\[454vw\\]{
                            perspective: 454vw;
                     }
                     .perspective-\\[70vh\\]{
                            perspective: 70vh;
                     }
              `);
       });
});