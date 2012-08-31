module FlexLayout
  module ViewHelper
    def ie_script_tag version, operator = :lt, &block
      raise ArgumentError, "must take a block" unless block_given?
      raw("<!--[if #{operator} IE #{version}]>#{capture(&block)}<![endif]-->").html_safe
    end

    def flexie_script
      # content = capture(script_tag "flexie.min.js")
      ie_script_tag 8, :lte do
        script_src_tag "flexie.min.js"
      end
    end

    # Le HTML5 shim, for IE6-8 support of HTML elements
    # if :local option, the option must point to the relative asset folder!
    def html5_script folder = nil
      ie_script_tag 8, :lte do
        script_src_tag folder ? File.join(folder, "html5.min.js") : "http://html5shim.googlecode.com/svn/trunk/html5.js"
      end
    end

    def script_src_tag src
      raw("<script src=\"#{src}\" type=\"text/javascript\">").html_safe
    end
  end
end