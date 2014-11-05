---
layout: widget
title: Yelp Reviews

---

# Yelp Reviews

Version: >= 7.34. Add a yelp review widget to your template.

## Overview

You can add a yelp review widget to your template. The yelp business id can be changed later with the BaseKit Editor.

To include a yelp widget in your template you will need to add the following line:

{% highlight ruby %}
{% raw %}

	{{widget('yelpreview', 'thisunqiuewidgetname', {'title': 'Yelp Review', 'yelpbusinessid': ''})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* ```title```: The title to display above the review. can be left blank

* ```yelpbusinessid```: This is the unique yelp id yelp uses to find your business, i.e. ```apple-store-london-5```

* ```refreshTime```: How often the widget refreshes ```3600000``` ```72000000```