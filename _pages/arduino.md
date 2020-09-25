---
layout: splash
permalink: /arduino/
title: "Arduino"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---
<br>

# Arduino
<hr>

## C-based
{% for post in site.categories.ArduinoC %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

## Python-based
{% for post in site.categories.ArduinoPy %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}