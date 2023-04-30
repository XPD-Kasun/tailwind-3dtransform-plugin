---
sidebar_position: 9
title: Transform Style
---

# Transform Style

Utilities for setting transform style css property.

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
                            <td>transform-style-flat</td>
                            <td>transform-style: flat;</td>
                     </tr>
                     <tr>
                            <td>transform-style-3d</td>
                            <td>transform-style: preserve-3d;</td>
                     </tr>
              </tbody>
       </table>
</div>

## Basic Usage

Use `transform-flatstyle` or any of above classes to set the transform box property. [See more on transform box from MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box)

As the reference suggests, a good example for using this property is [this codepen](https://codepen.io/giaco/pen/OwowJQ).

For example you can use,

```html
<div class="transform-fillbox">
       <!--Some elementes-->
</div>
```
