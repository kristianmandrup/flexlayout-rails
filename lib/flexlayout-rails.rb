require 'flexlayout/view_helper'

module FlexLayout
  module Rails
    class Engine < ::Rails::Engine
      initializer 'flexlayout config' do
        ActionView::Base.send :include, FlexLayout::ViewHelper
      end
    end
  end
end