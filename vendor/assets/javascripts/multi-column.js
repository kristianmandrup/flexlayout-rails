/*
Name:       MultiColumn
Version:    0.0.2 (April 23 2010)
Author:     Finn Rudolph
Company:    http://stadtwerk.org/

License:    This script is licensed under a Creative Commons
            Attribution-Noncommercial 3.0 Unported License
            (http://creativecommons.org/licenses/by-nc/3.0/).

            You are free:
                + to Share - to copy, distribute and transmit the work
                + to Remix - to adapt the work

            Under the following conditions:
                + Attribution. You must attribute the work in the manner specified by the author or licensor
                  (but not in any way that suggests that they endorse you or your use of the work).
                + Noncommercial. You may not use this work for commercial purposes.

            + For any reuse or distribution, you must make clear to others the license terms of this work.
            + Any of the above conditions can be waived if you get permission from the copyright holder.
            + Nothing in this license impairs or restricts the author's moral rights.

Credits:    This script uses the domReadyEvent from Tanny O'Haley [1].

            [1] http://tanny.ica.com/ICA/TKO/tkoblog.nsf/dx/domcontentloaded-for-browsers-part-v
*/

/* MultiColumn constructor */
function MultiColumn()
{
  /* Setting option defaults */
  this.defaults =
  {
    className:        'multi-column',          /* CSS class name for the element that contains multiple columns */
    columnName:       'column',                /* CSS class name for the column element */
    columnCount:      3,                       /* column-count */
    columnGap:        30                       /* column-gap */
  };
  
  /* Closure for this */
  var my = this;

  /* Initiate MultiColumn */
  this.init = function (options)
  {
    /* Evaluate options */
    for(var name in my.defaults) 
    {
      this[name] = (options !== undefined && options[name] !== undefined) ? options[name] : my.defaults[name];
    }
    
    my.refresh();
    my.Resize.init();
  };
  
  /* Refresh multiple columns */
  this.refresh = function()
  {
    /* Get all elements that contain multiple columns */
    var multiColumnElements = my.Tool.getElementsByClass(my.className, '*', document);
    var max = multiColumnElements.length;
    for(var i=0;i<max;i++)
    {
      /* Build multiple columns for each element */
      my.build(multiColumnElements[i]);
    }
  };
  
  /* Build multiple columns */
  this.build = function(element)
  {
    /* Calculate column width in px */
    var totalGapWidth = my.columnGap * (my.columnCount -1);
    var totalWidth = parseInt(element.offsetWidth,10);
    var columnWidth = Math.round((totalWidth - totalGapWidth) / my.columnCount);
    var subPixel = (totalWidth-totalGapWidth)-(columnWidth*3);
    
    /* Get or create columns element */
    var columnsDiv = my.Tool.getElementsByClass('result', 'div', element);
    
    if(columnsDiv  != '')
    {
      element.removeChild(columnsDiv[0]);
    }
    
    columnsDiv = document.createElement('div');
    my.Tool.setClassName(columnsDiv, 'result');
    columnsDiv.style.width = totalWidth+'px';
    
    var columns = my.getColumnElements(element);
    var max = columns.length;
    var gap = my.columnGap / 2;
    var columnDiv;    
    for(var i=0;i<max;i++)
    {
      column = columns[i];
      
      /* Create element */
      columnDiv = document.createElement('div');
      my.Tool.setClassName(columnDiv, my.columnName);
      columnsDiv.appendChild(columnDiv);
      
      /* Set width and padding */ 
      columnDiv.style.width = columnWidth + 'px';
      if(i === 0)
      {
        columnDiv.style.paddingRight = (gap + subPixel) + 'px';
      }
      else if(i+1 === max)
      {
        columnDiv.style.paddingLeft = gap + 'px';
      }
      else
      {
        columnDiv.style.padding = '0 '+gap+'px 0 '+gap+'px';
      }
      
      for(node in column)
      { 
        columnDiv.appendChild(column[node].cloneNode(true));
      }
    }
    element.appendChild(columnsDiv);        
  };
  
  
  /* Get column elements */
  this.getColumnElements = function(element)
  {
    /* Calculate max column height */
    var totalHeight = parseInt(element.offsetHeight,10);
    var maxColumnHeigth = totalHeight / my.columnCount;
    
    /* Walk through all child nodes and get their height */
    var children = element.childNodes;
    var column = [], columnChilds = [], child, columnHeight = 0;
    var max = children.length;
    for(var i=0;i<max;i++)
    {
      child = children[i];
      
      /* Only process element nodes */
      if(child && child.nodeType === 1)
      {
        /* Calculate rendered height of the child element */
        child.renderedHeight =  child.offsetHeight;
        
        /* Store column childs in an array */
        columnChilds.push(child);
        columnHeight += child.renderedHeight;
        
        /* The end of a column has been reached if the elements hit the max column height */
        if(columnHeight >= maxColumnHeigth)
        {
          column.push(columnChilds);
          
          /* Reset column height and childs */
          columnHeight = 0;
          columnChilds = [];
        }
      }
    }
    column.push(columnChilds);
    
    /* Return column array that holds the column elements */
    return column;
  };
  
  /* Resize functions */
  this.Resize =
  {
    init: function()
    {
      my.refresh();
      var otherFunctions = window.onresize;
      if(typeof window.onresize != 'function')
      {
        window.onresize = function()
        {
          my.refresh();
        };
      }
      else
      {
        window.onresize = function()
        {
          if (otherFunctions)
          {
            otherFunctions();
          }
          my.refresh();
        };
      }
    }
  };

  
  /* Helper functions */
  this.Tool =
  {
    setClassName: function(element, className)
    {
      if(element)
      {
        element.setAttribute('class', className);
        element.setAttribute('className', className);
      }
    },
    
    
    getElementsByClass: function(searchClass, tag, node) 
    {
      var classElements = [];
      var elements = node.getElementsByTagName(tag);
      var max = elements.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for(var i = 0, j = 0; i < max; i++)
      {
        if(pattern.test(elements[i].className))
        {
          classElements[j] = elements[i];
          j++;
        }
      }
      return classElements;
    }
  };
}

