# BristolLink

## Start frontend server

### Install Node.js

[geeksforgeeks](https://www.geeksforgeeks.org/nodejs/)

### Install React

[geeksforgeeks](https://www.geeksforgeeks.org/react/)

### Launch frontend

```bash
npm run dev
```

## Start backend server

### Install Django

[w3schools](https://www.w3schools.com/django/django_install_django.php)

### Install django-browser-reload

for automatically reloading changes made in the template files in `api/templates`

```bash
pip install django-browser-reload
```

### Run Django server

```bash
cd backend
python manage.py makemigrations # generates a file that describes the config of the models/database
python manage.py migrate # apply the changes 
python manage.py runserver
```