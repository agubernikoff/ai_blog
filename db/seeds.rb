# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
puts 'seeding started'

25.times do |i|
    post=BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 80) + Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 80) + Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 80)})
    post.files.attach(io:File.open(Rails.root.join("./db/assets/seedImages/photo-#{i+1}.jpeg")),filename:"photo-#{i+1}.jpeg",content_type:'image/jpeg')
    if post.files[0]  
        puts "#{post} has a photo attached"
    end
end
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-1.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-2.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-3.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-4.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-5.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-6.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-7.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-8.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-9.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-10.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-11.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-12.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-13.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-14.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-15.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-16.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-17.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-18.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-19.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-20.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-21.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-22.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-23.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-24.jpeg'))]})
# BlogPost.create({title: Faker::Book.title, content: Faker::Lorem.paragraph(sentence_count: 40),files:[File.open(Rails.root.join('./db/assets/seedImages/photo-25.jpeg'))]})

puts 'seeding completed'