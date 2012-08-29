# Flexible CSS layout models for Rails using Polyfills

Polyfills for various HTML 5 "more flexible" layout models.

* Flexie.js (Flex box layout)
* Regions.js (CSS Regions)
* CSS Multi-column
* CSS Template layout

Flexie.js is a polyfill for the [CSS3 Flexbox](http://www.w3.org/TR/css3-flexbox/) module from W3C.

CSS Template Layout is an implementation of [CSS Template Layout Module](http://www.w3.org/TR/css3-layout/) from W3C. Currently 2 different implementions are packaged in this gem.

[Regions.js](https://github.com/ricardrobin/Regions.js) is the first implementation for the CSS3-Regions in the real world.

These polyfills are all packaged for use with the Rails asset pipeline. 
This lets you use and experiment with the new HTML5 CSS layout model in order to simplify and improve your HTML grids and layout :)

In addition a stylesheet called `flexlayout.css` is included, which wraps the Flex layout model in order to provide some nice utility CSS classes. See the examples in `spec/flexlayout` for a usage demo.

## Extras

* [Wookmark-jQuery](https://github.com/GBKS/Wookmark-jQuery)
* [FT-column-flow](https://github.com/ftlabs/ftcolumnflow)

## Install

`gem 'flexlayout-rails'`

### Flexie.js 2010, Richard Herrera

```text
//= require flexie
```

*Flexie usage*

```javscript
var box = new Flexie.box({
    target : document.getElementById("foo"),
    orient : "horizontal",
    align : "stretch",
    direction : "normal",
    pack : "start",
    flexMatrix : [1, 1, 1, 1],
    ordinalMatrix : [0, 0, 0, 0]
});
```

The function `flexiebox` wraps this to support are more intuitive DSL, using jQuery to select the element to use as the target:

`var box = flexiebox('#foo', options);`

Defaults options:

```javascript
DEFAULTS = {
  orient    : "horizontal",
  align     : "stretch",
  direction : "inherit",
  pack      : "start"
}
```

Note:
Flexbox comes in different syntaxes as described [here](http://css-tricks.com/old-flexbox-and-new-flexbox/). The latest `flex-` syntax is only supported by Chrome 21+ as shown [here](http://caniuse.com/flexbox). Hence you need fallback in your CSS:

```css
selector 
{ display: flex }

.no-flexbox selector 
{ display: box }
```

### View helpers

```haml
= flexie_script
```

Renders:

    <!--[if lte IE 8]><script src="js/flexie.js"></script><![endif]-->

### Flex box helpers

The following stylesheets with CSS helper classes are included.

* `flexlayout.css`
* `flex-box-helpers.css`

Better yet to use [Compass box mixins](http://compass-style.org/examples/compass/css3/box/) 

```scss
@import "compass/css3"

.example {
  @include display-box;
  @include box-orient(horizontal);
  @include box-align(stretch);

  ...
  .content {
    @include box-flex(1);
  }  
} 
```

Or fx [Preboot](https://github.com/markdotto/Preboot.less) if using LESS.

```less
.content {
  .box-flex(1);
}
```

*Flexbox Articles*

* [Flexbox quick guide](http://www.html5rocks.com/en/tutorials/flexbox/quick/)
* [Flexible box layout explained](http://coding.smashingmagazine.com/2011/09/19/css3-flexible-box-layout-explained/)
* [Understanding flexbox](http://benfrain.com/understanding-the-css3-flexbox-flexible-box-layout-module/)

_Critiques:_

* [Why Flexboxes Aren't Good for Page Layout](http://www.xanthir.com/blog/b4580)
* [Flexbox vs Princess Bride](http://oli.jp/2011/css3-flexbox/)

Conclusion: As is almost always the case, they are good only if used in the right context to solve the right problem ;)

### Regions.js

If you find [this](http://labs.adobe.com/technologies/cssregions/) interesting, just try this script!

Regions.js requires [jQuery](http://jquery.com/) and [Lettering.js](https://github.com/davatron5000/Lettering.js) in order to work.

```text
//= require jquery
//= require lettering.jquery
//= require regions.jquery.min
```

The `feature-detects/cssregions` Modernizr detection included is part of Modernizr _2.6+_ and supplied by _Adobe_.

```javascript
if (!Modernizr.cssregions) {
  // use regions polyfill
}
```

*Regions.js API usage*

```javascript
$(function(){ // When DOM is Loaded
    $("#article-flow").regions(".article-region");
});
```

You can also pass a jQuery Object or a list of jQuery Objects / jQuery Selectorstring to the function :

```javascript
$("#content-source-element").regions($(".content-target-elements"));

// or

$("#content-source-element").regions(["#article-region-1", "#article-region-2", "#article-region-3"]);

// or

$("#content-source-element").regions([$("#article-region-1"), $("#article-region-2"), $("#article-region-3")]);

// even mixed

$("#content-source-element").regions([$("#article-region-1"), "#article-region-2", $("#article-region-3")]);
```

### Template layout 2011-2012 Pablo Escalada

```text
//= require template_layout/templateLayout
```

Not sure how/if to use the template generator and compiler!?

### Template layout 2010, Alexis Deveria 

```text
//= require template_layout/jquery/jquery.tpl_layout1.1.16.min
```

## Template layout usage

Alexis Deveria version, see repo [css-template-layout](https://code.google.com/p/css-template-layout/) and these [demos](http://a.deveria.com/csstpl/) :)

Pablo Escalada version, see repo at [cssTemplateLayout](https://github.com/diesire/cssTemplateLayout) and test folder for examples.

## Multi column

See [Multi-column](https://github.com/stadtwerk/MultiColumn)

Example:

```html
<div class="multi-column">
  <div class="column">hello</div>
  ...
</div>
```

Note: Use the `multi-column.css` included as well ;)

## Wookmark

```text
//= require jquery.wookmark.min
```

See [Wookmark-jQuery](https://github.com/GBKS/Wookmark-jQuery) for examples and demos.

## FT Column flow

```text
//= require FT-colum-flow.min
```

* Configurable column widths, gutters and margins
* Fixed-position elements
* Elements spanning columns
* Keep-with-next to avoid headings at the bottom of a column
* No-wrap class to avoid splitting elements across columns
* Grouping of columns into pages
* Horizontal or vertical alignment of pages
* Standardised line height to align text baseline to a grid
* Rapid reflow as required by events such as device orientation or font-size change

See [FT-column-flow](https://github.com/ftlabs/ftcolumnflow) for examples, demos and usage guide etc.

See fx [BAsic usage example](http://ftlabs.github.com/ftcolumnflow/1.html)

## Contributing to flexlayout-rails
 
* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the Rakefile, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.

## Copyright

Copyright (c) 2012 Kristian Mandrup. See LICENSE.txt for
further details.

