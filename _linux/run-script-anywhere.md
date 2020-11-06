---
title: "Run a script from anywhere"
excerpt: "Stop loosing time with useless routines"
# header:
  # image: /assets/images/linux/default-img.png
  # teaser: assets/images/linux/default-img-th.png
date: 2020-09-01
# categories: Script
# tags: [terminal, linux, script, bash, python]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Create the folder and the script
Let's **cd** into your Document directory and create a new folder called *script_folder*:<br>
`cd Documents/ && mkdir script_folder`<br>
You can name your folder and your file as you prefer, but I suggest you to follow my same names as they'll be used again during this tutorial.<br>
Let's create and update the script:<br>
`touch hello.py`<br>
`nano hello.py`<br>
In the terminal-based text editor copy/paste or write the lines below:<br>
```python
#!/usr/bin/python3.8


def say_hello():
    print('Hello World')


say_hello()


```

Then hit **Ctrl + X** to exit the editor and **Ctrl + Y** to save its content.<br>
**Please Note**: I use *nano* because it's very easy to use, but you are free to use your favourite text editor (terminal-based or not).<br>

## Give the execute permission to the file
Since we want to be able to run our script from the terminal, we need to allow us to execute it.<br>
`chmod 774 hello.py`<br>
You can now type `./hello.py` from the folder that contains the script since `./` tells the shell to look for *hello.py* in the current directory.

## Add the folder to PATH environmental variable
Since we want to run the script from anywhere in the Terminal, and not just from its directory, we need to add *script_folder* to **$PATH**.<br>
PATH lists all the folders that contain executable scripts. If you want to know where **ls** command (or any command) comes from, type `which ls` (or `which my_command`). In the case of **ls**, it will return `/usr/bin/ls`. If you then type `echo $PATH` to print out the PATH's content, you'll get the folders separated by the **:** symbol. Between those folders, you can read `:/usr/bin:`.<br>
Depending on the shell you have installed on your distro, you have to modify a different file to add a the *script_folder*'s path to PATH. Let's find out what is your default shell: `echo $0`<br>
The command above prints the 0th segment of a command, so the "thing" that runs the command. On Ubuntu and derivates, the default shell is *bash*. If you have this shell, you'll have to modify `.bashrc` file.<br>
Open a new terminal and type:<br>
`nano .bashrc`<br>
Scroll down to the end of the file and type:<br>
`export PATH=$PATH:/home/$USER/Documents/script_folder`<br>
Hit **Ctrl + X** to exit the editor and **Ctrl + Y** to save its content.<br>
**Please Note**: The *$USER* environmental variable stores the name of the current user logged in into the computer (in my case is *demo*).<br>
Close and open again a Terminal window, now you can run *hello.py* and all the scripts placed in *script_folder* from anywhere in your PC!
**Please Note**: To call the script, just type `hello.py` without the starting `./` since you're no loger in its directory.

## Add the alias to "remove" the extension
You can use an *alias* to call the script without the extension.<br>
Open again `.bashrc` file.<br>
`nano .bashrc`<br>
Scroll down to the end of the file and type:<br>
`alias hello='hello.py'`<br>
Hit **Ctrl + X** to exit the editor and **Ctrl + Y** to save its content.<br>
Close and open again a Terminal window, now you can run *hello* script from anywhere in your PC!
