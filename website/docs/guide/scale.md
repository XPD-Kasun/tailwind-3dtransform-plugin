---
sidebar_position: 4
title: Scale
---

# Scale

Utilities for scaling an element on all three axis.

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
                            [0, 50, 75, 90, 95, 100, 105, 110, 125, 150].map((value) => {
                                   return (
                                          ['x', 'y', 'z'].map((axis) => (
                                                 <tr>
                                                        <td>scale-{axis}-{value}</td>
                                                        <td>transform: scale{axis.toUpperCase()}({value/100})</td>
                                                 </tr>
                                          ))
                                   );
                            })
                     }              
                     <tr>
                            <td>scale-value</td>
                            <td>transform: scale3d(value, value, value);</td>
                     </tr>
              </tbody>
       </table>
</div>

For instance, `scale-x-110` and `scale-z-50` generates a class that is equal to the following class,

```css
.scale-x-110 {
       transform: scale3d(1.1, 1, 1);
}
.scale-z-50 {
       transform: scale3d(1, 1, 0.5);
}
```

Note that, although above css classes uses transform property, actual generated classes will utilize css variables so that you can use multiple transform classes on the same element. For example consider, 

```html
<div class="scale-x-50 rotate-x-60"></div>
```
This is possible since we use css variables instead of using `transform` property directly. Due to this nature, its important to manually add `transform` class to your element's class list as follows.

```html
<div class="transform scale-x-50 rotate-x-60"></div>
```


## Basic Usage

Use the `scale-(axis)-value` to set the rotation for an element. You can use multiple `scale` classes with different axis to transform elements on targetted axis.

## Customizing Your Theme

We extend the default theme by adding additional values for `scale` key. You can add any custom values from `tailwind.config.js` file.

```js title=tailwind.config.js
module.exports = {
  theme: {
    extend: {
      scale: {
        '20': '0.2',
      }
    }
  }
}
```
## Arbitrary Values

If you need to use an custom value for scale, you can use the following method.

```html
<div class="scale-x-[1.3]">
  <!-- More Items -->
</div>
```

Learn more about arbitrary value support in the tailwindcss [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) documentation.