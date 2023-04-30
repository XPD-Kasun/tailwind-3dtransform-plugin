import { PluginAPI } from "tailwindcss/types/config";

export default function transformBox(pluginAPI: PluginAPI) {

       pluginAPI.addUtilities({
              '.transform-box-content': {
                     transformBox: 'content-box'
              },
              '.transform-box-border': {
                     transformBox: 'border-box'
              },
              '.transform-box-fill': {
                     transformBox: 'fill-box'
              },
              '.transform-box-stroke': {
                     transformBox: 'stroke-box'
              },
              '.transform-box-view': {
                     transformBox: 'view-box'
              }
       });
}