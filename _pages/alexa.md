---
layout: splash
permalink: /alexa/
title: "Alexa"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---
<br>

# Alexa
<hr>

## Alexa Skills
{% for post in site.categories.AlexaSkills %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}

## Alexa Setup
{% for post in site.categories.AlexaSetup %}
  <h3>
    <span>{{ post.date | date_to_string }}</span> &nbsp;
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{% endfor %}