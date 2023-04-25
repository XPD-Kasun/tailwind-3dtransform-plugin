import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { readFileSync } from 'fs';
import path from 'path';
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';

describe('transform rotate', () => {

       it('rotateX creates rotate-z based classes', async () => {

              const output = await getTailwindOutput('<div class="rotate-x-45"></div>');

              matchCss(output.css, `.rotate-x-45 {
                     --tw-rotate-x: 45deg;
                     transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate)) rotate3d(var(--tw-rotate-3d)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scale3d(var(--tw-scale-x),var(--tw-scale-y),var(--tw-scale-z));
              }
              `)
              

       });

       it.todo('rotateY with 30, 60, 120 ... included');
       it.todo('rotateZ');       
       it.todo('rotate3d transforms doesnt cascaded by tw transform key');


});