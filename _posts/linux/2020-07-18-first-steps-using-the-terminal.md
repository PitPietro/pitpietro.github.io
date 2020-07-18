---
title: "First steps using the Terminal"
date: 2020-07-08 # yyyy/mm/dd
categories: Linux
tags: [terminal, linux]
# header:
#     image: "/assets/images/posts/privacy_and_security/duck_transparent.gif"
excerpt: "Enhance productivity in Linux"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

<p align="center"><i>Enhance productivity in Linux</i></p>

## Introduction
Getting in touch with the terminal is one of the most import things to learn when switching to a Linux distribution!

## Most usefull commands
Here is a list of the most usefull terminal commands you must know how to use in your linux machine (in alphabetical order).

### cat
Visualize the content of a file in the terminal.

### Change Directory - cd
The *change directory* command allow you to change the directory where the Terminal is currenlty in. For example, if you want to get inside the Desktop directory, you need to type `cd Desktop`. Moreover, if you type `cd ../`, the terminal will change directory a step back to the root directory. So, if you type if from the Desktop directory, you'll jump back to */home/$USER* (if you didn't typed `sudo su`, you will only see *$USER/hostname:~$*).

### Make Directory - mkdir
It allows to create a directory in the path where the terminal currently is. By default, the terminal opens in `/home/$USER/`. *$USER* is an environmental variable that keeps track of the current user. To find out the current user logged-in, just type [whoami](#who-am-i---whoami).<br>
If you want to create a new folder in Documents, just type `cd Documents` and `mkdir [folder_name]` where *[folder_name]* is, of course, the name you have choosen for your new folder. You can type multiple terminal command by using the keyword *&&*. So, the commands became `cd Documents && mkdir [folder_name]`.

### nano
Use `nano [file_name]` to open the command-line text editor and edit the file. 

### Present Working Directory - pwd
The *present working directory* command tells you the absolute path of the directory you are currently in. So, if I you are in the Document directory, `pdw` will return `/home/$USER/Documents`.

### touch
Create a file by typing `touch [file_name]`. If you don't specify an extension, it will be considered a text file (.txt). You can visualize its content with [cat](#cat) and modify it with [nano](#nano).
You can even add *some content* (literally) by typing `echo "some content" > [file_name]` (**>** acts as a redirector).

### Who Am I - whoami
The command `whoami` tells you the currently logged-in user. You can archive this result even by typing `echo $USER`. 