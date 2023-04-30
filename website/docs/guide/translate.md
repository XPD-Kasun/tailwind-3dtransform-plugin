---
sidebar_position: 5
title: Translate
---

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
                                          <tr>
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

Use `translate-(axis)-value` to set the rotation for an element. Also, you need to add `transform` class to apply the transformations.

```html
<div class="perspective-1200">
       <div class="transform translate-x-1/2 -translate-y-24 translate-z-12">My element</div>
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