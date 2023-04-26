import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format, loadTestCssFile } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

describe('transform rotate', () => {

       it('creates correct classes for arbirary values', async () => {

              const output = await getTailwindOutput(`<div>                    
                     <div class="transform rotate-x-[20deg] rotate-y-[30] -rotate-y-[30deg]"></div>
                     <div class="transform rotate-3d-[1,1,0,30deg]"></div>
              </div>`);

              matchCss(output.css, `
                     .-rotate-y-\\[30deg\\] {
                            --tw-rotate-y: -30deg;
                     }
                     .rotate-3d-\\[1\\2c 1\\2c 0\\2c 30deg\\] {
                            --tw-rotate-3d: 1,1,0,30deg;
                     }
                     .rotate-x-\\[20deg\\] {
                            --tw-rotate-x: 20deg;
                     }
                     .rotate-y-\\[30\\] {
                            --tw-rotate-y: 30;
                     }
                     .transform {
                            transform: ${transform3dGpu.transform}
                     }
              `);


       });

       it('creates classes for theme values', async () => {

              const output = await getTailwindOutput(`<div>
                     <div class="transform rotate-x-30 rotate-x-45 rotate-x-60 rotate-x-90"></div>                     
                     <div class="transform rotate-x-120 rotate-x-135 rotate-x-180 rotate-x-270"></div>
                     <div class="transform -rotate-x-30 -rotate-x-45 -rotate-x-60 -rotate-x-90"></div>
                     <div class="transform -rotate-x-120 -rotate-x-135 -rotate-x-180  -rotate-x-270"></div>

                     <div class="transform rotate-y-30 rotate-y-45 rotate-y-60 rotate-y-90"></div>                     
                     <div class="transform rotate-y-120 rotate-y-135 rotate-y-180 rotate-y-270"></div>
                     <div class="transform -rotate-y-30 -rotate-y-45 -rotate-y-60 -rotate-y-90"></div>
                     <div class="transform -rotate-y-120 -rotate-y-135 -rotate-y-180  -rotate-y-270"></div>
                     
                     <div class="transform rotate-30 rotate-45 rotate-60 rotate-90"></div>                     
                     <div class="transform rotate-120 rotate-135 rotate-180 rotate-270"></div>
                     <div class="transform -rotate-30 -rotate-45 -rotate-60 -rotate-90"></div>
                     <div class="transform -rotate-120 -rotate-135 -rotate-180 -rotate-270"></div>
              </div>`);

              matchCss(output.css, loadTestCssFile('transformRotate-theme.test.css'));

       });


});