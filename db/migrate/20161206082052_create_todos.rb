class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :title, limit: 100
      t.text :description, limit: 200

      t.timestamps
    end
  end
end
