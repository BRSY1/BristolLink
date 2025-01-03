# BristolLink

## Start frontend server

### Install Node.js

[geeksforgeeks](https://www.geeksforgeeks.org/nodejs/)

### Install React

[geeksforgeeks](https://www.geeksforgeeks.org/react/)

### Launch frontend

```bash
cd frontend
npm run dev
```

If you get any errors related to Vite not being found, then delete the ```package-lock.json``` and the ```node_modules``` directory and run:

```bash
npm install
```

You should now be able to ```npm run dev``` without any errors.


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