class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
    skip_before_action :is_logged_in?,only: [:index,:create,:show_me]
    
    
    def index
      users = User.all
      # User.find_each(&:save)
      render json: users
    end
    
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
    
    def show
      user= User.find(params[:id])
      render json: user
    end
    
    def show_me
      user = User.find(session[:user_id])
      render json: user, status: 200
    end
    
    def update
      user = User.find(session[:user_id])
      user.update!(user_params)
      render json: user
    end
    
    def destroy
      user = User.find(session[:user_id])
      user.destroy
      session.delete :user_id
      head :no_content
    end
    
    private
    
    def user_params
      params.permit(:username,:password,:isAdmin)
    end
    
    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end
    
    def render_not_found
      render json: {error: session[:user_id]}, status: 404
    end
  end
