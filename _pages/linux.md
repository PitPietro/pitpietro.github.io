---
layout: splash
permalink: /linux/
title: "Linux Tips & Tricks"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---
<br>

# Linux Tips & Tricks
<hr>

## Terminal
{% for post in site.categories.Terminal %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

## Script
{% for post in site.categories.Script %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

{% for post in site.tag[0].terminal %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}