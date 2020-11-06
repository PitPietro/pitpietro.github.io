---
title: "Writing bash scripts"
excerpt: "Enhance productivity in Linux"
# header:
  # image: /assets/images/linux/default-img.png
  # teaser: assets/images/linux/default-img-th.png
date: 2020-07-20
# categories: Script
# tags: [terminal, linux, script, bash]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Writes and runs the script
Open the terminal by pressing `Ctrl + Alt + T` and change directory to Documents, create a new folder with `mkdir script_folder` and jump right into it with `cd script_folder`. Create a file with `touch script1.sh` and edit it using the nano terminal text editor: `nano script1.sh`.
```bash
ls
pwd
pushd .
cd ~
pwd
popd
```

Press `Ctrl + X` to exit the editor and `Y` to save the changes.
To run the script, type `./script1.sh` and see the result.

<hr>
For more information about the **pushd** and **popd** commands, read this [article](https://www.howtogeek.com/659146/how-to-use-pushd-and-popd-on-linux/).