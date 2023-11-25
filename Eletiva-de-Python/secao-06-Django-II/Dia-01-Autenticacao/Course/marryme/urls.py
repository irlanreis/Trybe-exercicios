from django.contrib import admin
from django.urls import path, include
from budget.views import VendorViewSet, BudgetViewSet, MarriageViewSet
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


router = routers.DefaultRouter()

router.register(r"vendors", VendorViewSet)
router.register(r"marriages", MarriageViewSet)
router.register(r"budgets", BudgetViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("", include(router.urls)),
]
