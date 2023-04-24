import { format } from "./util";
import { expect } from "@jest/globals";

export default function matchCss(expected, target) {

       let lightCssExpect = format(expected);
       let lightCssTarget = format(target);

       expect(lightCssExpect).toEqual(lightCssTarget);
}