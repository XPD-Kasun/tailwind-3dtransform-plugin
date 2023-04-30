import { PluginAPI } from "tailwindcss/types/config";

function perspectiveOrigin(pluginAPI: PluginAPI) {

       pluginAPI.matchUtilities({
              'perspective-origin': (value:string) => {

                     let target = value;
                     //if arbitrary value or default theme value with - 
                     if((value.indexOf('_') > -1) || (value.indexOf('-') > -1)) {

                            let items = value.split('_');
                            target = items[0];
                            if(items.length > 1) {
                                   target += ' ' + items[1];
                            }
                     }

                     return {
                            'perspective-origin': target
                     };
              }
       }, {
              values: pluginAPI.theme('transformOrigin')
       });
}

export default perspectiveOrigin;