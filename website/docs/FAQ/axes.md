---
sidebar_position: 11
title: Basics Of CSS Axes System
---

# Basics Of CSS Axes System

CSS3 introduced a powerful axes system known as CSS3 3D transforms, which allows developers to manipulate and position elements in three-dimensional space. This system extends the traditional two-dimensional Cartesian coordinate system by introducing an additional axis, the Z-axis.

![CSS Axes](/img/axis.png)

The CSS3 axes system consists of the following axes:

X-axis: The X-axis represents the horizontal dimension, with positive values increasing towards the right and negative values towards the left. It is the primary axis used for horizontal translations, rotations, and scaling.

Y-axis: The Y-axis represents the vertical dimension, with positive values increasing downwards and negative values upwards. It is the primary axis used for vertical translations, rotations, and scaling.

Z-axis: The Z-axis represents the depth or third dimension of the 3D space. It is perpendicular to both the X and Y axes and points towards the viewer. Positive values move elements closer to the viewer, while negative values move them farther away. The Z-axis is used for controlling transformations like perspective and 3D rotations.

Together, these three axes allow developers to create rich three-dimensional effects and transformations on web elements. By manipulating an element's position, rotation, and scale along these axes, it becomes possible to create effects such as 3D transformations, perspective shifts, and parallax scrolling. 

When this plugin refers axis as x,y and z, they refer to the same co-ordinate system as this. In simple terms, x refers to horizontal movements, y refers to vertical movements on screen. z refers to movements  from the user to the element.

For example, `rotate-x-60` rotates an element 60deg around the x axis. `translate-y-12` moves an element 4rem down.