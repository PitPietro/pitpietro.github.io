---
title: "Change permission to files"
date: 2020-07-21
categories: Terminal
tags: [terminal, linux]
excerpt: "Enhance productivity in Linux"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Introduction
Here is a list of all the commands that tells you something about the machine status. Those commands can run in any folders and will always return the same result.

## chmod
If you type `ls -l` you can see some information about files and folders. The first line is the *string permissions*, a set of rules which describes what operations a user can or cannot perform on a given file (or folder). The operations are:
1. **r** - reading
2. **w** - writing
3. **x** - executing

Those actions can be performed by three types of users:
1. The owner of the file or the folder
2. A member of a group associated with the file or the folder
3. Everyone, none of the above: not an owner and not in a group associated

The string permissions specifies the permissions for al the types of users and preserve a character for the type (file, folder, ...).

### Change permission
For each set of permissions (the owner, the group, anyone else), you can assign a number in the *octal notation* below:

| number | permission              | rwx |
|--------|-------------------------|-----|
| 0      | none                    | --- |
| 1      | execute                 | --x |
| 2      | write only              | -w- |
| 3      | write and execute       | -wx |
| 4      | read only               | r-- |
| 5      | read and execute        | r-x |
| 6      | read and write          | rw- |
| 7      | read, write and execute | rwx |

<br>You can 
<br>Moreover, you can reed more about the chmod command at [linux main page](https://man7.org/linux/man-pages/man1/chmod.1.html).

## chown and chgrp
You can change the ownership of a file (or folder) by typing `chwon [new_user]:[new_group] [file_name]`.<br>
Or you can only change the group with `chgrp [new_group] [file_name]`.