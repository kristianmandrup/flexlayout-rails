require 'flexlayout/view_helpers'

module FlexLayout
  module Rails
    class Engine < ::Rails::Engine
      initializer 'flexlayout config' do
        ActionView::Base.send :include, FlexLayout::ViewHelpers
      end
    end
  end
end