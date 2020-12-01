class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :body, presence: true, unless: :image?
  # mount_uploader :image, ImegeUploader
end
