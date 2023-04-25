import { transform3d } from "./transform3d";

function extendWithTransform(obj: {}) {
       return {
              ...obj,
              ...transform3d
       };
}

export default extendWithTransform;