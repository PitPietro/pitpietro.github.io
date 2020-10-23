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
Based on the OS of your Raspberry PI.

### 1.2. Remote GPIO
You could also want to use a Linux/Mac/Windows machine. You'll only have to deal with [Configuring Remote GPIO](https://gpiozero.readthedocs.io/en/stable/remote_gpio.html). Let's find out how it works!<br>
The *gpio* provides the ability to control **GPIO** pins over the network.

#### 1.2.1. Prepare the Raspberry PI
Open a Terminal window and launch this command:
```bash
sudo apt install pigpio
```

Enable the remote connections by clicking to `Application Menu` (the Menu button on the left bottom of the keyboard) > `Prefences` > `Raspberry Pi Configuration`. Under the `Interfaces` slice, click on the `Remote GPIO` radio button and switch to `Enable`.
You can also configure the remote GPIO by opening the a brand new Terminal window.<br>
```bash
sudo raspi-config
```
Scroll down to `5 Interfacing Options` with the down arrow and press **Enter** on the keyword. Scroll down again until you reach `P8 Remote GPIO` and press **Enter**. It will ask you something like: *Would you like the GPIO server to be accessible over the network?*. Use the left arrow to move the highlighing to `<Yes>` and press **Enter**. It will show you another window with the message: *Remote access to the GPIO server is enabled*. Press **Enter** and then scroll down again the menu and press **Enter** on `<Finish>`. You should now be back to the Terminal.<br>
You have already allowed remote connections when the *pigpio deamon* is lanched. To automate the running of the daemon at boot time, run this commands:
```bash
sudo systemctl enable pigpiod
```
It will return on the screen something like:
```bash
Create symlink /etc/systemd/system/multi-user.target.wants/pigpiod.service -> /lib/systemd/system/pigpiod.service.
```
<br>
You also need to run the daemon once using **systemcyl**:
```bash
sudo systemctl start pigpiod
```

You could also want to launch the *pigpio deamon* manually:
```bash
sudo pigpiod
```

#### 1.2.2. Prepare the control computer
If your control PC is Linux, those are the commands:<br>
Update the distro repositories.
```bash
sudo apt update
```

Install **pip** for Python3.
```bash
sudo apt install python3-pip
```

Or install **pip** for Python2.
```bash
sudo apt install python-pip 
```

Install GPIO Zero and pigpio for Python3.
```bash
sudo pip3 install gpiozero pigpio
```

Or install GPIO Zero and pigpio for Python2.
```bash
sudo pip install gpiozero pigpio
```

#### 1.2.3. Environmental variables
The easiest way to use devices with remote pins is to set the `PIGPIO_ADDR` environmental variable to the IP address of the Rapberry Pi you need to control. You must run your Python script with the environmental variable set using the command line.
```bash
PIGPIO_ADDR=[ip_address] python3 blink.py
```
Moreover, if you remote PC is itself a Raspberry, you must specify also the `GPIOZERO_PIN_FACTORY` and set it equal to *pigpio*.
```bash
GPIOZERO_PIN_FACTORY=pigpio PIGPIO_ADDR=[ip_address] python3 blink.py
```

