---
sidebar_position: 2
---
import CodeBlock from '../../src/components/CodeBlock';

# Perspective

Utilities for specifying the perspective for an element.

import {linearInterpolateKeys} from '../../../src/helpers/interpolations'

<div className="table-container">
       <table className="stripped-table" style={{width:'100%'}}>
              <thead>
                     <tr>
                            <td>Class</td>
                            <td>Properties</td>                     
                     </tr>
              </thead>
              <tbody>
                     {
                            Object.keys(linearInterpolateKeys(0, 1600, 200)).map((value, i) => (
                                   <tr key={i}>
                                          <td>perspective-{value}</td>
                                          <td>perspective: {value}px</td>
                                   </tr>
                            ))
                     }
              </tbody>
       </table>
</div>

## Basic Usage

You can use `perspective-` classes on the **parent** to set the desired perspective value for the child. 

<CodeBlock className="my-10">
<div className="flex">
  <div className="perspective-400">
    <div class="transform rotate-y-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow ">
      <svg class="w-10 h-10 mb-2 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
          clip-rule="evenodd"></path>
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
      </svg>
      <h5 class="mb-2 text-2xl font-semibold text-gray-900">perspective-400</h5>
      <p>transform rotate-y-30</p>
    </div>
  </div>
  <div className="perspective-800">
    <div class="transform rotate-y-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow ">
      <svg class="w-10 h-10 mb-2 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
          clip-rule="evenodd"></path>
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
      </svg>
      <h5 class="mb-2 text-2xl font-semibold text-gray-900">perspective-800</h5>
      <p>transform rotate-y-30</p>
    </div>
  </div>
  <div className="perspective-1600">
    <div class="transform rotate-y-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow ">
      <svg class="w-10 h-10 mb-2 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
          clip-rule="evenodd"></path>
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
      </svg>
      <h5 class="mb-2 text-2xl font-semibold text-gray-900">perspective-1600</h5>
      <p>transform rotate-y-30</p>
    </div>
  </div>
</div>
</CodeBlock>

```html title="Effect of using different perspective values"

<div className="flex">
  <div className="perspective-400">
    <div class="transform rotate-y-30">
      <!-- ... -->
      <p>transform rotate-y-30</p>
    </div>
  </div>
  <div className="perspective-800">
    <div class="transform rotate-y-30">
      <!-- ... -->
      <p>transform rotate-y-30</p>
    </div>
  </div>
  <div className="perspective-1600">
    <div class="transform rotate-y-30">
      <!-- ... -->
      <p>transform rotate-y-30</p>
    </div>
  </div>
</div>

```

:::info
You can use responsive modifiers to target only certain media queries. For example, `md:perspective-800` will only add perspective property on medium or higher responsive breakpoints. [Read More](docs/faq/modifiers)
:::


## Customizing Your Theme

Plugin configures the default theme with key `perspective` with values from 0 to 1600. You customize this value by editing `theme.perspective` in your `tailwind.config.js` file.

```js title="tailwind.config.js"
module.exports = {
  theme: {
    extend: {
      perspective: {
        300: '300px',
      }
    }
  }
}
```

## Arbitrary Values

You can add an arbitrary value for `perpective` in your html file in the following way.

```html
<div class="perspective-[300px]">
<!-- Your code --->
</div>
```

Learn more about arbitrary values from [using arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values).

## Read More

Perspective sets the distance how far the user is placed to relative to z=0 plane. 
[Read more on perspective.](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)

:::info
You can use modifiers such as `md:perspective-800` to target media queries, hover, active... etc. You can read about modifiers [here](https://tailwindcss.com/docs/hover-focus-and-other-states).
:::
