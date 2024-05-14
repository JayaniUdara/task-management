
from django.db import models

class Manager(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female')])
    contact_no = models.CharField(max_length=20)
    address = models.TextField()

    def __str__(self):
        return self.first_name + " " + self.last_name

class Project(models.Model):
    project_name = models.CharField(max_length=255)
    project_description = models.TextField()
    project_created_date = models.DateField()
    project_deadline = models.DateField()
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE)

    def __str__(self):
        return self.project_name
