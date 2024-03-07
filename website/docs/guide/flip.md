---
sidebar_position: 6
title: Flip
---
import CodeBlock from '../../src/components/CodeBlock';

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

## Basic Usage

Use `flip-x`, `flip-y` or `flip-z` classes to flip an element around the targeted axis.

:::info Remember to add transform class

Plugin requires you to add `transform` class along with other transform classes to apply the effect.<br/>
For example, instead of `flip-x`, use `transform flip-x`.<br/>
Read more on this [here](/FAQ/whyTransform).

:::

```html
<div>
       <div class="flip-x">This is flipped on X axis</div>
       <div class="flip-y">This one is flipped on y axis</div>
</div>
```

import stefansPhoto from '@site/static/img/stefan-stefancik-Ue2-23uBwNw-unsplash.jpg';

<CodeBlock className="my-10">
  <div className="md:flex gap-5">
    <div className="mb-10 md:mb-0">
      <div className="font-bold text-lg mb-5 text-center">No Transforms</div>
      <div className="w-52 rounded-xl shadow-xl overflow-hidden flex mx-auto">
        <img className="object-cover" src={stefansPhoto} />
      </div>
    </div>
    <div className="mb-10 md:mb-0">
      <div className="font-bold text-lg mb-5 text-center">transform flip-y</div>
      <div className="w-52 rounded-xl shadow-xl overflow-hidden flex mx-auto">
        <img className="transform flip-y object-cover" src={stefansPhoto} />
      </div>
    </div>
    <div className="mb-10 md:mb-0">
      <div className="font-bold text-lg mb-5 text-center">transform flip-x</div>
      <div className="w-52 rounded-xl shadow-xl overflow-hidden flex mx-auto">
        <img className="transform flip-x object-cover" src={stefansPhoto} />
      </div>
    </div>
    <div className="mb-10 md:mb-0">
      <div className="font-bold text-lg mb-5 text-center">transform flip-z</div>
      <div className="w-52 rounded-xl shadow-xl overflow-hidden flex mx-auto">
        <img className="transform flip-z object-cover" src={stefansPhoto} />
      </div>
    </div>
  </div>
</CodeBlock>

> Attribute: Photo by <a href="https://unsplash.com/@cikstefan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Štefan Štefančík</a> on <a href="https://unsplash.com/wallpapers/phone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

```html title="Flipping an image around different axes"
<div class="flex gap-5">
  <div class="mb-10">
    <div class="font-bold text-lg mb-5 text-center">No Transforms</div>
    <div class="w-52 rounded-xl shadow-xl overflow-hidden flex mx-auto">
      <img class="object-cover" src="/img/stefan-stefancik-Ue2-23uBwNw-unsplash.jpg" />
    </div>
  </div>
  <div class="mb-10">
    <div class="font-bold text-lg mb-5 text-center">transform flip-y</div>
    <div class="w-52 rounded-xl shadow-xl overflow-hidden flex mx-auto">
      <!-- highlight-next-line -->
      <img class="transform flip-y object-cover" src="/img/stefan-stefancik-Ue2-23uBwNw-unsplash.jpg" />
    </div>
  </div>
  <div class="mb-10">
    <div class="font-bold text-lg mb-5 text-center">transform flip-x</div>
    <div class="w-52 rounded-xl shadow-xl overflow-hidden flex mx-auto">
      <!-- highlight-next-line -->
      <img class="transform flip-x object-cover" src="/img/stefan-stefancik-Ue2-23uBwNw-unsplash.jpg" />
    </div>
  </div>
  <div class="mb-10">
    <div class="font-bold text-lg mb-5 text-center">transform flip-z</div>
    <div class="w-52 rounded-xl shadow-xl overflow-hidden flex mx-auto">
      <!-- highlight-next-line -->
      <img class="transform flip-z object-cover" src="/img/stefan-stefancik-Ue2-23uBwNw-unsplash.jpg" />
    </div>
  </div>
</div>
```
  
## Read More

:::info
You can use modifiers such as `md:flip-x` to target media queries, hover, active... etc. You can read about modifiers [here](https://tailwindcss.com/docs/hover-focus-and-other-states).
:::