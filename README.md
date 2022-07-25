# PsyScan
## Setup
### 1. Установка Expo 
Для установки Expo следуйте указаниям в инструкции: https://docs.expo.dev/get-started/installation/
### Важно ! 
Для запуска приложения необходимо установить Expo-client на мобильное устройство соответствующей версии.
### 2. Установка package.json 
```
npm install 
```
Установка необходимых библиотек из файла package.json для запуска приложения.
### 3. Запуск приложения
```
npm start
```
Команда запускает приложение на http://localhost:19002. 

Приложение можно запустить как в вебе, так и на мобильном устройстве через приложение Expo-client. (Приложение в вебе является неполным и представляет не все реализованные возможности, поскольку большая часть библиотек направлена именно на мобильное использование). 

При запуске следуйте инструкциям в терминале. Для получения более подробной информации следуйте указаниям в инструкции:  https://docs.expo.dev/get-started/create-a-new-app/. 

## Приложение реализовано на версии React-native 0.68.2 и Expo 45.0.0.

### На данный момент реализовано
- Навигация между всеми страницами
- Валидация для страниц Login и Registration
- Выпадающее меню в левом верхнем углу экрана MenuPanel с навигацией на страницу You
- Модуль слайдера
- Модуль выпадающего списка
- Модуль вебкамеры
- Модуль переключающихся кнопок на странице Text analysis 
- Выпадающие кнопки на странице Choose The Test
- Базовая концепция меню панели PsyScan в нижней части экрана 
### Отверстаны следующие страницы:
- Страница Welcome
- Страница Login
- Страница Registration
- Страница ChooseTheTest
- Страница PreliminaryTesting (sex doubts)
- Страница PreliminaryTesting (self info)
- Страница You
- Страница AdvancedTesting
- Страница AdvancedTesting (your activity)
- Страница AdvancedTesting (text analysis)
- Страница AdvancedTesting (writing)
- Страница AdvancedTesting (results)
- Страница AdvancedTesting (more details)
- Страница AdvancedTesting (audio analysis)
- Страница AdvancedTesting (face scan)
- Страница AdvancedTesting (video analysis)
