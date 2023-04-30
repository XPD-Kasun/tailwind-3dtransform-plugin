---
sidebar_position: 10
title: Why we add transform class?
---

# Why we add transform class?

When we use default tailwindcss transform classes such as `rotate` or `translate`, we don't neccessarily need to add `transform` class as well. So we can write follwing html and expect it to rotate 45deg.

```html
<div class="rotate-45">Some Text Rotated 45 degrees</div>
```

The reason is when tailwindcss generates the class for `rotate-45`, it automatically adds transform property to the generated class similar to following,

```css title:generated.css
.rotate-45 {
       --tw-rotate: 45deg;
       transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
```

This is done for the convenience. So that we aren't required to add `transform` class everytime we add a tranform related class. But doing so, adds lengthy transform property to each of those transform classes.


