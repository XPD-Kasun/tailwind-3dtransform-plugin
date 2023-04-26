import { PluginAPI } from "tailwindcss/types/config";
import extendWithTransform from "../helpers/extendWithTransform";

function toUnit(value: string): string {

	value = value.trim();
	
	if (value.indexOf('px') > -1) {
		if (value === 'px') {
			// For translate-x-px similar
			return '1px';
		}
		return value;
	}

	if(value == 'full') {
		return '100%';
	}

	return value;

}

function transformTranslate(pluginAPI: PluginAPI) {

	pluginAPI.matchUtilities({
		'translate-z': function (value) {
			return extendWithTransform({
				'--tw-translate-z': `${toUnit(value)}`
			});
		},
		'translate-3d': function (value) {

			let items = value.split(',');

			while (items.length < 3) {
				items.push(items[0]);
			}

			return extendWithTransform({
				'--tw-translate-x': `${toUnit(items[0])}`,
				'--tw-translate-y': `${toUnit(items[1])}`,
				'--tw-translate-z': `${toUnit(items[2])}`,
			});
		}
	}, {
		supportsNegativeValues: true,
		values: pluginAPI.theme('translate')
	})

}

export default transformTranslate;