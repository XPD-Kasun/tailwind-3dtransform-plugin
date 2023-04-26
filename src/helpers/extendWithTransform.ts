import { transform3dGpu } from "./transform3d";

function extendWithTransform(obj: {}) {
       // return {
       //        ...obj,
       //        ...transform3dGpu
       // };
       return obj;
}

export default extendWithTransform;