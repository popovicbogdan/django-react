# Generated by Django 2.1.7 on 2019-02-24 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sajt', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('text', models.CharField(max_length=200)),
                ('posted_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
