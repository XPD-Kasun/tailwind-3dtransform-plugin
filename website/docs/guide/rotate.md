---
sidebar_position: 3
---

# Rotate

Utilities for rotating an element on all three axis.

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
                            [0, 1, 2, 3, 6, 12, 30, 45, 60, 90, 135, 180, 270].map((value, i1) => {
                                   return <>
                                          {
                                                 ['x', 'y', 'z'].map((axis, i2) => (
                                                        <tr key={i1 + ' ' + i2}>
                                                               <td>rotate-{axis}-{value}</td>
                                                               <td>transform: rotate{axis.toUpperCase()}({value}deg);</td>
                                                        </tr>
                                                 ))
                                          }
                                          </>
                            })
                     }              
                     <tr>
                            <td>rotate-3d-[1,0,1,30deg]</td>
                            <td>transform: rotate3d(1,0,1,30deg);</td>
                     </tr>
              </tbody>
       </table>
</div>

## Basic Usage

Use the `rotate-(axis)-value` to set the rotation for an element. If you need to use rotate3d css function instead, then use `rotate-3d-[1,1,1,30deg]` class to add ad-hoc rotations.


## Customizing Your Theme

We extend the default theme by adding additional values for `rotate` key. You can add any custom values from `tailwind.config.js` file.

```js title=tailwind.config.js
module.exports = {
  theme: {
    extend: {
      rotate: {
        '20': '20deg',
      }
    }
  }
}
```
## Arbitrary Values

If you need to use an custom value for rotation, you can use the following syntax.

```html
<div class="rotate-[30deg]">
  <!-- More Items -->
</div>
```

Learn more about arbitrary value support in the tailwindcss [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) documentation.