from datetime import datetime

from django.db import models


class User(models.Model):
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=30)


class ListUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class ListMessage(models.Model):
    list_message = models.ForeignKey(ListUser, on_delete=models.CASCADE)


class Message(models.Model):
    message = models.TextField()
    date_message = models.DateTimeField(default=datetime.now, blank=True)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    recipient = models.ForeignKey(ListMessage, on_delete=models.CASCADE)
