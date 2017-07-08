Rails.application.routes.draw do
  root 'welcome#index'
  post 'search/map', to: 'search#map'
end
