---
title: "Execute a python script"
date: 2020-07-19
categories: Script
tags: [linux, python, script, terminal]
excerpt: "Learning Python foundamentals"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
There is only a way you can enable a Python script to execute. But there is also a second way, where you can use the Terminal to start a Python file from its main function.

## Execute a py script

### Create the script
Assimung you want to place your script inside a Documents' subfolder, let's jump into it and create the file. `cd /Documents/script_folder && touch hello.py`. Then type `nano hello.py` to edit the file and copy-paste the content below.
```
[the script]
```

If you type the command `ls -l`, you will se that *hello.py* has read and write permissions for the owner and the owner's group, while only the read permission for anyone else.
<code><span style="color:green">pit@Aspire</span>:<span style="color:lightblue">~/Documents/script_folder</span>$ ls -l</code>
```
-rw-rw-r-- 1 pit pit 69 lug 21 08:43 hello.py
```

### Add the execute permissions
<code><span style="color:green">pit@Aspire</span>:<span style="color:lightblue">~/Documents/script_folder</span>$ chmod +x hello.py</code><br>
Is the same thing as type:<br>
<code><span style="color:green">pit@Aspire</span>:<span style="color:lightblue">~/Documents/script_folder</span>$ chmod 774 hello.py</code><br>
If you type again the `ls -l` command, you will se thwe following output:
```
-rwxrwxr-x 1 pit pit 69 lug 21 08:43 hello.py
```

### Run the script from the terminal
Here you are! Let's type:
```
python3 ./hello.py
```
And get as output:
```
[the output]
```