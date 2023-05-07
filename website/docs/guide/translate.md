---
sidebar_position: 5
title: Translate
---
import CodeBlock from '../../src/components/CodeBlock';

# Translate

Utilities for translating an element on all three axis.

<div className="table-container">
       <table className="stripped-table" style={{width:"100%"}}>
              <thead>
                     <tr>
                            <td>Class</td>
                            <td>Properties</td>                     
                     </tr>
              </thead>
              <tbody>
                     {
                            [0,'px','0.5',1,'1.5',2,'2.5',3,'3.5',4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96,'1/2','1/3','2/3','1/4','2/4','3/4','full'].map((value, i1) => {
                                   const valueMap = [
                                          "0rem","1px","0.125rem","0.25rem","0.375rem","0.5rem","0.625rem","0.75rem","0.875rem","1rem","1.25rem","1.5rem","1.75rem","2.0rem","2.25rem","2.5rem","2.75rem","3.0rem","3.5rem","4.0rem","5.0rem","6.0rem","7.0rem","8.0rem","9.0rem","10.0rem","11.0rem","12.0rem","13.0rem","14.0rem","15.0rem","16.0rem","18.0rem","20.0rem","24.0rem","50%","33.333%","66.666%","25%","50%","75%","100%"
                                   ];
                                   return (['x','y','z'].map((axis, i2) => (
                                          <tr key={i1 + axis}>
                                                 <td>translate-{axis}-{value}</td>
                                                 <td>transform: translate{axis.toUpperCase()}({valueMap[i1]});</td>
                                          </tr>   
                                   )));
                            })
                     }
                     <tr>
                            <td>translate-3d-value</td>
                            <td>transform: translate3d(value, value, value);</td>
                     </tr>
              </tbody>
       </table>
</div>

## Basic Usage

You can translate on all axes using different `translate` classes provided. Default translate values are supported. For instance to translate 4rem on x axis and 20px on y axis, you can use,

```html
<div class="transform tranlate-x-20 translate-y-[20px]"><!--Some Content--></div>
```

This is another example using tailwind defaults,

```html
<div class="perspective-1200">
       <div class="transform translate-x-1/2 -translate-y-24 translate-z-12">My element</div>
</div>
```

:::info Remember to add transform class

Plugin requires you to add `transform` class along with other transform classes to apply the effect.<br/>
For example, instead of `translate-y-20`, use `transform translate-y-20`.<br/>
Read more on this [here](/faq/whyTransform).

:::

<CodeBlock className="my-10">
  <div className="md:flex gap-x-10">
    <div className="max-sm:mb-10 w-52 h-52 bg-yellow-200 rounded-lg relative">
      <div className="w-20 h-20 bg-teal-400 rounded-lg">    
      </div>
      <div className="absolute bottom-2 text-center w-full">No transforms</div>
    </div>
    <div className="max-sm:mb-10 w-52 h-52 bg-yellow-200 rounded-lg relative">
      <div className="w-20 h-20 bg-teal-400 rounded-lg transform translate-x-10 translate-y-16">    
      </div>
      <div className="absolute bottom-2 text-center w-full">translate-x-10<br/>translate-y-16</div>
    </div>
    <div className="max-sm:mb-10 perspective-1000">
      <div className="w-52 h-52 bg-yellow-200 rounded-lg relative transform rotate-x-30">
        <div className="w-20 h-20 bg-teal-400 rounded-lg transform translate-x-10 translate-y-16 translate-z-10">    
        </div>
        <div className="absolute bottom-2 text-center w-full">translate-x-10<br/>translate-y-16<br/>translate-z-10</div>
      </div>
    </div>
  </div>
</CodeBlock>

```html title="Applying different classes for translate"
<div class="flex space-x-10">
  <div class="w-52 h-52">
    <div class="w-20 h-20">    
    </div>
  </div>
  <div class="w-52 h-52">
    <div class="w-20 h-20 transform translate-x-10 translate-y-16">    
    </div>
  </div>
  <div class="w-52 h-52 transform rotate-x-30">
    <div class="w-20 h-20 transform translate-x-10 translate-y-16 translate-z-10">    
    </div>
  </div>
</div>
```

## Customizing Your Theme

We extend the default theme by adding additional values for `translate` key. You can add any custom values from `tailwind.config.js` file.

```js title=tailwind.config.js
module.exports = {
  theme: {
    extend: {
      translate: {
        '4.25': '18rem',
      }
    }
  }
}
```
## Arbitrary Values

If you need to use an custom value for translate, you can use the following syntax.

```html
<div class="translate-x-[250px]">
  <!-- More Items -->
</div>
```

Learn more about arbitrary value support in the tailwindcss [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) documentation.

## Read More

To learn more about css translate transform refer [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d).

:::info
You can use modifiers such as `md:translate-x-60` to target media queries, hover, active... etc. You can read about modifiers [here](https://tailwindcss.com/docs/hover-focus-and-other-states).
:::