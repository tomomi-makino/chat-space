class RemoveGroupIdFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :group_id, :integer
    remove_column :messages, :user_id, :integer
  end
end
