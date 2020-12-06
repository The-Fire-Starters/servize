# Generated by Django 3.1.4 on 2020-12-06 09:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceProvider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('phoneNum', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('status', models.BooleanField(default=False)),
                ('locationID', models.IntegerField()),
                ('imageServ', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.URLField()),
                ('servicProvider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ServiceProvider.serviceprovider')),
            ],
        ),
        migrations.CreateModel(
            name='CategoryProvider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Category.category')),
                ('serviceProvider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ServiceProvider.serviceprovider')),
            ],
        ),
    ]
