import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const userLang = String((navigator.language).split("-", 1)); 
i18n
.use(initReactI18next)
.init({
    lng: userLang,
    fallbackLng: 'en',
    debug: false,
    // Translates
    resources: {
      en: {
        translation: {
         // Main page
         welcome: "Welcome to Virbound",
         welcome_sub: "A community of players who like to have a good time and socialize. We have our own Minecraft server and occasionally organize streams. Read more about us by clicking the button below!",
         welcome_btn_mb: "Our Minecraft server",
         welcome_btn_about: "About us",

         // Menu
         menu_main: "Home",
         menu_minebound: "MineBound",
         menu_about: "About",
         menu_auth: "Login",
         
         // MineBound
         mb_title: "A server that allows you to unleash your creativity",
         mb_subtitle: "Version 1.20.1 - License not required",
         
         // About page
        }
      },
      uk: {
        translation: {
            // Main page
         welcome: "Вітаємо у Вірбаунд",
         welcome_sub: "Спілка гравців, які люблять добре провести час і поспілкуватись. Маємо свій Minecraft сервер а також час від часу проводимо стріми. Читай більше про нас за кнопкою нижче!",
         welcome_btn_mb: "Про Minecraft сервер",
         welcome_btn_about: "Про нас",

         // Menu
         menu_main: "Головна",
         menu_minebound: "MineBound",
         menu_about: "Про нас",
         menu_auth: "Увійти",
         
         // MineBound
         mb_title: "Сервер який дозволяє розкрити твій творчій потенціал",
         mb_subtitle: "Версія 1.20.1 • Ліцензія не обов'язкова",
         
         // About page
        }
      },
    }
  });

export default i18n;