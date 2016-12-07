class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
end
