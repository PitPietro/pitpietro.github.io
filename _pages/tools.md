---
layout: splash
permalink: /tools/
title: "Tools"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---
<br>

# Tools
All the softwares, hardwares, tips and advice about working as freelance, be a developer, a sport addicted and everything you want to be!  
<hr>

## Coders tools
{% for post in site.categories.Coders %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}