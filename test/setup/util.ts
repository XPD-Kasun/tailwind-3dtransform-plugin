import tailwindcss from 'tailwindcss';
import postcss, { Postcss } from 'postcss';
import lightningcss from 'lightningcss';
import plugin from '../../src/index';
import { readFileSync } from 'fs';
import path from 'path';

interface TailwindTestConfig {
       inputCSS: string
}

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

export function loadTestCssFile(file: string) {
       return readFileSync(path.join(__dirname, '../matchers', 'css', file)).toString('utf-8');
}

export async function getTailwindOutput(html, config?:TailwindTestConfig, from = undefined): Promise<postcss.Result> {

       let inputCSS = config?.inputCSS || "@tailwind utilities;";
       return postcss(tailwindcss({
              content: [{
                     raw: html
              }],
              plugins: [plugin],
              ...config
       })).process(inputCSS, {
              from
       }).then();

}