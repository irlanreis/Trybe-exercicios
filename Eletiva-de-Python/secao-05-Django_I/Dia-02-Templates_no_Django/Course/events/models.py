from django.db import models


# Create your models here.
class Event(models.Model):
    TYPE_CHOICES = (
        ("C", "Conference"),
        ("S", "Seminar"),
        ("W", "Workshop"),
        ("O", "Other"),
    )
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=200)
    event_type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    is_remote = models.BooleanField(default=False)
    image = models.ImageField(upload_to="events/img", blank=True)

    # O método __str__ é sobrescrito para indicar
    # como será a visualização do objeto
    def __str__(self) -> str:
        # Título do evento - Data - Local
        return f"{self.title} - {self.date} - {self.location}"
