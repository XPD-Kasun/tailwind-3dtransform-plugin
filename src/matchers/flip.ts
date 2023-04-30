import { PluginAPI } from "tailwindcss/types/config";

function flip(pluginAPI: PluginAPI) {

       pluginAPI.addUtilities({
              '.flip-x': {
                     '--tw-rotate': '180deg',
                     '--tw-rotate-y': '180deg'
              },
              '.flip-y': {
                     '--tw-rotate': '180deg',
                     '--tw-rotate-x': '180deg'
              },
              '.flip-z': {
                     '--tw-rotate-x': '180deg',
                     '--tw-rotate-y': '180deg'
              }
       });

}

export default flip;