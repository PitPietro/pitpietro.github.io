---
title: "Potentiometer's Analog value"
date: 2020-09-30
categories: ArduinoPy
tags: [arduino, python, linux]
excerpt: "Read an Analog value"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
It's very important to know how to read an *analog input* value from the Arduino board, so that this can then trigger the implementation of an output.<br>
In this post, you'll use a potentiometer just to print its value on the console. In the next post you'll use the potentiometer to light-up a green led when the value is 1 and a red led when the value is 0.<br>
Just for now, let's keep simple!

## Hardware requirement
1. Arduino board
2. [Potentiometer](https://www.arduino.cc/en/tutorial/potentiometer) (I use a 10k ohm)
3. Hook-up wires of different colors
4. Breadboard

## Hardware setup
The potentiometer has tree pin, those on the side are ground and 5V while the once in the middle is the *analog input*. Connect the potentiometer as shown below:<br>
![Potentiometer Setup](/assets/images/posts/arduino/pot_1.png)

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
import time


def potentiometer():
    board = Arduino('/dev/ttyACM0')
    it = util.Iterator(board)
    it.start()

    analog_input = board.get_pin('a:0:i')

    while True:
        analog_value = analog_input.read()
        print(analog_value)
        time.sleep(0.1)


if __name__ == '__main__':
    potentiometer()

```

## Links
[Arduino Homepage](https://www.arduino.cc/)<br>
[Pyfirmata docs](https://pyfirmata.readthedocs.io/en/latest/)<br>

## Conclusion
The next step is to trigger an output depending on the value of the input: light-up a led, move a DC motor or whatever you want!