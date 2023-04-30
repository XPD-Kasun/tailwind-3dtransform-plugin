import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

describe('transform flip', () => {

       it('flips correctly', async () => {

              const output = await getTailwindOutput('<div class="transform flip-x flip-y flip-z"></div>');
              //console.log(output.css);
              matchCss(output.css, `
                     .flip-x {
                            --tw-rotate: 180deg;
                            --tw-rotate-y: 180deg;
                     }
                     .flip-y {
                            --tw-rotate: 180deg;
                            --tw-rotate-x: 180deg;
                     }
                     .flip-z {
                            --tw-rotate-x: 180deg;
                            --tw-rotate-y: 180deg;
                     }
                     .transform {
                            transform: ${transform3dGpu.transform};
                     }
              `);
       });

});