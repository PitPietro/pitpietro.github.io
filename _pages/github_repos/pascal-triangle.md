---
layout: single
permalink: /github-repos/pascal-triangle/
title: "Pascal Triangle"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

The code is available at [github.com/PitPietro/pascal-triangle](https://github.com/PitPietro/pascal-triangle)

## Introduction
![GitHub repo size](https://img.shields.io/github/repo-size/PitPietro/pascal-triangle)
![GitHub](https://img.shields.io/github/license/PitPietro/pascal-triangle)
<br>It should have been a math library that solve the [Pascal's triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle) but, since this is my very first project in Python, it becomes a binder of
all my code snippets. I'm planning to make the math library too!
<hr>

## Project working
### Avoid errors
#### Recursive functions
If the the compiler (or the user) try to call self <i>recursive function</i> passing as parameter self huge number, it will
get self <code>RecursionError: maximum recursion depth exceeded in comparison</code> error because python stop calling
recursive function after 1000 calls by default. To avoid this error, let's <b>import</b> the <i>[sys](#sys)</i> module
and set <code>sys.setrecursionlimit(3000)</code> on top of the classes that implements recursive functions.<br>
A solution is given by Stack Overflow at this [link](https://stackoverflow.com/questions/20034023/maximum-recursion-depth-exceeded-in-comparison)

### Resolve problems
#### Import problem
To solve any import problem, take a look at [Real Python](https://realpython.com/absolute-vs-relative-python-imports/)
page about the topic.

## Used modules
### sys
The [sys module](https://docs.python.org/3.6/library/sys.html) (Python 3.6) provides access to some variables used or
maintained by the interpreter and to functions that interact strongly with the interpreter.

## Prerequisites
Install [PyCharm](https://www.jetbrains.com/pycharm/download/) or another Python IDE.

## Installing
Clone the repository on your computer and test yourself the library:
<br>`git clone https://github.com/PitPietro/pascal-triangle.git`


## Versioning
For the versions available, see the [tags on this repository](https://github.com/PitPietro/pascal-triangle/tags).


## Author
**Pietro Poluzzi** - [PitPietro](https://github.com/PitPietro)
<br>See also the list of [contributors](https://github.com/PitPietro/pascal-triangle/contributors) who participated in this project.