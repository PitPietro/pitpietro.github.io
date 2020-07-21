---
title: "Shade Animation"
date: 2019-09-22
categories: Blender
tags: [cgi, blender, shader]
excerpt: "Blender basics"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Action plane
Do not care about the colour, for the time being, let's focus on the shape and. You can add different *Shape Keys* and switch from those.

## Colour setup
First of all, add new black material: select the object and switch to *Edit Mode*, add new material in the Material (Context menu), set a colour for the shape and press `assign`. Switching back to *Object Mode*, despite starting the animation the colour does not change anymore. The Mix Shader has not been eliminated, but since it is not assigned to the mash, it does not affect the colour. Despite all, if the mesh is selected, the keyframes are still visible in the Timeline Editor (don't worry about it).

## Mesh setup
In the *Object Data* (Context menu) add two *Shape Keys*. The first will be automatically named "Basis", the second "Key 1" (and so on when you add other shape keys).<br>
**PLEASE NOTE**: The Context menus are at the right now of Layout workspace, in the Properties Editor.
Selecting "Key 1" switch to *Edit Mode* by pressing Tab in the 3D Viewport and deform the mesh as you wish.<br><br>
![key 1](/assets/images/posts/cgi/blender/sa_001.PNG)

We can now act on the mesh by changing the Key 1's `value` (from zero to one) as we did with Mix Shader's `Fac` value. The screen shows value at its maximum, in fact, the mesh is totally different from before.

## Animation
Let's add a keyframe for `value`! Its name can be quite confusing, so pay attention. Move the cursor to frame n°5, set `value` to zero (in the Object Data menu) and press the *Animate property* dot alongside `value`: it should have become a little rhombus and the `value`'s background colour should have become orange (as shown below). We could have achieved the same result by moving the cursor over `value` and pressing `I`.<br><br>
![animating - screen 1](/assets/images/posts/cgi/blender/sa_002.PNG)

Move the cursor to frame n°60 and set value to 1. Add a keyframe in one of the two ways explained above. Press the space bar and look at the final result!<br><br>
![animating - screen 2](/assets/images/posts/cgi/blender/sa_003.PNG)

## One more step
To make the animation looks better, switch to *Edit Mode* at any frame and select the whole mesh by pressing B and moving the cursor over it. Select the "blue-to-red" material in the Material menu and press to assign. Enjoy the melting bottle gif!<br><br>
![animated GIF](/assets/images/posts/cgi/blender/sa_004.gif)