---
layout: widget
title: LinkedIn Company Profile
searchable: false
versions:
- version: Version 2.0
  url: /widgets/v2/linkedin-company-profile/
- version: Version 1.0
  url: /widgets/v1/linkedin-company-profile/
---

# LinkedIn Company Profile

Add a Linkedin company profile widget to your template.

## Overview

You can add a LinkedIn company profile widget to your template. This profile URL can be changed later in the BaseKit Editor.

To include a LinkedIn profile widget in your template you will need to add the following line:

{% highlight python %}
{% raw %}

{{widget('linkedincompanyprofile', 'thisuniquewidgetname', {'source': 'companyname', 'companyName': 'My Company'})|raw}}

{% endraw %}
{% endhighlight %}

## Widget Options

You can change the following options for the widget:

* `source`: The source type. Possible values: `companyName` or `id`

* `companyName`: If the type is set to `companyName`, you have to set the company name to allow the widget to retrieve the profile

* `linkedinID`: If the type is set to `id`, you have to set the LinkedIn ID to allow the widget to retrieve the profile
