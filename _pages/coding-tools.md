---
layout: splash
permalink: /coding-tools/
title: "Coding & Tools"
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

## Alexa
### 1. Alexa Skills
{% for post in site.categories.AlexaSkills %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

### 2. Alexa Setup
{% for post in site.categories.AlexaSetup %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

### 3.Alexa Theory
{% for post in site.categories.AlexaTheory %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}


<hr>
# Tools
All the softwares, hardwares, tips and advice about coding and develop software solution!<br>
<hr>

## Internet
{% for post in site.categories.Internet %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}