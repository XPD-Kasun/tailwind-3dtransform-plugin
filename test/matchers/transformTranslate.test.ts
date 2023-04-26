import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

describe('transform translate', () => {

       it('creates correct classes for arbitrary values', async () => {

              const output = await getTailwindOutput(`<div>                    
                     <div class="transform translate-z-[10vh] -translate-z-[100px] translate-z-[calc(100%-10px)]"></div>
                     <div class="transform"></div>
              </div>`);

              matchCss(output.css, `
                     .-translate-z-\\[100px\\] {
                            --tw-translate-z: -100px;
                     }
                     .translate-z-\\[10vh\\] {
                            --tw-translate-z: 10vh;
                     }
                     .translate-z-\\[calc\\(100\\%-10px\\)\\] {
                            --tw-translate-z: calc(100% - 10px);
                     }
                     .transform {
                            transform: ${transform3dGpu.transform};
                     }
              `);
       });

       it('create classes for theme values', async () => {

              let output = await getTailwindOutput(`<div>
                     <div class="transform translate-z-2 translate-z-2.5 translate-z-48 translate-z-60"></div>                     
                     <div class="transform translate-z-1/2 translate-z-full"></div>
              </div>`);

              matchCss(output.css, `
                     .translate-z-1\\/2 {
                            --tw-translate-z: 50%
                     }
                     .translate-z-2 {
                            --tw-translate-z: 0.5rem
                     }
                     .translate-z-2\\.5 {
                            --tw-translate-z: 0.625rem
                     }
                     .translate-z-48 {
                            --tw-translate-z: 12rem
                     }
                     .translate-z-60 {
                            --tw-translate-z: 15rem
                     }
                     .translate-z-full {
                            --tw-translate-z: 100%
                     }
                     .transform {
                            transform: ${transform3dGpu.transform};
                     }
              `);
       });

});