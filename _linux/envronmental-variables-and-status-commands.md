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
This does not work
| Shell    	| file     	|
|----------	|----------	|
| Bash     	| .bashrc  	|
| Tcsh/Csh 	| .cshrc   	|
| Ksh      	| .profile 	|
| Zsh      	| .zshenv  	|
-->
<br>
Since I am using Ubuntu 20.04.1 LTS, I'll refer to the `.bashrc` file.

### PATH
`$PATH` lists all the folders that contain executable scripts. The folders are separated by `:` symbol.
```bash
echo $PATH

# Acts the same as the command above
printenv PATH
```

It will return something like this:
```bash
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

This variable is very usefull when you want to [run a script from anywhere](https://pitpietro.github.io/linux/run-script-anywhere/) in your PC.<br><br>

If you want to know where a command comes from, type:
```bash
which [command_to_find]
```

For example:
- `which sudo` will return `/usr/bin/sudo`
- `which ls` will return `/usr/bin/ls`


### printenv
Return all the *env vars* stored on the machine.
```bash
printenv
```

You can pass one or more variables (separed by a single `space`) to the command to get the variable(s) value:
```bash
# Get the single env var value
printenv [variable]

# Get multiple env vars values
printenv [variable_1] [variable_2] [variable_3] ... 
```

If you want to know (for example) *user*, *present working directory* and *language*, type:
```bash
printenv USER PWD LANG
```

In my own case, it will return:
```bash
pit
/home/pit/Documents/pitpietro.github.io
en_US.UTF-8
```
<br>

**Please Note**: As I wrote above, the *env vars* are not preceded by the `$` symbol in this specif situation.

### PWD
Returns the *present working directory*.
```bash
echo $PWD

# Acts the same as the command above
pwd

# Acts the same as the command above
printenv PWD
```

![pwd screen](/assets/images/linux/env_var_status/pwd_.png)

### USER
Returns the current user logged-in into the computer.
```bash
echo $USER
```

#### SUPER USER
You can enter in the *sudo* mode with the command:
```bash
sudo su
```

You can only access this Terminal if the current user is in the `sudo` [group](#groups).<br>
If you now type `echo $USER` it should return `root`.<br>
You now have access to all files and foldes of all the PC's users, you are the **SUPER USER**.<br>
To exit from the **root** Terminal, just type `exit`.<br>

**Please Note**: *sudo* stands for *super user do*.

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