/* DOMContentLoaded event handler - by Tanny O'Haley [1] */ 
var domReadyEvent =
{
  name: "domReadyEvent",
  /* Array of DOMContentLoaded event handlers.*/
  events: {},
  domReadyID: 1,
  bDone: false,
  DOMContentLoadedCustom: null,

  /* Function that adds DOMContentLoaded listeners to the array.*/
  add: function(handler)
  {
    /* Assign each event handler a unique ID. If the handler has an ID, it has already been added to the events object or been run.*/
    if (!handler.$$domReadyID)
    {
      handler.$$domReadyID = this.domReadyID++;

      /* If the DOMContentLoaded event has happened, run the function. */
      if(this.bDone)
      {
        handler();
      }

      /* store the event handler in the hash table */
      this.events[handler.$$domReadyID] = handler;
    }
  },

  remove: function(handler)
  {
    /* Delete the event handler from the hash table */
    if (handler.$$domReadyID)
    {
      delete this.events[handler.$$domReadyID];
    }
  },

  /* Function to process the DOMContentLoaded events array. */
  run: function()
  {
    /* quit if this function has already been called */
    if (this.bDone)
    {
      return;
    }

    /* Flag this function so we don't do the same thing twice */
    this.bDone = true;

    /* iterates through array of registered functions */
    for (var i in this.events)
    {
      this.events[i]();
    }
  },

  schedule: function()
  {
    /* Quit if the init function has already been called*/
    if (this.bDone)
    {
      return;
    }

    /* First, check for Safari or KHTML.*/
    if(/KHTML|WebKit/i.test(navigator.userAgent))
    {
      if(/loaded|complete/.test(document.readyState))
      {
        this.run();
      }
      else
      {
        /* Not ready yet, wait a little more.*/
        setTimeout(this.name + ".schedule()", 100);
      }
    }
    else if(document.getElementById("__ie_onload"))
    {
      /* Second, check for IE.*/
      return true;
    }

    /* Check for custom developer provided function.*/
    if(typeof this.DOMContentLoadedCustom === "function")
    {
      /* if DOM methods are supported, and the body element exists (using a double-check
      including document.body, for the benefit of older moz builds [eg ns7.1] in which
      getElementsByTagName('body')[0] is undefined, unless this script is in the body section) */
      if(typeof document.getElementsByTagName !== 'undefined' && (document.getElementsByTagName('body')[0] !== null || document.body !== null))
      {
        /* Call custom function. */
        if(this.DOMContentLoadedCustom())
        {
          this.run();
        }
        else
        {
          /* Not ready yet, wait a little more. */
          setTimeout(this.name + ".schedule()", 250);
        }
      }
    }
    return true;
  },

  init: function()
  {
    /* If addEventListener supports the DOMContentLoaded event.*/
    if(document.addEventListener)
    {
      document.addEventListener("DOMContentLoaded", function() { domReadyEvent.run(); }, false);
    }

    /* Schedule to run the init function.*/
    setTimeout("domReadyEvent.schedule()", 100);

    function run()
    {
      domReadyEvent.run();
    }

    /* Just in case window.onload happens first, add it to onload using an available method.*/
    if(typeof addEvent !== "undefined")
    {
      addEvent(window, "load", run);
    }
    else if(document.addEventListener)
    {
      document.addEventListener("load", run, false);
    }
    else if(typeof window.onload === "function")
    {
      var oldonload = window.onload;
      window.onload = function()
      {
        domReadyEvent.run();
        oldonload();
      };
    }
    else
    {
      window.onload = run;
    }

    /* for Internet Explorer */
    /*@cc_on
      @if (@_win32 || @_win64)
      document.write("<script id=__ie_onload defer src=\"//:\"><\/script>");
      var script = document.getElementById("__ie_onload");
      script.onreadystatechange = function()
      {
        if (this.readyState == "complete")
        {
          domReadyEvent.run(); // call the onload handler
        }
      };
      @end
    @*/
  }
};

var domReady = function(handler) { domReadyEvent.add(handler); };
domReadyEvent.init();


/* Create MultiColumn instance when the DOM structure has been loaded */
domReady(function()
{
  var MultiColumnCSS = new MultiColumn();
  MultiColumnCSS.init();
});