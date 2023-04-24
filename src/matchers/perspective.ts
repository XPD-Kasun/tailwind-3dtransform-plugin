import { PluginAPI } from "tailwindcss/types/config";
import { linearInterpolateKeys, mapInterpolateKeys } from "../helpers/interpolations";

export default function perspective({matchUtilities, theme}: PluginAPI) {
       
       matchUtilities({
              
              perspective: (value) => {
                     // Check if value is a number. If not pass it.
                     if(/[^0-9]/.test(value)) {
                            return {
                                   perspective: `${value}`
                            };
                     }
                     
                     // Else if value less than 10, we use rem. Else we use px.
                     return {
                            perspective: `${value}px`
                     };
              }

       }, {
              supportsNegativeValues: false,
              respectImportant: true,
              type: ['length', 'percentage', 'number'],
              values: theme('perspective')
       });

}

export const perspectiveDefaults = linearInterpolateKeys(0, 1600, 200)