import { describe, it, expect } from '@jest/globals';
import "../setup/toMatchCss.d";
import { getTailwindOutput, format } from '../setup/util';
import matchCss from '../setup/matchCss';
import { transform3dGpu } from '../../src/helpers/transform3d';

it('overrides tailwind\'s default transform property', async () => {

       let output = await getTailwindOutput(`<div class="transform"></div>`);

       matchCss(output.css, `       
              .transform {
                     transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
              }
              .transform {
                     transform: ${transform3dGpu.transform};
              }
       `);
});

it('overrides tailwind\'s cpu and gpu transform properties', async () => {

       let output = await getTailwindOutput(`<div class="transform-cpu"></div><div class="transform-gpu"></div>`);

       matchCss(output.css, `       
              .transform-cpu {
                     transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
              }
              .transform-gpu {
                     transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
              }
              .transform-cpu {
                     transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate)) rotate3d(var(--tw-rotate-3d)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scale3d(var(--tw-scale-x),var(--tw-scale-y),var(--tw-scale-z))
              }
              .transform-gpu {
                     transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate)) rotate3d(var(--tw-rotate-3d)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scale3d(var(--tw-scale-x),var(--tw-scale-y),var(--tw-scale-z))
              }
       `);

});