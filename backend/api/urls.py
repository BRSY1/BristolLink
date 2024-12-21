from django.urls import path

from . import views

urlpatterns = [
    path("register", views.RegisterView.as_view(), name="register"),
    path("verify/<uuid:code>", views.EmailVerificationView.as_view(), name="verify"),
    path("login", views.LoginView.as_view(), name="login"),
    path("logout", views.LogoutView.as_view(), name="logout"),
    path("crush/submit", views.SubmitCrushView.as_view(), name="submit_crush"),
    path("crush/get", views.GetCrushView.as_view(), name="get_crush"),
]
