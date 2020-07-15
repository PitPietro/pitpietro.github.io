---
layout: single
permalink: /github-repos/morse-code/
title: "Morse code" 
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
The Morse code translate all the 26 alphabet letters and numbers from 0 to 9 into _dots_ and _lines_, which are then received in the form of two different sounds: the dot's sound is shorter then the line once.

## Table of Contents
- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [The repository](#the-repository)
- [Project working](#project-working)
  - [CLI version](#cli-version)
  - [GUI whit MVC](#gui-whit-mvc)
- [Used library](#used-library)
  - [ArrayList](#arraylist)
  - [File](#file)
  - [Pair](#pair)
  - [URL](#url)
- [Discussion about this project](#discussion-about-this-project)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Versioning](#versioning)
- [Author](#author)

## The repository
The Java and Kotlin implementation of the project is available at [github.com/PitPietro/morse-code](https://github.com/PitPietro/morse-code).

## Project working

### CLI version
In this section is explained the working of `JMorse.java` class, `KMorse`
works in the same way.<br>The Morse alphabet is stored in a bi-dimensional array of **String**
where the 1st row is filled whit all the capital letters of the alphabet("A", "B", "C", ...) and
the second 2nd row is filled whit the correspondent Morse translation (".-", "-...", "-.-.", ...).
<br>So the `morse` variable is structured like the example below.

letters | Morse 
---- | ----
A | .-
B | -...
C | -.-.

So the elements will be accessed like below:<br>
`morse[0][0] = A`<br>`morse[0][1] = .-`<br>`morse[1][0] = B`<br>
`morse[1][1] = -...`<br><br>The user input is stored into `plaintext`, an **ArrayList** of
**String**. **ArrayList** is used instead of **String** because the `JMorse` method *getMorseFromChar(String c)*
needs to extrapolate each letter into a String and compare it with `morse`'s 1st row strings. To avoid having
to deal with upper case or lower case letters, *fillText(String c)*'s  first step is to make the user input uppercase before
saving its value in `plaintext`.<br>The method that prints the Morse code is *printMorse()*, which calls
*getMorseFromChar(String c)* foreach letter of `plaintext`. *getMorseFromChar(String c)* check if the letter
is equal to any **String** of the `morse` 1st row. In the affirmative, returns the corresponding String of the
2nd row and passes it as parameter to *getSoundFromMorse(String morseString)*. This method check if each character of the
string is a *line* or a *dot*, then play the right audio file. The audio files are in the *.wav* format, they are played
using `ClipAudioPlayer` class. It uses the `javax.sound.sampled.*` library as explained in
[Used library](#used-library) session.

### GUI whit MVC
After getting a lot of suggestion from the Reddit community, the project has been provided whit a Graphic User Interface
that implements the _ModelViewController_ pattern. The list below show its structure:<br>
1. Model
   - MorseModel
   - SoundModel
2. View
   - MorseView
3. Controller
   - MorseController
   
Let's dive deep into the working of the GUI.`MorseModel` provide an ArrayList of Pair which couples all
the keyboard's `keyCode` whit the corresponding **Morse** code. `keyCode` is handled by the
`KeyListener` interface implemented by `MorseView` and linked to a JTextField by
`addKeyListener()` method.`keyCode` is an integer value associated with the
keyboard's key: all the keys have a different `keyCode`.<br>`MorseController` has a couple of
_private_ ArrayList that are set as text for a couple of label in `MorseView`. Every time a key is
pressed in the view, the model returns the **Pair** that stores the `keyCode` whit the corresponding Morse code,
then the controller stores the alphabetic value and the Morse value in the lists. The insertion is surrounded by
`isElement` method: it ignores keys like **Shift**, **Ctrl** and remove a element from the lists if the
pressed key is **Backspace**.<br>`MorseView` has a couple of buttons which are provided with an **ActionListener**.
The *Open source!* button points to this **GitHub** repository by calling the `openProjectURL()` method from
the controller. The *Play morse* button calls the `playMorse()` method, which calls the *static* method
`playSound(String soundPath)` from `SoundModel`.


## Used library
The Oracle documentation is divided into different javadocs depending on the **SE** (Standard Edition) or the **JDK** (Java Development Kit) version.

### ArrayList
To use the ArrayList class, just add this line before the class declaration: `import java.util.ArrayList`. Most of the IDEs will automatically add it whenever you start implementing it in the code.
- [ArrayList - Java Platform SE 7](https://docs.oracle.com/javase/7/docs/api/java/util/ArrayList.html)
- [ArrayList - Java Platform SE 8](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)
- [ArrayList - Java Platform SE 9 & JDK 9](https://docs.oracle.com/javase/9/docs/api/java/util/ArrayList.html)

### File
The javadocs are available at:
- [File - SE 6](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)
- [File - SE 7](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html)
- [File - SE 8](https://docs.oracle.com/javase/8/docs/api/?java/io/File.html)

### Pair
The **Pair** class has been implemented in the *javafx* package since the version 2.2. The javadocs available are the following links:
- [Pair - JavaFX 2.2](https://docs.oracle.com/javafx/2/api/javafx/util/Pair.html)
- [Pair - JavaFX 8](https://docs.oracle.com/javase/8/javafx/api/javafx/util/Pair.html)
- [Pair - Java SE 9 & JDK 9](https://docs.oracle.com/javase/9/docs/api/javafx/util/Pair.html)
- [Pair - Java SE 10 & JDK 10](https://docs.oracle.com/javase/10/docs/api/javafx/util/Pair.html)

It is the **C++**'s [std::pair](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.pair?view=netframework-4.8)
equivalent: it simply keeps a pair of values together. 

### URL
The [URL - SE 7](https://docs.oracle.com/javase/7/docs/api/java/net/URL.html) class represents a Uniform Resource Locator,
a pointer to a "resource" on the World Wide Web. A resource can be a file or a directory, or it can be a reference to a
more complicated object, such as a query to a database or to a search engine.

## Discussion about this project
I shared this project in Reddit: [I just released on GitHub one of my first project ... !](https://www.reddit.com/r/java/comments/f55gj2/i_just_released_on_github_one_of_my_first_project/).
<br> The comments are very interesting, you may found a lot of inspiration.

## Prerequisites
I suggest you to install [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) before clone this repository.

## Installing
To install this project just type in the terminal.<br>
`git clone https://github.com/PitPietro/morse-code.git`

## Versioning
For the versions available, see the [tags on this repository](https://github.com/PitPietro/morse-code/tags). 

## Author
**Pietro Poluzzi** - [PitPietro](https://github.com/PitPietro)
<br>See also the list of [contributors](https://github.com/PitPietro/morse-code/contributors) who participated in this project.

