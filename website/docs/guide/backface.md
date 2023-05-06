---
sidebar_position: 7
title: Backface Visibility
---
import CodeBlock from '../../src/components/CodeBlock';

# Backface Visibility

Utilities for setting backface visibility css property.

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
                            <td>backface-visible</td>
                            <td>backface-visibility: visible</td>
                     </tr>
                     <tr>
                            <td>backface-hidden</td>
                            <td>backface-visibility: hidden</td>
                     </tr>
                     <tr>
                            <td>backface-inherit</td>
                            <td>backface-visibility: inherit</td>
                     </tr>
                     <tr>
                            <td>backface-unset</td>
                            <td>backface-visibility: unset</td>
                     </tr>
              </tbody>
       </table>
</div>

## Basic Usage

Use the `backface-visible` to set the backface visibility and `backface-hidden` to hide the backface visibility.

<CodeBlock className="my-10">
  <div className="flex space-x-5">
    <div className="perspective-800 group">
      <div className="transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-semibold text-gray-900">backface-visible</h5>
        <p>Default is backface visible</p>
      </div>
    </div>
    <div className="perspective-800 group">
      <div className="transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-semibold text-gray-900 backface-hidden">backface-hidden</h5>
        <p className="backface-hidden">Backface Visibility Hidden</p>
      </div>
    </div>
  </div>
</CodeBlock>

```html title="Adding backface-visible and backface-hidden"
<div className="flex space-x-5">
  <div className="perspective-800 group">
    <div className="transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-semibold text-gray-900">backface-visible</h5>
      <p>Default is backface visible</p>
    </div>
  </div>
  <div className="perspective-800 group">
    <div className="transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-semibold text-gray-900 backface-hidden">backface-hidden</h5>
      <p className="backface-hidden">Backface Visibility Hidden</p>
    </div>
  </div>
</div>
```

We can use this to implement card effects like revealing cards on hover.

<CodeBlock className="my-10">
  <div className="flex space-x-5">
    <div className="group w-[250px] h-[150px] perspective-800 group" >
      <div className="will-change-transform p-6 bg-white border transform transition duration-[1.5s] group-hover:rotate-y-180 border-gray-400 rounded-lg shadow absolute t-0">
        <h5 className="mb-2 text-2xl font-semibold text-gray-900">Front Side</h5>
        <p>Hover on this card and see the backside</p>
      </div>
      <div className="will-change-transform p-6 bg-white border transform transition duration-[1.5s] -rotate-y-180 border-gray-400 group-hover:rotate-y-0 rounded-lg shadow absolute t-0">        
        <h5 className="mb-2 text-2xl font-semibold text-gray-900">Back Side</h5>
        <p>Have you tried tailwind-3dtransform-plugin?</p>
      </div>
    </div>
  </div>
</CodeBlock>

```html title="Cards flip on hover"
<div className="flex space-x-5">
  <div className="group w-[250px] h-[150px] perspective-800 group" >
    <div className="p-6 bg-white border transform transition duration-[1.5s] group-hover:rotate-y-180 border-gray-400 rounded-lg shadow absolute t-0">
      <h5 className="mb-2 text-2xl font-semibold text-gray-900">Front Side</h5>
      <p>Hover on this card and see the backside</p>
    </div>
    <div className="p-6 bg-white border transform transition duration-[1.5s] -rotate-y-180 border-gray-400 group-hover:rotate-y-0 rounded-lg shadow absolute t-0">
      <h5 className="mb-2 text-2xl font-semibold text-gray-900">Back Side</h5>
      <p>Have you tried tailwind-3dtransform-plugin?</p>
    </div>
  </div>
</div>
```

## Read More

Backface visibility determines whether the back side of an element(the side you cannot see unless you rotate it around x or y axis) is visible or not.

[See more on backface visibility.](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)
