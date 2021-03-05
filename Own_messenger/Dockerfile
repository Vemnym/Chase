FROM nikolaik/python-nodejs:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

WORKDIR /usr/src/app/frontend
RUN npm install
RUN npm run build

WORKDIR /usr/src/app
RUN pip install --no-cache-dir -r requirements.txt
RUN python manage.py collectstatic --noinput
RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py collectstatic --noinputnod
# RUN pip install gunicorn


EXPOSE 8000
ENTRYPOINT ["python", "manage.py", "runserver", "0.0.0.0:8000"]
#CMD ["gunicorn", "--bind", "0.0.0.0:8000", "Own_messenger.wsgi", "--workers 4"]