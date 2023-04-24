import tailwindcss from 'tailwindcss';
import postcss, { Postcss } from 'postcss';
import lightningcss from 'lightningcss';
import plugin from '../../src/index';

export function format(input: string): string {

       return lightningcss
              .transform({
                     filename: 'input.css',
                     code: Buffer.from(input),
                     minify: false,
                     targets: { chrome: 106 << 16 },
                     drafts: {
                            nesting: true,
                            customMedia: true,
                     },
              })
              .code.toString('utf8');

}

export async function getTailwindOutput(html, config?, from = undefined): Promise<postcss.Result> {

       return postcss(tailwindcss({
              content: [{
                     raw: html
              }],
              plugins: [plugin],
              ...config
       })).process("@tailwind utilities;", {
              from
       }).then();

}