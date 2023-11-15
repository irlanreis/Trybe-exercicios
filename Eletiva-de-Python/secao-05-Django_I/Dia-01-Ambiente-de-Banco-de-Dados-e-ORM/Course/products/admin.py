from django.contrib import admin
from products.models import Product, Customer


admin.site.site_header = "Trybe Products E-Commerce"
# admin.site.site_title = "Trybe Products E-Commerce"
admin.site.index_title = "Welcome to Trybe Products E-Commerce"

admin.site.register(Product)
admin.site.register(Customer)
