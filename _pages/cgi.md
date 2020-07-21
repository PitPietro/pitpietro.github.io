---
layout: archive
permalink: /cgi/
title: "Computer-Generated Images"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Blender
{% for post in site.categories.Blender %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}