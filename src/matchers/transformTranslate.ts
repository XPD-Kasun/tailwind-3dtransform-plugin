import { PluginAPI } from "tailwindcss/types/config";
import extendWithTransform from "../helpers/extendWithTransform";

function toUnit(value: string): string {

	value = value.trim();

	if (/^\d+(\.\d+)?$/.test(value)) {

		//if the value is a number then it's considered as 1/4 of rem. Works with tw.
		let finalValue = (parseInt(value) / 4).toFixed(2) + 'rem';
		return finalValue;
	}

	// Else we have a non digit in value.

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

	if (value.indexOf('/') > -1) {

		let finalValue = "";

		try {
			// we have translate-x-1/2 similar ones. Lets support tw built ins
			let num = parseInt(value[value.length - 3]);
			let den = parseInt(value[value.length - 1]);

			finalValue = ((num / den) * 100).toString() + '%';
		}
		catch (e) {
			console.log("Invalid value for transform : ", value);
		}

		return finalValue;

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