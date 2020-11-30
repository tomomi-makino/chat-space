class ChangeColumnToMessage < ActiveRecord::Migration[5.0]
  def change
    reversible do |r|
      change_table :messages do |t|
        r.up   {t.change :group_id, :references, foreign_key: true}
        r.down {t.change :group_id, :integer, foreign_key: true}
      end
    end
  end
end
