---
sidebar_position: 2
---
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
                            Object.keys(linearInterpolateKeys(0, 1600, 200)).map((value) => (
                                   <tr>
                                          <td>perspective-{value}</td>
                                          <td>perspective: {value}px</td>
                                   </tr>
                            ))
                     }
              </tbody>
       </table>
</div>

## Basic Usage

Use perspect-{value} to set the perspective for an element.


:::info
You can use responsive modifiers to target only certain media queries. For example, `md:perspective-800` will only add perspective property on medium or higher responsive breakpoints.
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

