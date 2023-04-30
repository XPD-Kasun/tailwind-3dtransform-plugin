import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

it('renders transform box classes', async () => {

       let output = await getTailwindOutput(`<div>
              <div class="transform-style-flat"></div>
              <div class="transform-style-3d"></div>
       </div>`);

       matchCss(output.css, `
              .transform-style-flat {
                     transform-style: flat;
              }
              .transform-style-3d {
                     transform-style: preserve-3d;
              }
       `);
});