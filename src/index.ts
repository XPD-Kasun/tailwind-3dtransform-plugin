import plugin from 'tailwindcss/plugin';
import perspective, {perspectiveDefaults} from './matchers/perspective';
import transformRotate from './matchers/transformRotate';
import transformTranslate from './matchers/transformTranslate';
import transformScale from './matchers/transformScale';


const tailwind3dTransformPlugin = plugin((pluginAPI) => {

       perspective(pluginAPI);
       transformRotate(pluginAPI);
       transformTranslate(pluginAPI);
       transformScale(pluginAPI);

}, {
       theme: {
              perspective: perspectiveDefaults
       }
});

export default tailwind3dTransformPlugin;

