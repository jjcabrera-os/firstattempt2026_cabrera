## Cabrera

#### Framework: SolidJS
#### Module: Document Request

#### Installation
To replicate and run this project follow the following steps using Windows Powershell:

```bash
winget install OpenJS.NodeJS.LTS
nvm install lts
nvm use lts
git clone https://github.com/jjcabrera-os/firstattempt2026_cabrera
cd firstattempt2026_cabrera
npm install
npm run dev
```


AI Tools:
Gemini
Claude

Prompt:
```
Act as a Senior System Architect. I need to convert my static SolidJS web application into an offline-ready Progressive Web Application (PWA). I am using Vite as my build tool and NPM as my package manager.

Do not write a vanilla Service Worker from scratch. We must use the `vite-plugin-pwa` package for enterprise-grade, automated caching.

Here are the exact project variables:
- App Name: AdDU Alumni Hub
- Short Name: Alumni Hub
- Theme Color: #1B2A4A
- Background Color: #1B2A4A
- Icons: Located in the `/public` folder, named `icon-192x192.png` and `icon-512x512.png`.
- Root Component: `src/index.jsx`
- Vite Config: `vite.config.js`

Please provide:
1. The exact NPM terminal command to install `vite-plugin-pwa`.
2. The complete code for `vite.config.js` incorporating the VitePWA plugin with a 'generateSW' strategy.
3. The code for `src/index.jsx` showing exactly where to import and call `registerSW()`.
4. The meta tags for the `<head>` of `index.html`.

Give me the raw code for these files without guessing variables.

#### Screenshots

![Login Screen](./images/login.png)

![Alumni Home](./images/home.png)

![My Profile](./images/profile.png)

![Document Request](./images/request.png)

![Process Documents](./images/process.png)

![Staff Home](./images/staffhome.png)

![Staff Profile Management](./images/staffprofile.png)

![Staff Document Log](./images/stafflog.png)

![Staff Inventory Alerts](./images/stafinventory.png)

![Staff Payment Verification](./images/staffverification.png)
