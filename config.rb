###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
helpers do

  def sub_pages(dir)
    sitemap.resources.select do |resource|
      resource.path.start_with?(dir)
    end
  end

end

set :css_dir, 'assets/stylesheets/'
set :js_dir, 'assets/javascripts/'
set :images_dir, 'assets/images/'
set :fonts_dir, 'assets/fonts/'

activate :directory_indexes
activate :automatic_image_sizes
activate :gzip
# activate :asset_hash
# activate :imageoptim
# set :relative_links, true

set :imagePath, ''

# configure :development do
#   set :imagePath, 'http://0.0.0.0:4567/assets/images/'
# end


# Build-specific configuration
configure :build do

  activate :asset_host
  # set :asset_host, "//"

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :minify_html

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  # deploy.remote   = "static" # remote name or git url, default: origin
  # deploy.branch   = "master"
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
end