---
title: "Execute a python script"
excerpt: "Learning Python foundamentals"
header:
  image: /assets/images/linux/default-img.png
  teaser: assets/images/linux/default-img-th.png
date: 2020-07-20
# categories: Script
# tags: [linux, python, script, terminal]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
Here is the rightest way you can enable a Python script to execute.

## Create the script
Assimung you want to place your script inside a Documents' subfolder, let's jump into it and create the file. `cd /Documents/script_folder && touch hello.py`. Then type `nano hello.py` to edit the file and copy-paste the content below.
```python                                            
#!/bin/usr/python3


def say_hello():
        name = input('What\'s you name? ')
        if name != '':
                print('Hello {}!'.format(name))
        else:
                print('Hello World!')

say_hello()

```

If you type the command `ls -l`, you will se that *hello.py* has read and write permissions for the owner and the owner's group, while only the read permission for anyone else.
<code><span style="color:green">pit@Aspire</span>:<span style="color:lightblue">~/Documents/script_folder</span>$ ls -l</code>
```bash
-rw-rw-r-- 1 pit pit 69 lug 21 08:43 hello.py
```

## Add the execute permissions
<code><span style="color:green">pit@Aspire</span>:<span style="color:lightblue">~/Documents/script_folder</span>$ chmod +x hello.py</code><br>
Is the same thing as type:<br>
<code><span style="color:green">pit@Aspire</span>:<span style="color:lightblue">~/Documents/script_folder</span>$ chmod 775 hello.py</code><br>
If you type again the `ls -l` command, you will see the following output:
```bash
-rwxrwxr-x 1 pit pit 69 lug 21 08:43 hello.py
```

But, since we do not want other users to be able to execute the script, let's type as follow:
```bash
chmod 774 hello.py
```

The `ls -l` command will output:
```bash
-rwxrwxr-- 1 pit pit 69 lug 21 08:43 hello.py
```

As you can read in my [article](http://127.0.0.1:4000/terminal/change-permission-to-files/), `-rwxrwxr--` means that `hello.py` is a file (the `-` symbol) and:
1. user (pit) has read, write and execute permissions: `rwx`
2. the user's group (pit, not to be confused with the user) has read, write and execute permissions too: `rwx`
3. the other users (outside the pit group) have read permission only: `r--`

## Run the script from the terminal
Here you are! Let's type:
```bash
python3 ./hello.py
```

And get as output:
```
What's your name?
```

Type your name or just a name, for example `Bob` and get the result:
```
Hello Bob!
```

Allowing an interaction with the end-user, the output will always change! Moreover, if you do not insert any name and simply press `Enter` when the program asks for your name, it will print:
```
Hello World!
```