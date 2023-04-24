declare module 'expect' {
       interface Matchers<R> {
              toMatchCss(target: string): R;
       }
}

export {};