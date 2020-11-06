---
title: "Environmental Variables"
excerpt: "Enhance productivity in Linux"
# header:
  # image: /assets/images/linux/default-img.png
  # teaser: assets/images/linux/default-img-th.png
date: 2020-09-05
# categories: Terminal
# tags: [terminal, linux]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
All the environmental variables must be called with a `$` sign before if: `PATH` becames `$PATH` and so on). The only exception of this "rule" is when using [printenv](#printenv) command.

## Create a custom env var
Depending on the shell you have installed on your distro, you have to modify a different file to add a new env var. Let's find out what is your default shell: `echo $0`<br>
The command above prints the 0th segment of a command, so the "thing" that runs the command. Take a look at the table below to see what file (or files) you'll have to modify to add a new variable.

| Shell    	| file     	|
|----------	|----------	|
| Bash     	| .bashrc  	|
| Tcsh/Csh 	| .cshrc   	|
| Ksh      	| .profile 	|
| Zsh      	| .zshenv  	|
<br>
Since I am using Ubuntu 20.04.1 LTS, I'll refer to the `.bashrc` file.

## PATH
`echo $PATH` or `printenv PATH`.<br>
PATH lists all the folders that contain executable scripts. If you want to know where **ls** command (or any command) comes from, type `which ls` (or `which my_command`). In the case of **ls**, it will return `/usr/bin/ls`. If you then type `echo $PATH` to print out the PATH's content, you'll get the folders separated by the **:** symbol. Between those folders, you can read `:/usr/bin:`.<br>
This variable is very usefull when you want to run a script from anywhere in your PC.

## printenv
`prinenv` prints all the environmental variables stored. You can pass one or more variables and this command will return the values. 

## PWD
`echo $PWD` acts exatly as `pwd`. It prints out the *present working directory*. 

## USER
`echo $USER` prints out the current user logged in into the computer.<br>
If you open a Terminal and enter in the *sudo* mode with `sudo su`, you'll see a new Terminal. The symbols `:~$` have been replaced by `:/home/$USER#`. This variable is very usefull when you need to generalize a script for different user (maybe also in different PCs).