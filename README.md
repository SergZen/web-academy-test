Для использования проекта необходимо создать .env на основе .env.example.
Необходимо обратить внимание не следующие параметры:

EMAIL_SENDER_SCHEDULE - это рассписание по которому будут рассылаться курс USD к UAH.
В качестве примера в .env.example представлен вариант 0 12 * * *, что соответствует
рассылке в 12-00.

Для работы рассылки необходимо предоставить google account и заполнить следующие поля:
EMAIL_SENDER_USER=MyUsername
EMAIL_SENDER_EMAIL=MyUsername@gmail.com
EMAIL_SENDER_PASSWORD=MyUsernamePassword

В случае если данные по аккаунту google заполнены корректно, но выдается ошибка 
"Error: Invalid login: 535-5.7.8 Username and Password not accepted. Learn more at 535 5.7.8  https://support.google.com/mail/?p=BadCredentials",
то необходимо выполнить следующие действия:

1. Зайти на свой аккаунт Google https://myaccount.google.com/
2. Перейти в ""Безопастность".
3. Выбрать 2-факторною верификацию.
4. Перейти в https://myaccount.google.com/apppasswords и создать приложение
5. Записать имя например nodemailer для созданного приложения
6. В модальном окне появиться пароль, его использовать для EMAIL_SENDER_PASSWORD

_Запуск проекта осуществляется командой:_

**docker-compose up**


_Остановка проекта осуществляется командой:_

**docker-compose down**

Проект запуститься по следующему адресу:

**http://localhost:3000**

_Реализованные ентпоинты:_

**GET http://localhost:3000/api/rate**

**POST http://localhost:3000/api/subscribe**




