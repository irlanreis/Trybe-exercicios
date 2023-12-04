from django.core.exceptions import ValidationError


def validate_music_length(value):
    if value not in range(1, 3601):
        raise ValidationError(
            "A duração da música deve ser um número"
            " inteira entre 1 e 3600 segundos. O valor "
            "{value} não é válido."
        )
