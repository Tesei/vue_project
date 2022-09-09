# project_test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

npm install -g serve

## флаг -s означает запуск serve в режиме одностраничного приложения (SPA)

serve -s dist

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Работа выполняется в соответствии с ТЗ:

## **Основное задание**

Необходимо реализовать страницу вывода списка товаров, и возможностью добавления/удаления товаров в списке.

[**Ссылка на макет**](https://www.figma.com/file/kIuVw6nSk218pi9iE98iq5/Junior-frontend-developer-test?node-id=4%3A365)

### **Требование к стеку и исполнению**

Верстка должна совпадать с макетами.

Проект должен быть выполнен с использованием **Vue** фреймворка

Для реализации допустимо использование сборщика, **Vue CLI** или **Nuxt.js**, последний в приоритете.

Каждый компонент должен являться **SFC**.

При выполнении работы не разрешается использовать никакие **UI библиотеки**.

В секции template не разрешается использовать **HTML препроцессоры**.

В секции script допускается использование только **JavaScript**.

Секция **style** должна быть написана с использованием **css-modules** или **scoped**, будет плюсом использование препроцессора.

Проект должен храниться у вас в личном репозитории GitHub/GitLab/Bitbucket в котором должно быть описание запуска проекта на локальной машине.

### **Плюсом будет**

Демонстрация знаний современных стандартов **ES**.

Грамотное использование **SCSS** препроцессора.

Использование линтеров.

Разработка задания в разных ветках по системе [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html).

---

## **Уровень 1**

Использование системы контроля версий.

Настройка сборки проекта.

Использование **Vue** фреймворка.

Использование **CSS** препроцессора.

Верстка задания согласно макету.

---

## **Уровень 2**

Добавить валидацию для формы добавления товара.

- Название - обязательное поле.
- Ссылка на изображение товара - обязательное поле.
- Цена - обязательное полек.

Кнопка добавления товара неактивна пока форма пуста или невалидна.

Разделения тысячных пробелом для поля цены.

Разработка функционала добавления товара в общий список из формы.

## **Уровень 3**

Добавление функционала удаления товара из списка.

Разработка функционала сортировки списка товаров по следующим параметрам:

- По цене min (от меньшего к большему).
- По цене max (от большего к меньшему).
- По наименованию.

Анимация удаления товара.

Анимация сортировки товара.
