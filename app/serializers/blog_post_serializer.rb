class BlogPostSerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers

  attributes :id,:title,:content,:files

  def files
    return unless object.files.attached?

    def file_url(file)
      rails_blob_path(file,only_path:true) 
    end

    object.files.map do |file|
      file.blob.attributes.slice(:filename,:byte_size,:id).merge(url: file_url(file))
    end
    # object.files.map{|f|f.variant(resize_to_limit: [500, 300])}.map{|v|rails_representation_url(v,only_path:true)}
    
  end
end
