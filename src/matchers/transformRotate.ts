import { PluginAPI } from "tailwindcss/types/config";
import extendWithTransform from "../helpers/extendWithTransform";

function toUnit(value: string): string {

	if(/[^0-9]/.test(value)) {
		return value;		
	}
	return `${value}deg`;
}


function transformRotate(pluginAPI: PluginAPI) {

	pluginAPI.matchUtilities({
		'rotate-x': function(value) { 
			return extendWithTransform({
  				'--tw-rotate-x': `${toUnit(value)}`
			});
		},
		'rotate-y': function(value) {
			return extendWithTransform({
				'--tw-rotate-y': `${toUnit(value)}`
			});
		},
		'rotate-z': function(value) {
			// Default tw variable
			return extendWithTransform({
				'--tw-rotate': `${toUnit(value)}`
			});
		},
		'rotate-3d': function(value) {
			return extendWithTransform({
				'--tw-rotate-3d': `rotate3d(${value})`
			});
		}
	},{
		supportsNegativeValues: true,		
		values: pluginAPI.theme('rotate')
	})

}

export default transformRotate;