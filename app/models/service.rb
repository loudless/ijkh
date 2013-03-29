class Service < ActiveRecord::Base
	extend ServicesRepository
	
  attr_accessible :tariff_id, :title, :user_id, :place_id, :service_type_id, :vendor_id, :user_account

  belongs_to :user, foreign_key: :user_id
  belongs_to :tariff, foreign_key: :tariff_id
  belongs_to :place, foreign_key: :place_id, select: 'id, title, city, street, building, apartment'
  belongs_to :vendor, foreign_key: :vendor_id, select: 'id, title'

  has_many :bills

end
