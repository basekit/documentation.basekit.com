var toggleState=function(e,t,n){var e=document.querySelector(e);e.setAttribute("data-state",e.getAttribute("data-state")===t?n:t)},navtoggle=document.querySelector(".toggle-button");"undefined"!=typeof navtoggle&&null!=navtoggle&&(navtoggle.onclick=function(e){toggleState(".nav--docs","closed","open"),e.preventDefault()});var searchtoggle=document.querySelector(".octicon-search");"undefined"!=typeof searchtoggle&&null!=searchtoggle&&(searchtoggle.onclick=function(e){toggleState(".nav-list--search-results","default","highlighted"),e.preventDefault()});var element=document.getElementById("elementId"),headlines=document.querySelectorAll(".main--content h2, .main--content h3"),contents=document.querySelector("#contents"),contentsList=document.createElement("ol");contentsList.classList.add("nav-list"),contentsList.setAttribute("data-gumshoe",!0);for(var i=0;i<headlines.length;i++){var contentsItem=document.createElement("li");contentsItem.classList.add("nav-item"),contentsList.appendChild(contentsItem);var link=document.createElement(headlines[i].id?"a":"span");link.textContent=headlines[i].textContent,headlines[i].id&&(link.href="#"+headlines[i].id,link.setAttribute("data-scroll",!0)),contentsItem.appendChild(link)}null!=contents&&contents.appendChild(contentsList),document.getElementById("sticky")&&PositionSticky([document.getElementById("sticky")]),document.getElementById("search-field")&&(SimpleJekyllSearch.init({searchInput:document.getElementById("search-field"),resultsContainer:document.getElementById("search-results"),dataSource:"/search.json",searchResultTemplate:"<li class='list-item'><a href='{url}' title='{title}'>{title}</a></li>",fuzzy:!0}),document.getElementById("search-field").addEventListener("keypress",function(e){13==e.keyCode&&e.preventDefault()}));