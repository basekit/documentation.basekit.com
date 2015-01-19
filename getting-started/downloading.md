---
layout: doc
title: Downloading a Template
---

# How to Download a Template

What you'll need to download a template:

* A local web server application (for example [MAMP for Mac OS X or Windows](/getting-started/#a-local-web-server-application))
* The BaseKit template Viewer [Link to part of my doc on the template viewer]

Read our [Getting Started](/getting-started/) document for more information.

Once you've picked your chosen template you'll be wanting to get hold of the code. Click on the template panel on the left hand side of The Editor interface:

![template tab](/assets/content/getting-started/template-tab.png)

A menu will appear on the right of the template panel. Click on the Download current template button to download our developer-friendly zip file. 

![download template](/assets/content/getting-started/download-template.png)

Once our zip file has downloaded feel free to have a little look at what's in there. Each file will of course be different for each template but you should have the following basics:

* ```stylesheets.less```: this is where you'll add your styles using CSS or LESS for example

* ```default.twig```: this is the default layout for all your pages. You can add more Twig files later

* ```metadata.json```: this is where you will set all your [options for your template](/templating/metadata/)

![template files](/assets/content/getting-started/template-files.png)

Now you will need the BaseKit Theme Viewer. You will now need to put the Theme zip file you downloaded into the Theme Viewer folder and then into the folder named 'templates'.

See the example below using our [June](https://github.com/basekit-templates/june) template:

![template directory](/assets/content/getting-started/template-directory.png)

Now open your local web server application of choice. We will be using MAMP for this example:

![MAMP](/assets/content/getting-started/mamp.png)

Click on the preferences button:

![MAMP preference](/assets/content/getting-started/mamp-preferences.png)

The preferences window will open with numerous tabs. Click on the Web Server or Apache (depending on what version of MAMP you are using) tab:

![server options](/assets/content/getting-started/mamp-server-options.png)

You should be taken back to the main menu in the MAMP window. Click **Start Servers**. Once loaded, the symbol will turn green:

![start servers](/assets/content/getting-started/mamp-servers.png)

Once green, MAMP will automatically open up a web browser to give you information on your hostname and port number. Now search for **localhost** or **localhost:[insert port number here]** in your web browser.

**Note:** You may have problems finding your localhost if your server isn’t green. 

Once you have found your localhost, a page similar to the one below will appear. (Again we have used theme [June](https://github.com/basekit-templates/june) as an example.)

![TDK templates](/assets/content/getting-started/tdk-templates.png)

Click on the template you wish to code, and get building.

![TDK](/assets/content/getting-started/tdk.png)

What’s next? Check out the documentation on [editing and uploading your theme](/getting-started/editing/).