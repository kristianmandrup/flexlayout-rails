require 'view_helper'

describe FlexLayout::ViewHelper do
  include ControllerTestHelpers,
          FlexLayout::ViewHelper

  describe '#ie_script_tag' do
    context 'no arguments' do
      specify do
        expect { ie_script_tag }.to raise_error(ArgumentError)
      end
    end

    context '8' do
      specify do
        expect { ie_script_tag(8) }.to raise_error(ArgumentError)
      end
    end

    context '8, hello' do
      specify do
        ie_script_tag(8) { 'hello'}.should == "<!--[if lt IE 8]>hello<![endif]-->"
      end
    end

    context '8, :lte, hello' do
      specify do
        ie_script_tag(8, :lte) { 'hello'}.should == "<!--[if lte IE 8]>hello<![endif]-->"
      end
    end
  end

  describe '#flexie_script' do
    context 'no arguments' do
      specify do
        flexie_script.should == "<!--[if lte IE 8]><script src=\"flexie.min.js\" type=\"text/javascript\"><![endif]-->"
      end
    end
  end

  describe '#html5_script' do
    context 'no arguments' do
      specify do
        html5_script.should == "<!--[if lte IE 8]><script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\" type=\"text/javascript\"><![endif]-->"
      end
    end

    context "'html5-forms'" do
      specify do
        html5_script('html5-forms').should == "<!--[if lte IE 8]><script src=\"html5-forms/html5.min.js\" type=\"text/javascript\"><![endif]-->"
      end
    end
  end
end