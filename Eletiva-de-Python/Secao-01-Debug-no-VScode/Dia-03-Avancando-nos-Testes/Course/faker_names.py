from faker import Faker


faker = Faker(locale='es_AR')
Faker.seed(0)

print(faker.name())
print(faker.url())
print(faker.email())
print(faker.date())
print(faker.company())
print(faker.password())
print(faker.address())


def test_faker_email(faker):
    faker_email = faker.email()

    assert isinstance(faker_email, str)
    assert '@' in faker_email
    assert '.' in faker_email
