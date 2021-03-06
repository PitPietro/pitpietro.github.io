---
layout: single
permalink: /github-repos/pythongui/
title: "Python GUI Project"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

The code is available at [github.com/PitPietro/pythonGUI](https://github.com/PitPietro/pythonGUI)

## Introduction
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/PitPietro/pythonGUI?include_prereleases)
![GitHub repo size](https://img.shields.io/github/repo-size/PitPietro/pythonGUI)
![GitHub](https://img.shields.io/github/license/PitPietro/pythonGUI)
<br>This repo is aimed to test all the major Python libraries that build Graphic User Interface.
<hr>

## Discuss the project
I'll soon built a forum (maybe a Django blog) where we can discuss all the projects. For now, you could open a subreddit if you want. 

## Prerequisites

### Suggested virtual environment
I'll write you how to create the environment I am using.

### Suggested IDE
I suggest you to use [PyCharm](https://www.jetbrains.com/pycharm/)

## Libraries

### PySimpleGUI

#### Inside the event loop
For persistent windows (after creating the window), you have an event loop that runs until you exit the window. Inside this loop you will read values that are returned from reading the window and you'll operate on elements in your window. To operate on elements, you look them up and call their method functions such as `update`.

#### Core elements
The core elements are:
- Text
- InputText
- Multiline
- InputCombo
- Listbox
- Radio
- Checkbox
- Spin
- Output
- SimpleButton
- RealtimeButton
- ReadFormButton
- ProgressBar
- Image
- Slider
- Column

#### Shortcut list
PySimpleGUI has two types of element shortcuts. One type is simply other names for the exact same element (e.g. T instead of Text). The second type configures an element with a particular setting, sparing you from specifying all parameters (e.g. Submit is a button with the text "Submit" on it).
- T = Text
- Txt = Text
- In = InputText
- Input = InputText
- Combo = InputCombo
- DropDown = InputCombo
- Drop = InputCombo

#### Button shortcuts
- The button shortcuts elements are:
- FolderBrowse
- FileBrowse
- FileSaveAs
- Save
- Submit
- OK
- Ok
- Cancel
- Quit
- Exit
- Yes
- No

There are also shortcuts for more generic button functions:
- SimpleButton
- ReadFormButton
- RealtimeButton


## Contribute
Feel free to contribute by opening a pull request, but take care about the naming conventions.

## Versioning
For the versions available, see the [tags on this repository](https://github.com/PitPietro/pythonGUI/tags).

## License
This project is open source, under a [MIT License](LICENSE).

## Author
**Pietro Poluzzi** - [PitPietro](https://github.com/PitPietro)
<br>See also the list of [contributors](https://github.com/PitPietro/pythonGUI/contributors) who participated in this project.