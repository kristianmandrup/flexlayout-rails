# Generated by jeweler
# DO NOT EDIT THIS FILE DIRECTLY
# Instead, edit Jeweler::Tasks in Rakefile, and run 'rake gemspec'
# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "flexlayout-rails"
  s.version = "0.1.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Kristian Mandrup"]
  s.date = "2012-08-28"
  s.description = "Use CSS Flex, Regions, Multi-column and Template layout models in your Rails apps"
  s.email = "kmandrup@gmail.com"
  s.extra_rdoc_files = [
    "LICENSE.txt",
    "README.md"
  ]
  s.files = [
    ".document",
    ".rspec",
    "Gemfile",
    "Gemfile.lock",
    "LICENSE.txt",
    "README.md",
    "Rakefile",
    "VERSION",
    "flexlayout-rails.gemspec",
    "lib/flexlayout-rails.rb",
    "spec/flexlayout/center.html",
    "spec/flexlayout/form.html",
    "spec/regions/img/lorem-ipsum-logo.jpeg",
    "spec/regions/index.html",
    "spec/regions/js/detection.js",
    "spec/regions/js/layout.js",
    "spec/regions/js/setup.js",
    "spec/spec_helper.rb",
    "vendor/assets/javascripts/FT-colum-flow.min.js",
    "vendor/assets/javascripts/FT-column-flow.js",
    "vendor/assets/javascripts/feature-detects/cssregions.js",
    "vendor/assets/javascripts/flexie.js",
    "vendor/assets/javascripts/flexie.min.js",
    "vendor/assets/javascripts/jquery.lettering.js",
    "vendor/assets/javascripts/jquery.lettering.min.js",
    "vendor/assets/javascripts/jquery.wookmark.js",
    "vendor/assets/javascripts/jquery.wookmark.min.js",
    "vendor/assets/javascripts/multi-column.js",
    "vendor/assets/javascripts/regions.jquery.js",
    "vendor/assets/javascripts/regions.jquery.min.js",
    "vendor/assets/javascripts/template_layout/jquery/jquery.tpl_layout1.1.6.js",
    "vendor/assets/javascripts/template_layout/jquery/jquery.tpl_layout1.1.6.min.js",
    "vendor/assets/javascripts/template_layout/templateLayout.compiler.js",
    "vendor/assets/javascripts/template_layout/templateLayout.generator.js",
    "vendor/assets/javascripts/template_layout/templateLayout.js",
    "vendor/assets/stylesheets/flexlayout.css",
    "vendor/assets/stylesheets/multi-column.css"
  ]
  s.homepage = "http://github.com/kristianmandrup/flexlayout-rails"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.24"
  s.summary = "CSS3 layout polyfills pre-packaged for Rails asset pipeline"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rspec>, [">= 2.8.0"])
      s.add_development_dependency(%q<rdoc>, [">= 3.12"])
      s.add_development_dependency(%q<bundler>, [">= 1.0.0"])
      s.add_development_dependency(%q<jeweler>, [">= 1.8.3"])
      s.add_development_dependency(%q<simplecov>, [">= 0.5"])
    else
      s.add_dependency(%q<rspec>, [">= 2.8.0"])
      s.add_dependency(%q<rdoc>, [">= 3.12"])
      s.add_dependency(%q<bundler>, [">= 1.0.0"])
      s.add_dependency(%q<jeweler>, [">= 1.8.3"])
      s.add_dependency(%q<simplecov>, [">= 0.5"])
    end
  else
    s.add_dependency(%q<rspec>, [">= 2.8.0"])
    s.add_dependency(%q<rdoc>, [">= 3.12"])
    s.add_dependency(%q<bundler>, [">= 1.0.0"])
    s.add_dependency(%q<jeweler>, [">= 1.8.3"])
    s.add_dependency(%q<simplecov>, [">= 0.5"])
  end
end

