<h1 align="center"> :technologist: :books: :fire: GoIT Team project :rocket: :rocket: :rocket:</h1>
<h2 align="center"> :performing_arts: :love_you_gesture: Event-Booster :love_you_gesture: :man_dancing: </h2>

<p align="center">
<img src="https://img.shields.io/badge/HTML-5-black"/>
<img src="https://img.shields.io/badge/%09CSS%20-2.1-yellowgreen"/>
<img src="https://img.shields.io/badge/SASS-10.0.2-pink"/>
<img src="https://img.shields.io/badge/JavaScript-ES8-aqua"/>
<img src="https://img.shields.io/badge/Webpack-4.44.2-tomato"/
<img src="https://img.shields.io/badge/Handlebars-4.7.6-FFEFD5"/>
<img src="https://img.shields.io/badge/-GitHub-black"/>
</p>

## Description

The project is implemented in vanilla JavaScript using Webpack packages such as
Handlebardsjs, paginationjs, SASS and working with
[The Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/),
of the FullStack developer course
[<img src="https://img.shields.io/badge/Go-IT-orange" />](https://goit.ua/), the
project was written at the end of the study of core Javascript.

Ahead of the students is the study of React and Node.js, so they will please
with their projects more than once.

## How to use Event Booster

[<img src="https://img.shields.io/badge/-Event%20Booster-FF00FF"/>](https://sergey-proskurnin.github.io/team-project-event-booster/)
is the site for searching events around the world.

**The Web App provides the following functions:**

:black_circle: Search event by key word and country.

:orange_circle: Convenient page turning with events using pagination.

:green_circle: User authorization using Gmail, Facebook, GitHub or anonymous
account.

:star: Adding event in Favorites and saving favorites event cards in user
account.

:world_map: Building a route from the current location to the venue using Google
Maps on modal window.

:black_circle: Responsive design for use on phone :iphone:, tablet and desktop
:desktop_computer:.

## Developers

- [<img src="https://img.shields.io/badge/-Ivan%20Filipchyk-000080" />](https://github.com/f957-cua) -
  _**Team-Lead**
- [<img src="https://img.shields.io/badge/-Kate%20Podolianets-8B008B" />](https://github.com/KatePodolsky)-
  _**Scrum Master**
- [<img src="https://img.shields.io/badge/-Aleksandrs%20Barkancevs-FF4500" />](https://github.com/MeatyRenegade) -
  _Animation & CSS master._
- [<img src="https://img.shields.io/badge/-Denys%20Kodak-87CEFA" />](https://github.com/deniskodak) -
  _JS-master, creativity brain of the team._
- [<img src="https://img.shields.io/badge/-Ivans%20Borovikovs-D3D3D3" />](https://github.com/iborovikov) -
  _Modal-page creator, API-worker_
- [<img src="https://img.shields.io/badge/-Nina%20Motorna-BC8F8F" />](https://github.com/irbis14) -
  _"About-us" page creater, pagination developer_
- [<img src="https://img.shields.io/badge/-Olena%20Kozakova-FF69B4" />](https://github.com/OlenaKozakova) -
  _Pagination-team leader_
- [<img src="https://img.shields.io/badge/-Oleg%20Shevchenko-228B22" />](https://github.com/Am4rel) -
  _Tab-buttons maker._

# Webpack starter kit &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

## Developing

### Prerequisites

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале следующие
команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**, в режиме администратора.
[Как запусттить Powershell](https://youtu.be/p2tFnxcymwk) в режиме
администратора.

```shell
npm install --global --production windows-build-tools
```

Вот как выглядит процесс успешной установки для пользователей **Windows**.

![Установка windows-build-tools](https://user-images.githubusercontent.com/1426799/45007904-bde9f280-afb4-11e8-8a35-c77dffaffa2a.gif)

Пользователям **Linux**.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Для быстрого старта необходимо склонировать репозиторий.

```shell
git clone https://github.com/luxplanjay/webpack-starter-kit.git
```

Переименовать папку сборки именем вашего проекта.

```shell
mv webpack-starter-kit имя_проекта
```

Затем перейти в папку проекта.

```shell
cd имя_проекта
```

Находясь в папке проекта удалить папку `.git` связанную с репозиторием сборки
выполнив следующую команду.

```shell
npx rimraf .git
```

Установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm start
```

Во вкладке браузера перейти по адресу
[http://localhost:4040](http://localhost:4040).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying/Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.
