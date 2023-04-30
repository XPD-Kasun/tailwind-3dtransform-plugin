---
sidebar_position: 6
title: Flip
---

# Flip

Utilities for flipping an element on all three axis.

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
                            <td>flip-x</td>
                            <td>transform: rotateY(180deg) rotateZ(180deg);</td>
                     </tr>
                     <tr>
                            <td>flip-y</td>
                            <td>transform: rotateX(180deg) rotateZ(180deg);</td>
                     </tr>
                     <tr>
                            <td>flip-z</td>
                            <td>transform: rotateX(180deg) rotateY(180deg);</td>
                     </tr>
              </tbody>
       </table>
</div>

Note that the css generated is implemented as a combination of two rotation transforms. For instance, 

```css
.flip-x {
       transform: rotateY(180deg) rotateZ(180deg);
}
```

If you want to rotate the result then,


## Basic Usage

Use `flip-x`, `flip-y` or `flip-z` classes to flip an element around the targeted axis.

```html
<div>
       <div class="flip-x">This is flipped on X axis</div>
       <div class="flip-y">This one is flipped on y axis</div>
</div>
