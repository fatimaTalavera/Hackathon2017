Rails.application.routes.draw do
  root 'welcome#index'
  post 'search/map', to: 'search#map'
  post 'search/progress', to: 'search#progress'
end
