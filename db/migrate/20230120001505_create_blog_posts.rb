class CreateBlogPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :blog_posts do |t|
      t.string :topic
      t.string :title
      t.string :content
      t.string :author

      t.timestamps
    end
  end
end
