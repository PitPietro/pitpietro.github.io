---
title: "Work with files and directories"
date: 2020-07-20 # yyyy/mm/dd
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
Getting in touch with the terminal is one of the most import things to learn when switching to a Linux distribution! The very first tips to keep in mind is the shortcut `Ctrl + Alt + T` which opens a new Terminal window.

## Change Directory - cd
The *change directory* command allow you to change the directory where the Terminal is currenlty in. For example, if you want to get inside the Desktop directory, you need to type `cd Desktop`. Moreover, if you type `cd ..`, the terminal will change directory a step back to the root directory. So, if you type if from the Desktop directory, you'll jump back to */home/$USER* (if you didn't typed `sudo su`, you will only see *$USER/hostname:~$*). To return to the root folder */home/$USER* from anywhere (any folder in the computer), simply type `cd`.

## Copy Files and Folders - cp
`cp [file] [copied_file]`. If you have a file called *my_book.pdf* and you want to copy it in a new file called *my_second_book.pdf*, type `cp my_book.pdf my_second_book.pdf`.

## List - ls
`ls` lists all the files and folders placed in the current directory. You can add several flags and combine them to get a more complex output.<br>
- `ls -R` lists files and folders recursively, like the `tree` command but a bit more confusing
- `ls -a` lists also the hidden files and folders (the once who starts with a dot).
- `ls -l` prints some information about the elements.
- `ls -la` (or `ls -al`) prints some information about all the elements.

For a more detailed view of the **ls** flags, see [gnu.org - ls](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html). 

## Make Directory - mkdir
It allows to create a directory in the path where the terminal currently is. By default, the terminal opens in `/home/$USER/`. *$USER* is an environmental variable that keeps track of the current user. To find out the current user logged-in, just type [whoami](#who-am-i---whoami).<br>
If you want to create a new folder in Documents, just type `cd Documents` and `mkdir [folder_name]` where *[folder_name]* is, of course, the name you have choosen for your new folder. You can type multiple terminal command by using the keyword *&&*. So, the commands became `cd Documents && mkdir [folder_name]`.

## Move and Rename - mv
If you want to move a file in a different folder, type `mv [file_name] [subfolder]`. In place of *subfolder* you can use the folder's absolute path. You can even move a file in a folder that is a step back to the root directory: if you have a Documents' subfolder called "my_project" where is placed a file called "test1.txt" and you want to bring that file on Documents folder, you need to type `mv test1.txt ..`.<br>
If you want to remane a file, you need to type `mv [file_name] [new_file_name]`. You can use the same command to rename a folder, too.

## nano
Use `nano [file_name]` to open the command-line text editor and edit the file. Some alternatives to *nano* are [cat](https://www.howtogeek.com/424234/how-to-use-the-linux-cat-and-tac-commands/), [less](https://www.howtogeek.com/444233/how-to-use-the-less-command-on-linux/) or [vim](https://www.howtogeek.com/102468/a-beginners-guide-to-editing-text-files-with-vi/) (also known as *vi*).

## Present Working Directory - pwd
The *present working directory* command tells you the absolute path of the directory you are currently in. So, if I you are in the Document directory, `pdw` will return `/home/$USER/Documents`.

## touch
Create a file by typing `touch [file_name]`. If you don't specify an extension, it will be considered a text file (.txt). You can visualize its content with **cat** and modify it with [nano](#nano).
You can even add *some content* (literally) by typing `echo "some content" > [file_name]` (**>** acts as a redirector).

<hr>

## Shortcuts

## TAB
The **Tab** key will suggest you how to end a terminal command. If you want to change directory from the user's root to *Pictures*, you can type `cd Pic` and then press `Tab`: it will automatically complete the command in `cd Pictures`. Moreover, if you just type `cd D` (from the user's root directory), the `Tab` key will return all the folders that starts with the letter **D**: `Desktop/   Documents/ Downloads/ `.