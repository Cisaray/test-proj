# Тестовое задание для поступления в FrontCloudCamp

## Разработка формы описания профиля

В рамках дизайна формы было реализовано 3 отдельных таба(шага) формы, которые можно переключать между собой. При переходе от таба к табу (в том числе возвращаясь на предыдущий) информация сохраняется.

На первом экране необходимо добавить информацию о себе и по нажатию на кнопку будет происходить переход на форму. При переходе должен меняется роут.

На каждом этапе формы провалидированы значения конкретного шага.

После отправки формы показывается модальное окно с success или error.

Для отправки формы использовал api https://api.sbercloud.ru/content/v1/bootcamp/frontend

Адаптивная версия также реализована


### Валидация и описание полей

* nickname - строковое значение, максимальная длина 30 символов, могут быть просто буквы и цифры (спец символы запрещены)

* name - строковое значение, максимальная длина 50 символов, только буквы

* sername - строковое значение, максимальная длина 50 символов, только буквы

* phone - строковое значение, форма записи +7 (900) 000-00-00 - реализовать маску ввода, +7, (), -, уже подставленные символы, валидация - цифры

* email - строковое значение, валидация на email стандартная @ и .домен

* sex - enum 'man' | 'woman' реализовать как select

* advantages - массив строк, основной критерий - массив строк. По нажатию на “Плюс” должно добавляться новое поле и так же валидироваться.

* radio - number блок, в дизайне должна быть группа элементов RadioGroup

* checkbox - массив number, в дизайне должна быть группа элементов CheckboxGroup

* about - textarea блок максимальная длина 200 символов, в правом нижнем углу добавить счётчик символов без пробелов

### Используемый стек:

* React
* Redux-Toolkit, RTK Query
* css modules
* react hook form