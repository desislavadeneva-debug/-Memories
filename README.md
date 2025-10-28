# Farewell Carousel (React + Vite)

Малък уеб проект за общ подарък: карусел/слайдер с послания от екипа, заредени от JSON файл.
Проектът е изцяло front-end (React + Vite) и се билдва лесно.

## 🧱 Структура
```
farewell-carousel/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ styles.css
   ├─ components/
   │  └─ MessageCard.jsx
   └─ data/
      └─ messages.json   ← редактирай имената и съобщенията тук
```

## 🛠️ Команди
Използва Node.js (препоръка: v18+).

```bash
npm install
npm run dev      # стартира локално (http://localhost:5173)
npm run build    # прави production билд в папка dist/
npm run preview  # преглед на билда
```

## ✍️ Редакции
- Отвори `src/data/messages.json` и добави/редактирай обектите с:
  ```json
  {
    "name": "Име Фамилия",
    "role": "Роля (по желание)",
    "message": "Вашето послание",
    "date": "ДД.ММ.ГГГГ"
  }
  ```
- Всички елементи автоматично се визуализират като отделни „слайдове“.

## 🎨 Дизайн
- Мрачен (dark) фон, акцентни неонови градиенти.
- Аватар с инициали, автоматично генерирани от името.
- Адаптивен (работи добре на телефон/лаптоп).
- Без външни зависимости за слайдера — чист React.

## 🧩 Идеи за разширение
- Добави поле `avatarUrl` към JSON и го изобрази в картата.
- Добави авто-плей с пауза при hover.
- Експорт към PDF/скрийншот за печатни картички.

---

Успех с подаръка! Ако искаш да го направим "по твоя линк" 1:1, изпрати линка и ще напасна стиловете.

## ⚙️ Конфигурация от JSON (`src/data/config.json`)
Тук можеш да управляваш **цветове, шрифтове, размери, заглавия и autoplay** без да пипаш код.

```json
{
  "ui": {
    "title": "Farewell, Team Lead! 👋",
    "subtitle": "",
    "theme": {
      "--bg": "#0f1222",
      "--card": "#161a2b",
      "--text": "#e7e9f3",
      "--muted": "#9aa1b2",
      "--accent": "#6ae3ff",
      "--accent-2": "#b388ff",
      "--font-family": "ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
      "--message-font-size": "18px",
      "--title-font-size": "28px",
      "--subtitle-font-size": "14px",
      "--border-color": "rgba(255,255,255,0.06)",
      "--shadow-color": "rgba(0,0,0,0.35)"
    },
    "styles": {
      "radius": 16,
      "cardMinHeight": 300,
      "transitionMs": 420,
      "dotSize": 9,
      "spacing": 28
    },
    "autoplay": {
      "enabled": true,
      "intervalMs": 4000,
      "pauseOnHover": true
    }
  }
}
```

> Всички ключове в `theme` отиват директно като CSS custom properties (променливи).
> Можеш да добавяш и други: например `--bg-grad-1` и `--bg-grad-2` за фон градиенти.

### Пример: светла тема
```json
{
  "ui": {
    "theme": {
      "--bg": "#f7f8fb",
      "--card": "#ffffff",
      "--text": "#0e1220",
      "--muted": "#677085",
      "--accent": "#4f46e5",
      "--accent-2": "#22c55e",
      "--border-color": "rgba(0,0,0,0.06)",
      "--shadow-color": "rgba(0,0,0,0.08)",
      "--message-font-size": "18px"
    }
  }
}
```

## ✨ Нови възможности (конфигурируеми от JSON)
- **Google Fonts**: `ui.font.importUrl` + `ui.font.family` → автоматично зареждане на шрифт и смяна на `--font-family`.
- **Локални аватари**: в `messages.json` поле `avatarUrl` (например `/avatars/maria.png`). Постави изображения в `public/avatars/`.
- **Цветове по слайд**: в `messages.json` поле `colors` с CSS променливи (например `--accent`, `--accent-2`) → важат само за конкретния слайд.
- **Анимации**: `ui.animations.cardEnter` = `fade | slide | scale`, `ui.animations.transitionDuration` (ms).
- **Лейаут**: `ui.layout.maxWidth`, `ui.layout.padding`, `ui.layout.shadowDepth` (0..1).

### Пример за `config.json`
```json
{
  "ui": {
    "title": "Farewell, Team Lead! 👋",
    "subtitle": "",
    "font": {
      "importUrl": "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap",
      "family": "'Poppins', ui-sans-serif, system-ui"
    },
    "theme": {
      "--bg": "#0f1222",
      "--card": "#161a2b",
      "--text": "#e7e9f3",
      "--muted": "#9aa1b2",
      "--accent": "#6ae3ff",
      "--accent-2": "#b388ff",
      "--message-font-size": "18px",
      "--title-font-size": "28px",
      "--subtitle-font-size": "14px",
      "--border-color": "rgba(255,255,255,0.06)",
      "--shadow-color": "rgba(0,0,0,0.35)"
    },
    "styles": { "radius": 16, "cardMinHeight": 300, "transitionMs": 420, "dotSize": 9, "spacing": 28 },
    "animations": { "cardEnter": "fade", "transitionDuration": 420 },
    "layout": { "maxWidth": "100vw", "padding": "24px", "shadowDepth": 0.35 },
    "autoplay": { "enabled": false, "intervalMs": 5000, "pauseOnHover": true }
  }
}
```

### Пример за слайд с индивидуални цветове и аватар
```json
{
  "name": "Мария Петрова",
  "role": "Frontend Developer",
  "avatarUrl": "/avatars/maria.png",
  "colors": { "--accent": "#4f46e5", "--accent-2": "#22c55e" },
  "message": "Никога няма да забравя първия ми code review с теб — много червено, нула его.",
  "date": "23.10.2025"
}
```
