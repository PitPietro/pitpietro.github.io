---
layout: splash
permalink: /coding/
title: "Coding"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---
<br>

# Coding
Some usefull code tips foreach programming languages I will learn!<br>
<hr>

## Python
{% for post in site.categories.Python %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

## Tips
All the softwares, hardwares, tips and advice about coding and develop software solution!<br>
```bash
comming soon
```