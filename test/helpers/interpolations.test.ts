import { describe, it, expect } from '@jest/globals';
import {
       linearInterpolateKeys,
       mapInterpolateKeys,
       muliplicateInterpolateKeys
} from '../../src/helpers/interpolations';

it('generates correct sequence for linearInterpolateKeys', () => {

       let obj = linearInterpolateKeys(10, 24, 2);
       const result = {
              10: '10',
              12: '12',
              14: '14',
              16: '16',
              18: '18',
              20: '20',
              22: '22',
              24: '24'
       };

       expect(obj).toStrictEqual(result);
});

describe('generates correct sequence for mapInterpolateKeys', () => {

       it('stepping by 2 without mapping the values', () => {

              let obj = mapInterpolateKeys(10, 24, (x) => x + 2, x => x);
              const result = {
                     10: '10',
                     12: '12',
                     14: '14',
                     16: '16',
                     18: '18',
                     20: '20',
                     22: '22',
                     24: '24'
              };

              expect(obj).toStrictEqual(result);
       });

       it('stepping by 2 and mapping by multipliying by 3', () => {

              let obj = mapInterpolateKeys(10, 24, (x) => x + 2, x => x * 3);
              const result = {
                     10: '30',
                     12: '36',
                     14: '42',
                     16: '48',
                     18: '54',
                     20: '60',
                     22: '66',
                     24: '72'
              };

              expect(obj).toStrictEqual(result);
       });

});

it('generates correct sequence for muliplicateInterpolateKeys', () => {

       let obj = muliplicateInterpolateKeys(10, 24, 2, 3);
       const result = {
              10: '30',
              12: '36',
              14: '42',
              16: '48',
              18: '54',
              20: '60',
              22: '66',
              24: '72'
       };

       expect(obj).toStrictEqual(result);
       
}); 