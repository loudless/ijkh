module RecipesRepository

	def create_recipe user, params
		amount = params[:amount].to_f
		if amount < 500.00
			po_tax = 3
			service_tax = po_tax + (0.015*amount).round(2)
			total = service_tax + amount
		else
			service_tax = (0.03*amount).round(2)
			po_tax = 0
			total = service_tax + amount
		end
		currency = "RUB"

		total = format_amount total

		recipe_params = {
			amount: amount,
			service_id: params[:service_id],
			account_id: params[:account_id],
			user_id: user.id,
			total: total.to_s,
			po_tax: po_tax.to_s,
			service_tax: service_tax.to_s,
			currency: currency
		}

		recipe = Recipe.new(recipe_params)
		recipe.save
		return recipe
	end

	def show_last user, service_id
		where("user_id = ? and service_id = ?", user.id, service_id).order('created_at DESC').limit(1).first
	end

	def get_service_id recipe_id
		recipe = Recipe.find(recipe_id)
		return recipe.service_id
	end
	
	private

	def format_amount amount
		amount = amount.to_s.split(".")
		if amount.last =~ /\d\d/
			amount_str = amount.first + "." + amount.last 
		else
			amount_str = amount.first + "." + amount.last + "0"
		end
		amount_str
	end
end