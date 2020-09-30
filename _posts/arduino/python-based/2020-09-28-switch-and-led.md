---
title: "Switch and LED control in Python with PyFirmata"
date: 2020-09-28
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
3. [switch](https://www.arduino.cc/en/tutorial/switch)
4. 10k ohm resistor <span>&#177;</span>5% (brown - black - orange - gold)
3. 220 ohm resistor <span>&#177;</span>5% (red - red - brown - gold)
4. Breadboard & wires (of different colors)

## Hardware setup
Connect a black wire to the side of the breadboard (the once near the blue/black line).<br>
Connect the LED as described [here](https://pitpietro.github.io/arduinopy/switch-and-led/). The *Arduino Starter Kit*'s switch has four legs, which are parallel two by two. Connect it in the middle of the breadboard in order to have a positive/negative pair of legs for each side of the breadboard.<br>
Connect one side to the `5V` pin of the Arduino Board and the other side to:
1. ground (black line of the breadboard) using the 10k resistor
2. PIN 10 on the Arduino board

<br>
**Please Note**: You can choose the pin you want, but you need to be sure to change the code accordingly.<br>

## Software requirement
1. Arduino IDE
   [click here](https://www.arduino.cc/en/Main/Software) to download the IDE
2. PyCharm CE (or another Python IDE)
   [click here](https://www.jetbrains.com/pycharm/)

## Software setup
First of all, you need to load `StandardFirmata` inside the board to allow Python code to be executed.<br>
So, in place of `Blink` example, let's load `StandardFirmata`:
1. Press on `File`
2. `Examples`
3. `Firmata`
4. `StandardFirmata`

Hit `Ctrl` + `U` to upload the code.
<hr>
Open your favourite Python IDE, configure a *virtual environment* and add the *pyfirmata* library with the following line typed on the Terminal:<br>
`pip install pyfirmata`

## Code
```python
from pyfirmata import util, Arduino


def switch():
    board = Arduino('/dev/ttyACM0')
    it = util.Iterator(board)
    it.start()

    digital_input = board.get_pin('d:10:i')
    led_13 = board.get_pin('d:13:o')
    while True:
        sw_value = digital_input.read()
        if sw_value:
            led_13.write(1)
            print('Led ON')
        else:
            led_13.write(0)
            print('Led OFF')


if __name__ == '__main__':
    switch()

```

## Links
[Arduino Homepage](https://www.arduino.cc/)<br>
[Pyfirmata docs](https://pyfirmata.readthedocs.io/en/latest/)<br>

## Conclusion
...
