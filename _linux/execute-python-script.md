---
title: "Execute a python script"
excerpt: "Learning Python foundamentals"
# header:
  # image: /assets/images/linux/default-img.png
  # teaser: assets/images/linux/default-img-th.png
date: 2020-07-20
# categories: Script
# tags: [linux, python, script, terminal]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
There are many ways you can create, run or execute a Python script, here is the rightest way you can enable a Python script to execute.

## Create the script
Assimung you want to place your script inside `my_scripts` Documents' subfolder (which does not exist jet), let's open a new Terminal window and type:
```bash
# Create the directory
mkdir Documents/my_scripts

# Move inside the directory
cd Documents/my_scripts/

# Create the Python script
touch hello.py

# Edit the script
nano hello.py
```

The above lines that starts with `#` symbol, are comments I wrote just to clarify what I did.<br>
Let's update the script content with the code I wrote below:
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

## Add the execute permissions
If you type the `ls -l` command, you'll see the **string permission** (together with some useful info) foreach file in the current directory. For `hello.py`, it should looks like:
```bash
-rw-rw-r--
```

As you can read in my article about [changing permission to a file](https://pitpietro.github.io/linux/change-permission-to-files/), `-rw-rw-r--` means:
1. `hello.py` is a file (the starting `-` symbol)
2. The current user has `read` and `write` permission: `rw-`
3. The user's group has `read` and `write` permission: `rw-`
4. Other users (outside the user's group) have `read` permission only: `r--`
<br>

**Please Note**: *user* and *user group* could have the same name: take care not to confuse them!<br><br>

Let's add execute permission to the *user* and *user group*:
```bash
chmod 774 hello.py
```

Run again the `ls -l` command and analize the new **string permission** that should now look like: `-rwxrwxr--`
1. `hello.py` is a file (the starting `-` symbol)
2. The current user has `read`, `write` and `execute` permission: `rwx`
3. The user's group has `read`, `write` and `execute` permission: `rwx`
4. Other users (outside the user's group) have `read` permission only: `r--`
<br>

**Please Note**: `chmod` provides the easy-to-remember flag `+x`.<br>
It gives `execute` permission even to the users outside the file owner's group:
```bash
# Those lines are equivalent
chmod +x hello.py
chmod 775 hello.py
```

Feel free to use the right **string permission**, that best suits for your purposes.

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