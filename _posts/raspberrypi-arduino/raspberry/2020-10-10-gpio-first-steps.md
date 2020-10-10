---
title: "Raspberry & GPIO Zero"
date: 2020-10-10
categories: RaspberryPI
tags: [RaspberryPi, python, linux]
excerpt: "Power your Raspberry Pi with Python"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
In this introductive post, I'll talk about the *gpio zero* Python library for Raspberry PI devices. It uses the **General Purpuse Input Output** feature to control the Raspberry PI's pins as inputs and outputs.  

## 1. Install GPIO Zero
Run the following commands on the terminal:
```bash
sudo apt update
```

```bash
sudo apt install python3-gopiozero
```
**OR**
```bash
sudo pip3 install gpiozero
```
Based on the OS of your Raspberry PI.<br>
You can also install the library on a Linux/Mac operative system, but I won't cover this argument here: please visit [Configuring Remote GPIO](https://gpiozero.readthedocs.io/en/stable/remote_gpio.html) page for more information.

## 2. Basics
### 2.1. Import the library
Say you need the `LED` object in your Python script (one of the most common), you'll need this line of code on the top of your import statements:
```python
from gopiozero import LED
```

From now on, you can instantiate a `LED` object inside a variable:
```python
my_led = LED(17)
```

You can also import the whole library:
```python
import gpiozero
```

But you'll then have to call objects in this way:
```python
my_led = gpiozero.LED(17)
```

### 2.2. Pin Numbering
![Pins Schema](/assets/images/posts/raspbberypi-arduino/raspberrypi/gpio-first-steps/pin_layout.jpg)


This command prints out the pins number and the related GPIO pins
```bash
pinouts
```

The *gpiozero* library uses the BCM (Broadcom) pn numbering for the GPIO pins.<br>
**Please Note:** If you want to connect a LED on pin GPIO 17, you need to wire-up the physical pin 11 on the Raspberry PI board.<br>

If you want to use the physical numbering (BOARD) you have to specify the pin number as `BOARD11`. You can also use other ways to call a specific pin,he following lines are all equivalent:
```python
>>> led = LED("GPIO17")
>>> led = LED("BCM17")
>>> led = LED("BOARD11")
>>> led = LED("WPI0")
>>> led = LED("J8:11")
```

Since these alterante schemes are nothing more than translations, if you request the state of a device on the command line, the associated pin number will always be reported in the Broadcom (BCM) scheme:
```python
led
<gpiozero.LED object on pin GPIO17, active_high=True, is_active=False>
```

### 2.3. LED
















## Links
[gpiozero - readthedocs](https://gpiozero.readthedocs.io/en/stable/)

## Conclusion

```python

```