Assuming your `blink.py` looks like this: [3.1. LED](https://pitpietro.github.io/raspberrypi/gpiozero-pyqt5/#31-led), the terminal commands written above will blink the LED on pin 17.<br><br>

**Please Note**:
When running code directly on a RPI, any pin can be used. When a RPI is controlled remotely, only `PiGPIOFactory` pins can be used, since *pigpio* is the only pin library which supports remote General Purpure Input/Output.

#### 1.2.4. Pin factories
An additional method of configuring gpiozero objects ss to create instances of `PiGPIOFactory` objects: with no environmental variables set, you could run a *blink* script like this:
```python
from gpiozero import LED
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

factory = PiGPIOFactory(host='192.168.1.3')
led = LED(17, pin_factory=factory)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

You can also allows devices on multiple RPIs to be used in the same script:
```python
from gpiozero import LED
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

factory_1 = PiGPIOFactory(host='192.168.1.3')
factory_2 = PiGPIOFactory(host='192.168.1.10')

led_1 = LED(17, pin_factory=factory_1)
led_2 = LED(17, pin_factory=factory_2)

while True:
    led_1.on()
    led_2.on()
    sleep(0.5)

    led_2.off()
    sleep(0.5)

    led_1.off()
    led_2.on()
    sleep(0.5)

    led_2.off()
    sleep(0.5)
```

If your remote PC is a Raspberry Pi, you can create gpiozero device objects togheter with remote objects.
```python
from gpiozero import LED
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

factory = PiGPIOFactory(host='192.168.1.3')
led_remote = LED(17, pin_factory=factory)
led = LED(17)

while True:
    led.on()
    led_remote.off()
    sleep(1)

    led.off()
    led_remote.on()
    sleep(1)
```

### 1.3. Install PyQt5
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
All the code is on a public repository on **GitHub**:  [gpiozero-pyqt5](https://github.com/PitPietro/gpiozero-pyqt5)<br>
Lots of the snippets are just cutted part of the scripts in the GitHub repository since it could be quite confusing if I would put the entire code here. However, to let you easily access the code, I'll always specify the subfolder for each snippet.

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
You can find the full code at `RGB_led/rgb_rainbow.py`
```python
from gpiozero import RGBLED
from time import sleep

led = RGBLED(red=9, green=10, blue=11)

def rainbow(s_time):
    led.color = (0, 0, 0)

    led.red = 0.5
    print('HALF Red: 7F0000')
    sleep(s_time / 2)
    
    print('Red: #FF0000')
    led.red = 1
    sleep(s_time)
    
    # ...
    
    print('Indigo: #4b0082')
    led.color = (0.2953, 0, 0.5118)
    sleep(s_time)
    
    print('OFF: #000000')
    led.color = (0, 0, 0)
    sleep(s_time)
    
    led.color = (0, 0, 0)


rainbow(5)
```

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

### 3.6. Light sensor
...

### 3.7. Distance sensor
...

### 3.8. Servo motor
`servo/servo_basics.py`
```python
from gpiozero import Servo
from time import sleep

servo = Servo(17)

def min_mid_max(times = 10):
    for i in range(times):
        print('MIN')
        servo.min()
        sleep(2)
        
        print('MID')
        servo.mid()
        sleep(2)
        
        print('MAX')
        servo.max()
        sleep(2)


min_mid_max(2)
```
<br>
I have also developed a tiny GUI based on those servo's commands:
![Servo GUI](/assets/images/posts/raspberrypi-arduino/raspberrypi/gpio-first-steps/servo_gui.png)

## 4. Advanced

### 4.1. Raspberry PI Camera
Start the *Raspberry Pi Configuration* utility and enable the camera module under the `Interfaces` submenu on the top of the GUI. You now need to *reboot* your RPI to make the PiCamera work correctly.<br>
Test the PiCamera by typing the following command on a Terminal window:<br>
```bash

```

### 4.1.1. PiCamera controlled by Buttons
...

### 4.2. Internet connection status indicator
...

### 4.3. CPU Temperature Bar Graph
...

### 4.4. Take a screenshot with a button
Let's install *scrot* with:
```bash
sudo apt install scrot
```
You can then press `scrot --help` to look at the full usage of this command. Inside our python script, we'll use a command like this: `scrot -up -d 1` by means it will screen the current focused screen and the pointer too, with a delay of one second.<br>
Moreover, you need to find a way to launch a terminal command within a python script.<br>
```python
import os
from datetime import datetime

timestamp = datetime.now()
os.system('scrot -up -d 1 $n {}.png'.format('screen_' + str(timestamp)))
```
Finally, the `scrot` command above must be triggered by the button (without opening a brand new Terminal window).<br><br>

`button/take_screen.py`
```python
import os
from gpiozero import Button
from datetime import datetime

def take_screen():
    screen_btn = Button(2)
    
    while True:
    if screen_btn.is_pressed:
        timestamp = datetime.now()
        cmd = 'scrot -up -d 1 $n {}.png'.format('screen_' + str(timestamp))
        os.system(cmd)


take_screen()    
    
```

## Links
[gpiozero - readthedocs](https://gpiozero.readthedocs.io/en/stable/)<br>
[PyQt5 Reference Guide](https://www.riverbankcomputing.com/static/Docs/PyQt5/)<br>
[gpiozero-pyqt5 - GitHub repo](https://github.com/PitPietro/gpiozero-pyqt5)<br>
[PiCamera - readthedocs](https://picamera.readthedocs.io/en/release-1.13/)<br>

## Conclusion
