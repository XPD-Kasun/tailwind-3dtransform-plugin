import { PluginAPI } from "tailwindcss/types/config";

function flip(pluginAPI: PluginAPI) {

       pluginAPI.addUtilities({
              '.flip-x': {
                     '--tw-rotate-x': '180deg'
              },
              '.flip-y': {
                     '--tw-rotate-y': '180deg'
              },
              '.flip-z': {
                     '--tw-rotate': '180deg'
              }

       });

}

export default flip;