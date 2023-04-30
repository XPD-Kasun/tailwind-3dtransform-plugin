import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

it('renders transform box classes', async () => {

       let output = await getTailwindOutput(`<div>
              <div class="transform-box-content"></div>
              <div class="transform-box-border"></div>
              <div class="transform-box-fill"></div>
              <div class="transform-box-stroke"></div>
              <div class="transform-box-view"></div>
       </div>`);

       matchCss(output.css, `
              .transform-box-content {
                     transform-box: content-box;
              }
              .transform-box-border {
                     transform-box: border-box;
              }
              .transform-box-fill {
                     transform-box: fill-box;
              }
              .transform-box-stroke {
                     transform-box: stroke-box;
              }
              .transform-box-view {
                     transform-box: view-box;
              }
       `);
});