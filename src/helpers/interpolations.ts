type Mapper = (value: number) => number;

export function linearInterpolateKeys(start:number, end:number, interval:number) {

       let obj = {};

       for (var i = start; i <= end; i += interval) {
              obj[i] = i.toString();
       }

       return obj;
}

export function muliplicateInterpolateKeys(start:number, end: number, multiply: number) {

       let obj = {};

       for(var i=start; i <= end; i*=multiply) {
              obj[i] = i.toString();
       }

       return obj;
}

export function mapInterpolateKeys(start: number, end: number, incrementor: Mapper, mapper: Mapper) {

       let obj = {};

       for(var i=start; i <= end; i=incrementor(i)) {
              obj[i] = mapper(i);
       }

       return obj;
}
