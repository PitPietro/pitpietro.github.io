---
title: "Change permission to a file"
excerpt: "Enhance productivity in Linux"
date: 2020-07-21
tags: [terminal, linux]
---

## Introduction
Here is a focus about changing permission to a file.

## File Permissions
If you type the `ls -l` command, you’ll see the **file permissions** (together with some useful info) foreach file in the current directory. **file permissions** are a set of rules which describes what operations a user can or cannot perform on a given file (or folder).<br>
The operations are:
1. `r` - `read`
2. `w` - `write`
3. `x` - `execute`

Those actions can be performed by three types of users:
1. The owner of the file or the folder
2. A member of a group associated with the file or the folder
3. Everyone( none of the above): not an owner and not in a group associated

String permissions specifies the permissions for all the types of users and preserve a character for the type (file, folder, ...).

### Change permission
For each set of permissions (the owner, the group, anyone else), you can assign a number in the *octal notation* below:

| number | permissions             |  rwx  |
|--------|-------------------------|-------|
| 0      | none                    | `---` |
| 1      | execute                 | `--x` |
| 2      | write only              | `-w-` |
| 3      | write and execute       | `-wx` |
| 4      | read only               | `r--` |
| 5      | read and execute        | `r-x` |
| 6      | read and write          | `rw-` |
| 7      | read, write and execute | `rwx` |

Say you have `my_file.c` and you want to set `read` and `write` permissions for both the user and its group and no permissions to everyone else, you'll type:
```bash
chmod 660 my_file.c
```

While if you want to be the only one to `read`, `write` and `execute` the file, you'll type:
```bash
chmod 700 my_file.c
```

<br>
You can read more about the chmod command at [linux main page](https://man7.org/linux/man-pages/man1/chmod.1.html).

## chown and chgrp
You can change the ownership of a file (or folder) by typing:
```bash
chwon [new_user]:[new_group] [file_name]
```

Or you can only change the group with
```bash
chgrp [new_group] [file_name]
```
