---
layout: splash
permalink: /privacy-security/
title: "Privacy & Security posts by tags" 
---
<br>

# Linux Tips & Tricks
<hr>

## Privacy
{% for post in site.categories.Internet %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}