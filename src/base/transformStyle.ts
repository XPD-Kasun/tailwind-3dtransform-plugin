import { PluginAPI } from "tailwindcss/types/config";

export default function transformStyle(pluginAPI: PluginAPI) {

       pluginAPI.addUtilities({
              '.transform-style-flat': {
                     transformStyle: 'flat'
              },
              '.transform-style-3d': {
                     transformStyle: 'preserve-3d'
              }
       });
}