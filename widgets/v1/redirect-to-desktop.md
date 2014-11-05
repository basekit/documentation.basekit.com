---
layout: widget
title: Redirect To Desktop

---

# Redirect to desktop - (V6 + M Version only)

Add a redirect to desktop widget to your template.

## Overview

You can add a redirect to desktop widget to your template. This widget will allow to go to the desktop from the mobile site.

To include a redirect to desktop widget in your template you will need to add the following line:

{% highlight ruby %}
{% raw %}

	{{widget('redirecttodesktop', 'thisunqiuewidgetname', {'text': 'Go to desktop version'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* ```text```: The text that will be displayed in the widget