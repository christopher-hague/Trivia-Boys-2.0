class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :text
      t.integer :length
      t.integer :vowel_count
      t.integer :consonant_count

      t.timestamps
    end
  end
end
