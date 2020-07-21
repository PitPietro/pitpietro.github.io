---
title: "Gold Reflective Shader"
date: 2019-10-17
categories: Blender
tags: [cgi, blender, shader]
excerpt: "Blender basics"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Action plane
Let's take a simple mesh, like *Suzanne*, and then simply add a shader. To do so, delete the default cube and press on *Add*, *Mesh* and scroll down the menu until *Monkey*.
![Suzanne](/assets/images/posts/cgi/blender/grs_001.PNG)

## Scene setup
Let's add some lights that focus on the mesh and fix the Camera position: I decided to put it above the Y axis. The camera has the following location and rotation values.<br>
### Location
1. X = 0m
2. Y = -6m
3. Z = 0m

### Rotation
1. X = 90°
2. Y = 0°
3. Z = 0°

The first light illuminates Suzanne's front face. Other two lights are above the mesh's sides, inclined by 45° (and -45°) degrees. The last light is placed under Suzanne. Lastly, let's add a background plane.

## Shading
Select the *Material* (Context) menu in the *Properties* Editor on the right and add a new material. Rename it "gold_1" and switch to Shading workspace. There are different Editors, for now we'll focus on the Shader Notes Editor (the down onces). Delete the default Principled BSDF and add a couple of Glossy BSDF by clicking on *Add*, *Shader* in the top menu (you can also search the node you need thanks to *Add*, *Search*). We also need a RGB color so *Add*, *Input*, *RGB*. Moreover, we'll use a *Layer Weight* and a *Mix Shader*. The RGB color is arbitrarily chosen by moving the mouse over the palette.
Let's connect all these blocks as shown below.
![shading schema part 1](/assets/images/posts/cgi/blender/grs_002.PNG)

As we do for the monkey, let's add a shader to the plane.

![shading schema part 2](/assets/images/posts/cgi/blender/grs_003.PNG)

## Animation
Back in Layout workspace, move to frame 40, move the cursor on Suzanne (select it) and press I, LocRot to add a keyframe for its location and rotation (since we won't change its scale's dimentions).<br>
**PLEASE NOTE**: Be sure the monkey has 0° of rotation in all the axes.<br>
Move to frame n° 120, change Suzanne's X rotation to -360° and add the second keyframe; move to frame n° 180 and change its Z rotation to 360° then set the End frame to 220.