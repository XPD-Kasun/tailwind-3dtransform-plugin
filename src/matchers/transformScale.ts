import { PluginAPI } from "tailwindcss/types/config";
import extendWithTransform from "../helpers/extendWithTransform";

function toUnit(value: string): string {

       return value;
}

function transformScale(pluginAPI: PluginAPI) {

	pluginAPI.matchUtilities({
		'scale-z': function (value) {
			return extendWithTransform({
				'--tw-scale-z': `${toUnit(value)}`
			});
		}
	}, {
		supportsNegativeValues: true,
		values: pluginAPI.theme('scale')
	})

}

export default transformScale;