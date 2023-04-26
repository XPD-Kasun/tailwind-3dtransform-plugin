import { PluginAPI } from "tailwindcss/types/config";
import { transform3dCpu, transform3dGpu } from "../helpers/transform3d";

function transformOverride(pluginAPI: PluginAPI) {

       pluginAPI.addUtilities({
              '.transform': transform3dGpu,
              '.transform-cpu': transform3dCpu,
              '.transform-gpu': transform3dGpu,
       });

}

export default transformOverride;