import plugin from 'tailwindcss/plugin';
import perspective, { perspectiveDefaults } from './matchers/perspective';
import transformRotate from './matchers/transformRotate';
import transformTranslate from './matchers/transformTranslate';
import transformScale from './matchers/transformScale';
import transformOverride from './matchers/transformOverride';
import flip from './matchers/flip';


const tailwind3dTransformPlugin = plugin((pluginAPI) => {

       perspective(pluginAPI);
       transformRotate(pluginAPI);
       transformTranslate(pluginAPI);
       transformScale(pluginAPI);
       flip(pluginAPI);
       transformOverride(pluginAPI);

}, {
       theme: {
              extend: {
                     perspective: perspectiveDefaults,
                     rotate: {
                            30: '30deg',
                            60: '60deg',
                            135: '135deg',
                            120: '120deg',
                            270: '270deg'
                     },
                     variables: {
                            '--tw-rotate-x': '0',
                            '--tw-rotate-y': '0',
                            '--tw-rotate-3d': '0,0,0,0deg',
                            '--tw-scale-z': '1',
                            '--tw-translate-z': '0',
                     }
              }
       }
});

export default tailwind3dTransformPlugin;

