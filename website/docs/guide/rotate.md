---
sidebar_position: 3
title: Rotate
---
import CodeBlock from '../../src/components/CodeBlock';

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
          return <React.Fragment key={i1}>
            {
              ['x', 'y', 'z'].map((axis, i2) => (
                <tr key={i1 + ' ' + i2}>
                        <td>rotate-{axis}-{value}</td>
                        <td>transform: rotate{axis.toUpperCase()}({value}deg);</td>
                </tr>
              ))
            }
            </React.Fragment>
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

Rotation classes are used to rotate an element relative to an axis. The rotation axis is determined by the value of transform-origin class applied which is set center as default. Also you need to add `perspective` class to the parent of the element that you transform to get the 3d look. The syntax for above classes is rotation-{axis}-{angle}. Hover on below example to see it in action.

:::info Remember to add transform class

Plugin requires you to add `transform` class along with other transform classes to apply the effect.<br/>
For example, instead of `rotate-x-45`, use `transform rotate-x-45`.<br/>
Read more on this [here](/faq/whyTransform).

:::

<CodeBlock className="my-5">
<div className="flex space-x-5">
  <div className="perspective-800">
    <div className="transform transition hover:rotate-y-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow ">
      <h5 className="mb-2 text-2xl font-semibold text-gray-900">Rotate Around Y</h5>
      <p>transform hover:rotate-y-60</p>
    </div>
  </div>
  <div className="perspective-800">
    <div className="transform transition hover:rotate-x-45 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow ">
      <h5 className="mb-2 text-2xl font-semibold text-gray-900">Rotate Around X</h5>
      <p>transform hover:rotate-x-45</p>
    </div>
  </div>
  <div className="perspective-800">
    <div className="transform transition hover:rotate-z-30 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow ">
      <h5 className="mb-2 text-2xl font-semibold text-gray-900">Rotate Around Z</h5>
      <p>transform hover:rotate-z-30</p>
    </div>
  </div>
</div>
</CodeBlock>

```html title="Using rotation classes for cards (Above cards use hover: to apply rotation on hover. We exclude it for simplicity)"
<div class="flex">
  <div class="perspective-800">
    <div class="transform rotate-y-30">
      <!--...-->
    </div>
  </div>
  <div class="perspective-800">
    <div class="transform rotate-x-45">
      <!--...-->
    </div>
  </div>
  <div class="perspective-800">
    <div class="transform rotate-z-30">
      <!--...-->
    </div>
  </div>
</div>
```

Here in this card example, we use multiple perspective containers. Instead, you can add perspective to the flex container above and make cards direct children of flex container also. But then the same perspective will effect all three cards. Here we provide separate perspective containers to each card. This choice depends on your requirements and goals.

## Using rotate-3d class

It certain situation, you might need to directly leverage functionality of rotate-3d transform function. 
For this, we have provided `rotate-3d` class which you can use freely to specify the value you need and achieve the full control over rotate-3d function.

For instance, to implement following css,

```css
  .some-class {
    transform: rotate-3d(1,1,0,20deg);
  }
```

you can use `rotate-3d` class as follows,

```html
<div class="rotate-3d-[1,1,0,20deg]">content...</div>
```

This class is does not support theme defaults. Instead, it works only with arbitrary values provided in the correct format.

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
<div class="rotate-y-[20deg]">
  <!-- More Items -->
</div>
```

Learn more about arbitrary value support in the tailwindcss [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) documentation.

## Read More

To learn more about rotate css transform refer [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate).

:::info
You can use modifiers such as `md:rotate-x-60` to target media queries, hover, active... etc. You can read about modifiers [here](https://tailwindcss.com/docs/hover-focus-and-other-states).
:::