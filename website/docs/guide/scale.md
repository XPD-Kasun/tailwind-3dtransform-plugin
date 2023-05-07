---
sidebar_position: 4
title: Scale
---
import CodeBlock from '../../src/components/CodeBlock';

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
                                                 <tr key={axis}>
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


## Basic Usage

You can apply scaling on all axes. For instance to apply 0.5 scaling on x and 2 scaling on y, you can use following classes,

```html
<div class="scale-x-50 scale-y-200"><!--Some Content--></div>
```
:::info Remember to add transform class

Plugin requires you to add `transform` class along with other transform classes to apply the effect.<br/>
For example, instead of `scale-x-110`, use `transform scale-x-110`.<br/>
Read more on this [here](/faq/whyTransform).

:::

<CodeBlock className="my-10">
  <div className="md:flex gap-x-10 perspective-1000">  
    <div className="mx-auto max-sm:mb-5 w-52 h-52 bg-teal-400 rounded-xl flex text-white font-bold text-xl justify-center items-center">No Transform</div>
    <div className="mx-auto w-52 h-52 bg-teal-400 rounded-xl flex text-white font-bold text-xl flex-col justify-center items-center scale-x-[0.8] scale-y-110 transform">
      <div>scale-x-[0.8]</div>
      <div>scale-y-110</div>
    </div>
    <div className="mx-auto max-sm:mb-5 w-52 h-52 bg-teal-400 rounded-xl flex text-white font-bold text-xl flex-col justify-center items-center scale-x-110 scale-y-[0.8] scale-z-110 transform">
      <div>scale-x-110</div>
      <div>scale-y-[0.8]</div>
      <div>scale-z-110</div>
    </div>
  </div>
</CodeBlock>

```html title="Applying different scale classes"

<div className="perspective-1000">
  <div className="flex space-x-10">  
    <div className="w-52 h-52">No Transform</div>
    <div className="w-52 h-52 scale-x-[0.8] scale-y-110 transform">
      <div>scale-x-[0.8]</div>
      <div>scale-y-110</div>
    </div>
    <div className="w-52 h-52 scale-x-110 scale-y-[0.8] scale-z-110 transform">
      <div>scale-x-110</div>
      <div>scale-y-[0.8]</div>
      <div>scale-z-110</div>
    </div>
  </div>
</div>
```

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

## Read More

To learn more about scale css transform refer [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d).

:::info
You can use modifiers such as `md:scale-x-60` to target media queries, hover, active... etc. You can read about modifiers [here](https://tailwindcss.com/docs/hover-focus-and-other-states).
:::