import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

it('renders backface visibility classes', async () => {

       let output = await getTailwindOutput(`<div>
              <div class="backface-visible"></div>
              <div class="backface-hidden"></div>
              <div class="backface-inherit"></div>
              <div class="backface-unset"></div>
       </div>`);

       console.log(output.css);

       matchCss(output.css, `
              .backface-visible {
                     backface-visibility: visible;
              }
              .backface-hidden {
                     backface-visibility: hidden;
              }
              .backface-inherit {
                     backface-visibility: inherit;
              }
              .backface-unset {
                     backface-visibility: unset;
              }
       `);
});