import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { readFileSync } from 'fs';
import path from 'path';
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';

describe('transform scale', () => {

       it('scale-z creates correct classes', async () => {

              const output = await getTailwindOutput('<div class="scale-z-110 scale-z-[0.7]"></div>');
              //console.log(output.css);
              matchCss(output.css, `
                     .scale-z-110 {
                            --tw-scale-z: 1.1;
                     }
                     .scale-z-\\[0\\.7\\] {
                            --tw-scale-z: 0.7;
                     }
              `);
       });

       it('scale-3d creates correct classes', async () => {

              const output = await getTailwindOutput(`<div>
                     <div class="scale-3d-[0.7]"></div>
                     <div class="scale-3d-[0.5,0.7,0.3]"><div>
                     <div class="scale-3d-110"></div>
              </div>`);

              matchCss(output.css, `
                     .scale-3d-110 {
                            --tw-scale-x: 1.1;
                            --tw-scale-y: 1.1;
                            --tw-scale-z: 1.1;
                     }                     
                     .scale-3d-\\[0\\.5\\,0\\.7\\,0\\.3\\] {
                            --tw-scale-x: .5;
                            --tw-scale-y: .7;
                            --tw-scale-z: .3;
                     }                     
                     .scale-3d-\\[0\\.7\\] {
                            --tw-scale-x: .7;
                            --tw-scale-y: .7;
                            --tw-scale-z: .7;
                     }
              `);
       });

});