---
title: "Status Commands"
excerpt: "Findout usefull info from Terminal"
date: 2020-07-20
# categories: Terminal
# tags: [terminal, linux]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
Here are the commands that tells you something about the machine status. Those commands can run in any folders and will always return the same result.

## groups
Tells you the groups the actual `$USER` is member of. Examples of groups are: sudo, dip, cdrom, adm and so on.
```bash
groups
```

## hostname
The `hostname` is basically your PC name. It uniquely identify your machine on the local network.
```bash
hostname
```

Adding the `-I` flag, it will return your private IP address.
```bash
hostname
```

### Change hostname
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

Change `old_pc_name` (which offcourse represent your old PC name) with the name you already wrote on `/etc/hosts`.<br>
Press `Ctrl` + `X` to exit and `Y` to save the file changes.

## Who Am I - whoami
Tells you the currently logged-in user.
```bash
whoami
```
You can archive this result even by typing.
```bash
echo $USER
```