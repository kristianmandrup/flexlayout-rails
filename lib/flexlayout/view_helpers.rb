module FlexLayout
  module ViewHelpers
    def flexie_script
      raw('<!--[if lte IE 8]><script src="js/flexie.js"></script><![endif]-->').html_safe
    end
  end
end