Rails.application.routes.draw do
  
  get "/show", to: 'sessions#show'
  post "/login", to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: 'users#show_me'
  
  resources :users
  resources :blog_posts
  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
