class BlogPostsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
  rescue_from ActiveRecord::RecordNotDestroyed,with: :not_destroyed
  skip_before_action :is_logged_in?, only: [:index,:show]
  
  def index
    posts=BlogPost.all
    render json: posts
  end

  def show
    post = BlogPost.find(params[:id])
    render json: post
  end

  def create
    post= BlogPost.create!(post_params)
    render json: post, status: :created
  end

  def update
    post = BlogPost.find(params[:id])
    post.update!(post_params)
    render json: post, status: :updated
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy!
    head :no_content
  end

  private
  
  def post_params
    params.permit(:title,:content,files:[])
  end
  
  def render_unprocessable_entity invalid
    render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
  end
  
  def render_not_found
    render json: {error: "Post not found"}, status: 404
  end
end
