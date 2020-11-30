class ChangeColumnTypeOfUserId < ActiveRecord::Migration[5.0]
  def change
    reversible do |r|
      change_table :messages do |t|
        r.up   {t.change :user_id, :references, foreign_key: true}
        r.down {t.change :user_id, :integer, foreign_key: true}
      end
    end
  end
end
