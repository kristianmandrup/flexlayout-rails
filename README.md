# Flex layout for Rails

Polyfills for various HTML 5 "flex-layout" models.

* flexie.js (Flex box layout)
* CSS Template Layout

Flexie.js is a polyfill for the [CSS3 Flexbox](http://www.w3.org/TR/css3-flexbox/) module from W3C.

CSS Template Layout is an implementation of [CSS Template Layout Module](http://www.w3.org/TR/css3-layout/) from W3C. Currently 2 different implementions are packaged in this gem.

These polyfills are all packaged for use with the Rails asset pipeline. 
This lets you use and experiment with the new HTML5 CSS layout model in order to simplify and improve your HTML grids and layout :)

## Install

`gem 'flexlayout-rails'`

### Flexie.js 2010, Richard Herrera

```text
//= require flexie
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

Enjoy :)

## Flexie usage

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

## Template layout usage

Alexis Deveria version, see repo [css-template-layout](https://code.google.com/p/css-template-layout/) and these [demos](http://a.deveria.com/csstpl/) :)

Pablo Escalada version, see repo at [cssTemplateLayout](https://github.com/diesire/cssTemplateLayout) and test folder for examples.

## Flexbox Articles

* [Flexbox quick guide](http://www.html5rocks.com/en/tutorials/flexbox/quick/)

_Critiques:_

* [Why Flexboxes Aren't Good for Page Layout](http://www.xanthir.com/blog/b4580)
* [Flexbox vs Princess Bride](http://oli.jp/2011/css3-flexbox/)

## Contributing to flexie-rails
 
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

