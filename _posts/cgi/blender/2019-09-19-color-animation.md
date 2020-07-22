---
title: "Color Animation"
date: 2019-09-19
categories: Blender
tags: [cgi, blender, shader]
excerpt: "Blender basics"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---


## Action plane
First of all, is important to note that meshes can have different colours in different parts of it, and a single colour can be a mix of two or more: the Mix Shade takes on this definition. Inside this particular shade, the Fac value determines the relationship between the colours. During the animation, we change this value thanks to keyframes.

## Mesh setup
Now that we know how to proceed, open a generic Blender file and edit just a little bit the default cube. Make everything you want, free your imagination! You must switch to Edit Mode to modify your cube: for example, make some loop cuts and change the position of the new vertexes.
I'll make a simple (rock, desk, water bottle).

| ![mesh](/assets/images/posts/cgi/blender/ca_001.png) | ![mesh edit mode](/assets/images/posts/cgi/blender/ca_002.png)|


## Color setup
Switch back to Object Mode. In the lower-right panel search the *Material* context menu and add new material. Rename the material in "blue-to-red". In the Surface submenu select "Mix Shader" as surface. Change the Timeline Panel (down-left) to the Shader Editor Panel clicking the Editor Type icon on the left top of it: this will help us to create the shade in an easier way.<br><br>
![mesh color](/assets/images/posts/cgi/blender/ca_003.png)

**PLEASE NOTE**: Blender has a lot of different panels, each whit a precise purpose: we'll discover all of them in due course.<br>
In this window, add a couple of Principled BSDF and choose blue for the first and red for the second (or a couple of colour you want). Connect the blocks as in the diagram below.<br><br>
![mesh color 2](/assets/images/posts/cgi/blender/ca_004.png)

## Animation
Here we are, soon we'll see the final result! This part needs a window whit Shader Editor Panel and Timeline Panel together. Blender also thought of this: there are different workspaces you can navigate to. You should now be in the Layout workspace. Move to the Animation once and add the Shade Panel as shown below.<br><br>
![animating 1](/assets/images/posts/cgi/blender/ca_005.png)


The Timeline is down, the Shater Editor is on the left, the 3D Viewport is on the right, the Outliner and the Properties are at the very right (more detailed information at the end of the paragraph).
Since we now need to switch from the panels several times, let's establish an abbreviation to them:
1. TP: Timeline Panel
2. SE: Shader Editor

The 3D Viewport needs to see the result, be sure to set the *Viewport Shading* to *Display render preview*. In the TP, position the cursor on the frame n° 5, set the Mix Shader's `Fac` value to zero (SE), keep the cursor over it and add a keyframe by pressing I. If everything goes fine, the value's background colour should now be orange. If press on the mesh in the Viewport on the right, the Timeline should now show a yellow circle at frame n° 5. Back in the TP, position the cursor on the frame n° 60, select the `Fac` value again (in the SE) and change it to one (the maximum) and add the second keyframe as explained above. Well done, the animation works! But we need to set up a little bit better the scene and enjoy it.<br><br>
![animating 2](/assets/images/posts/cgi/blender/ca_006.png)

## Scene setup
Back in the Layout workspace, set the max frame to 65 (or just beyond) so you can see both the colours for some frames before (and after) the animation, adjust the camera position and the light so that the object is well-lit and in the centre of the lens.
I already made those adjustments to make the step-by-step screenshots, so it's up to you choose the best environment for your colour animation.
<br><br>
We already made the very first step in the Blender world. I know we didn't make a movie or other super cool stuff. But I think it's essential to start from the down and reach the top step by step.
At the end of each blog, I'd like you to answer this question: "What can I do now?". Don't forget to never stop your journey!
