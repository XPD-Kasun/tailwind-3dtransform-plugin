---
sidebar_position: 3
title: Rotate
---

Utilities for rotating an element on all three axis.

<table className="stripped-table" style={{width:'100%'}}>
       <thead>
              <tr>
                     <td>Class</td>
                     <td>Properties</td>                     
              </tr>
       </thead>
       <tbody>
              {
                     [0, 1, 2, 3, 6, 12, 30, 45, 60, 90, 135, 180, 270].map((value) => (
                            <tr>
                                   <td>rotate-[axis]-{value}</td>
                                   <td>transform: rotate[axis]({value});</td>
                            </tr>
                     ))
              }              
              <tr>
                     <td>rotate-3d-[1,0,1,30deg]</td>
                     <td>transform: rotate3d(1,0,1,30deg);</td>
              </tr>
       </tbody>
</table>

Note, here `[axis]` refers to one of x,y,z values. For example, `rotate-x-60` means, it rotates an element 60deg around x axis. Similarly, rotate-y-30 rotates the element 30deg around y axis. 

For rotations around z axis we can use either, `rotate-30` or `rotate-z-30` classes. We have extended angle defaults for the theme with additional angles. Such as 30, 60, 120 values. They are available for regular rotate- classes too. For instance rotate-30 rotates the element 30 degrees around z axis.

# Basic Usage

Use the `rotate-(axis)-value` to set the rotation for an element. If you need to use rotate3d css function instead, then use `rotate-3d-[1,1,1,30deg]` class to add ad-hoc rotations.

# Customizing Your Theme

We extend the default theme by adding additional values for `rotate` key. You can add any custom values from `tailwind.config.js` file.

```js title=tailwind.config.js
module.exports = {
  theme: {
    extend: {
      rotate: {
        '17': '17deg',
      }
    }
  }
}
```
# Arbitrary Values

If you need to use an custom value for rotation, you can use the following syntax.

```html
<div class="rotate-[30deg]">
  <!-- More Items -->
</div>
```