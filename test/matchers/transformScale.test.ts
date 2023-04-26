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

});