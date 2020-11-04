---
title: "Work with files and directories"
date: 2020-07-20 # yyyy/mm/dd
categories: Terminal
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

## cat
This command take its name from the word *concatenation* because, among other functions, it can concatenate different files into a single one. But the simpliest task you can perform is showing the content of a file. Assuming you have a file called *my_file.txt* in the current working directory, let's type `cat my_file.txt`. You can also display the content of different files listing them all after the `cat` command, separated by a single space. As a matter of fact, it is already a *concatenation*, but it has no effect until you redirect the output to a new file.

### append
If you want to append a file at the end on an existing ones, you must use the **>>** sign. Say that you want to append *chapter_tree.txt* to *book.txt*, you'll type:<br>
```bash
cat chapter_tree.txt >> book.txt
```

### concatenate
Say that you want to concatenate *chapter_one.txt* and *chapter_two.txt* files into *book.txt* file, you'll have to use the following command:<br>
`cat chapter_one.txt chapter_two.txt > book.txt`<br>
You could now remove the chapters files with the [remove](#remove---rm) command.

### redirect stdin
The **cat** command allows to redirect the input from the keyboard into a file, that is saved once the user press `Ctrl + D`.<br>
```bash
cat > my_file.txt
```

If the file already exist, it will be overridden.<br>
You can append what you write in the keyboard using the **>>**:<br>
```bash
cat >> my_file.txt
```

### cat flags
The cat command has some usefull flags, let's explore them. By doing this, I suggest you to copy/paste [my_file.txt](https://raw.githubusercontent.com/PitPietro/pitpietro.github.io/master/_posts/linux/terminal/my_file.txt) that has everything you need to see the flags functionalities.

#### -b
Do not number blank lines. It overrides the **-n** flag.<br>
`cat -b my_file.txt`

#### -E
Display the **$** symbol at the end of each line.<br>
`cat -E my_file.txt`

#### -n
Number the lines of the file.<br>
`cat -n my_file.txt`

#### -s
Do not show multiple blank lines.<br>
`cat -s my_file.txt`

#### -T
Display the TABs with **^I** symbols.<br>
`cat -T my_file.txt`


## Change Directory - cd
The *change directory* command allow you to change the directory where the Terminal is currenlty in. For example, if you want to get inside the Desktop directory, you need to type `cd Desktop`. Moreover, if you type `cd ..`, the terminal will change directory a step back to the root directory. So, if you type if from the Desktop directory, you'll jump back to */home/$USER* (if you didn't typed `sudo su`, you will only see *$USER/hostname:~$*). To return to the root folder */home/$USER* from anywhere (any folder in the computer), simply type `cd`.

## Compare files line by line - diff
```bash
diff file_1.txt file_2.txt
```
One of the most interesting flag is `-y` (` --side-by-side`) that output the result in two columns and add a | symbol before the files which are different.  

## Copy Files and Folders - cp
`cp [file] [copied_file]`. If you have a file called *my_book.pdf* and you want to copy it in a new file called *my_second_book.pdf*, type `cp my_book.pdf my_second_book.pdf`.

## Links - ln
There are two different types of links you can create.

### Hard Links
Move your terminal to the Documents folder and create a file called *hello.txt*: `cd Documents && touch hello.txt`. Then type `nano hello.txt` to edit the file and copy-paste the content below.
```
Hello I am Pit and I am a Linux passionate!
```

Create an hard link: `ln hello.txt hello_link.txt`. You can now move *hello.txt* anywhere in the PC and the link will still work! Use `mv hello.txt ..` to move the file a folder back to the root and try to `nano hello_link.txt`. The changes to the are reflected to both the files. Moreover, if you delete *hello.txt*, *hello_link.txt* will still continue to exist (because it has been create with and hard link).

### Symbolc Links
It creates a reference in place of a "copy". To create a symbolic link, you need to **-s** flag. `cd Documents && echo "I am a dog" > dog.txt` to create a file called *dog.txt*.<br>
Create a symbolic link: `ln -s dog.txt symbolic_dog.txt`. The changes to the are reflected to both the files. Moreover, if you delete or change directory to *dog.txt*, *symbolic_dog.txt* will not be able to reference its content anymore: the symbolic link will break.

## List files and directories - ls
`ls` lists all the files and folders placed in the current directory. You can add several flags and combine them to get a more complex output.<br>

