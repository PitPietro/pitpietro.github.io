---
title: "Environmental Variables & Status Commands"
excerpt: "Findout usefull info from Terminal"
header:
  image: /assets/images/linux/status-header.png
  teaser: /assets/images/linux/status-header-th.png
date: 2020-07-20
# categories: Terminal
# tags: [terminal, linux]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
I decided to merge those couple of arguments because of their affinity.<br>
*Status commands* tells you usefull information about the machine status (and so also *environmental variables* do). They can be called from any folders and will always return the same result.<br>
Moreover, *environment variables* allow you to customize how the system works and the behavior of the applications on the system (they can store: default editors, keyboard layout settings, path to executable files and so on).<br>
Since I wrote them in alphabetical order, some command could reference to commands that has not yet been introduced.

## Environmental Variables
From now on, *environmental variables* will be shortened to *env vars* (or *env var*, the singular) to allow greater readability of the post.<br>
All the *env vars* must be called with a `$` sign before them: `PATH` becames `$PATH` and so on. The only exception of this "rule" is when using [printenv](#printenv) command.

### Create a custom env var
It's essential to know how to create an *env var*, even before studying the system ones.<br>
Depending on the shell you have installed on your distro, you have to modify a different file to add a new *env var*. Let's find out what is your default shell: `echo $0`<br>
The command above prints the 0th segment of a command, so the "thing" that runs the command. Take a look at the table below to see what file syou'll have to modify to add a new variable.

<table width="100%">
  <tr>
    <th>Shell</th>
    <th>file</th>
  </tr>
  <tr>
    <td>Bash</td>
    <td>.bashrc</td>
  </tr>
  <tr>
    <td>Tcsh/Csh</td>
    <td>.cshrc</td>
  </tr>
  <tr>
    <td>Ksh</td>
    <td>.profile</td>
  </tr>
  <tr>
    <td>Zsh</td>
    <td>.zshenv</td>
  </tr>
</table>

<!--
| Shell    	| file     	|
|----------	|----------	|
| Bash     	| .bashrc  	|
| Tcsh/Csh 	| .cshrc   	|
| Ksh      	| .profile 	|
| Zsh      	| .zshenv  	|
-->
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

## Status Commands
### groups
Returns the list of groups the actual `$USER` is member of:
```bash
groups
```

Examples of groups are: `adm`, `dialout`, `cdrom`, `sudo`, `dip`, `plugdev` and so on.

### hostname
The `hostname` is basically your PC name. It uniquely identify your machine on the local network:
```bash
hostname
```

Adding the `-I` flag, the command will return your private IP address.
```bash
hostname -I
```

#### Change hostname
You can easly change your `hostname` by modifying a couple of files.<br>
Open a brand new Terminal window and type:
```bash
sudo nano /etc/hostname
```

Delete its content and type your new PC name. Then press `Ctrl` + `X` to exit and `Y` to save the file changes.<br>
Moreover, you need to change the file that redirect `localhost` servers to your PC name.
```bash
sudo nano /etc/hosts
```

The first two lines should look like:
 ```bash
127.0.0.1       localhost
127.0.1.1       old_pc_name
```

Change `old_pc_name` (which off course represent your old PC name) with the name you already wrote on `/etc/hosts`.<br>
Press `Ctrl` + `X` to exit and `Y` to save the file changes.<br>
To make those changes visible, just reboot your PC. You can do it with a Terminal command:
```bash
reboot
```

### Who Am I - whoami
Tells you the currently logged-in user.
```bash
whoami
```

You can archive this result even by typing.
```bash
echo $USER
```


<!--
When you open a Terminal window, you are faced with such a structure:
```bash
$USER@hostname:~$PWD$
```

$PWD without /home/$USER

-->