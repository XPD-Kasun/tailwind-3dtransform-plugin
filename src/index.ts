import plugin from 'tailwindcss/plugin';
import perspective, {perspectiveDefaults} from './matchers/perspective';


const tailwind3dTransformPlugin = plugin((pluginAPI) => {

       perspective(pluginAPI);

}, {
       theme: {
              perspective: perspectiveDefaults
       }
});

export default tailwind3dTransformPlugin;