### -a
Lists the hidden files and folders. The elements who starts with a period `.` are hidden by default (`.idea` folder, `.git` file and so on).

### -F
Appends a character (`/`, `@` or `*`) to each listed element. It will tells the element type:
- `/`: Directory
- `@`: Link (the file that follows `->` is the link target)
- `*`: Executable
- If there's no character, the element is a file

### -l
The *long format* flag display several information about each element:
1. permissions
2. number of links
3. owner name
4. group name
5. Number of bytes in the element
6. last modification time
7. element name

For a more detailed explanation of *permission* meaning, read my article about [change permission to a file](https://pitpietro.github.io/terminal/change-permission-to-files/) 

### -R
Lists files and folders recursively, like the `tree` command but a bit more complex.

### -t
Sort elements by modification time: newest first.


For a more detailed view of the **ls** flags, see [gnu.org - ls](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html). 

## Make Directory - mkdir
It allows to create a directory in the path where the terminal currently is. By default, the terminal opens in `/home/$USER/`. *$USER* is an environmental variable that keeps track of the current user. To find out the current user logged-in, just type [whoami](https://pitpietro.github.io/terminal/status-commands/#who-am-i---whoami).<br>
If you want to create a new folder in Documents, just type `cd Documents` and `mkdir [folder_name]` where *[folder_name]* is, of course, the name you have choosen for your new folder. You can type multiple terminal command by using the keyword *&&*. So, the commands became `cd Documents && mkdir [folder_name]`.

## Move and Rename - mv
If you want to move a file or a folder in a different folder, type `mv [file_or_folder_name] [subfolder]`. In place of *subfolder* you can use the folder's absolute path. You can even move a file (or a folder) in a folder that is a step back to the root directory: if you have a Documents' subfolder called "my_project" where is placed a file called "test1.txt" and you want to bring that file on Documents folder, you need to type `mv test1.txt ..`.<br>
If you want to remane a file or folder, you need to type `mv [file_or_folder_name] [new_or_folder_file_name]`. You can use the same command to rename a folder, too.

## nano
Use `nano [file_name]` to open the command-line text editor and edit the file. Some alternatives to *nano* are [cat](https://www.howtogeek.com/424234/how-to-use-the-linux-cat-and-tac-commands/), [less](https://www.howtogeek.com/444233/how-to-use-the-less-command-on-linux/) or [vim](https://www.howtogeek.com/102468/a-beginners-guide-to-editing-text-files-with-vi/) (also known as *vi*).

## Present Working Directory - pwd
The *present working directory* command tells you the absolute path of the directory you are currently in. So, if I you are in the Document directory, `pdw` will return `/home/$USER/Documents`.

## Redirection > & >>
Use the `>` and `>>` symbols to redirect the output of a command.<br>
`echo [some content] > my_file.txt` or `echo [some content] >> my_file.txt`. In this examples, the **echo** command is redirect to the *my_file.txt* file.<br>
`>` overrides the content of the file, while `>>` append it to the file. So, if you type `$ echo Hello > hello.txt` and then `$ cat hello.txt` you will get as output `Hello`. If you then type `$ echo World > hello.txt`, with `$ cat hello.txt` you will get `World`.<br>
While, starting from `$ echo Hello > hello.txt`, you'll then type `$ echo World >> hello.txt`, with `$ cat hello.txt` you will get `Hello World` (with the second word in a new line).<br>

## Remove - rm
Use `rm [file_name]` to permanenlty remove a file. Use `rm -r [folder_name]` to remove a folder and all its content. 

## touch
Create a file by typing `touch [file_name]`. If you don't specify an extension, it will be considered a text file (.txt). You can visualize its content with **cat** and modify it with [nano](#nano).
You can even add *some content* (literally) by typing `echo "some content" > [file_name]` (**>** acts as a redirector).

## tree
First of all, you need to install a tiny package: `sudo apt install tree`.<br>
`tree` shows the elements (even inside the subdirectories) in the current directory with less info than `ls` command but in a more good-looking way.

### -d
Shows the directories only

<hr>

## Shortcuts

## TAB
The **Tab** key will suggest you how to end a terminal command. If you want to change directory from the user's root to *Pictures*, you can type `cd Pic` and then press `Tab`: it will automatically complete the command in `cd Pictures`. Moreover, if you just type `cd D` (from the user's root directory), the `Tab` key will return all the folders that starts with the letter **D**: `Desktop/   Documents/ Downloads/ `.