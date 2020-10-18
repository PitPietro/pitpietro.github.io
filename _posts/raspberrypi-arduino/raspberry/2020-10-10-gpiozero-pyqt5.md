---
title: "GPIO Zero & PyQt5"
date: 2020-10-10
categories: RaspberryPI
tags: [RaspberryPi, python, linux]
excerpt: "The best way to start using Raspberry PI"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
In this introductive post, I'll talk about the *gpio zero* Python library for Raspberry PI devices. It uses the **General Purpuse Input Output** feature to control the Raspberry PI's pins as inputs and outputs.<br>
Moreover, I'll add some grafic user interfaces (GUIs) written in **PyQt5** to let you create good-looking and usefull contents.

## 1. Install the libraries
### 1.1 Install GPIO Zero
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

### 1.2. Install PyQt5
```bash
sudo apt update
```

```bash
sudo pip3 install PyQt5
```

## 2. Setting up
### 2.1. Import the library
Say you need the `LED` object in your Python script (one of the most common), you'll need this line of code on the top of your import statements:
```python
from gpiozero import LED
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
![Pins Schema](/assets/images/posts/raspberrypi-arduino/raspberrypi/gpio-first-steps/pin_layout.jpg)


You can also use this command to prints out the pins number and the related GPIO pins:
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
>>> my_led
<gpiozero.LED object on pin GPIO17, active_high=True, is_active=False>
```

## 3. Basics
All the code snippets are on a public repository on **GitHub**:  [gpiozero-pyqt5](https://github.com/PitPietro/gpiozero-pyqt5)

### 3.1. LED
![LED connection](/assets/images/posts/raspberrypi-arduino/raspberrypi/gpio-first-steps/led_2.png)
The diagram shows two LEDs connected to the RPI board since I made a PyQt5's GUI. Before the GUI, let's see a couple of basics example to better understand the LED working.<br>
`led/led_blink_1.py`
```python
from gpiozero import LED
from time import sleep

def led_blink_1():
    my_led = LED(17)

    while True:
        my_led.on()
        print('ON')
        sleep(1)
        my_led.off()
        print('OFF')
        sleep(1)


led_blink_1()
```

`led/led_blink_2.py`
```python
from gpiozero import LED
from signal import pause

def led_blink_2():
    my_led = LED(5)
    my_led.blink()
    pause()


led_blink_2()
```


### 3.2. PWM LED
```python

```

### 3.3. RGB LED
...

### 3.4. Button
The buttons perform the same actions on the corresponding led, but in a quite diffet way.<br>
You can also
`button/led_btn.py`
```python
from gpiozero import LED, Button
from signal import pause

def led_btn():
    led_1 = LED(17)
    led_2 = LED(18)
    
    btn_1 = Button(2)
    btn_2 = Button(3)

    btn_1.when_pressed = led_1.on
    btn_1.when_released = led_1.off

    led_2.source = button
    
    pause()

    
led_btn():
```

### 3.5. LED controlled by a Button
...

### 3.6. PiCamera controlled by Buttons
...

### 3.7. Light sensor
...

### 3.8. Distance sensor
...

### 3.9. Servo motor
...

## 4. Advanced

### 4.1. Raspberry PI Camera
Start the *Raspberry Pi Configuration* utility and enable the camera module under the `Interfaces` submenu on the top of the GUI. You now need to *reboot* your RPI to make the PiCamera work correctly.<br>
Test the PiCamera by typing the following command on a Terminal window:<br>
```bash

```

### 4.2. Internet connection status indicator
...

### 4.3. CPU Temperature Bar Graph
...

## Links
[gpiozero - readthedocs](https://gpiozero.readthedocs.io/en/stable/)<br>
[PyQt5 Reference Guide](https://www.riverbankcomputing.com/static/Docs/PyQt5/)<br>
[gpiozero-pyqt5 - GitHub repo](https://github.com/PitPietro/gpiozero-pyqt5)<br>
[PiCamera - readthedocs](https://picamera.readthedocs.io/en/release-1.13/)<br>

## Conclusion
