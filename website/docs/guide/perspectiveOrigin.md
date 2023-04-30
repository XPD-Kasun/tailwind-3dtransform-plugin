---
sidebar_position: 10
title: Perspective Origin
---

# Perspective Origin

Utilities for setting perspective origin css property.

<div className="table-container">
       <table className="stripped-table" style={{width:'100%'}}>
              <thead>
                     <tr>
                            <td>Class</td>
                            <td>Properties</td>                     
                     </tr>
              </thead>
              <tbody>
                     <tr>
                            <td>transform-box-content</td>
                            <td>transform-box: content-box;</td>
                     </tr>
                     <tr>
                            <td>transform-box-border</td>
                            <td>transform-box: border-box;</td>
                     </tr>
                     <tr>
                            <td>transform-box-fill</td>
                            <td>transform-box: fill-box;</td>
                     </tr>
                     <tr>
                            <td>transform-box-stroke</td>
                            <td>transform-box: stroke-box;</td>
                     </tr>
                     <tr>
                            <td>transform-box-view</td>
                            <td>transform-box: view-box;</td>
                     </tr>
              </tbody>
       </table>
</div>

## Basic Usage

Use perspective-origin classes set the perspective origin property which is used to determine the position at which the viewer is looking. [See more on perspective origin from MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin). This is used along with [perspective](/docs/guide/perspective) class.

For instance you can use,

```html
<div class="perspective-800 perspective-origin-top-left">
       <!--Some elementes-->
</div>
```

## Customizing Your Theme

This takes the same values as `transformOrigin`. We can add new `perspective-origin` classes by extend the default theme by giving additional values for `transformOrigin` key.

```js title=tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transformOrigin: {
        '1/2': '50%',
      }
    }
  }
}
```

## Arbitrary Values

Use usual bracket syntax to add arbitrary values for perspective origin. If you have two values, then join them with `_` char. For example,

```html
       <div class="perspective-origin-[40%_50%]">
              <!-- html content -->
       </div>
```

Learn more about arbitrary value support in the tailwindcss [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) documentation.