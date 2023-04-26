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
		},
		'scale-3d': function(value) {

			let items = value.split(',');

			while (items.length < 3) {
				items.push(items[0]);
			}

			return extendWithTransform({
				'--tw-scale-x': `${toUnit(items[0])}`,
				'--tw-scale-y': `${toUnit(items[1])}`,
				'--tw-scale-z': `${toUnit(items[2])}`,
			})
		}
	}, {
		supportsNegativeValues: true,
		values: pluginAPI.theme('scale')
	})

}

export default transformScale;