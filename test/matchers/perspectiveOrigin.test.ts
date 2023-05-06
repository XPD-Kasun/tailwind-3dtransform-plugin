import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

describe('transform scale', () => {

       it('adds different transforms correctly', async () => {

              const output = await getTailwindOutput(`<div>
                     <div class="perspective-origin-center"></div>
                     <div class="perspective-origin-top-right"></div>
                     <div class="perspective-origin-[33%_75%]"></div>
                     <div class="perspective-origin-[10px]"></div>
                     <div class="perspective-origin-[25rem_50%]"></div>
              </div>`);

              matchCss(output.css, `
                     .perspective-origin-\\[10px\\] {
                            perspective-origin: 10px;
                     }
                     .perspective-origin-\\[25rem_50\\%\\] {
                            perspective-origin:25rem 50%;
                     }
                     .perspective-origin-\\[33\\%_75\\%\\] {
                            perspective-origin: 33% 75%;
                     }
                     .perspective-origin-center {
                            perspective-origin: center;
                     }
                     .perspective-origin-top-right {
                            perspective-origin: top right;
                     }
              `);
       });

       it('generates classes when perspective is present', async () => {

              const output = await getTailwindOutput(`<div>
                     <div class="perspective-1000 perspective-origin-center"></div>
                     <div class="perspective-1000 perspective-origin-top-right"></div>
                     <div class="perspective-1000 perspective-origin-[33%_75%]"></div>
                     <div class="perspective-1000 perspective-origin-[10px]"></div>
                     <div class="perspective-[800px] perspective-origin-[25rem_50%]"></div>
              </div>`);

              matchCss(output.css, `
                     .perspective-origin-\\[10px\\] {
                            perspective-origin: 10px;
                     }
                     .perspective-origin-\\[25rem_50\\%\\] {
                            perspective-origin:25rem 50%;
                     }
                     .perspective-origin-\\[33\\%_75\\%\\] {
                            perspective-origin: 33% 75%;
                     }
                     .perspective-origin-center {
                            perspective-origin: center;
                     }
                     .perspective-origin-top-right {
                            perspective-origin: top right;
                     }
                     .perspective-1000 {
                            perspective: 1000px;
                     }
                     .perspective-\\[800px\\] {
                            perspective: 800px;
                     }
              `);
       });

});