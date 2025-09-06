import { alert, defaultModules, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

defaultModules.set(PNotifyMobile, {});

const button = document.querySelector("button");

button.addEventListener("click", () => {
    success({
        title: 'Дякую!',
        text: 'Заявка принята!',
        delay: 1000,
    });
});