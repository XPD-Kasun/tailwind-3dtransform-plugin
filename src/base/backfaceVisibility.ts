import { PluginAPI } from "tailwindcss/types/config";

export default function backfaceVisibility(pluginAPI: PluginAPI) {

       pluginAPI.addUtilities({
              '.backface-visible': {
                     backfaceVisibility: 'visible'
              },
              '.backface-hidden': {
                     backfaceVisibility: 'hidden'
              },
              '.backface-inherit': {
                     backfaceVisibility: 'inherit'
              },
              '.backface-unset': {
                     backfaceVisibility: 'unset'
              }
       });

}