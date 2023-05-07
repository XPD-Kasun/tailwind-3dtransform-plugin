---
sidebar_position: 10
title: Why we add transform class?
---

# Why we add transform class?

:::danger Always check whether transform class is applied to your element
To apply the 3d transforms you need to apply `transform` class.
:::

When we use default tailwindcss transform classes such as `rotate` or `translate`, we don't neccessarily need to add `transform` class as well. So we can write html similar to follwing and expect it to rotate 45deg.

```html
<div class="rotate-45">Some Text Rotated 45 degrees</div>
```

The reason is when tailwindcss generates a class for `rotate-45`, it automatically adds transform property to the generated class similar to following,

```css title:generated.css
.rotate-45 {
       --tw-rotate: 45deg;
       transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
```

This is done for the convenience so that we aren't required to add `transform` class everytime we add a tranform related class. But doing so, adds lengthy transform property to each of those transform classes.

With this plugin, we use a transform property similar to the above. But the one we use has more components to it. We need  to add more components to support 3d transforms. Because of its length, we have decided not to include transform property into the transform classes. Instead we require explicit `transform` class to be added to the class list.

So in order to make this plugin to work we need to modify the above html to include `transform` class.

```html
<div class="transform rotate-45">Some Text Rotated 45 degrees</div>
```

This is important and if you find transforms are not applied, then, checking whether the class list contains `transform` is the first thing to do.

If you think this should be changed and implicit transform property should be applied instead, please vote here at [tailwind-3dtransform-plugin](https://github.com/XPD-Kasun/tailwind-3dtransform-plugin/issues/2) repository.