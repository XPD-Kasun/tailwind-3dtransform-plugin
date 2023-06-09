import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

describe('transform scale', () => {

       it('adds different transforms correctly', async () => {

              const output = await getTailwindOutput('<div class="transform scale-z-110 translate-z-96 rotate-x-60"></div>');

              matchCss(output.css, `
                     .rotate-x-60 {
                            --tw-rotate-x: 60deg;
                     }
                     .translate-z-96 {
                            --tw-translate-z: 24rem;
                     }
                     .scale-z-110 {
                            --tw-scale-z: 1.1;
                     }
                     .transform {
                            transform: ${transform3dGpu.transform};
                     }
              `);
       });


});