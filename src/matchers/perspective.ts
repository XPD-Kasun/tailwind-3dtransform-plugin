import { PluginAPI } from "tailwindcss/types/config";
import { linearInterpolateKeys, mapInterpolateKeys } from "../helpers/interpolations";

export default function perspective({matchUtilities, theme}: PluginAPI) {
       
       matchUtilities({
              
              perspective: (value) => {
                     
                     const unit = (value < 100) ? 'rem' : 'px';
                     return {
                            perspective: `${value}${unit}`
                     };
              }

       }, {
              supportsNegativeValues: false,
              respectImportant: true,
              type: 'number',
              values: theme('perspective')
       });

}

export const perspectiveDefaults = Object.assign(
       mapInterpolateKeys(1, 10, (i) => 2*i, (i) => i/4),
       linearInterpolateKeys(0, 1200, 200)
);