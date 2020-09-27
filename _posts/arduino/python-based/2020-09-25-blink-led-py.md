---
title: "Blink a LED in Python with PyFirmata"
date: 2020-09-25
categories: ArduinoPy
tags: [arduino, python, linux]
excerpt: "Programm an Arduino in a different way"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
Have you ever wondered if it is possible to program an Arduino with a programming language other than C?<br>
**Python** is the answer! In today's blog, you'll *blink* a LED using the *pyFirmata* library.

## Hardware requirement
1. Arduino board
2. LED (of any color)
3. 220 ohm resistor <span>&#177;</span>5% (red - red - brown - gold)
4. Breadboard & wires (of different colors)

## Hardware setup
Connect a black wire to the side of the breadboard (the once near the blue/black line).<br>
Connect one side of the resistor where you put the wire before and the other side of the resistor in an arbitrarily decided center line.<br>
The LED has two legs:
1. the longer leg is positive
2. the shorter leg is negative
Connect the negative leg to the resistor (using the breadboard).<br>
Connet the positive leg to a wire that points to PIN 13.

**Please Note**: You can choose the pin you want, but you need to be sure to change the code accordingly.<br>


## Software requirement
1. Arduino IDE
   [click here](https://www.arduino.cc/en/Main/Software) to download the IDE
2. PyCharm CE (or another Python IDE)
   [click here](https://www.jetbrains.com/pycharm/) to download the IDE

## Software setup
First of all, you need to load a C script inside the board to allow Python code to be executed.<br>
Arduino IDE offers a plenty of examples and firmare right inside it to facilitate development.

## Code

## Demonstration

## Links

## Conclusion