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

Use `transform-flatstyle` or any of above classes to set the transform box property. [See more on transform box from MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style)

For example you can use,

```html
<div class="transform-style-3d">
       <!--Some elementes-->
</div>
```

To add `transform-style: preserve-3d;` to set the transform style.
