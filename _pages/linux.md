---
layout: archive
permalink: /linux/
title: "Linux Tips & Tricks"
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

{% include group-by-array collection=site.posts field="tags" %}
{% for post in site.categories.Linux %}
<li>
  <span>{{ post.date | date_to_string }}</span> &nbsp;
  <a href="{{ post.url }}">{{ post.title }}</a>
</li>

{% for tag in [linux, terminal] %}
  {% assign posts = group_items[forloop.index0] %}
    <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
    {% for post in posts %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% endfor %}