Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/chart' => 'welcome#chart'
end
