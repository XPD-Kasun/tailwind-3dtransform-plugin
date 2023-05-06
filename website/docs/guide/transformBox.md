---
sidebar_position: 8
title: Transform Box
---

# Transform Box

Utilities for setting transform box css property.

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

Use `transform-box-border` or any of above classes to set the transform box property. [See more on transform box from MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box)

As the reference suggests, a good example for using this property is [this codepen](https://codepen.io/giaco/pen/OwowJQ).

For example you can use,

```html
<div class="transform-box-fill">
       <!--Some elementes-->
</div>
```
to add `transform-box: fill;` style to your element.