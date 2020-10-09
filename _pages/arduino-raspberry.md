---
layout: splash
permalink: /arduino-raspberry/
title: "Arduino & Raspberry"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---
<br>

# Arduino
<hr>

## Raspberry PI & Arduino
{% for post in site.categories.RaspberryArduino %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

## Arduino
{% for post in site.categories.Arduino %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

## Raspberry PI
{% for post in site.categories.Raspberry %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}