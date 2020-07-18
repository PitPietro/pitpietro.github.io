---
layout: archive
permalink: /linux/
title: "Linux Tips & Tricks"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Terminal
{% for post in site.categories.Linux %}
<li>
  <span>{{ post.date | date_to_string }}</span> &nbsp;
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
</li>
{% endfor %}