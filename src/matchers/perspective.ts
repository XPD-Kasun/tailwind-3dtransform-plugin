import { PluginAPI } from "tailwindcss/types/config";
import { linearInterpolateKeys, mapInterpolateKeys } from "../helpers/interpolations";

export default function perspective({matchUtilities, theme}: PluginAPI) {
       
       matchUtilities({
              
              perspective: (value, x) => {
                     // Check if value is a number. If not pass it.
                     if(/[^0-9]/.test(value)) {
                            return {
                                   perspective: `${value}`
                            };
                     }
                     
                     return {
                            perspective: `${value}px`
                     };
              }

       }, {
              supportsNegativeValues: false,
              respectImportant: true,
              type: ['length', 'number'],
              values: theme('perspective')
       });

}

export const perspectiveDefaults = linearInterpolateKeys(0, 1600, 200)