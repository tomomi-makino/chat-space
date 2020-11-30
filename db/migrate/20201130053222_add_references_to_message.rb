class AddReferencesToMessage < ActiveRecord::Migration[5.0]
  def change
    add_reference :messages, :user, null: false, foreign_key: true
    add_reference :messages, :group, null: false, foreign_key: true
  end
end
