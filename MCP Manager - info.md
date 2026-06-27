# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

### Project Configuration

### `dist/assets/index-BU9GAPn7.css`

```css
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-content:"";--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-400:oklch(79.2% .209 151.711);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-900:oklch(39.3% .095 152.535);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-3xl:48rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sr-only{-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.top-0{top:0}.bottom-0{bottom:0}.z-50{z-index:50}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-8{margin-block:calc(var(--spacing) * 8)}.mt-1{margin-top:var(--spacing)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-flex{display:inline-flex}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-16{height:calc(var(--spacing) * 16)}.h-full{height:100%}.h-screen{height:100vh}.max-h-\[70vh\]{max-height:70vh}.w-4{width:calc(var(--spacing) * 4)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-8{width:calc(var(--spacing) * 8)}.w-11{width:calc(var(--spacing) * 11)}.w-16{width:calc(var(--spacing) * 16)}.w-64{width:calc(var(--spacing) * 64)}.w-full{width:100%}.max-w-3xl{max-width:var(--container-3xl)}.max-w-4xl{max-width:var(--container-4xl)}.flex-1{flex:1}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:var(--spacing)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.overflow-auto{overflow:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.bg-black\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-100{background-color:var(--color-green-100)}.bg-red-100{background-color:var(--color-red-100)}.bg-white{background-color:var(--color-white)}.bg-yellow-100{background-color:var(--color-yellow-100)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-1{padding-block:var(--spacing)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-12{padding-block:calc(var(--spacing) * 12)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-all{word-break:break-all}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-white{color:var(--color-white)}.text-yellow-600{color:var(--color-yellow-600)}.opacity-50{opacity:.5}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.peer-checked\:bg-blue-600:is(:where(.peer):checked~*){background-color:var(--color-blue-600)}.peer-focus\:ring-4:is(:where(.peer):focus~*){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.peer-focus\:ring-blue-300:is(:where(.peer):focus~*){--tw-ring-color:var(--color-blue-300)}.peer-focus\:outline-none:is(:where(.peer):focus~*){--tw-outline-style:none;outline-style:none}.after\:absolute:after{content:var(--tw-content);position:absolute}.after\:top-\[2px\]:after{content:var(--tw-content);top:2px}.after\:left-\[2px\]:after{content:var(--tw-content);left:2px}.after\:h-5:after{content:var(--tw-content);height:calc(var(--spacing) * 5)}.after\:w-5:after{content:var(--tw-content);width:calc(var(--spacing) * 5)}.after\:rounded-full:after{content:var(--tw-content);border-radius:3.40282e38px}.after\:border:after{content:var(--tw-content);border-style:var(--tw-border-style);border-width:1px}.after\:border-gray-300:after{content:var(--tw-content);border-color:var(--color-gray-300)}.after\:bg-white:after{content:var(--tw-content);background-color:var(--color-white)}.after\:transition-all:after{content:var(--tw-content);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.after\:content-\[\'\'\]:after{--tw-content:"";content:var(--tw-content)}.peer-checked\:after\:translate-x-full:is(:where(.peer):checked~*):after{content:var(--tw-content);--tw-translate-x:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.peer-checked\:after\:border-white:is(:where(.peer):checked~*):after{content:var(--tw-content);border-color:var(--color-white)}@media(hover:hover){.hover\:border-blue-500:hover{border-color:var(--color-blue-500)}.hover\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\:bg-blue-200:hover{background-color:var(--color-blue-200)}.hover\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\:bg-green-200:hover{background-color:var(--color-green-200)}.hover\:bg-red-200:hover{background-color:var(--color-red-200)}.hover\:bg-yellow-200:hover{background-color:var(--color-yellow-200)}.hover\:text-gray-700:hover{color:var(--color-gray-700)}}.focus\:border-transparent:focus{border-color:#0000}.focus\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}@media(min-width:48rem){.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.dark\:border-gray-600:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){border-color:var(--color-gray-600)}.dark\:border-gray-700:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){border-color:var(--color-gray-700)}.dark\:bg-blue-900\/20:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:#1c398e33}@supports (color:color-mix(in lab,red,red)){.dark\:bg-blue-900\/20:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:color-mix(in oklab,var(--color-blue-900) 20%,transparent)}}.dark\:bg-blue-900\/30:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:#1c398e4d}@supports (color:color-mix(in lab,red,red)){.dark\:bg-blue-900\/30:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:color-mix(in oklab,var(--color-blue-900) 30%,transparent)}}.dark\:bg-gray-700:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:var(--color-gray-700)}.dark\:bg-gray-800:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:var(--color-gray-800)}.dark\:bg-gray-900:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:var(--color-gray-900)}.dark\:bg-green-900\/30:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:#0d542b4d}@supports (color:color-mix(in lab,red,red)){.dark\:bg-green-900\/30:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:color-mix(in oklab,var(--color-green-900) 30%,transparent)}}.dark\:bg-red-900\/30:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:#82181a4d}@supports (color:color-mix(in lab,red,red)){.dark\:bg-red-900\/30:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:color-mix(in oklab,var(--color-red-900) 30%,transparent)}}.dark\:bg-yellow-900\/30:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:#733e0a4d}@supports (color:color-mix(in lab,red,red)){.dark\:bg-yellow-900\/30:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){background-color:color-mix(in oklab,var(--color-yellow-900) 30%,transparent)}}.dark\:text-blue-300:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-blue-300)}.dark\:text-blue-400:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-blue-400)}.dark\:text-gray-300:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-gray-300)}.dark\:text-gray-400:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-gray-400)}.dark\:text-gray-500:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-gray-500)}.dark\:text-gray-600:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-gray-600)}.dark\:text-green-400:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-green-400)}.dark\:text-red-400:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-red-400)}.dark\:text-white:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-white)}.dark\:text-yellow-400:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *){color:var(--color-yellow-400)}.dark\:peer-focus\:ring-blue-800:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):is(:where(.peer):focus~*){--tw-ring-color:var(--color-blue-800)}@media(hover:hover){.dark\:hover\:border-blue-400:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{border-color:var(--color-blue-400)}.dark\:hover\:border-gray-600:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{border-color:var(--color-gray-600)}.dark\:hover\:bg-blue-900\/50:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:#1c398e80}@supports (color:color-mix(in lab,red,red)){.dark\:hover\:bg-blue-900\/50:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:color-mix(in oklab,var(--color-blue-900) 50%,transparent)}}.dark\:hover\:bg-gray-600:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:var(--color-gray-600)}.dark\:hover\:bg-gray-700:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:var(--color-gray-700)}.dark\:hover\:bg-green-900\/50:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:#0d542b80}@supports (color:color-mix(in lab,red,red)){.dark\:hover\:bg-green-900\/50:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:color-mix(in oklab,var(--color-green-900) 50%,transparent)}}.dark\:hover\:bg-red-900\/50:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:#82181a80}@supports (color:color-mix(in lab,red,red)){.dark\:hover\:bg-red-900\/50:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:color-mix(in oklab,var(--color-red-900) 50%,transparent)}}.dark\:hover\:bg-yellow-900\/50:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:#733e0a80}@supports (color:color-mix(in lab,red,red)){.dark\:hover\:bg-yellow-900\/50:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{background-color:color-mix(in oklab,var(--color-yellow-900) 50%,transparent)}}.dark\:hover\:text-gray-200:where(.dark,.dark *,.nord,.nord *,.dracula,.dracula *,.monokai,.monokai *):hover{color:var(--color-gray-200)}}}.dark{color-scheme:dark}select,input,textarea,option{color-scheme:inherit}select,input,textarea{-webkit-appearance:none;appearance:none}.nord{color-scheme:dark;--color-white:#eceff4;--color-black:#2e3440;--color-gray-50:#eceff4;--color-gray-100:#e5e9f0;--color-gray-200:#d8dee9;--color-gray-300:#cdd3de;--color-gray-400:#b8c0cc;--color-gray-500:#a3aebf;--color-gray-600:#4c566a;--color-gray-700:#434c5e;--color-gray-800:#3b4252;--color-gray-900:#2e3440;--color-blue-50:#88c0d0;--color-blue-100:#88c0d0;--color-blue-200:#81a1c1;--color-blue-300:#81a1c1;--color-blue-400:#5e81ac;--color-blue-500:#5e81ac;--color-blue-600:#81a1c1;--color-blue-700:#88c0d0;--color-blue-800:#4c566a;--color-blue-900:#3b4252;--color-green-50:#a3be8c;--color-green-100:#a3be8c;--color-green-200:#a3be8c;--color-green-300:#a3be8c;--color-green-400:#a3be8c;--color-green-500:#a3be8c;--color-green-600:#8fbcbb;--color-green-700:#8fbcbb;--color-green-800:#4c566a;--color-green-900:#3b4252;--color-red-50:#bf616a;--color-red-100:#bf616a;--color-red-200:#bf616a;--color-red-300:#bf616a;--color-red-400:#bf616a;--color-red-500:#bf616a;--color-red-600:#d08770;--color-red-700:#d08770;--color-red-800:#4c566a;--color-red-900:#3b4252;--color-yellow-50:#ebcb8b;--color-yellow-100:#ebcb8b;--color-yellow-200:#ebcb8b;--color-yellow-300:#ebcb8b;--color-yellow-400:#ebcb8b;--color-yellow-500:#ebcb8b;--color-yellow-600:#d08770;--color-yellow-700:#d08770;--color-orange-50:#d08770;--color-orange-100:#d08770;--color-orange-200:#d08770;--color-orange-300:#d08770;--color-orange-400:#d08770;--color-orange-500:#d08770;--color-orange-600:#d08770;--color-orange-700:#d08770;--color-purple-50:#b48ead;--color-purple-100:#b48ead;--color-purple-200:#b48ead;--color-purple-300:#b48ead;--color-purple-400:#b48ead;--color-purple-500:#b48ead;--color-purple-600:#5e81ac;--color-purple-700:#81a1c1}.dracula{color-scheme:dark;--color-white:#f8f8f2;--color-black:#282a36;--color-gray-50:#f8f8f2;--color-gray-100:#f1fa8c;--color-gray-200:#e5e5e5;--color-gray-300:#c9d6e8;--color-gray-400:#a8b8d0;--color-gray-500:#8a9ab8;--color-gray-600:#6272a4;--color-gray-700:#44475a;--color-gray-800:#282a36;--color-gray-900:#282a36;--color-blue-50:#8be9fd;--color-blue-100:#8be9fd;--color-blue-200:#8be9fd;--color-blue-300:#bd93f9;--color-blue-400:#bd93f9;--color-blue-500:#bd93f9;--color-blue-600:#bd93f9;--color-blue-700:#bd93f9;--color-blue-800:#6272a4;--color-blue-900:#44475a;--color-green-50:#50fa7b;--color-green-100:#50fa7b;--color-green-200:#50fa7b;--color-green-300:#50fa7b;--color-green-400:#50fa7b;--color-green-500:#50fa7b;--color-green-600:#50fa7b;--color-green-700:#50fa7b;--color-green-800:#6272a4;--color-green-900:#44475a;--color-red-50:#f55;--color-red-100:#f55;--color-red-200:#f55;--color-red-300:#f55;--color-red-400:#f55;--color-red-500:#f55;--color-red-600:#f55;--color-red-700:#f55;--color-red-800:#6272a4;--color-red-900:#44475a;--color-yellow-50:#f1fa8c;--color-yellow-100:#f1fa8c;--color-yellow-200:#f1fa8c;--color-yellow-300:#f1fa8c;--color-yellow-400:#f1fa8c;--color-yellow-500:#f1fa8c;--color-yellow-600:#f1fa8c;--color-yellow-700:#f1fa8c;--color-orange-50:#ffb86c;--color-orange-100:#ffb86c;--color-orange-200:#ffb86c;--color-orange-300:#ffb86c;--color-orange-400:#ffb86c;--color-orange-500:#ffb86c;--color-orange-600:#ffb86c;--color-orange-700:#ffb86c;--color-purple-50:#bd93f9;--color-purple-100:#bd93f9;--color-purple-200:#bd93f9;--color-purple-300:#bd93f9;--color-purple-400:#bd93f9;--color-purple-500:#bd93f9;--color-purple-600:#bd93f9;--color-purple-700:#bd93f9;--color-pink-50:#ff79c6;--color-pink-100:#ff79c6;--color-pink-200:#ff79c6;--color-pink-300:#ff79c6;--color-pink-400:#ff79c6;--color-pink-500:#ff79c6;--color-pink-600:#ff79c6;--color-pink-700:#ff79c6}.monokai{color-scheme:dark;--color-white:#f8f8f2;--color-black:#272822;--color-gray-50:#f8f8f2;--color-gray-100:#f1f1e9;--color-gray-200:#e8e8e3;--color-gray-300:#d0d0cb;--color-gray-400:#b8b8b0;--color-gray-500:#a0a098;--color-gray-600:#75715e;--color-gray-700:#49483e;--color-gray-800:#3e3d32;--color-gray-900:#272822;--color-blue-50:#66d9ef;--color-blue-100:#66d9ef;--color-blue-200:#66d9ef;--color-blue-300:#ae81ff;--color-blue-400:#ae81ff;--color-blue-500:#ae81ff;--color-blue-600:#ae81ff;--color-blue-700:#ae81ff;--color-blue-800:#75715e;--color-blue-900:#3e3d32;--color-green-50:#a6e22e;--color-green-100:#a6e22e;--color-green-200:#a6e22e;--color-green-300:#a6e22e;--color-green-400:#a6e22e;--color-green-500:#a6e22e;--color-green-600:#a6e22e;--color-green-700:#a6e22e;--color-green-800:#75715e;--color-green-900:#3e3d32;--color-red-50:#f92672;--color-red-100:#f92672;--color-red-200:#f92672;--color-red-300:#f92672;--color-red-400:#f92672;--color-red-500:#f92672;--color-red-600:#f92672;--color-red-700:#f92672;--color-red-800:#75715e;--color-red-900:#3e3d32;--color-yellow-50:#e6db74;--color-yellow-100:#e6db74;--color-yellow-200:#e6db74;--color-yellow-300:#e6db74;--color-yellow-400:#fd971f;--color-yellow-500:#fd971f;--color-yellow-600:#fd971f;--color-yellow-700:#fd971f;--color-orange-50:#fd971f;--color-orange-100:#fd971f;--color-orange-200:#fd971f;--color-orange-300:#fd971f;--color-orange-400:#fd971f;--color-orange-500:#fd971f;--color-orange-600:#fd971f;--color-orange-700:#fd971f;--color-purple-50:#ae81ff;--color-purple-100:#ae81ff;--color-purple-200:#ae81ff;--color-purple-300:#ae81ff;--color-purple-400:#ae81ff;--color-purple-500:#ae81ff;--color-purple-600:#ae81ff;--color-purple-700:#ae81ff;--color-pink-50:#f92672;--color-pink-100:#f92672;--color-pink-200:#f92672;--color-pink-300:#f92672;--color-pink-400:#f92672;--color-pink-500:#f92672;--color-pink-600:#f92672;--color-pink-700:#f92672}body{margin:0;padding:0}#root{width:100%;height:100%}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}
```

---

### `dist/index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tauri + React + Typescript</title>
    <script type="module" crossorigin src="/assets/index-CgR5gktl.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-BU9GAPn7.css">
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
```

---

### `dist/tauri.svg`

```text
<svg width="206" height="231" viewBox="0 0 206 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M143.143 84C143.143 96.1503 133.293 106 121.143 106C108.992 106 99.1426 96.1503 99.1426 84C99.1426 71.8497 108.992 62 121.143 62C133.293 62 143.143 71.8497 143.143 84Z" fill="#FFC131"/>
<ellipse cx="84.1426" cy="147" rx="22" ry="22" transform="rotate(180 84.1426 147)" fill="#24C8DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M166.738 154.548C157.86 160.286 148.023 164.269 137.757 166.341C139.858 160.282 141 153.774 141 147C141 144.543 140.85 142.121 140.558 139.743C144.975 138.204 149.215 136.139 153.183 133.575C162.73 127.404 170.292 118.608 174.961 108.244C179.63 97.8797 181.207 86.3876 179.502 75.1487C177.798 63.9098 172.884 53.4021 165.352 44.8883C157.82 36.3744 147.99 30.2165 137.042 27.1546C126.095 24.0926 114.496 24.2568 103.64 27.6274C92.7839 30.998 83.1319 37.4317 75.8437 46.1553C74.9102 47.2727 74.0206 48.4216 73.176 49.5993C61.9292 50.8488 51.0363 54.0318 40.9629 58.9556C44.2417 48.4586 49.5653 38.6591 56.679 30.1442C67.0505 17.7298 80.7861 8.57426 96.2354 3.77762C111.685 -1.01901 128.19 -1.25267 143.769 3.10474C159.348 7.46215 173.337 16.2252 184.056 28.3411C194.775 40.457 201.767 55.4101 204.193 71.404C206.619 87.3978 204.374 103.752 197.73 118.501C191.086 133.25 180.324 145.767 166.738 154.548ZM41.9631 74.275L62.5557 76.8042C63.0459 72.813 63.9401 68.9018 65.2138 65.1274C57.0465 67.0016 49.2088 70.087 41.9631 74.275Z" fill="#FFC131"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.4045 76.4519C47.3493 70.6709 57.2677 66.6712 67.6171 64.6132C65.2774 70.9669 64 77.8343 64 85.0001C64 87.1434 64.1143 89.26 64.3371 91.3442C60.0093 92.8732 55.8533 94.9092 51.9599 97.4256C42.4128 103.596 34.8505 112.392 30.1816 122.756C25.5126 133.12 23.9357 144.612 25.6403 155.851C27.3449 167.09 32.2584 177.598 39.7906 186.112C47.3227 194.626 57.153 200.784 68.1003 203.846C79.0476 206.907 90.6462 206.743 101.502 203.373C112.359 200.002 122.011 193.568 129.299 184.845C130.237 183.722 131.131 182.567 131.979 181.383C143.235 180.114 154.132 176.91 164.205 171.962C160.929 182.49 155.596 192.319 148.464 200.856C138.092 213.27 124.357 222.426 108.907 227.222C93.458 232.019 76.9524 232.253 61.3736 227.895C45.7948 223.538 31.8055 214.775 21.0867 202.659C10.3679 190.543 3.37557 175.59 0.949823 159.596C-1.47592 143.602 0.768139 127.248 7.41237 112.499C14.0566 97.7497 24.8183 85.2327 38.4045 76.4519ZM163.062 156.711L163.062 156.711C162.954 156.773 162.846 156.835 162.738 156.897C162.846 156.835 162.954 156.773 163.062 156.711Z" fill="#24C8DB"/>
</svg>
```

---

### `dist/vite.svg`

```text
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

---

### `package.json`

```json
{
  "name": "mcp-manager",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "tauri": "tauri",
    "mcp-info": "node scripts/generate-mcp-info.js"
  },
  "dependencies": {
    "@headlessui/react": "^2.2.10",
    "@tauri-apps/api": "^2",
    "@tauri-apps/plugin-opener": "^2",
    "lucide-react": "^1.21.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-hot-toast": "^2.6.0",
    "react-router-dom": "^7.18.0",
    "socket.io-client": "^4.8.3"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.1",
    "@tauri-apps/cli": "^2",
    "@types/node": "^26.0.1",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "autoprefixer": "^10.5.2",
    "postcss": "^8.5.15",
    "tailwindcss": "^4.3.1",
    "typescript": "~5.8.3",
    "vite": "^7.0.4"
  }
}
```

---

### `public/tauri.svg`

```text
<svg width="206" height="231" viewBox="0 0 206 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M143.143 84C143.143 96.1503 133.293 106 121.143 106C108.992 106 99.1426 96.1503 99.1426 84C99.1426 71.8497 108.992 62 121.143 62C133.293 62 143.143 71.8497 143.143 84Z" fill="#FFC131"/>
<ellipse cx="84.1426" cy="147" rx="22" ry="22" transform="rotate(180 84.1426 147)" fill="#24C8DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M166.738 154.548C157.86 160.286 148.023 164.269 137.757 166.341C139.858 160.282 141 153.774 141 147C141 144.543 140.85 142.121 140.558 139.743C144.975 138.204 149.215 136.139 153.183 133.575C162.73 127.404 170.292 118.608 174.961 108.244C179.63 97.8797 181.207 86.3876 179.502 75.1487C177.798 63.9098 172.884 53.4021 165.352 44.8883C157.82 36.3744 147.99 30.2165 137.042 27.1546C126.095 24.0926 114.496 24.2568 103.64 27.6274C92.7839 30.998 83.1319 37.4317 75.8437 46.1553C74.9102 47.2727 74.0206 48.4216 73.176 49.5993C61.9292 50.8488 51.0363 54.0318 40.9629 58.9556C44.2417 48.4586 49.5653 38.6591 56.679 30.1442C67.0505 17.7298 80.7861 8.57426 96.2354 3.77762C111.685 -1.01901 128.19 -1.25267 143.769 3.10474C159.348 7.46215 173.337 16.2252 184.056 28.3411C194.775 40.457 201.767 55.4101 204.193 71.404C206.619 87.3978 204.374 103.752 197.73 118.501C191.086 133.25 180.324 145.767 166.738 154.548ZM41.9631 74.275L62.5557 76.8042C63.0459 72.813 63.9401 68.9018 65.2138 65.1274C57.0465 67.0016 49.2088 70.087 41.9631 74.275Z" fill="#FFC131"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.4045 76.4519C47.3493 70.6709 57.2677 66.6712 67.6171 64.6132C65.2774 70.9669 64 77.8343 64 85.0001C64 87.1434 64.1143 89.26 64.3371 91.3442C60.0093 92.8732 55.8533 94.9092 51.9599 97.4256C42.4128 103.596 34.8505 112.392 30.1816 122.756C25.5126 133.12 23.9357 144.612 25.6403 155.851C27.3449 167.09 32.2584 177.598 39.7906 186.112C47.3227 194.626 57.153 200.784 68.1003 203.846C79.0476 206.907 90.6462 206.743 101.502 203.373C112.359 200.002 122.011 193.568 129.299 184.845C130.237 183.722 131.131 182.567 131.979 181.383C143.235 180.114 154.132 176.91 164.205 171.962C160.929 182.49 155.596 192.319 148.464 200.856C138.092 213.27 124.357 222.426 108.907 227.222C93.458 232.019 76.9524 232.253 61.3736 227.895C45.7948 223.538 31.8055 214.775 21.0867 202.659C10.3679 190.543 3.37557 175.59 0.949823 159.596C-1.47592 143.602 0.768139 127.248 7.41237 112.499C14.0566 97.7497 24.8183 85.2327 38.4045 76.4519ZM163.062 156.711L163.062 156.711C162.954 156.773 162.846 156.835 162.738 156.897C162.846 156.835 162.954 156.773 163.062 156.711Z" fill="#24C8DB"/>
</svg>
```

---

### `public/vite.svg`

```text
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

---

### `scripts/generate-mcp-info.js`

```javascript
#!/usr/bin/env node

/**
 * Script para gerar/atualizar arquivo MCP Manager - info.md com informações do sistema
 * Gera dinamicamente: File Structure, Features, Temas, Templates e Source Code
 * Lê dados de arquivos JSON para features, temas e templates
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const TAURI_DIR = path.join(ROOT_DIR, 'src-tauri');
const DATA_DIR = path.join(SRC_DIR, 'data');

/**
 * ====================================================================================
 * PATHS TO IGNORE
 * ====================================================================================
 */

const NODE_MODULES_DIR = path.join(ROOT_DIR, 'node_modules');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const SCRIPTS_DIR = path.join(ROOT_DIR, 'scripts');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const GIT_DIR = path.join(ROOT_DIR, '.git');
const VSCODE_DIR = path.join(ROOT_DIR, '.vscode');

const GITIGNORE_FILE = path.join(ROOT_DIR, '.gitignore');
const PRETTIER_FILE = path.join(ROOT_DIR, '.prettierrc');
const BUILD_LOG_FILE = path.join(ROOT_DIR, 'build_log.txt');
const INDEX_FILE = path.join(ROOT_DIR, 'index.html');
const INFO_FILE = path.join(ROOT_DIR, 'MCP Manager - info.md');
const PACKAGE_LOCK_FILE = path.join(ROOT_DIR, 'package-lock.json');
const README_FILE = path.join(ROOT_DIR, 'README.md');

const TAURI_DIST = path.join(TAURI_DIR, 'target');
const CARGO_LOCK_FILE = path.join(TAURI_DIR, 'Cargo.lock');
const TAURI_GITIGNORE_FILE = path.join(TAURI_DIR, '.gitignore');

const PATH_BLACKLIST = [
  SCRIPTS_DIR,
  NODE_MODULES_DIR,
  PUBLIC_DIR,
  DIST_DIR,
  GIT_DIR,
  VSCODE_DIR,
  GITIGNORE_FILE,
  PRETTIER_FILE,
  BUILD_LOG_FILE,
  INDEX_FILE,
  INFO_FILE,
  PACKAGE_LOCK_FILE,
  README_FILE,
  TAURI_DIST,
  CARGO_LOCK_FILE,
  TAURI_GITIGNORE_FILE
];

/**
 * ====================================================================================
 * SOURCE CODE CONFIGURATION
 * ====================================================================================
 */

const SOURCE_CONFIG = [
  {
    name: "Project Configuration",
    dir: ROOT_DIR,
    whitelist_enable: true,
    blacklist_enable: true,
    whitelist: [],
    blacklist: [
      GITIGNORE_FILE,
      PRETTIER_FILE,
      BUILD_LOG_FILE,
      INDEX_FILE,
      INFO_FILE,
      PACKAGE_LOCK_FILE,
      README_FILE
    ],
    children: []
  },
  {
    name: "Tauri Configuration",
    dir: TAURI_DIR,
    whitelist_enable: false,
    blacklist_enable: false,
    whitelist: [],
    blacklist: [
      CARGO_LOCK_FILE,
      TAURI_GITIGNORE_FILE
    ],
    children: []
  },
  {
    name: "Frontend",
    dir: SRC_DIR,
    whitelist_enable: false,
    blacklist_enable: false,
    whitelist: [],
    blacklist: [],
    children: [
      {
        name: "Components",
        dir: path.join(SRC_DIR, "components"),
        whitelist_enable: false,
        blacklist_enable: false,
        whitelist: [],
        blacklist: [],
        children: []
      },
      {
        name: "Contexts",
        dir: path.join(SRC_DIR, "contexts"),
        whitelist_enable: false,
        blacklist_enable: false,
        whitelist: [],
        blacklist: [],
        children: []
      },
      {
        name: "Data",
        dir: path.join(SRC_DIR, "data"),
        whitelist_enable: false,
        blacklist_enable: false,
        whitelist: [],
        blacklist: [],
        children: []
      },
      {
        name: "Pages",
        dir: path.join(SRC_DIR, "pages"),
        whitelist_enable: false,
        blacklist_enable: false,
        whitelist: [],
        blacklist: [],
        children: []
      }
    ]
  },
  {
    name: "Backend",
    dir: path.join(TAURI_DIR, "src"),
    whitelist_enable: false,
    blacklist_enable: false,
    whitelist: [],
    blacklist: [],
    children: []
  }
]

// Função para executar comandos e capturar output
function runCommand(cmd, fallback = 'N/A') {
  try {
    return execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], cwd: ROOT_DIR }).trim();
  } catch (error) {
    return fallback;
  }
}

// Função para ler arquivo de forma segura
function safeReadFile(filePath, fallback = '') {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8').trim();
    }
    return fallback;
  } catch (error) {
    return fallback;
  }
}

// Função para obter data formatada
function getLastUpdated() {
  const now = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

// Função para gerar árvore de diretórios recursivamente
function generateFileTree(dir, prefix = '', isLast = true, depth = 0) {
  
  if (depth > 10) return ''; // Limite de profundidade
  
  const items = [];
  const currentPath = path.join(dir.replace(/^[├───└───│\s]*/, '').replace(/^\s*/, ''));
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    // Separar diretórios e arquivos, ordenando alfabeticamente
    const directories = entries.filter(e => e.isDirectory() && !PATH_BLACKLIST.includes(path.join(dir, e.name))).sort((a, b) => a.name.localeCompare(b.name));
    const files = entries.filter(e => e.isFile() && !e.name.startsWith('.') && !PATH_BLACKLIST.includes(path.join(dir, e.name))).sort((a, b) => a.name.localeCompare(b.name));
    
    const allItems = [...directories, ...files];
    
    allItems.forEach((entry, index) => {
      const isLastItem = index === allItems.length - 1;
      const connector = isLastItem ? '└───' : '├───';
      const extension = isLastItem ? '     ' : '│    ';
      
      let icon = '📁 ';
      if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        icon = getIconForExtension(ext);
      }
      
      items.push(`${prefix}${connector} ${icon}${entry.name}${entry.isDirectory() ? "/" : ""}`);
      
      // Se for diretório, recurse
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        const newPath = path.join(dir, entry.name);
        items.push(generateFileTree(newPath, prefix + extension, isLastItem, depth + 1));
      }
    });
  } catch (error) {
    // Ignorar erros de permissão
  }
  
  return items.filter(i => i).join('\n');
}

// Função para obter ícone baseado na extensão do arquivo
function getIconForExtension(ext) {
  const icons = {
    '.tsx': '📄 ',
    '.ts': '📄 ',
    '.js': '📄 ',
    '.jsx': '📄 ',
    '.css': '🎨 ',
    '.json': '📋 ',
    '.toml': '⚙️ ',
    '.rs': '🦀 ',
    '.html': '🌐 ',
    '.md': '📝 ',
    '.png': '🖼️ ',
    '.ico': '🖼️ ',
    '.icns': '🖼️ ',
    '.svg': '🖼️ '
  };
  return icons[ext] || '📄 ';
}

// Função para obter estrutura de arquivos dinâmica
function getFileStructure() { 
  return '📁 mcp-manager/\n' + generateFileTree(ROOT_DIR);
}

// Função para carregar dados de JSON
function loadJsonData(fileName) {
  const filePath = path.join(DATA_DIR, fileName);
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  } catch (error) {
    console.warn(`⚠️  Não foi possível carregar ${fileName}:`, error.message);
  }
  return null;
}

// Função para obter lista de features dos JSONs
function getFeaturesList() {
  const featuresData = loadJsonData('features.json');
  
  if (featuresData && featuresData.features) {
    return featuresData.features
      .map(f => `- **${f.name}:** ${f.description}`)
      .join('\n');
  }
  
  // Fallback para lista estática se JSON não existir
  return `- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- Window minimizes to tray on close (doesn't exit)
- DevTools enabled in release`;
}

// Função para obter lista de temas dos JSONs
function getThemesList() {
  const themesData = loadJsonData('themes.json');
  
  if (themesData && themesData.themes) {
    return themesData.themes
      .map(t => `- ${t.name}`)
      .join('\n');
  }
  
  // Fallback para lista estática se JSON não existir
  return `- Light
- Dark
- System (auto)
- Nord
- Dracula
- Monokai`;
}

// Função para obter lista de templates dos JSONs
function getTemplatesList() {
  const templatesData = loadJsonData('templates.json');
  
  if (templatesData && templatesData.templates) {
    return templatesData.templates
      .map(t => `- **${t.name}:** ${t.description}`)
      .join('\n');
  }
  
  return '- No templates available';
}

// Função para determinar linguagem baseada na extensão
function getLanguageFromExtension(ext) {
  const languages = {
    '.ts': 'typescript',
    '.tsx': 'typescript',
    '.js': 'javascript',
    '.jsx': 'javascript',
    '.css': 'css',
    '.json': 'json',
    '.toml': 'toml',
    '.rs': 'rust',
    '.html': 'html',
    '.md': 'markdown'
  };
  return languages[ext] || 'text';
}

// Função para verificar se um arquivo deve ser incluído baseado na config
function shouldIncludeFile(filePath, config) {
  const normalizedPath = path.normalize(filePath);
  
  // Se whitelist_enable for true, apenas arquivos na whitelist são incluídos
  if (config.whitelist_enable) {
    if (config.whitelist.length > 0) {
      return config.whitelist.some(w => normalizedPath.includes(w));
    }
  }
  
  // Se blacklist_enable for true, arquivos na blacklist são excluídos
  if (config.blacklist_enable && config.blacklist.length > 0) {
    if (config.blacklist.some(b => normalizedPath === b || normalizedPath.includes(b))) {
      return false;
    }
  }
  
  return true;
}

// Função para coletar arquivos de um diretório baseado na config
function collectFilesFromConfig(config, depth = 0) {
  if (depth > 6) return [];
  
  const files = [];
  const dir = config.dir;
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Verificar se há children configs para este diretório
        const childConfig = config.children?.find(c => c.dir === fullPath);
        if (childConfig) {
          files.push(...collectFilesFromConfig(childConfig, depth + 1));
        } else if (!config.blacklist_enable || !config.blacklist.some(b => fullPath.includes(b))) {
          // Se não tem config específica, recurse se não estiver na blacklist
          files.push(...collectFilesFromDirectory(fullPath, config, depth + 1));
        }
      } else if (entry.isFile()) {
        if (shouldIncludeFile(fullPath, config)) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    // Ignorar erros de permissão
  }
  
  return files;
}

// Função auxiliar para coletar arquivos de um diretório
function collectFilesFromDirectory(dir, config, depth = 0) {
  if (depth > 6) return [];
  
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        files.push(...collectFilesFromDirectory(fullPath, config, depth + 1));
      } else if (entry.isFile()) {
        if (shouldIncludeFile(fullPath, config)) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    // Ignorar erros de permissão
  }
  
  return files;
}

// Função para gerar conteúdo do Source Code baseado na SOURCE_CONFIG
function generateSourceCodeSection() {
  const sections = [];
  const MAX_FILES_PER_SECTION = 50; // Limite para evitar estouro de memória
  const MAX_FILE_SIZE = 50 * 1024; // 50KB max por arquivo
  
  console.log('📝 Iniciando coleta de source code...');
  
  for (const config of SOURCE_CONFIG) {
    const sectionTitle = config.name;
    console.log(`  📁 Processando seção: ${sectionTitle}`);
    
    const files = collectFilesFromConfig(config);
    
    if (files.length === 0) {
      console.log(`    ⚠️  Nenhum arquivo encontrado`);
      continue;
    }
    
    console.log(`    ✓ Encontrados ${files.length} arquivos`);
    
    // Ordenar arquivos por caminho
    files.sort((a, b) => a.localeCompare(b));
    
    // Limitar número de arquivos por seção
    const limitedFiles = files.slice(0, MAX_FILES_PER_SECTION);
    if (files.length > MAX_FILES_PER_SECTION) {
      console.log(`    ⚠️  Limitado para ${MAX_FILES_PER_SECTION} arquivos (total: ${files.length})`);
    }
    
    const fileSections = [];
    
    for (const filePath of limitedFiles) {
      const relativePath = path.relative(ROOT_DIR, filePath);
      const ext = path.extname(filePath);
      const language = getLanguageFromExtension(ext);
      
      // Verificar tamanho do arquivo antes de ler
      try {
        const stats = fs.statSync(filePath);
        if (stats.size > MAX_FILE_SIZE) {
          console.log(`    ⏭️  Pulando arquivo grande (${(stats.size / 1024).toFixed(1)}KB): ${relativePath}`);
          continue;
        }
      } catch (error) {
        continue;
      }
      
      // Ler conteúdo do arquivo
      const content = safeReadFile(filePath);
      if (!content) continue;
      
      fileSections.push(`### \`${relativePath}\`

\`\`\`${language}
${content}
\`\`\``);
    }
    
    if (fileSections.length > 0) {
      console.log(`    ✓ Processados ${fileSections.length} arquivos com sucesso`);
      sections.push(`### ${sectionTitle}

${fileSections.join('\n\n---\n\n')}`);
    } else {
      console.log(`    ⚠️  Nenhum arquivo válido processado`);
    }
  }
  
  console.log(`✅ Seções geradas: ${sections.length}`);
  return sections.join('\n\n---\n\n');
}

// Função auxiliar para capitalizar primeira letra
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função para obter informações do sistema
function getSystemInfo() {
  const info = {
    // Informações do Projeto
    LAST_UPDATED: getLastUpdated(),
    DESCRIPTION: 'Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale',
    PROJECT_LOCATION: '~/Projects/mcp-manager',
    FRAMEWORK: 'Tauri v2 + React + TypeScript',
    CSS_FRAMEWORK: 'Tailwind CSS v4 (@tailwindcss/vite)',
    APP_IDENTIFIER: 'com.birblabs.mcp-manager',
    ICONS_PATH: 'src-tauri/icons/',
    
    FEATURES_LIST: getFeaturesList(),
    THEMES_LIST: getThemesList(),
    TEMPLATES_LIST: getTemplatesList(),
    FILE_STRUCTURE: getFileStructure(),
    SOURCE_CODE: generateSourceCodeSection(),
    
    // Informações Gerais do Sistema
    GENERATION_DATE: new Date().toLocaleString('pt-BR'),
    HOSTNAME: runCommand('hostname'),
    CURRENT_USER: runCommand('whoami'),
    HOME_DIR: process.env.HOME || runCommand('echo $HOME'),
    
    // Ambiente de Execução
    OS_NAME: runCommand('uname -s'),
    KERNEL_VERSION: runCommand('uname -r'),
    ARCHITECTURE: runCommand('uname -m'),
    NODE_VERSION: runCommand('node --version', 'Não instalado'),
    NPM_VERSION: runCommand('npm --version', 'Não instalado'),
    RUST_VERSION: runCommand('rustc --version', 'Não instalado').replace('rustc ', ''),
    CARGO_VERSION: runCommand('cargo --version', 'Não instalado').replace('cargo ', ''),
    
    // Rede e Conectividade
    TAILSCALE_STATUS: runCommand('systemctl is-active tailscaled 2>/dev/null || echo "Verificando..."', 'Não verificado'),
    TAILSCALE_IP: runCommand('tailscale ip 2>/dev/null | head -1', 'Não disponível'),
    LOCAL_IP: runCommand('hostname -I 2>/dev/null | awk \'{print $1}\'', 'Não disponível'),
    
    // Docker
    DOCKER_VERSION: runCommand('docker --version 2>/dev/null | cut -d" " -f3', 'Não instalado'),
    DOCKER_STATUS: runCommand('systemctl is-active docker 2>/dev/null || (docker info >/dev/null 2>&1 && echo "active") || echo "inactive"', 'Não verificado')
  };
  
  return info;
}

// Função para substituir placeholders no template
function replacePlaceholders(template, info) {
  let content = template;
  
  // Ordenar chaves por tamanho (maiores primeiro) para evitar substituições parciais
  const sortedKeys = Object.keys(info).sort((a, b) => b.length - a.length);
  
  for (const key of sortedKeys) {
    const value = info[key];
    const placeholder = new RegExp(`{{${key}}}`, 'g');
    content = content.replace(placeholder, value);
  }
  
  return content;
}

// Função principal
async function main() {
  console.log('🔍 Coletando informações do sistema e do projeto...');
  console.log('📂 Gerando estrutura de arquivos dinamicamente...');
  console.log('📋 Carregando features, temas e templates dos JSONs...');
  console.log('📝 Coletando códigos fonte automaticamente...');
  
  const templatePath = path.join(__dirname, '..', 'scripts', 'MCP Manager - info.md [TEMPLATE]');
  const outputPath = path.join(__dirname, '..', 'MCP Manager - info.md');
  
  // Verificar se o template existe
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Template não encontrado:', templatePath);
    process.exit(1);
  }
  
  // Ler template
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  // Obter informações do sistema
  const info = getSystemInfo();
  
  // Substituir placeholders
  const content = replacePlaceholders(template, info);
  
  // Escrever arquivo de saída
  fs.writeFileSync(outputPath, content, 'utf-8');
  
  console.log('✅ Arquivo gerado/atualizado com sucesso:', outputPath);
  console.log('\n📋 Resumo das informações:');
  console.log(`   Última atualização: ${info.LAST_UPDATED}`);
  console.log(`   Hostname: ${info.HOSTNAME}`);
  console.log(`   Usuário: ${info.CURRENT_USER}`);
  console.log(`   Node.js: ${info.NODE_VERSION}`);
  console.log(`   Rust: ${info.RUST_VERSION}`);
  console.log(`   Docker: ${info.DOCKER_VERSION || 'Não instalado'}`);
  console.log(`   Tailscale IP: ${info.TAILSCALE_IP}`);
  console.log('\n📝 Para visualizar: cat "MCP Manager - info.md"');
}

main().catch(console.error);
```

---

### `scripts/MCP Manager - info.md [TEMPLATE]`

```text
# MCP Manager Application

> **Last Updated:** {{LAST_UPDATED}}
> {{DESCRIPTION}}

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: {{CURRENT_USER}}
- **Home Directory**: /root
- **Generation Date**: {{GENERATION_DATE}}

### System Details

- **Operating System**: Linux
- **Kernel Version**: {{KERNEL_VERSION}}
- **Architecture**: {{ARCHITECTURE}}
- **Node.js Version**: {{NODE_VERSION}}
- **NPM Version**: 10.8.2
- **Rust Version**: {{RUST_VERSION}}
- **Cargo Version**: {{CARGO_VERSION}}

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: {{TAILSCALE_STATUS}}
- **Tailscale IP**: {{TAILSCALE_IP}}

### Docker

- **Docker Version**: {{DOCKER_VERSION}}
- **Docker Status**: {{DOCKER_STATUS}}

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `{{PROJECT_LOCATION}}`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | {{CSS_FRAMEWORK}}                   |
| Identifier | {{APP_IDENTIFIER}}                  |
| Icons      | `src-tauri/icons/`                    |

### Features

{{FEATURES_LIST}}

### Available Themes

{{THEMES_LIST}}

### Templates

{{TEMPLATES_LIST}}

---

## File Structure

```text
{{FILE_STRUCTURE}}
```

---

## Source Code

{{SOURCE_CODE}}
```

---

### `src-tauri/build.rs`

```rust
fn main() {
    tauri_build::build()
}
```

---

### `src-tauri/capabilities/default.json`

```json
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "Capability for the main window",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "opener:default"
  ]
}
```

---

### `src-tauri/Cargo.toml`

```toml
[package]
name = "mcp-manager"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
# The `_lib` suffix may seem redundant but it is necessary
# to make the lib name unique and wouldn't conflict with the bin name.
# This seems to be only an issue on Windows, see https://github.com/rust-lang/cargo/issues/8519
name = "mcp_manager_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
tauri = { version = "2", features = ["tray-icon", "devtools"] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
dirs = "5.0"
```

---

### `src-tauri/icons/128x128.png`

```text
�PNG

   IHDR   �   �   �>a�   	pHYs     ��   sRGB ���   gAMA  ���a  MIDATx��r��{�CR�J~�lDHU����@�B�'@<A�'@<��'�xO��:QE�_��)	��	rI����t��Hbg�gw���*a�t������t� 444444444444444444444�8
 �;�G|*��q��>w£#��"�$�^�߇jy8�s.@'c!(\�E8��y�@��b@��!ADP#΍ ��d���!��l�����O�̼ �ho�5�!�K��d�g�0����T�W!̜ t@�R?za��P���I��3% ܹ�J�^�s�=,�e_��L��QjC-�Z���� ��^=�/;P7���Q���Z ���ђ�G�7�N	����g��L�<�v��,�Zz m�4�s��1��?�t��K��?���N Y��H�8��;����y�cw ��,��� �.�Z	�>��,೅����V}ug���-ޣ}��a�f"(%0�� �Is%؍���	<v����`���hu��z %P�t�����e�,�&����a-`�Ѧ����(�Y���֡#A�u<��20]4>��+0>C[�<���+�<���c����� ������+v���E@�m ���@�|
ͣ�N��x�v�EE�5��mny+�,�*��i���̑��#�� A���?�i�J&��`�Zu�<���f��؇[.$~��"u��\�?8#NӷC�Y3]�խ<�u��xY8/�{��G���GzI�ĺ��ֵ�����7���W|�x���� ���)97i�q��6�(����' �����>��T������\�ְ�1O�*�tĦ?c��ɖ\i� ��x�8�Y=i�����~>�Pk�yqЁK�Q�트��$}dO I���4�+��Z����� :�s���E1��
��ۿ� �aЎ�f�7����kz��^��U��~�Б(dajQz��^x������,��U�ѥ\�N�o`|�W*�d8�d�i$���cA���ro{btPx,ZV@�DK�Z(hH���Z�M'&Ә�kN�R �g̍��}��xV�żg/S�j��P�*�+\��.��3����n�0^�g�-i9z>��=p�/{�c�95���2��8J����II�4�"�*����p̥�!��(ۥ_R�Ȝl�������`�¡ɨ?�� �$�s��k��*@e�=��iv"�1h�:M"�"������)��S�LP� ����7A�2seS� ��K��@��4�vh������(M ��'�Y7v" w���/������7�T2��>�b����@)A ?V�vр�I���� w c�����H�PHN��_��/�x 2�ڸl����_�oo^�3>d];
���
ߓA�)@�M�=�7=2~
��^����Uw�}iq&'r:`������G�d����=���UP4M:�Q������N]_�`�����,����a�Al���u����n]-��zi������9�a����m��=��_��q��4/�ƻ��V��O�u��Ћs�i҈�P~��T>V��p�¡Xi�3@�7�jU8ܻY����H�(�L���%��S8 '|�p^�/Nb�{�����lYa�	��$Cb�������yg��J#.�4�g�Rf��?=�ư��W�D\ ��<Ϯ��w:8����8�D>.q1�&sz�z����1�����a��@����������y8G>C0= ad=@ ���?g�����~Fz�}P�~ɝ�����{	��ܺR�=���^@Ed���.�@p#�	��{�plR; A���q�Y�cs[��{��k	�w�Df|�����S��Z���y���d��<�$\E�ȝr�I']�:'s��/R:�>�NL ��^��0�Hj�/3�i�)l�x����(U_i��EP��� ���sK+=��]kP 똾�/s}�x�Y�|}�������uuw�|?Bn��^
�`Yk0a%۷����yw������R�cr ��| !�@G�>#��ԃ��4�V�Ԯu�CT恗r���C/�,A�dg�x`��?�ں�~�ȍ���$" �4@�,�^/!��$;$�DFٱ3��� .�o$��o~�O���Q�����L�0�F�X�W^j{q�W��F��0���� Z�{�;��2��&q�Ͱ�����X��_�������U�|%�$��u�}�i.!b��r�gy� �P"�d*8��l`t��Ѯdߦ��&=��}1>#& Z��vɔ��%��� ,�1�җ7y�.B��Ʒ��< ��.]�t.�Y�Ũ,���&���U�]�%W��#����;�CI��\��"Ũ��r�\���{l�	bA b�ڤ°��w\>f]��w�j���ZGO��P���w����z�go6u�������?��`�ւX����Ä�����42쏓��d���7��V�1�y�fd��w�Rg�O����b����$z�IT�/�{���l��`� O�\��e���޻s5�R�3�-�=�G������lNO`�uY�LN?o�x�� ��� �7����,�|�p���89�.@�O�LL����<�I@HV�0-O�`�qt�� �_���ǫ�+��8*�t	��R�unB	 !��;��I��K����G_�bB?��ӵM�.F���������A�$�j���<�し��\{��D �aO&��SA�
��ձS�q0~jz�Y�Yn+�	�*�Z��f�Qõy�c�C,�x�/t3���Ύ�c(�[8��J�F1��}H�������ު�Գ�pZ�+�B�	OPuL�s~��8z{Ju�8ǩ ���Q,l�]��Y������J)���WN��	��%a�;�ʜ�2O��^�7v���O(E ̕��Om>T���'!l�Bv15	U=���HxY�3K@�_�+��	��*y���וֹ+uw0�m����%V���n��<,M ̵�DJk[H���
��V0N^g��g����Y��"F�B����|�T0�"��H���݂�h*1�suU���s��4J �\eBn���j��T" f&D@�W	.���OSYs(�]��5�3���9૳��<�4ESƕ�ps�կ�P�� �ZL	z�OH,?}�L`o�{�	a�F�4�	�ɼ����3��������� &L�@_��zv�
�������U� �IO�GÅ����`��⿟��.��`7��Ɨ��W0�p�p� �*$P��d�ij'�OaA��._0�1)ݫ(��g�L�|��)i����V����5<���/����������������������0��?)j��    IEND�B`�
```

---

### `src-tauri/icons/128x128@2x.png`

```text
�PNG

   IHDR         \r�f   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx��rW���T�����쭛1ވ����`�#��	O�x�O�x� � �	�8��Ũ}5�%��{;�=�GU�f�*�,$ԭ�s*�����nc�>��'O&                                                      ���S���yy�_=�+����wN�{�/�����<��syt7�� ���(���"1/Ra��4;��6�������P-�R�
u�e1�>�^#/�["
ODF�h	b�}1��bh+T�����P�?1
��1�U�m8I�� �����$Y�g_R=��4#�{Hf�!���%�>5G"�@�`��T@ jN��]F�Xw��G�������3��@̀ῗ�`2  5A�'���?C����g0N����qn��`�'��m7�Xg���t  )��z���,@4p" c�\?q�I/�Y3���t�%!`~rmM��`��Pqݖ��:"  � G[��WmO	  ���R4%��f@
P!��o��*��#��
�@E�G|���TɼF`�z�Q� T sm���h�B�8�@d��3?# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

w�-�m�Z"��x�7�mS$� ����#��5��oy.��������(q.ǉ;W�"g;"@jc�����ޜ����K�ME`Q������|� ƿ�j�MtF�6�tݖ�|�g��?%���-b�'��j�/A r䜿G�(�^�s<���ü�Bj �@�4~5�ĭ�/v��Q����]�U�Á��R;! ��o���L�aޔ��VWa�/�-je�ɨ�F�2� �8F�T554�㘊�V"��-j�#o��r�O�_��PR�A�onPC� �y�A9��5�R`5��QU4�(�N�YR\��Q��ے�6��1�M5@��T�Dx����e�hE�-������k��S��;:ދ�������T_�Hf@��S|�-w�I���T�v5 @0�7`l���b�W|�#���f�MR����Tl�ü��QVGѳ��x��).�O�LA%��|�N��,�A�u�I� 4��`
��Q4���^��^�H���SMApN��xC��_��@M�� �K��O�~�DD��zF�s�?�*�aHL0�sP� ź˿(Q�m���Љ��?*��7�ZTr�qߑ
t���3 0!���t�G}S��SD�������@ &%Z��k0��P6�9=�5��Lp
0*�R[8�We��_��,�:~P�N  ��\{8����C?�WGnw�0�Pζ�O�¯_w4p_�ܠ �b���w����ܐ2���j�6��&݁]�2�l��?h��K�QJ*��b��M�v�p~  ��q����~g����09=]��mܾ�`���`�[���ג(�kPD0~<����{��oI��}��b�����=��DW��H�X��
�߰�QL�D���\�	���
�|�����l>V_9�D�.�� � g�(kq��A��$
�S(��� @���j�߁[��w кN8�}��(H�X��o��ܔ������=*n��)vi�c�'#��J���u
EB�d4@
 ދ�^j�����d�6E��bL�b�����=�����x����W͵���'|2�Ж��/�4��1�l �����܋�+�K���L���rzi�ٿ����ښ�>�w�mHDp�bjP^��~�0�@���  Q/���g��;��9`�ݏ��ާW���:�q��G#�������ŭ(���_淙���}1��?��)�Yr�����#�Ϟ��%
��U-�}?8�W����<�{�}����R�̿�\�}v'P���C�%r��B�I@
0%O\e�۫?���p��ق��P�)9'3*sc35��MA&�H΁�����ܗ��|ogcX�������S��~���i��/�f��]����7� r�/�k���.�����s��m����ap�C�;�"csi `L4�_x��/?��S�!
�������/;�'�p����x� g��.UC����f��O:��wT!��/ւ������5g�,dj�#c 8���믋�ksH�f� GKK��:�K2�����d�׆! �@����َ��CPq�\of'�.X4tk.�8�K  Ǹ�loCt���[8�>��E�Q��J���1P(�~�>�*p�J��UI�ݜa9c���3	��g�"��"����������5]���\���1��<B�F�@}���39�&7�j1ٖ�h�UO(�1Z��n����q�b�n �s���ɼ�`Ij$Zh��}�nWb��K�bN-��G�j]�Ɵ�l�p@4Z,|������L���>�V�!���D j��d��;��ҏ�i�{���w6�����"ʻ�vE �J�H��Ͻ��9�%�7��Qd���>�ɛ��1�O8���	y�}�MI��[F�h� �ł;W� �d3�Nh�l������4+ ��o�����]_�G�7��KF�a�����%ܜ 4����c#�X^�6��>�|�QB��>FҒr2Q�����h� ho�����84�������1m�G�*����q���J��/��Ip��~��%�M?�ǁ9E&�u3KB��Ba0h� hя:�c�����ۻ~�+��1�M���[Z��zQ#\�ٻcИ u�}���'�s����Us���$�;�����m��X;�������f�קt���O�̜u1G�Y�X C	�9�Wj/ >�w���_r��OnX[�=)�3E�H�oo[n�B���;�������OB~v�-���!�z@κ�|D��USy�!�$�PR#���Sk�Ŝy�-�4������t�͌2М|Da(��.�E��
�d��
@�'QC5���ڇ��Csr��sICt�����l��;	z
��k+ ���Fm�u<�.���d�?��}40���o�^���5���InS8l�r<� ��CS��ۧX��~�Q���P�7�7)�ۄ%�=�R^���9}m���O���ԣ ����zQ-� �e�Q�aˍ_)/꼹�#!�"u���Y�^�/u1�����J!����' ���"����-7����˟���tSRFO�(��8g�}
~�͢�>��y`9*�� �_��`�-��$��&�V�΅�Ծ��z����)�?�RHr��R���oU=�D"��/���6�"x���ic�{��D������G{S�Kq�:����q�)4����]�͟�_�٣f�?�g
{}�y�z��ԥ�O!a:�(C��|�D�>��M��#����V��%��п%$���~4r_����0���ME�U�vP��Ƙ�/P����ٟ^�����-��3�Ƃ�10- s/^-Ԩ�G�%t|y�����;bZ 8I�����퀟\[��]�R#l� �p/�;�׉ё&GZp2&f�������&Z�b��o�)���+v� �����rV�9�����N�j1ɋ�y�.OR�F�]���%���)��?Ǳ+ tI�V]���$��"]��e��-�K�8"O�����2��i�@�`��me:_��.�r�Ii���(ָx[��&�� 蛞^�}
��H���9Nntg�DEʴ�W�/S]���q�^�"�
���t��5 �x!�?e���9�^|��lw[�^��}�G��u�~�2����?��3o��s06������ز:��O�VS�vh�w$��h`_��P|�?���OL��>nS ��Z��K'���9�h�'u�����j�j0��7"V��~���Ǥ 8r=
D��6wIÇ���Ѽ�����{qF�F�{����8���P���Q�	@��ߣ ��Z�?��A�������1�	�w�u��ءX{�	@� ��F6�CX��:����}�_������~��1' .����U,7��t#nX�e�o�����"x�	��!�@<�G�$}afCk��'ӯC=@���\_}y}�H��F͎0���'�� �~�&R �ܔ�U� Ӻ�n�۟�w�]��\�5.��7%�?��) �� �f��CN�ES.kQ�����U�ށךf���@ߐdk�3��c����b>~�Q���y}�3 Mx�7H�oyX��cgaN ���3{�σ�d��OAn*����_�_���TEq����x�IE���K�� �D�o8!�Wi���ڳu���ћ�L	��O�ޣ@HZ1"�^��T�u9���b(o�[�pj�x*�+�0�_9�h:�>U��`XV�?O�5����`��F�?����ȫ���bJ R�������KogǬ@E�UƯ�' g�����0o�����,  r��ov��4LE ]JG*��>��൦����D �S��mgNr̔L����r E��Ű[|Cў�s���9sg�oq�JH\��ž�����)x����P�y��s��# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

D1�*m��Yj�Ş�`J B.�`�bv'A�_��;�(���|�$,NQ �]�,`pw�.J���B��p����O��D �Ҏ��D��g�i��*�o�	��߶��q1Xti�J@^�6�gU_w�uzv��u�량� �q��y��NH/tX�$�߬|TzB�Ь`��<��6#�`���Uf"�bg�ʋQ����Z��Ӵ0|���B�|�	@�8X7�sdB ���_��{ŕw���X�2�	�[ÿ�pr�	�\�:�y�����Ν�R�"B�O��^D󁿼ßs�z$4���D ���nT [{ׯZ9�5a�9���%1�;0��1�<�AH!����>B/�ҋ��!+t��g|ā?�/��%�f���@�@�:�c�d�����F�:�L�G���ߐ�/`��j���;1��`��0) .��䬜B�L+�`����w���ݻ嶞�!G���w~��'Sm�eP���~(^~K�~��>��+:8u�}
���#���/��]�Vi��"���¯FKK��a�x��\D��IP�<��G�	�����/�_�p(�?Ij���6�j��f`���C&��j��g��T#��uw���bN�臋JA�1����F�7���빹A;'���`X ~��)ߠPO ��ى@�/&a�T���@U��r8Ȁ�ѷ� fGog{���L@����Np~t��֏:/_� z6����A� )����C��h4w���v����x< p&�ǂks���yڧ@t]�Pn��Ͻ�o��W���p���+V��@Ӏ���|- '�@���"]�E��"k���ct��O��n�10/ :=��2]��'&yc�	��_��?��W��l�Q4�#
|�?Ͼ��Ϗ������̜�o2�+R�]��+4����A'5���u��)$L)u�F�]��·?.R�����	��)nE�>]@MgLj�P��g?��^���.� ����b�ݏ|[��)Oz>���{$��/Y��l�ZD J�k�'�T`���|���COd�ſO�^"06�Y���`��:w�0[2�ݍ2��%�&�6�[��%�lm��A�7��nu�{CN�F�փǊ��m��>$0e�6Υ+x�sQ+����"p.>�i�{L��??� %Z-@��5~����Mt:����� D�
���k����Y�E �:j' ���L#�܇�Ml����OE-@avq�[� 8�J��h�:j+ ����5��������~��Q[P��މV<DE���}�	\~��JJ�Nl�����3=�i>1F���Sd��(�΍6_��P�U��;;j/ J���'�"���my����2�3�>U ��ΎZ� �T�
P�1�7۔hw���l�*2~�����r��ފc�γ�hz4P�������?�ý�W�̌FD �ޖ`e�x�����6�6ᕿ�u_d�U���i��"0Sr���N���g ��	�չH��s�a�
�	��oY[o�' �F���Ӄ&��Bp�_�,P�m�u�q�,|���I��(c�B�d���ϯ� ���5���-x�78ސ�?�h� (O\e	_�R�bJ6����BT��^W�9�K��A�/8� %���3p�lQ�=����z՗ϻL�[5g�%Z��8��#��4Z ���G��$a(�9`οK?���S�����>'��,}?c�80�x4^ ����;hs����L�G.�O�X��P*��̮'B2/��B'��V�R[h0���F ��]`���*P ���WGcZ���7�8���㯎�	��g
2Wr������o0�
i]
pkmí��&hep���y:~��0�s�0~�:8
���A���� ��I<ӭ��ڄ���oK0~[ 8FY�+u�US�^�%��y�	s@ NAo�x�@��T��p�b�{@4p>���`p\8&Rᗪ�*��0H���Z8��H��)G{�Pݯ'�)h���~���`��0��uW�k��e�P�94��>@��  3D��i��Rl6,*�ᯣ��<  �Ш��~�N��b��������� >E`M\��֢).�lu\6xu�_��� 2�&��v?��_� h>�xy7�$"�o' �B��.���ݎ�g%z�I<��&�y'��p��&�z  ��������_z<�>d�N�c���:����&���1K�)Bdݎ�/� �                                                      �����$D�'�    IEND�B`�
```

---

### `src-tauri/icons/32x32.png`

```text
�PNG

   IHDR           szz�   	pHYs     ��   sRGB ���   gAMA  ���a  cIDATx�VAn�P�1Q�E���tȢIT)�4=A�	� s�	BN���.B�	tժ� D�"��������������y�ϟ�o�+���4_&?���E�/%�&U��N�Q�^��h�ت�3�����n�j�8�}�w�\X������?H&�� �W��3`�>ê8�eP��Cl𳎇��d�"���eMd$	��*؄�~���n5f��sj���8'�N�$H)"�i^u�]�����ζ�����A���h�A.A�Zp ���hC�IA�y�?޼��Eb*� ~\!5i����HAQ�+ ��r7�]"��#o�K�� Ҩ�?�9����}�g���:oR�\b4%5d�<fz�Ӊd�{�]N3��:�̮�Î�i�H�v{ ʌ������o���{l�G}�iH��a��_�2kL�]���9��,��ڸ��:�%�����8�bgC�	D@��rf�i[�p������L�ϣ�$.�te�5��En�B�a�B��{oBsy֙��>���j"�"�@�s��IHB!���K���0�ir٥i�`�Jܺ#��2Dş��vd�ԟ��v�z�5n����P�	��l�h�a�(1��A@��������:'(���w�����w2�Q�@�*X�=z���^>e�{��t�&��|p2�r� ��NW�yU	��a���r��w��<�ɜ �9�/-{�C��s���b:&��#kt	�=���UX�>ӄ�1���AƔ�K�Q������^v5��3�W���;�"�e����G���K�=c���HD���4�3.-@`��]c�s`�"a�ы����XY������=���2����_d�u��/�    IEND�B`�
```

---

### `src-tauri/icons/icon.png`

```text
�PNG

   IHDR         �x��   	pHYs     ��   sRGB ���   gAMA  ���a  6�IDATx��mrTG��񓷄�g�;Z^��FR�#&?4�8T��b� V�Xb� ���#ܘ�����H��W`���/U�L�+!�Vo��nf�1���ۀ�<��I                                                                                                                                  ���1�g�������_;(�����: cA `(6���w�o�|!&)��E�.r:�+���$��f�d���f�'a �G �\E�_,���.J7�ץ�\��ʿWm��t�� �	 ���;�/�u)��^-�����f��� f$ @����"��+�g6����>66)0-�Nȓ*�		 ����T��?m��д?G[$	 (��$1�lO��0R[!hJ'����I� !! Q���)�vqʏ��?^�����l�d �c$ ��>�������A2 ϑ  �������d " <a�����ۀ�w��_]�lJ'{b�� F TX^�O�*+�y'��O$�6�
��H �
��d��~ �
��H �
����}N��J���Yn=`�H �
 �G'u� C��& `�l�_��~6���p��L	 0~�ҝ �Đ  D�GO�l�D�� ƍ ���^~�X��O���� `��ÈRn`\H �1���n�C�W]*F�̍�w�� (|0V
�D$ @I��cr��0* `DE��1}~LX*��a�0�E �@��v�~w��r?��� �D �S?*&� E �S?*�j @ �S?<�l ��������
��?<P��W��Jպ � \��׿^��|�7i	�,T �s�࿘��	������k�@ 8�~N��A7 x ��  ����� ��O�'��� �rI�=�l	��  G{��	���]n	�
 �W��
c6̍��	�D��uOA����m	�b. >$ �Rw��l�� F� �a�8SZTZ�(0����a?�b��"U�H�  ǂ] �e��7�!Z �B���6�}1��O�`�  x`X$!���[�C���i�� ���^%��"	- ɞ�W��~ JA; 4$ =��PM��oi��L�}��ߣ��7�.�2����  (��:(�|�~���?��|b~1���,c�opt�@�������,�����_� 		 �Q����8�`��O�F�6 ��䇕'5�U��4�[5`��X��� A`�O�\���O�3f�j��_�|�'�	A�t�,���E ��K�=�o�2�v�����+���&�Z4���[/� �kū~��_ʝ�]�~������DF�_Z�Al�H�A�򀐇H �5������_ݓ~�A�<ǒ��20��	 ���_o�?���zݰA�A�7[Y����.*��%K���	 ���L��s��Ĭ�;ۂ��3F��"胑��}vS� x�-=q�/Y����sIg]p6c6̍��	�@ �p��B�	��$�������!�< x��~�"�O���C�MA�� ����SQY"�W ����� x�����+�D��+� �g?XE�n�_�'�j�.�����u]�P`ő ����q��r��Ǯ�J�X\Y$ �46�9�N��O�rŒ�TP)� ���c��ܟ�e��z@����u�t�p��F��3͏�C �T���%Nn�o��G�`�,.�%F�� TN�/����i*N���V /V- TO��K���]���t�ܯ�i���_�;�Wz"����ZeT  TJ�W�ܐ�&����V	 *#��?%�����C�Q�&1aUp%�@uDW�����[�܀��$1�iL T��0X,N���5��q\�5����K�.SC�J��%w�.�;�_u+l��Y���V�T���u���/�?��8G���Gl��@h�<L LUDx�f8�ASC �UKbx��.t*t�@�.1�� LM�P�ꪄ�U���叁u��Of#9T	 ���JZ�T7	�UI��Z�E�����]o�.���߭|%��Q$��� &.��N�[6���d��h��Y�P�!p�� `������%*w��+��1!$ ������_J��xP��q��0E$ ��p�}	���b��	�'� ��%?�8���*F��Y��
Ǝ ����|1-uæ�ǬQ? LD��]�1LK�r��'	/	�
0$ �� O��s�<鋩*
��	U�q#��y�ww�y��ߝ�����*��� `��;���ڇ-<�}QO{U�*�8� `��<�3���U�R	U�1"�xw�χ�R*��P`@�(��Ƅ c���=���*�
i>eV�_�VP: �ӊ�L�����?��V��0�/�� F�$TƁ� 16���/��� ���K�fZ�N��Z_�,�K̎���/�� ca?|V+���A~�7��TKfL�|�� ��_����m�ي����3�%"�X��K�lɼ!Ӥ�*v��-�^|L	=�ϩ̕gF��u������{�͖t�%�t�&�*�J��W��)	 �N����D��]��:��U�%7����$ (�n/�"�9me�-[�ߢ���m�20XZ (U~�(7�������3��S>0��ޱU�}�]͸�bM�Ȩ �T%�2�A?1���������f]��^�satT P�����_"ґm���1���s7|t�ܶ߳�sDlDy|]���k���F릹Ѣ��I�V��S����e�"h�4l��^7������- &ʓ-���:�����R������@���߲e�'��)rU ߯����- ��ۓ;[7�7��r���.�5�Yl��m�Q� �$����z����J�x?�XT1$ ��D��0�_������jʗ��^f�GH 0�n�?-��	��/:�D|fLC04n`d��QVs~��F ��F ##�>�M�Y[	  �,�7��۲c)��H   b�y�_i~����SC  ����a@��8  ����^_	�:�PX`��W"�	-�/�$�����l���ɲ�B�}�eO�/�S�Z������|��` \P���vC�;���G�Ϻө[)��w$���u3�J���t�u��#! 0�cA���d�զ)��A^�Fit{�k�%]5�-�M3  ���@��_?�����S�ՀU�����\+����� D���?�.]�l8���_3�'����7(8���̀�Y޹,�	 �R�_�$�����G��Q�޵�%A_���d���T��-��=Zóm���'r]|��@�����$ˉd�v]]ޫ�?5�Ƭ
����c{�Z��Rq�Wt��f��u��2���9\�e�G��E Aq%��7mw��[��b�}���������?��sU���ԞoR��m ݰm ���
 ������m�lE�tmZ���o�E�X��O̳J��������w[��U�S�[^�0�A�� �K����F�������\�g@����»�����%0KK` �6@"�% �M�A� ���au�mΤ��*��%z��;������pܲ%7L�[�7�?,}a���Y�{ Pys�ws?�>�y�ٷ�ߕr2"Mw��6ʝ�����
��5����5�$�?�>:J�OT PI�0�-A�����=������5����N�*�U����\L�9������&@H P)�oO�]��;�Wj�?�l	>�ݨ�%t�$��v@�^d�o\����M�:�/����~�.-�0�PL������A���n/�"���`#`���Ը�oO��G���e�M����E�w;��t������z��=� `��������WK\Ͽ.1J�c����>���A�	 &�������ϼm�2��_P5MA����e�xu5��2y)>jkC�	 �Ν�]�o��-�O?�t>����rT�w�_*+<)|._�eTu�@�����_�S���O��s��$Zg*^�K�7��	 J7��������#/��4k?}{�h2�� ��	 Ju��?V.���T-��u�Y�j&���3kT������� �8\�k4y�U~9��kM�ʯ����D�,���W�.� #q��+?�m����7��ڝ6����;U�3xY5s�	.D���?����FԏS��Az�ϩD,����� '���T|�N?\� s��]�_�y\�>�y��N��BfMpR*��	�H 0�����v�7�?\�S��a��'��<+7z�5@�ŝ�ۦ�6�5��BߘE^(����%��d���������BT Г��#*&��Ւo}2����- v�D�s�}l���.y�U���h*1��?� ��x�@O$ 8��ן/�����y����|�%��$�����3$ =� ���{��^�3��o�#� 6���ǥ��đ�~��5� �dٶ 0�!8��׏1$ =P@Ε�;���6�a��ȯ �U͙�Y��  �S�!���3�� �y�a���#0� "��/�y��Fn�U�b9�;�I�
@�\��]ۭ�%��|���UJ�/u��H "4���b�,�bbN 8���;� 2|���I'�~?N!��e23 ���C��1  8�
@$���+}�u  N��|���] �@���6m��k~q����@�;�3o�O5��~	���|�	@�������������� ����I�``��?�_?�����E��|�J"�g)�����u�gE�?.d�g?�T ��&�@�/fb�|��
���#�% ���  ���d[0U�&�����ܒ��������sv��- �7=P�[�k����&�f^�&�����|!�!��S�n#��1�a�%���_���
����ΞH <��%�H堾�w��v �)��g�� �@�������jjMVڟ�z9]Z����h�����w��C����~�c:O��}��n�?��Q�A���`��ٟ#��'�x�ȘTp! O�E?���gL�_�i$�z���<!�#�G69Z����Ȧ�H�ȿ�/���B$ ��y�yL�?W����������������u�YR��z"8��#��B� x ��]��c���M�� 2!��K�'y��g�co$ w��?V��?��?�n�@wN�gIdY��
z�Pa�Пv�ҿ �旚Ĭ�K�,�H��� ���; }�Pa��_Nm9Ot������r���L�T�8���� T �APQŎ����膻ÿ{mᑠT6	�`/@A��}�X?�D��'Z 4��ժƾ��h˖�������:zG�#Q�t�{�����1���* ���b�x���#�{W�(��_�bntK��B��� �H�
@?H *&��-�����| OP�
�(����{�� ���ς�hT���m��O����tͶ����Aޤ�߃JC|�J��OT *�[��﾿�ڗ��'�OUq+���2<�������bC��
�BP��/�1���O��_�<�M	�TW����b�|+>2B�O$ c����߽�p�G{�%�$������W#��7#�*W�o���D������f�/�
��'�U���h���?ů���K�~�; ��0eQ����:ڹI𯾣J@�����@���$ SS����۟�v3���T���;7�ޑ��,��I:Q3~��y` \�����Կ��ݫL�{�-ʱ%ᗶ$�P�j	ؒ��
�a�x��a��@� L�-�G�ݰW���Oͻ���T]�Կd��l��"���f p NA��ߘ�8�����}��bO�zK��+�~��c�D�����1m T �!�]�n�"���ـ�%�LG�q]� �S��2���+�#W��@�����l�7�T�{�I���D`�~���/-��j˯�2I�߈mM�&��a�;��m�����(�LP�w��?���T�߰�*�m2АqpS�F6����a�d�l2��~�Y0����`H &h�ǽ����*!"����JM��ir���U��O��k]�|���╷��z����-�	�O��^��qBQ�����������mP�K78+!p'������Rڟ������PH &Ė�����Ĭ�]�'��B���}�L[E��w8�͂``���+/�\O�!r�����V<�[_e$�� ��D塄�m������w5sW����y8$ c�/�	�ڟ�6��ˇ�|��w���`�B\�c��wu� �_��Ϩ�����O���'�d�[�{�ӿ�W�;���E`�B;��t�Ó�@(j�ϽW����� �I���Ĭ�W	�@�ӿ����#�0&j�m	��u��I�U��������:q��}��$������e�b�������T��Ѻ)�10!����� G��(FB�d���g[����p���ϑL?g p4T J�1�`&�m�����{���&�t$ %���������v��$�{��J�5�]z�~Ŗ������R��<���F�;�Ȩ �)��?���������nQ|���Ґ ��]�a�� <��_�I*|>���$�\���!6X�&I���k�����
J�5��Ῑ��_�s,��̵������ɒP(��� Ԍ�{��������_.����������� �����P��)W�JF0"��O����[�_��I�L	JE0��ɾϹ�?�@8l���Ww�_*(	��tM<Ƶ? @��S����		���s�����N�@@l�-�u����76��j������u���_����$f]0T F`�x}m��?������J8Rscg[0$ C���N�����E�<����9]�	���lY�����!���"/��	��T2��ؘ������q�7��[��6mowk���^[�# ��/�I̎�Ǟ�wx�d̨ �#��1��M�⑟p��|���$� A��������<S��Ǌ��&��w���D� ��,���$�[Ǯ��%D5��vU��h@����]���6Gf=!���ٙ7�E#Z��|�j�����G��ULj�M�̴N�&��f�%�	������x�tBH ���?5<�9N.�_z���D���&�&����z��_�����lu)���=�;�Ҳ�a�������MAԎo+�=���H ���?���w���o��������+�_�p�UW~�K�7�����D�E7��?Y\�=��R|8{�m�{}m�k5%�{�k��kf'������]}�vN���J�7I &�!�������1F(�����w�� �l��q3��i��W^�y� .I�w��?y$ ���o��8-��-��mY�H�V\�sK~������цxȕ�w���ʇ4��ݵ�t�qC*�0�	�ӺMT����I��/�
��z����p�N��<����2#흹���{�;�޷.�c�o�H �䦽}}�������|o�ʧ�s�=��C��<����.|�}��?�_�T2��M	@�j�:�����=�]O�>�u೰V{��Z������D#�;L	@�l��+�SSз+?�m�_� �Vu�5�yFPmn�_�_r�J�J,��?����o��I\C��O��_m��>�I���߯���F���H ��g���鯼���՘ �ґTӱ~]���``�G]޶�hk���B��J��"n�`Gk7��S����}j�id��.W�o��*�
@܋n�#C���X��sT	�v����߈����Ő �����@U���ʋ����I���G4i^�����e��Y��R���>���⡎�yW�n�O��(�MVY49G�����O�}�;�#U	@?<� �������
��6�Ǿ.v*���g(p��:_�~�iԧ���YnQ�� �~��r1,�9���W��ۆ�����36	��-������Y!��[�J"臇 [�m
Nq�1IT}�4h�˕�u{i����c�2�{������/���.҄
�Y:�s?���I�������m��L~ߟEdF�C[f����_ <���m�_|�Z�~�p�h>
�q^�;��}��#���xZT9H��xd�w����U����)��L��=A� �`K�_�o�P�?������ĉ?���ؾ�M��~ �ͻ��[�*����\��J�}����3�L݅T���आ�|�
p����ǐ	r���$Y+��z�10����U�* J�8w����l�ȕ��N ��Ś��=�������@>�D <F��[A?ѷ��$җ��՝�g��C$ =�&�} vfj� �r���k��h �r�<��)�^�-������ W{�i�V����A���?GO� \ ?=z�=$8��P���b�m�L	f�I���?�|�捇� ��?N�z���T�� o~�ϙ���@� \��5���B����CN�f�~%����bn��-�H ��Xa�M��?�L�x�2a~�|�[���	@`�
�M��`$#q�I� � \�� bLFP0u){h�;�|��F�	��,����
�!��.�S�x���1��H ,����O���+�(�?p$  ���U�%��H  �Rkw�Xq�?$  �C-�<x �^>k��-v�ǃ �)�(�0��- ��p%�M��2�?FT ,�r��a�t�5�;��%�	@p���5�
���e8`�� .�bR�jBP0�r�����~�%tnد{�?D�
 �U�Ԓ�-�Q������	��Lm�@= ���G�_�t�`@Fmy8V�����~8���m
� .P�����ҥ����������,��a�������5�7޷����_��j #�5[�$�� \������g"���L��/��Ib����Z6�2��#�E�[&�S��?�i��k8-j̦�LCh�%��c2�������\w���~u����������}��	@>��f>�J��
מ��L=l{�E�-�ӿ� N�C�=؞z�����*��\`�M�UX�t����~��S�*��0* =�Q������m�Ğ�p.�䦯��=���� ��>��1
* =Ml �ɸ�vB���G3o��3N��8�G����W��*_��
@/�����
�)�
`[#��S�鿝�c?��,��swȯ������O�7Ff�
xZM;�x�;��<�wD+{�r?Ƃ��;ɻm���N�|���G*�5�O�_6˭\�C�H zȃ���Ƅ� gr� T�1�:���
`C�Du�����ؐ ���e@*�!8��h"wN���BU ݀_���>?ƍ�j�� li��9l�۲iݖ�L堭m�C&���ˇ��>?&��/��gܣ@���i���׵,�(���tJ	��&��B���K�P�>kΔ���y6��{m�W�
�
�I& �S��m�C�Ǵ� ��ǫ��B�^���7�w�{{SOURCE_CODE}}F[{W��w�!��!�w��S����/I*R������o�Li]"н�׹%�X"�2N����Ϲ·*!�C�E.ϸ9������wu����
z?���ܤ���ܘ9<�NU�[ }�o�w�k�~�����^=�$��܋])�$0���ź���?��-I�:>��'��)>҉�7�璀����2*W�]+��8��T ���٨xǨ�9 �{�ɵ�J��������[��=��Ԓe7,3�n_K2yBO�2���w�gg޶��,&�ѧ��c�������n0�ߛn/����}��ǂ�w}��` �?���2 ��������C&��M�r�Iv���?Ž�����<;�o�~K�٢���HҴ�
���: 	�����ߚ�j���$[��~�CɿO���G�7�g����6�|��` ��X�q�]I�6�pv�/l�j@�cj.	X��1.p�����sJ��|�ٟ��t�%��0����_Ԭ�#>2���w�H\[�*����w����a� h���/����r�����8JԬد�I�~hJb:N� F@0��{OE=
;�� �s�/���5涌q���Di���d[�����ǩ T3 r�ԧ���u[���w��Kj��-�L�zY~Ü��$�DL��������? ��
�����m��g�^fJ|r�x��}b�H:I]M6k[���1n���}�m�������k`�H �����'�5ނ �����)��  ��h���u�� @�H ����K~�Y5r_  Q#B�t�h5�_�����  �E0$#��U����]��*�m�_y�fy02�!���w�̬�{����̛ξk�u>�WS�� �x)�)�22;��wT�
;����M�D�$ �0�o��d�* P=��܋݇'έ��$ #���~��F ��<�����~m>uO�^8����J�&��_�c|f�XL�+�ϼi�ُ�}lm�]��)@	� ���6����{�	;<�ϼm�r����(��ٻ��\[g.��/�`l��_Ԥ���i�����~N�e�9���@6�o��m kƴ��(-%s��Ko��*يJ����*�R�M�?�DP��~q7�o�{��`$ǃ��m7�����?�E��!w]��'��������``n��%�}���+���o�6��D�,A�6@���9#Z�{��@ Ч���s/^��6ھ�2�v�a�c@�$�����ܵ@�Yb 8��)�!j�����}9�nJCP"�w|�]c@>�LtѨ�L�ͷe�o	P2� K�0�Ә�������D�XȳhL�Շ~{���'�i���cA�D��h `�d_K�-&:�;�'6૘�T�'* %�w��ݰ_���;�!P� �W����nOЋbj���&[�,����hb�T���U=�d]�1�P�P6�:�h�s�]����y߯�j���M��0.\,Y~%�Ȗ�������jQ���o�$�����hÉ4	�'�q�䑄¶�Z򴾳�*����cK@���� cD0�:ݦ�-��@TY�tڒy]�����1#�в�5w5P�����u��"��I`p�Zԥr`2����BK�
���+F��w�}m� cF`�B���~� S����ZP}��?&�`�B�p�y��=C��*�;��,�i�#��1I$ ��,��kV���(�����Ӑ��q��$� �Y�U �VV��W�d]�q�m�n7�L	�$�Xp��'	�$��o6��+��I#��P� 9�\y�w[�1˓M��M���@0!3��Z�Q�$	�8����ZN���	����M��z�$ ������V��N"��1,�����7��Ю.aQJ�b4����܋��-\`
� LP�R`��>�kdVkf�v �z�ϙd]�)�0�?��W1u	�������t������Յ%��
�����|�3<�!D��vֹ%�� LA�Z�ْ�%���	� b	�6Cf�SG0%3�����H�X�>����6c�n�Ϟ�	0e� L�܏��D�N������I���Oz0������z߳0�� �2�<��5$*&�h�fz�r*�5�����:A>�s�������g��Z S����S�5�yv��?V�s��4�<�(��l�C�� LY�!p]"� ��S���^�������,&Yg�UB�"�^����=��֙;��[���T����ڷ���-�x��[:�%���QUT *$�[Sy�w}~]wů���n�?w%BL���H *&�['qK <�Hc��X�N��*�P1����Z97 8c���ϝ�ݠ��E�f�������o��(* �NM�S"��v�S�������?C[ۗ��G�� T�܋݇6
F���M6m[�m���'�M�=�ې���u��<��4�
�y��+˕�g޴עxħ����
�����S�=TS�����/�n���Cŕ�������c�4���jULr?��3����D��/H <�~��L��|Ftm�����$ �`(�|$��J���f��������C$ �������"|/�o��@'�msk`t�����wm�� �!�C��s��N�h����` ݹ�Ey���b��R����.���3.	h˥Nd}2�RI6�
\�负ȷT����?|G�!nmK���|R�.]����������~C�?&�  Oq3`dQ&}5�T���&���ꟶ�	���^�޷'�u���F�-�t�C��+F�odY8鏌�~	��HJ�^b4���j�r��|S<R���I��?\�C@H 0��զ-g��K�~���&�K
ڟʹ��6����z_�Zm9�A?[�>ƃ���� �# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

�l8-�����=m�4YrЖ����.�����v���Ꚙ/TM�������A�G�H BP-y�`� o+����W?�c�{��ػ�pO��� �$ (�M�6wy��"I 0:�?B���{}aը�00,[�'�#t$ �"	 �����G�H � �a�! �ô?"B8�av�}�	���� #��@�|j���s������p�ʁ�de�/��D� 2�?�/J��S� v*�v�s�'}+f "����V�~�-u��h���ؑ D���C�%��"���?�������Á�
��� 0��h��y}�O[ G�ܗ��V��3�����1�܇� �		�0�����%�?p ��\ �gK����G�L$ 8-x�h��unq�.F gr-���^ZrW���-�s�� �4���{U�>� T��3�Ye�/�?* �i���f�=pS��)���`� ` TP����P�@��8�#���Q��m�1k~`t$ {0v��JG�R{\5`U��^��-��K��@iH P�+���m�y�A[ %hJ"���� �X0�a��~����}�x� `��|�Q]%@O��oO�{W���#�ع��v2s�AA����O~}D�� L�ᠠ�a�� ��t� `�+�"E�*� SS�ٙ����W��і����O��	��> T��5��ܶ?lB�u>��H P)�?�Z���e����2�n�1[~��H PI�������4�lQ��� �7����&�U��@5q��D �\���oMǵtE0=6���~�>�' x�����[��	9�ۗ~}I��	 �璁Z�w�I'Oh��Xy���� �q36p5�o\+��FZn�O��Ey	 �vX0�6�ow�,
Nj�%=�򁸐  *.!�y����*.!02+��O��i�4�	��ċ �sˇ�O�&�ɀ�h=�J�MU��;�k"��Vk��ǟ � 8�a�@mu�(1��A�^�!�n�7�7c4M$K�m^����RN� .B ��O��E�ݩ�!�$��l�%�I�$��KT�����������?w���90&;p?v���$�;���f~�4                                                                                                                                      Pq����z��~    IEND�B`�
```

---

### `src-tauri/icons/Square107x107Logo.png`

```text
�PNG

   IHDR   k   k   p�|   	pHYs     ��   sRGB ���   gAMA  ���a  
�IDATx�]r�ǻ�R��P'�2"d�TU,)�2��<���:��X>���>AU��`BOqD0\� ̃�,{w;ݳ��I`�vw@�,K*���3�5C���������������?(�:�-�o1��A� �xj�9P~9�Q����ڈU�ӇN�D�Pe����߲pC���E�>/Z$�p�,\��b"�@lMU����n�ֶpb�*�4�,ړ�,ma�R{R�O_@��.�?��Y��5E�윆�H ��:�,����{;,��%��s�Dڄ�Z,j���
�f|^<g���B}	>!J�����t�},H�<��	)�qH����>/�nA��Q_y��}p�Z���I(��(�olRG��� Y����`m�������R�5�`�X�~z|��gٶ��V���XjV�{}l=4���5T�X0�I)���p8�`'2���R�P�]�����'.ߏ�g� (��g/�im%+�/�q�ò��A�څ�dja�j]��U����	�&��J�y" ˢ�56*ԄR�-(����h]��Ys��I`;%�5�@�g���^*���լX�kgpq	,�ڡTh}�LUA/���j����l�#���3�'Yk(b��l9_�ް2MY�9���M�������_�
Y�غ�Z����N1�mE�m��^{��v �Ո�l1{d��}IW�{e9��v���7�� �Z}u³>�����l����6_�����U�r.�k��|��G���>��6 -�P�%�B�Z$�t��n��6pX��F� �b5�H��O����QB��,(��51���z�1e�����@c�u��Y�b*q��A�����e�6��l����[�&V#���4`�$ ���X�LPv�`����o�Z���!�sBfR�e)k����8�ϖ:	�҉�1!�&U=���ջ��Ͳn�{3��XW(�ι�\0x�)t�,���ZĒe)z>�<T��`M���X"/�K�WR�rt)�Ec�Sn�R�\�����g��F?���t�5L�V�;ٱ��M!��5�7�÷������������Tc�$cA���ݛ���]�@�hL�U�Y��"��!
K���l9���ؙ@z�������U�n֌���,Nx�XM�^�i��.V�}6 �Y����?��ղw	*Y�+�t�.�-[�2h�	G��˳�L�2�6Ɵt� ���cV`^'��8f�UZ��k��H���g�V5*y��*�^�8��4��:/{=�}T��Kr9��,o��!
%�#��ܼ�+(��x�@�`G�-�����ny�BU�n_�Erċe�Xg�Ƀ�!����^�[����H��v����JO}Ԋn�g�9{��b� �fWJ��;4F=�����0�r[y�ܻ.��Q� ;�z#��"�7uƱSa���~�@d|j�J�I-����1t�ê��F�����P/�������`|�N�������I���ҞNX��8 �ꤲ��Q��7-��=$ڼ�z<��|��ѝJN����҃���&n�`�7�,��zv)��Lfs�81��>�z��Ћ{���i��ľS�i�h�����J$[q���
X�l�o�$��A7����T뵴�h��H8�d��g����?4.���eZj�e�0Y2��������ȸobr��;N� �d-,k8bUl��`G_�c"���"<+]s��R�<���>�7-����ەDd��ek��]�Q�ʻ�r���"�>�@�9)���l��}���cX}�b�yB	����������r��l�H�Qn9���@���X{d��Q�uN���:��)���~��(�r

��l�䀷?�����"�k������l��$�j�Y2��j©�&��p�,�0�Yc���,�(}��GǦ=��6 6ȵ��m�"�{:j[�.�qϚ�����|��j?p���[��K-�����}���4P���G�C���ɲt����SɭY-'�VFw_�k-�����Q�>�p���U���*wE=힨	N�\�g-�O��1t8~�uΗ���>�e1�2#�Fԡ�ӿw+i5	�&Ou�^��`�tZ,q��4Olt@��"r�L��BC8[��R)-�$WX �/SI)]i���K���R�i�5��]��v�)�������^�����;��}
�PZ�:q�.�8�>��V��v.������I���3�����SXZa94ipiO���D�n'��;��E'oc�PF'4Q~*^�x=��zt�)	g�����&,l"�����J�["�A����ׄ��
%t�s�/�U,�J�Fi���/�Z'{Mg�T(9�����N�K}����Xڕ:���Is���"���z�T�44=���xL���=k.Z��{��\V�o]�r*�Ț��a�5]��K%b	E�����ey���)�~{_�^�%��:;�P�X{�����\�����hu��'��{�z����(�7�TI�b	���@�*KX�J�E,���xsxV����3AQ�����6Q�Q�X��9 �]���Iɶ�s�bMfY|ٛ����4Z��⠚�\D|�h�4&ք���sNq ��C������kB���٨��=M�p�hOکU�	��uemrV��6���	�@��)�4���o�(�b�|�.��ˏ�@���sJ��/~������������������%��sɷ+�    IEND�B`�
```

---

### `src-tauri/icons/Square142x142Logo.png`

```text
�PNG

   IHDR   �   �   ��0   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx�r��_ϮIHY>�GA"NU���G�r��:�,'@����N�8�Z��A�����$HD�	X�hf:��̂BR������
c̮��~����Wx<����x<����x<����x<� �s*rsa�_3�7�/DfH���cH��`$�Fch(^8ǀB	Q�P e2��0Ɵ��� ��B@C���A�t���7y̅r$��?6PHO]�H�Z8��
���'�/#�:$�
h�q.�sH0��b��!+�H�8¹N�s�L@�]�@�F8r�	��Q0G�\�CP5���Q'��x�����X=��h�8ee�Df}����X�hV�X�	D�ʥ:���	'��&��4�J��uI"� ���B�DC���Z�5�1��EC�&�F#����b᪬�F��9Pu����L�ן<��Oo_�c��h���5d������crO!pB�I���+0@��,�ЖQDT�=�e1O%�f���cg�1G�G^��o����/
��"��@<P�ܩ��p2_��4E�*��0(��Sj��Y��?�GPrI�V���G��(�R����P"N
�)�)�5���>U��U(	7���5�=��S�L,Z���XsJ�w���(UL4��ʓ@�w�, �3���%�^0*M喦�-�(���r�<]��pJ8y�43j-�	*N)"����pT���� �	Y�k��2�Y�X� 聙��$�	�mQ����}��C�J�ڌ1��y�u�ݺ�g&�wAujڎu�8����"d��ami`Z[�#J Y�GL
.�%��q��I2��M�%�����2蒥�LL��樠x"r?�X֚.�OH����:�1XN�c��3���Q���s%P��Ha���K��U��q6�e$�;z����D9 fjoq�,u�������4�K W�~[�F��\<�yOvb I���$��	���1�	�{3S��2Wi�����0�=s�̀[�ɭ�k���bq�50�pH,��- ,�����x6�����e�����8O>�����#�l=���8�;93�l�;����~�F�P����o�Y4��}�>a�I�],�9N	g�ً���������2	 �D+`��Y�����>��p&��B<� Ó+%�04�M`m���&�<��7��p��[ �t�L�w<u�bc���`�kU����
㘾l�4h��y��w-�or�d�R��9g�3ծV����01��.h�V)uJcFMr�w�}�[-B`�V�NK1$�Vf� B��v��a��VW���}gE������?v^ô�
8H�TL-�C������G�&K�Շ�)V:�{�c)�\�^B������	+�OcQ��2����L��I�P3���>%E�L%¹����̢�w�ݽq������u�"����b����Qy�4�
�H0�ݿ���N#�ky�oq���#��(*�̔nq�>rS�O�����%+�eu6���_0O�&��1�p�U�2�kN'��\������Y�\�%���(�"��''��.�(*X�k��2��N��̩:���.#�g�6�r/w���tI�}@�<��J��)��vn\)}{Y�8��Z��R�+�d��u��+E8TN0vQ(���R\�	�k2�`��լz6�eeۗQ����Z�*:Ea@|�&�hv��b��%���ȟ:�m��.eH��A!h=�|���XNq����E4�Q�r�lڠ#1+�N�����¬Y[@�����d�ϺD��XN]�؆�4����Galm@Z�����S����^'1�6䦬Ylk¹�|w��$�.�k.�	O[`J��ܽ5�R�9ۻ�O�ͬ��u����h.��������uE��Od�.++�i�O��	Y����~�.�v:��o˞��X�㐛2H��BL�!1�8>��Tufk�ݫ�uJQ7��J vA<IY�mh�FX��Bk�ZdK@�]��w#�� ������*F�x����`�ֆ`_s���i=	䈫{�0J04=q�Ƨ���ۇeUߏR��6��a��.� {�s$��"��u`�Ü�^��J����ΠdP4�P�?j+�D�.�/i�b��`M�+��i��["���R&	����0��U�+��ܗh�T�?>���I���p����y��A+���`\l�\T�7��Gj�����CW�H���2JxQ���&���E�0���2�,������u d(Ꮊ��늮��8��S�&e�S`�:�r�=Z��(��fV�P�4�\�I�kgZ�����g_#�d��
{#��¹����Ñ��U)�ZX��BP,p�cn��k�+��%����,��G�31Y�+��p��v謴��q,����,�g%.@��q�!0��2c�9����~X��±��U���p}Z�Ev�h�n��
ǤE�1����:0s ��P���cur¢e/v�Q��t��)~��0`�u�[�٪ON'�.)�܅����UC�"�>pp�K8>^!YK+s~�#u+�b��ݖ�]�XG�U��8%�Q0Ku
�O�Fu\;�l�_b�:�B�"(��$�(����px�������1�L`N*��<5�
����6�e�6�<�W`����I��c���	f{먺��. �@M8ܸ2�|��a"Z�Y�Q�u*B�ϫ�p��$�\}�.b~���Y��s��[�G�0�?�X�ܓtG��VR���#�����>����E���%}�$�h=)��1 �R>�=����7R�y�b����I>%���|����U�ESE��.V�_l��S3���
6l�ņ��/���� �p_/Vbb�����
c�������B�ٯ[dq'�D�_��g`��ܕ�Y�w��ϗm�t��Q�x��#�N�Dy�6�0�]��X�8Z����x�'��Q��xA�઄��.�{b�"�Iai[<'V�C>X��	��$��q�e����򯓖��ϲ��F���c��m>W�+�N�ü:�"�\�C���
G��R��䬨;�"߲jt9�k��������5�j�����-�|���yǶ�YY��)IH�^w�������f���W֡@9��SW�UX4H�&��1J�rI�Xn�V��C�pɰ�\���z?���%� QGu�Z�z�����UQp��K�*�CkH�P��"�0I؇�1X�EbϺ��t���U��9�cP�rh��,�X����cP7�8|�I��!�E��u�D@�t�)���K�Z���ku}�|%�!柽�I�d��|����D�4������"����W�2�X}��������( 1JE�J��X-�����҃��-� 32WUܒm��P�MO,5�m�R���S$��m�׋�g�$��[�	��Q��Ț��
��~�q�i��yT���O�rWu�m�d	���0��N�&_F[+�s:�S��9냮��Λ�p_[�Z#�CVF��B�0�΄��_,�T]3؅�Au� V��]�Ng���;����{�&L<�v�<�;%�	\��4��2�-XM�o���칓�9LV�
n��E�D4��=H�Z�4w��sreX�Z�@���B�a@���J����ߞ����(���_L���PN����)����F����/��گ�E�x<����x<����x<����x���k�����    IEND�B`�
```

---

### `src-tauri/icons/Square150x150Logo.png`

```text
�PNG

   IHDR   �   �   <q�   	pHYs     ��   sRGB ���   gAMA  ���a  IDATx�]rG�3{Ffc��lk-a������X:�	N�8�	'��/�>X�ݵ���X����6�����tuewUO�" AHB��;3+�
 �@ �@ �@ K J�v{��>D�'�(����*�{o$��2������x-'�HH1����J��b�>߈����6���u�*E�&�Z%K�y� q��Q[D�uT:x�&1�GB/�#Ȳ!�,O	�-�u�HP�ܜ-�d���(�����:���Ka��z���7���B�J��ĵ0w�RO�����/,�5׭��+O�cz�m S[.[������:��Nf��<�b��c�^X-p}�kl���ӕ!��=����Za͑���r��Ja�(�#���31���_�Ώ���qhpF\����XH;����~���Y?P�;xU�9��X\+M��V	K(P��r���{
����~#��o<�j��HT���}�j2x }�*-�q5��h�����!XC��{��m�!n㷿lAx/��w
��Ƌ��w
6��O���`����GP3��kI�P5��8Ba�w���H0��h�Q]TG�x�]��@1�>�V�O��f��X�Z�*s�� �H�܄*d�;�>w�&��Xyj���bȚn�E"�_LՂ���s@��㍨��ZUi��i�*?�R�i�:�M��#�D5E[�J1n�e����V�v:�y<����TMrv.�e���X��*���0�6� ������g��ju�7�i����]RY���2�b��:)��l��H/��y�n(J��d�u��#��b�1N��CG?�5�/�����2%/��V�s#�w��F��/��>��I�my#�<h����E8�'�t��A��22���E'�E|
�/��K�Du�T��p	�Z Y�]#�ՅX�`�ߩ�A�����Zo9�4c�:���vi0hu��� t:l�Ŋ�u�&YYya��Ջ� �K=���C([�PjH���:a-=���)-`���|�l5&3��{��� 0t�	��-� ��1e��z��*8:���XDo�ɏ���kqQJ5X�H���$\��1���W��
2��:����w��$�'�:+�D�]r�`]\<�����:�J�?�xW+dA��t_��$*�A��{_�y٤�����8�H���<����+a-?�m}�U�G�����;������w�څ�,tx!�/��K?��*ć�w���d���`e{�:��������K~��j'煵����	N�(�/�q�'++V�Rr[��`���N�<1�l��V���&��:X�\�(�q�ک,���6�1�����RB��m�a7�=p�Ů����,���P|�-�NN�~
-�)aq��"��=ጰ��8��&�ll�'�%!*J��;F�A!Re1%��V�ƅ%g�f�w]��@��pl�N�w(��$�5�
���J�%�ml�y�<p��&��"X,�S�1ޞ�
AM��|����߮a���Vź��U���$-�2}�$HYT)�Tе�ڞ\zq�V��L2x@��&X�
j�z�2��%�X$���F�j��Z9�~eKTT�f�N��R;�'��e�1�[",�P Q�CU�J}�bm��+r'�����/Uq��\)�h6�� 2LQ���*�WQ*a�+u����2��J�6w�[P�#���Z�U�r�A�ƕF{h��kY(��C��L��Ď�7e?F�����^t+���&Q!��u��Yxs ��b~{܏u�b��s��u��A��;��
�cT�m���)Q1��nX�j�wwZ�N&����b�)�X0�c��ݟ�T�<Al�'ƪ�]��_�����A�S�[�*��ɿn\{�|��U/|����-���T���������k��BTX<��?��V���W	�$����gk!�{!��Zxy|ۤŘ] Y+�� q���ǭ���)���h47����F�V�/$���0S�:r1�U��CY(:�&�_���D��Ԑ�Z<����N�`�B����T���&kň	+Rp�$���sV��e7���P0������!D;�*z��\L�!,�w��e��<����{�����ƕ"o���� Sչ���\�^�E�"1���L��`��G?����O�TFZ��d��l/)�Qq��ދ>E\a��gd-/Jct��tW�uW^F�K�u.�\@�轢:�]|���p�O͈X,��*���:Z��L����m�T����&#˓oa�=����Fn;��,��L��EU�h~̢��ޞ�x'>��Z;���BsSw]�䱌�+�݌y�řEr�������nO�R֬�&ꭟ	aa�):�'`r��E���M��.�,�c��3틟��o�����A}����k@�1=0�ן�-��<�B���Fӷ���X�14��������@bl=Skg���N���):,,��؉:����_ �U�ӛ�%��;�b��_%A�+(���Pn�n�2�JaE�I����4}�;�<��:�4K/n��o�r'�6�j�EQ1B%������,Q�O8	,�u-�LX�����-�6+ T�)o�"�Y���
,ý��1�%_*��B:�"��哝DVSǗ�G��kb4 {�3�gKE,#d�T�o�r�Q�Cr��jezx������,ר�Ԛ��md,Vf�b{��n.�3���hv{�>�/�cAM�9v�NNݗ[Ϙ��*⚊����Ow1�]Uj����XPSD������$�@���	�� ����mQ�Owz1�ڤlbLbZ��)_b�����s�;m_~�/��=N�sWq�Ç[{F��$:Z�W�9���]� ʢ`M�F�,�m���4ƹ���xaatx��"_�	���0����SX#����n�V�$�"��7 ށט����d��e���͡5Y-�����	���NF�:���<A�+�'`��Z-=\K�;~��&��,��G�Z,v�K�����#��b�]bF��2=�Ċ�#�w���,�:�˗��"���w�����R�/��q����8!=4�Z�+�+�m~1�]�c�A��n�NY�=�7*2�돇D�������l��De��]�SL>�>0L=詘ΫO��پ�-�v[uj�aU�Z��*�z�X��W'⫵bj��d�z�}�JE��5/O�S����BUm�'��GZTX�j⑯֊?�ƨ��}v&��o4q�E蘪���2Q�E�/P�}��&�\b�m
��b^U��V�z�І��1��[9j�?�V�%���.N]p�\�Yx��^�p�Qј�5���)�t[z!x�M�Oy�1Iq�_��H�A7Ec�ҥ�W�{6W�%0�F�wH�`LՊkW�Ҙ���Ux��>-X�m�"�i����}�L�n�mTX̛|O�����]8�����b��B�^�o�V���{�ľF�!�:I��b��u>��=���#,�k��wj���XlDE�8!,�Vq�BKE�8��o���1f�5��\�Ţb��XS�zgP�#���\3�� ����\Ch���L��]T�s�$�ښ�����N���5�룓�M9�Yp^XS�~��$�x�'�����^l͋�:�7�b�,� \�]*�^	k���{AM�RXSr�}t �l�ER�W	 �A��ka����Q~ǬJ��mc}����>���"Z#���"�zy�z&�'���V�(�9J�ϟ1}�V
�4�?��S���1�(&��#6��N$d����|�!�@ �@ �@ �@ ��@W��/53]    IEND�B`�
```

---

### `src-tauri/icons/Square284x284Logo.png`

```text
�PNG

   IHDR       ��   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx��rE����eC�����a#6�?0V��'�|['�|�'�8��	�&l�F����Ab՜�fu��|Y�F�%[?��^V}?38f��%}���̗D                                                    �L ��¬���I�>_���qa�uY���%N��.X�KBůO�c��?F�;t�-2������Ә :8.���I�\读t�@�����u!�CJ�G��Ј�4������y�U,0!��F>�D�\%�d�U�Z����� ��̀y��Ⱦ���r��'�^₦�B��e�3dN2*���!A-8�W3Ir���65+dN2r�_ױ�
��by5�k�'ӣ�b�tU�]O��ɫ���+D����-�D�[[�A�D�M�5��/�$(�\جP��As��,w���+�� p��h~@��<8�-��ZE����W:.h��.�˥HE}�¦dz�1�my�p���P�4�O��97T8ચ��%�M�v�N�|�&ᇄ�4�A�s&�H����OZlu�0�L�#t�K��%���k66h�����Z�p"�%T�7��w��B�D"��æK`��-�n`��*N�-o,�⁾�1��1�7��-o�M\�~�<���a�	�7�!N�#8F�;�F�Y�z8!l�JV�>g�cL��FdD��j��1���1��]�������:�N��%����z]��l�Y����}j)�!Q�M.}�.TF�0ݨ��1�����ӛ�yu)>�"tZ�rǈ�BL���]P5�[���'
���|B�.�z��6n�#p(�("Z�l�*�+K�{ʇnF>�<����Yq]��h	,��B澥�9��3eZ+��Kv��1�gZN��|e�%���Ix��Q��犗���u�"�M���-j	N���Ň��`M�As���
���wy�ujNM��H��w�J���(<w\���\]��%����1�Ɏ�z4u�ǳBv�b�
���&�.��n�q�������.�S��.Uh��JA��;��v�����}ڗ,��%_���	�h\Z8܇QG�zf'_Z5�$2*�@����&��j0�(߰u.�a\7J�@��bb)�PK��64;a��Z4��Z�G���%U �RzK{����e��y����]+T8+N��i5�߸�3q��]��V�	`�߸��jI��]�y_��s�,�:�,A�]�5�T*�{T�MI��:u�K�F��P�T)o�aS"�E�����Т���p*Rcu���NU����_�+M�rP�T���*����N=[�M�rP�T��˙���}�J�-�{�G'��FT9�p�Щc\�6a��I
"�U*���Ի�!����C�\E_��)[���QqV�}��;W�W9�pJTyu���rC��\J�p7�>5�sƮ��+Ej��<Z݈P)�ͧ<T*yXJ��]Wu�\�.�1����#E�S"y���M��#T�O�[��3�K<��JF<�S�s
ӗ+�|�{T�.��*����=�%UY:|�޼��C&�MT1�/�V(ԮU�<�K�A�S�76��w�2�x�N��cl���w̿6�����A���Mj������qt���j9�f�z��C�2��֙�[�$�EK�z��j��p>ڭ<��U�pʠ�͋e�lR�-�8�'�c��r�,�Z�� p J���d�B`�QD�Á�|�+?�r��ʰ)M�ⵎ�)��"p�r����G,K$�@�?7�����d�/��(R��ⶾ�@���#�%E '��2��G~��o����κ�o�}.�����)��.x�(6�dɣ!E��1�;؛���G�)Yڽ:�J(��qt/Q�*�"���C4�8�Y�n�om�~:_�S%��{3:<��e��Y4*�-�"��`Ie��̥��P�L���t�P}���0��������4���w���^�N�eU��öxM4d��x{�������g6���;��O/��+2J��x%�˔z�{ۿ�i]����GN`s�wz>d��{o
�C���E���:���"t�eΐ������%U Z��<������|�Q�Lbr9�Q��͔6e�_^I�}��H "p*�"h���]j���3�%�p���gT\Z�3l���wD�HVe�,�Z�K���4n鴮�&4k��9oCh��ɼ�K��S�]�a�-��]}
@�Y|��C���Ԡ�b�Xݬ�9A{n��j?�X�U߃K�|�S��ow�4S,��8�gO��V9����*��]��;�'y�Ԡ)�p��Ս�~����·�1�Z��C�������t�}'�>o3�48	4W崬V7S?�O���j���sA�s�?��.�Xæb�K�>##��K��U����~��u�8T8g෹���<^>�9�ss;T��u���=e\��b�������☻d*�S�^ͥ�t�R`�B� ����� ���\#�]�t���2lI��b3ߤ�2%��1x�6�Mn�pb���<���[�5��G��&�8�7��z8'���^7�O]US_#�9�T�w)&���2�T8��~̈́�A�%�Qv�T�;�������dK p���گ��@Ռ.%_@���zb *��);Q�O������B؜J����I�sZ8�S�m�gD`N��~ؘj\�)V��R��(�6pb�lD3�S� �(bo�P��#�E�,��V�����
6Y�u�zk�{��E�Fh�~ڿ!�}�%6��x���MK��[J���黏�u���ݲ�/������D6M�o�<T����ߍ����F�af��e��g��Jx�l�R��?�5�3I&��ޚ�du���(�w�x�,V9"}^�l�*G��ñ��'��BՊ������h�ݪL�EB�Ȫ�l��ģ8�X	1{���d$��pAs����x.t6��ɺ��~�+�!*�NW7:p�o#��i�l�o����տű��:�h5a�����ͪ+��v��
�N�Ilb̄V5~�t��USC�/�W�ܠ����:Y��U�|ب������ת&�����6��a_��h?�եԟ�Xc�O���ѥ���}춹]��)U�q|?�����eDѿ	�0F�S�����O^�����W(M:��QQ�M�G!��'�OҸ��]�:�Rگ�Ф�K��)�W׫߽�E�˨B���R1�B��05Hq�x���ѰI%�ӹ�*�e�J�y��"�w���|mM���	�L���`�"Ш
ǅ�Zm��a�s�Ǧ���*�:�Eh�0��7�S��)��8NҘ
G��	O����q;QMn_���_��}��z������Eȸ%}i}F���׋�A�fY�k�(n�7&p���t�`uv��⻯�����0��ݩ��| fr%��V#.o�b�M,��d�k(�Yu�5W�Q �h�Ԕ'��ܸ�o��H�GA���W8um�K��]E����.]��ؙ����SGuôވ�P��H@��v����;������ ��Z�H\�)��*�}��I\�eE�.\ucy�ꉢ�p���;S��
��py���^�R�-�T�����)$���ݏ���o���,�aGD8��ެH�c�T\ȼ��6p�NR�ݱ7�a��2p.=?X:ɏ�u\[����"+��N�a�âa�I�l�xu�K8I�)$�M�Tt��Y�oF�	\�x�B.����~ F8�d��q��M�J�I�R��%��SY��E8,�B����Q�*n��~�h��Q�F8���[u���V޷�RP�k�x*�
'�B��㡺�����Q𧣵��~�"��ʂ��Au'ɛ�u<u��	���S���|��J�&�׈�FEsy� I8� 5=U��'4�
��Ⱦ���kn�\�g��9KƓ�g���+8�x
��T�hBu��	�D� 9Y����X�"˲?�J�ձ�n��O��ٟ����"����_�~6�'xE>��z\Q��Dy��8����O�\�DW�h%3�|rǥ�m�C�R;�||�&�g˴����gr�3[�Ϯ�4lzŎT��4/�֩A�x�!�0}}�"2���b^+�n�+<����p�Z��lj[F�o@��7�AE�X�7�p<�ba�4NB�ʾ��z�)��s�^7oַ��mSg���5�ZM��~ >� bYNi�fB�*޵���������6
Ă����>E|�w�ޔF�aql��x��d�ٛ�﮸$�6��i�%y�Bn�N�+��2k9g�m7��i$���/��iY�4l���gZ����;�PEs8�Ӽo�IT}ĳ08���\��d��7{��͔�u��rA3�P��w�j�̥Ԕ��q۽A��[�����S֝4쐧p�<hJ#��j�P9���ХԔ�s8��GBU��o�Ձ�u�.z,��q�d���-����Dx	���-�nQÙ�p�� �Q�Q�S�+dK/�~��|�𞱰Ѿ�j��RS4��4��dUO�wֺ�AM�o�N_ĔG�{��Kc�o߷i�����6H�����)��.Y�V���]ǽ���/���9�ug��&n��%�=�w�{A甤�?�A�_�83�uY!���_�L��e��*�}�������R���`D���c4�mz���-s?g���4Af\�H�۸�T�ƃ����38U[ܡJ9��b���ߧ��{o6.�fD-c:p�~����a�A�Ʃ^�����ֆ�28i��[�6�IC\�(/X٭�by��-����+Z1Ӂ#�$�7��oR}'���t��K]�cDf�J[��O���e�N��-M6�v��!qsa��e�f�h�H³,�wY�t�Ĵ�׆��Q��,��b���HUEдA�ڞ�Q�_RTD��,"l^����8i��S�y��u8u.E���F�2�C66'k}����s'}>�p<_>������)w��h]LW834Q����:�]�H<Jh���Y����z�����������YB~E��Q�Bs��L���maa�[�l|���[�Z:9ۥp�~	��hۍ_�T��`��8���$�S��~Evt)�>�P�c>p���?=���F�W��w�l�z<0�w�ZӪ�P�d�z��f�	�=i�-�.U�ow_AUs1�+� �Ô�QL��A��>��ꜭeW0�C�OL=4���\���z���{��]2�әU�LdL��ހ0��G�&�u4�tY"�N&�87<�r��+C�	�A��l�p�o��?8��38ӊF�4����ߥ
q���T]���n8�����U+�]t)5�����R�.A���9�f�[r��Ȱ�lr���;K6���M>��I�3�}��!h�18�=����=�q?쵅��8I醩m��Dzg�{��ڥ�u҃{�`"�ڐ��b,��G�:Zٸ^����?0y|߿G��%��om�Ռڻ�]��"	���G�ȸ��2�e�հ)��WE����Y��om���U3D�g���Kh����1�2�tg͕�T��b�=��:|�8:1��i�����'��,��������g��?���W(">��nʝ����]���~2E5 �n������q�L�{��M��+t��[�gq������F,A�h��+�C�$�oe�)2�2�Vw0X�L��䚼=�z����c�i�$z�@�	����~����	�O��]�m���A����&�����w�9���}��\4������t\������Z�4��"<Q�@��1��ðٚe���E5Ә)	5βÙCwI��ú��v��*p���dZ#h�iи�����D���
��c7Q崔~����Ӡ�<�o�L���G+���tY%�fw^��	O���i���n���ғ����7��јM�:E�->�������UlB_P�+'��xݪ�*]V�=��S�S���?p�7[�Ke���C�H5�
N�	J������	&��%�ݫ�_P������d��J�tò�� W=Jݒjj���ϕ����4�8��ʈ���U�	 =:'���t˩[����Q�lT:��0������:�).�~?��eA��ED��'e}�rb����E[��b�m��QY����m���"�{aN>κ�æ떻Bܥ��Y\�hG�Y	�]q�BqK+ˣ6�l�۝;���G��s��E.���0�٣������-b�C8>��N(��fQ�T#���G3`���Zu��#�'m���9�t;��Ya+�Q��[䁹�Y�;6���O�j�K�|7�!���p�BcZ{���M���^��=�n*���Ȥ�s,�9����aSÍ}T7�jD��^S-�Ւ�6B�\~G��� �n*�.�a��˙�I�Ҽ�xw%ay@5��T�Q�(?+GO�!?�<@�s1u���Է����p����W����?���Y�]]=�)ܙ
�1Δ��M��?1m�}�}���` lF���@�*���q��Jg��D�0��A-[߇�
C8��x�`P���O[�YE3�Uz]AO�>�w����H�TJȵ.����q?Th&�L���nT�a���5��j�FV8S&�VSXb�YBM1ɝ�O?�OL������7ͥs��K����s��΃Z�I�R�ht��o�$���k���t�s���GK����##�])�~� ���QsOvtYej��V;�M�7u�`1W��+
���6W6�hE�(S��C4x�Wa�)۲/�f��1��ԫ5��\��O���i�Y�Q�K-�A�?_<�S�V��$M��m��|,�0m%iv?����Q�|��#�p�ƀV��s������a,C�d�Z���˕��&�[�a��eq��\���SF_��z��JY6]!�)[Z8j��+Ż��q�.@L}��Y2�Q��/2���r�Q��F�����QQ��q4�|��Ϙ%���d��9K^,'xz��;�g�"����V��\P~(�dacK�G5.t ���Q�Aؘ��) t⇞�}�C��^~��x�84r�y�v�,��� �Y����}��y:qp_�����6�����,�{n�x��&܍����:�n'J��֏W��E�)h3�Y4�P\�\�f��7���甊��kXbՈec����B����(����pt�[����d�A԰KuF���o�ֹ�e��z�����f@�sz:Y�O��S>T5̈́�� �vJ�v�\ݽ���fB���OLftP��Gޢ�O�˿��d��B�������"I6��:�>����͇���;��w˧u�i��S���,Q�O*�<}f�5�74��	����<���}�h�����$��V�+�M��F��V�6�����z�L���[��%�8�c����Y�t[�G1���!o��1�;�v&YJRY��K�~�6oM.��!��������_>r��?J��By�w$�Äx(I6D��y!p"�˰�2���IW8u!�t]B̺��,��w��'��cT]5v�4}<�e�P6J�d�u:ý����                                                        ���DG�B��ߕ    IEND�B`�
```

---

### `src-tauri/icons/Square30x30Logo.png`

```text
�PNG

   IHDR         ;0��   	pHYs     ��   sRGB ���   gAMA  ���a  IDATx�VKr�@�F^���� ����W�l|r���>��'0���`/��M�U*ʓh��"�ӣ� $��W%`fz���n��A��_u~�pJ��5)����LX�@>��Z�q��� �-b�;���~	S<��W�)1����M&h»G��`,3�HRL~�G^���ہ
ބC�gL<��3m���
�Y��W�*�]r�C*�k=�9�'4e�j`�m�/�O>�AI�}��ߎ�M�.}����l��D�a+A�cE��BYkq����3q��+Lum��S{�?q�cu��c�J>�;��@Q�0��W��I�xC@o�U� +ul������>]�9�}�_1��hLH��	\���Y!���X�����@]j,�{�M�J2����Nꌍ��Jsd+�JWR"ܳ��W"�L�@/Ӈ�>�BC�K���L��&]_-Q'
<�����H��9Cu��av���%���㚙A�R��Ǳ��3��ʳǉ�����IGi�Е������&�]#���;,E�#=��_.O�酬����/$\*g{�b�"��K�c<����-��:�l��9���R4vl�o8�xq��գ���e5��FP��^퓅� �f�J"T>�xx���a6�9bgqT�s���k�rK��� �rQ��l���s K=-)��ڪ�}-�j��$�4 �+�<�%�5d&�fΏj=؄8&'~�r����7��2gͽk(��?��/��Z���	�[��yo�oJ���iv�MC�<O'��)R�����o�sefV~$�    IEND�B`�
```

---

### `src-tauri/icons/Square310x310Logo.png`

```text
�PNG

   IHDR  6  6   뼾�   	pHYs     ��   sRGB ���   gAMA  ���a  !$IDATx��nTG��S��$�M�� �`�<i$�H/!��
0+���
ܬ�f�଀�HĐ?�Fz��`3� ���ý��:uo3���������H�&a&N����:��                                                                *�@$��t�~)~%�G2�|?n�ɸ��T|=�������{������������j�ޕ֦Fr���ek��@�g_�{��ߣ,߰��#��#eCL*�i[�]'c�6��t\�Ξ}'�ʰ����g�n�@-����c�l���b�����n����Ca�L��wl̑�a�/}�][�=�!�%��.��̒��<U/̎3�����`�sqsf	͗��6�[�>"�r��'��Τ�d�~w�4Ι��1k��{����NTΝ�۹���Z��b..,�4����IW5��0l�h�6�VhC�����Ck$+r���B�����Z.������<ZbQ}֠Ţ/�D�l�1�H �j��H���ކ�V36���*��8�Q��C�`��r.�SΥAl���"���@�� ����c�m8�J�o�l�=%��-[k���Cp)��*�h�*�i�@���{����� �*�8NUZ��p��H無hŔ�i[�P���ڲ���� �*��|�rTIbV0�v>�VD���e��2f����}�S!�* �V#Ƭ�p[$8�M9ޘY�_�	�D:��qE��l�!�j�v�R5�=b�s_�_���0M�&uj� ܎�$P�Ω��W�Us���k?n�k�rzIW�o��֯��,N�n�w6�6K�MS�L�]����bS�B���z��cz��K��ef��{����ƴ�

�@�)�>Ԥ"+�l����A(�n�:���|���[|K�B��*��b
��[��}[����c��_:6��Q�6)=���g��f�q�\�6�H^��G����ζ:Kd�Gg��C�6ऊ�0�WvJk�q����[-ڹc��������N���Z�~n}�)[��eq�-Sm��<P�-P�um�|�j
������.KE�ոS�`�P9��Kq�+��H �Ղ}�d	N�bTI�T38�-FE� >R��<�P�7knH��<q�5�`�Ly�`��"Uڒi�j=!}yL�c�hNV��).��5��hD�c�c��j�a;W��)&��q�6�2#�"�Ҏ��y�G�oL�y7ӡx�i��|@a(�$�;Z� ��+����y�R%Q<j5$E��Ⱥ��|��E��	��U\�N��-�̫�qjC�6I�4����x%��`̭���Ӽ_���r�!s�Z�[y�I�a(PD���� ���Tl!%�!�j#�ʭ�Tl�D�0�7DS�Ux�*�PI�#�s^D��w�r���a*{�6*� ��ܒ��(��&��P���Z��1p�zoE�6Tl�EP����oL�ط��R���oa�5�۹K��P�Ni�6Tl��j��F��!� ��P���_m��uw�!/��9Y�i�	���S��BI�U*6�xcF��Ob��W�)z��֯j�_f�:�M�4NT�4�&�v�1�������b9m`Ze�hH:^�!W5�͗������72c�u��NdHj���a�t�BW"�0���M�"��mU�=���-Φ"MTl~�O�38(wCR���&B��C���	��rZ�*��p�@��J4P���;�p��[�i�2� @uG�������4-�5�%�l��������u���P���d��Vm]�U�q��.)����a�m��`�O ����QTl�Vt�0܄	T���bKՈ!��Ҳ [��o�B�D�\W���-�Usl��[�\�n9�W}��7����FhRK��cD���w��u�QnS1�s��#�{i�T�H�o����l�	l�{���7��یV�&�v��L��H
a��BZ[��S�^�V�DKͽyey���\�	��<��v(7O�e��|2z��P�)���m���vn�ل�6�i1����T}ʺaV#Y����������!j9��y��4R:φ`Sfrs�-�x�<'A��H���ݔ���T���E~�sG~��!��4>VX��� �(7dx\�u�#>�l����5=������
�e��f��f��i#�����Q��@��pf��i��.)a��c��v$^�?���~t(�b��9[[Dd�l?�g�eҶ}�0;������}�V��;�'_Cw&����h$�l��i��vm�ɧq�. ��M�����Bm�����%R�}~���/ITl�p�3���B1ev�K�ן��z_jyD�#�MbV���Ss$vN/��$Kզ�3�`�͟���͗
�������߷/��\n3J-�O��K�Pԣo6w[S�w��7x����t)b64��~�����W����-R���`-5��C�"�$ۏv�PA#�W;�锛��'�d�����i{I���s4���o������qY��DA �`�'_�i�2��z�;=�|��}�W�:�Q���}�Q1�sdGGq�H��>�-R�6d2��|g��y��Nx�;T�1�U̵�^����!�!�n��~�e���1b��Fߩ���w��9׶��6$2�&�N�h�gL�O�����ٟY�pTò�`l�$K8>̥b�ǉ�sp'w(�8�_f�}�]�k��v	2�L)�9�v$�~������^�H��V��`� Y��ښ�Ox����,�3k�V
�n�몼����	o߯��h&�w��*�Źr�͐v�y��̳�v2���K���3��\4�e�S��1b�3�P�L�C�s��X�lz��`;�E`�O�M�����jsg��,�&�B�� l'�PK?B�]��a��j!؎�!���r�[�q���?���c!؎�P��O9��}L�����`;�ꋿ�i��_��e9�_/��"8�� �~���Jmx$tG#e��3�s��1l%Y�����H�E�m��9��۟=���E>]1�n�;��,��jL�t�M��{�sHT��^_������D�~f�Y�s�.�k?�:;�MEA��=���4����!����)�j_�5����P�?�Zb�靛S�U���U҂y���.v-�O�ԺbsG�>��$�2�����>i$PBK��jcz@�<9���G�m�v�6��uSN'^߼��6�HQզ�Z� �w�P-+��Y��#=���\}��-��3)���w�U_K�V^����2���R��D;�f���g��T*Ԩ��r^�hqGM����rc�Ul��r^m�bc�g2�ٹ1��?3S�S1lptm�ݧ��P��=&-�%��-��
6�F9�fx5�����[�*�?ц۪	ły݆����^�=�S�X���cs�pc"l4��ݵJ;O#A��%�,QX=�D<<�T9��o(ʬ�ö6�A��W�Cϔ��ͥ����A+7�������缼6�����Z[lCPC�&CO�K8���̹�9�voQa�5��k:N9�D-�-5i<'vخ綬K�h��ܜ[��gIA�>�m}sj��Ɨң�*lS��(�M��P��'�Gd���ݚ(���i��ܰ7��Öڡ��_�P�~Me�@T:�d�;�$�!(B�T�M��!��3i=�	��T=j$w�'��Q�h�m��&����s���_�l�2��l1͑9�殛�6f]suv�;X�y�|2��ȩ���r���t�BC������}��>�r#z����S}Uv�߾@��;W,Cw�C�������@!!�`HxcF>�[�O1�T%���1��C�Wj0�Zk���dH�X%�-3Y؆���΍k���<���_���՚9���]�����3R�x�\����2�j�� ��`���jo�T*�BWk�x	���Z3�F�U*�BVkr/���k��nz4-.��GR�jC�6 �jr�
I�j���A�Z���<�=���%2I��Z� �%1a�T��L�Ɖ	r��A_ߘ�s�4D��2s�M���S?����w��^G6���!(��&&�ܚ�E�U�b˳0�'��.(U�0hQZ.�>��E��4�e
��A9�r%M�E���`��bg.H��6`H�AEb֨B�[����=*�54`��H��ѫ��uB}��B��5"���c?-��RŨ>�M����	y䪵��ԞSqq�$��k���Gu�b�j���W|�Z��]GH�P�Man��5�]��֩�l�֫��Ym�ɢ\��P;n��v�]�R�Z���f�&���s�7bS�YeO�hm�ɻ鄛_��?�"Lο2�~�y�ן��EϗM�ək�jVkBm�1徻��*�2�;W���y�8��M�L:N���*�G�=��~JW�����]۴y���T��������1-R����L�a�ž�ר&7��v����pQ���q4���~� !g����i�����+�P��.���\��ޜ���~��O����09]X��	�2L-+��'�
5�0��oW=�T6�I��_�Cm������Q��8C˶�ە�:�����j$�q�jBe��!T�<��P��P�G�|���>�+4v��\Ӥ����7�G���@�w���z��=�.���������sl?���rF˓ϷW��x�ۥ�B�dJ5�n�M�۝�����ܜR��(�Ӟ;*�d���^ߜ�t���b>Mv�p�3��[���-u[�m�w��p��%Ԅ�.ԩr+��[�����@u��q�l~-M�'1��K�?�m�*.ʡga�NC�u��&o�G�؛������X�o$��D���J���@c�LC��<��֠z����7.��,�!�L�S�lg�Qkk+�7���\���V��3�Yj'���5��/،�OE�'%d^�"斂��"���)���ΥԷ�{�j
�I�h�,�<rZ�\��e+�1���rwAm,P�WT�z�~J�0�62re��}�f���jSӡ+�oм���"r^���A�*���~_XI��+EN&�UTkJ��r�S9��	�"\�������8K�}.)޾���+6c�<k��l����B����"�� h�{EC@����j�֫GU�f|V&L*�'���uIF�=�U��G��<�9۫m��0]���#���qP���&�c��5N���cz��U�v����K����Ca��S��'����������ֹz�&�
kXæq�Tʛ��>S�4D-��]sllZ�f�^Ku"Cy�[N�w�K��b;�1ܧ�Ÿ/�L+\B�6�hZ{�B�tzo���o6���"ѫ�V��B�h 'u�{�:��20U�o��N���� ؎�`�+�C�i³�//`���!؎��k�(��#ڮsB�v����|������z�ȣ`ب�h栈��
���ܵ�6c�j����<8���l�N�(d��z�D�`�%;�V�㼇I�΃���
�p�Y��Ey���׏��aL���*��w�؎a�y�ϱIg�V�}��P���y�U=�K���N��q'��Fʘ�]��~�����-�a��p�
�&�}�h�_c-�\z��m�ҍ�dbw����M�qt\�����Щ
�����S-�u>��L����)y�٢Qt<g{P����`�7��E���sH�38mC����d��Z4:Ű���v�5|.Je�"���*C�����g͉��	;�Ql^�*:��ε=��Cjx�Ս�c]�V0C� ̣M`����������_�2Lg6Qn��!hz������� ��"�2�0������"]���ۤ���S]�%�+ؘ�2�n�gf�~�ێh�.����[��%�����`kP�%��]��ssjվ�:	�At;�]%t���[\;h
`-��M���r��Gع1� x��J��YؾuM�jzc��<Kuf�p�>->��|���ub��v9�S�>N��g�g2��dtWK��������?䆚��c3��t����/؊e ]RF*��/v^&��0��ѵsj��o�:�}��۳a������#�L��f�m^�ayS̳�<������o6���Lcن���zÝ����N�H���+�2	�lH�M�P���d���Qv�����+-��i��WӜ��!6Dl�يv5���a����/ͭ-��-|Le����v=���I�
�z�jڶ��1�	��&/��eߧ�@��Rl;�X:S����6�D3���,I�W��IC映sAFIϐ�R�m��vB-���W�bxD>)펞���ڇ�P?j����;��O#��;7�n DM����#�K0�N��;�w8;���{p	���m���l9��ʒ��68/�:��֙��������`��|�g�ٮ!�68�A�5�f����L��M��m�_��}Tmp
nN>�y�\e��ߗ}�;�Ma����	^���{�R���L��}A�N��tɾ>doq[b�]��S������O�����rs���D���$��޾��#�7k���M�?���U��b#I�d���I�M��a�k�����m6m��qZ�{5?*Q�C ��e��^5ٍPw���Ƭ� �)�tr�f��VF%�ML��~bC��i�L��}�3�^-���֘�����F^W���d�K)�QqLzTb(����ƴ�`3�-4ts!F�ۜ���  9���2��>����φ��7j�T�b����Qs�b�zߢ��m�}�lZ��Ӕ'-S)�����N�fq��j��M�I#��-I#���:�0��jv��<ir[y�E���~��A��{�G�7XTI�DG����O��"I<�!�E���Ix��i���h|c�Ϙ�
;¨\��W�CUm���/���.�*�P�L�4�2��t��\��s��Vmd��t��JM*�Ƿ(�ְn-��E)��m�a+�[8W��ȇ[�BB�L%�M�6Cy�ue�Lp�S@��yΠ͂B�Z8�6����5�.A��N�? �<r�9&(���E�`*lN�n 6�7?b	5;���ukaU:�ʝ ]
mn�s�XBMd�U�bmͪ]�YM�l$�pCCa4b
5�stP��W���Ǚ|��l���;��q@�pLm�Z+y�-�ym� �Z��z�j׆J�b���I������"�o�$}�N�Db��W7�~I\凢�&�.��q��l����g��nGAD�F�Wj�M��F���;>a�&�o?����M���čt+䎂�d�^����f(*ܙ\�﷢��d��0/�<�����S9=�M�I����q�M�&�>�l�n]�d!���S[��`�ۧ�Pw�E��f����Ԫb��d�;��$R�ɛ�q�AqX�"�.h�jlBn�/�h����q�A��|�x�̽�G�@B-��6֬ũ���|�au89�L�Ss�(l�X�����f󯭔ƶb�
���㔚kU�������]�j	�qd^�����u�	��"R�J\Q5����j)�
����Sw	�V�`1m�:�u;z�q8$l9I�b�C;��W��w�D� ��d�M�AK���u�,�}�Z���N2�ΘriشI4tA����!����Ű�w�٫ij4f��� BM�n���4�=��#�Ⱥ��F�y��(�ȇ��m���ӆiN�0�XL{&��1W��)�!Z��\��0ܓ#�'}��mڶ���Y����[oRڒ���/�M+��]�ǋ��C+�dHfO��f=�?c�*�Z>$�Y��lǨu�BM�Zm�?��ى↝0�C�>A}�!�5�P����8�����IL�4o�� L W�,�@�U*�sP�CN�ujՃ����g�`����&�P�Tlp���\��
:��^ݹq�>A� �.�A�&�����k	*	�v	e�tY�������$��hT�mܙn��Tbod�١�\��c���6$�4ޤ���P�E�I��=���`2,	�N7�t]�zA�����L3�k�j�Uif	[��	�6BōK��Ωg�K�=ۈ��B$�F�K	nf�7�ё%d���0�`�l���Y�]s�Mp9v�Vhv���!��p�-�% ����$�L������������1N�`��`�~[ًQ.M8[dZ[[�co�0���S����p3�|�Ս�_�9 �"Vl�jܓ;:kQ������P��e ؔ�[չI��3�J�G=f�؛��;�a@�)����f��!�}��*�-.n6��`lPtV�i�5lʧ���\���'��5�l�*�QC�U�4 �￸.a�O�����+N���)��M�	q���Xw�ۯ~% �l5�:���C����[6�Z�����j_6��:,��1���$����[�ϒd/yǿ����                                                                 �?Z�K�ћ    IEND�B`�
```

---

### `src-tauri/icons/Square44x44Logo.png`

```text
�PNG

   IHDR   ,   ,   �Z   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx�X]��F�XW*�T�A��l%Uy�<ػ�*'{�	�'@{�]�`��>���:Fy���r��*'e��:�x��F ���?CO�G�����="�	��j�ފ��sѴ�#�JX4�B� �
wdװ�7���ȏ �F�?X�څ8I\��Dݾ�ؙ0E����>V!��O^=��v���>���II,)Eְ!��69^��H!�ү��J��T)D]"�Q�T��O�	�;�8���d%ѳM�ҦQ�Oi�E��\�i�-x���:��?=��vhhN�kD���1 ��� �MK�������w`Y�M�a�n�f�������ŀ�5V{a�rY����t-I`�#��ԆTh���N�s�Di2+Vn�to��7/�h%��Bb��e��3�D�D�1>WF������N��ޟ!���w���g �+�ke�#�Q]�:�Q-,<^��׸�<NX�7eJ[WSE[޷"�����/�!&T4�V˶�L�쀍�9�K�X����E>��&�\�d2NZ���6�����w��J��.[G��a��SHFt�	�5v��T���*�,����"�����j�����#L�ch[0��Su�r3���vBC��qec����b\7�^�]�,x���F�ʱ&�z	mJ�p�? "?pO�s�lyc,�6���nzR���B�6��S�M��¨C$���$3�t���Ҝ���sF�-��mRDT�$u|)�ehSBU�_��� �s`�a��F��eɞ�jI�������B�y�}l�2��>�y��C��?M�%Oq��Y���A6>�󜻍yJJ7����ϯU�a٦'�&��/�=,�>�eٰO����+�Ƹ�v���J���4�R���(�[Rk3�I,}kP�~�A9�i�Fi2)��u3���"sC�Z²���7� �m56ݯ���>=_k��2�2Ci~M�9t� �����An���6��Pa�t��!#RU�D?�������2�䏴��d%�aAl<��t�+:�"��'e7m.?~nO��0��M�V�f>l�O�KP�?x�<>�(J��xr�U� ���~Sח셰�(����7t�\��H��h�#Y�?�1��!� Fܞ�B���"���%I���'Z���3�r�����E�\\��T��#4q�ލ�YH�vU��5P�}�)+�=��?�T�f>12    IEND�B`�
```

---

### `src-tauri/icons/Square71x71Logo.png`

```text
�PNG

   IHDR   G   G   U�Z   	pHYs     ��   sRGB ���   gAMA  ���a  pIDATx�]n�F�gi9�G��Be#}���|4@,���	�� �	,� �	�� �	,h�T�S�H�����Img��*�K�,��@? �MQK�ϙٙ���9s�̙s�pM�;�K��
����{i�c��C�����z�
���AQj� 6A�0��HG@�j�X�%ԕ�#w�6��&��'�������Cf.��O��_}pK��7�Z�8b�⠵4G�RBlC4�r�j3G�V[��fC C����f"��04+��Ż;��V.�U���.��6�|n>Q�15!��\B���ᗮ�Pu0�	���
�cH	�l�0v�$�4�$DK<��d�0q��{�0�����
�]G��f��|��o�%ŉ�[%a����G��׊Ď�ze[�� �f�0#a�8&�\G�~Ssܻ@!��S��5ɆKaƌz�]�g4F����l��j(�b\A��� jݲ��"��2)�X[��#wW_�rx5������:�@g%�X딁�{q��\�2v����[cΤ��x��8w+��;�K��^�PŎ�]-�����G9;f��&��`RL@�� ��~o�4���w8��KI��:=�J&=����{�87n*%p�R:	p=��|�	�5ʨ�j0c��q0���]:�g,�ZN�C�Q:��^�{��{˻i��-��ΐPS=!q;U�L�X���AHO�Fw		���~���	n�?A�qv��[��{�~4�vd��Br��E��C.�R�F���t-��)��a�.��T�m�
$D�qV���BfqB�6
#�~�o��`�ؖ��#i�c��ή�8.��I��C���E����X�Xwma�C�}�t��[��q��9Ղeam9�Nj�N�)ٍn~��
3��Z��E�8O��cx������Lxx�8�M���3��D7���j��
h�K+km)V����%����`�ѷ>1��V��?pŤt!��r+�J�����C*A�r&�lݪ�;H��g�HE�bMZ	b�R�r��8u�	���Tv�#���	'H�|��`M?5����
��9��A`�.� ��~@���}�:��`
~��95R0_D���@k�TQ�א�Ѯ�4a@��eX�#��8~�60E�2-��q�?z�4ͫ�f�0�N��6����9M��E�hO��w:�8$��}7эk��N/ #��]�l���$�W�� c�-s;BJ�[ƾL�g����_~�{���!�L���t]��a��)wrgv�ə�_jQ�(�C��z��A�:��Ï�B��Ƀ{+�^�Z���,��옃�I����?\n���V#Z`�bLW�e��lq��!A�g!$�Yz�$0�����͉�8����%
���XzfW����%/w��n�MA�`	�@Q�ѡ�D��f�j�U��i��U�����5(<]c�ϩ���..�h�W�>�K�C��W������	����������TU>|j���Ye����5��dj��
bO���+��l�>�	,a'�@PSs��S�j��]�'U�1V�CP-���u`꿀�Xԧǌ�ݦ^5�b�ֵUx���w��)Ƚ\�jgE���Ұ'�����Z��s��lڵ�fH�$� W��� <M�mo���[SݠɅ-�84v#H[b��S���Pp^�u���4$�,oFeD�x'g��jgL`k��Q� ׆IjeDba�#��b��R^t�&�p�c�!�h1��?��w�Z�!�]'{I��R����b��&	_�1��p�yy�s=-�A[D�E��	Yq�I��,�JO1 �s��⓷]Tc�<�",�|ϟ}Ơ��g�	�;��ES�8ӐP��[w�6Yl��s�C�������ݫdΜ9s�������h���z�    IEND�B`�
```

---

### `src-tauri/icons/Square89x89Logo.png`

```text
�PNG

   IHDR   Y   Y   U��   	pHYs     ��   sRGB ���   gAMA  ���a  	9IDATx��NY�ϝ�Md��A��&���Ǣ1���O`}��'�>��'��bb����Y�a|�ɚ��s�����3�ܹ3S��I���Ιsϯ[����������+��+n����ٯ��Sĕ9��	��H?��N�G���.��C��� �^d�	��!j��W����-}jE&q[��� .�F���y�=u"��u��r�E��H�d�Ԉ�\�i�OB�x��s�1"��.Y�k��z'�^��mȀ�E&���.����*X�P�#���<jP��A��#����I��`��D�\�>�q��-���z��y��m,��&��H��B"r$0[����Tܠ��I$�c��k�?ʞ�.F䷍mJ.���Y\+aVh��݋�㲍�#w�q�~��]�X�ѫk���;`�0T��jEc9�w��8W�~؋�ȃ�^�N��n'.�q8�'�-�p���{AR�"�Yh
r9�b��'�\	�����t��D��Њ/�ò}u��փ!�W�ivc�&�ƚ���8�u�b]��#|N{�Q����p1&����-��ĺY���N�7y��X2��v~��]|�V�&m�ag����t��	��pB����d����3n>\H^�|)�wԳ�,!��k]�c)�Y�����pfw߬��ÛȚ'��`@����U��+J�3�/bt�8|��v�S3k4
q���by����B���G��^�u�d��.��X`
�"�y�K˃"T���GA�kqAH�"�����oՐB$|zaA�:�#JHh���8f����������͙�Ѿ���)�X1_$DHʛ�~�#X&3�I�6Y�6��+��3�"�����!�D�݃*x���|�� �A������[TqX�孋��wH֫[�'�D_�ʔ� ���j�V`�]��@����R�c��D!�7Vx Ě��Q)-ѥ��<|p���1�I
�Y��y7��w��ɂ[�j-�h���?�-���*p�ER9T����W !i�`�AHj�9� ��
�1��U,X�miu4���`���nj�Gj����]�+��;�^��z�:�E{�. qJ��g�H]p�A��ֱ���H|o"# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

��u�!���2W���T+�3z���l0 ]����
|����J��VR�-0��]�Cr���/�^�U����x��2c�UR�Fյ!��e�����`�D��Z�/v`�{��W�p./�;�H��ӧq�����,>-j p���/�T�y�6>�,��1tM�����訛
��IkJ��Ò\oNaŌitь��3�&�&8����&�����)��=�R>-.X�;��y�r�F\8zt�B����U|zpg����$מɢȪې�p�S��Щ�X���dj�Ƨ��DY_4-��'_����`Ht|��J�
Y>�acVD,�JCس����%���}g�����h�۶�
�E�)��(�,_��T0%BZ`����=�<�N|��z�O9���(�vA�K�k��_�,
��;����F�D�
�D&n��g���i���'����{�h^H\!Τ�eݒ%V�5���z E	&+U��	ô�f�х���Q��@�X�z�(��ʤ�3:,al%����]$�I�����~`x��r���}6.	ş$ �b;)��KĖ<���^u�(J�eTp���6��upv{l�A�2��y��H7����Z²��sw�/J�+<�ٺ�tt�~Z�Eԙf��	U�w;kE�o�֓�+�MS0��>�V�)�A��{i��Ӏ�Ȼ-ڰ&�����w�Fg:+�a�zVeԳ�p��3[L�R�귟���-8%_x�^=%�la|�!�e�5C��=���@����xS�%&%YS�3>D|ŧ�'.`k�!��OJn��[��'���d��4��Tr"������ �v	�wGu����Q'}>�Fo��Z��E��`�>�����u�:r�<;�D杙n�N���f�鰰/�(ׁ�����3����z�p2�}0:�-,���<H*�<����SڹoS�k�����4l�6/=�v���E�O5Y��ؓ?������دL��jn])Ԫ�n���F	�5���ԓ�HCh�
�x䕋O\0�l�K�ڌ� �l�M����Ƭ�̘}�Ɲ-�rwљӵ�)Z`ƺ�����V�`�A`&�Fj�Ɵ�ӆb�N��L&�<��1�o7������D2	�ȁ���7 �j��i��Ԓ���� �lOkq?7�Ǆb_{0ZI�F��J������I�"���g6)Ds�*����N�*�^��T�"_���?��ƹC�G�o�-))))))))�_��QFz=���    IEND�B`�
```

---

### `src-tauri/icons/StoreLogo.png`

```text
�PNG

   IHDR   2   2   ?��   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx�YmN#G�j{��r���n�H�WJX�� '�{��	 ' N ��f�l"��W���''��F|x�R5c�=�M~�I����{�uuU�j �c�T.8�ႂ����4���ZF�'!��� i�I���S��=&���9:������)�
ģA	��Hh���`8�m&s�e�H��~���_�c�Ԋފb���.��)14���
z�p:��W��yl�<��
6��5�^���1���D޿��D%M�G%9��9ʅo����j�1+�񙡈tp�����2�s<O�kzW(�\I�`D�_Rf�p��{�Ӂ�$ݤ�	�q�#!���B��1h��#�۰�XLd�_P�;�(@�}^�VOc�+5Ә���ڜ��Fǎ| V!
��-u��k�١�����$�V��ܺvaQ�ߏ5��'LQ�΋��s|�Stk�����E}7�7���t��{.�}$ \dN���� �!#^_4��j�p4)HHy|�B��U�i��H,�����~[�@&��}h��W#)A�Lч�KmO şRK���,��'$h)
�`�4 N�T��+��*�TD�������ӟ^]i ����,�ǀ~����T>�$v��n�ߞ�a��4o��0ɱï��c��p�g?�DX�H���ˋ.���<����o=H��蛦�����+���H�w��'�A��v���dDj��ͮ�! �X���o ���l����T5� 5\��d-�$��1X��)��*
%��o���n,�U �D�}�?I�%��Z���XK����ѹg.����|��7�Ȫ��"
��1�5	�7RI�czR$˔�����q�v�Uc2�R��؁���\�mH;�XD2�rD�ж3�g�/�}+��%���l�2�L%@������N<��e�4:k=�� %�+u;����*�;�hLf�ê7#	����w��Y)�c�j�c�ۻ�T+,��Zf�T�Z��xD�'�m�	D��X�
@|P, �~@�C����ُ�~�nw[{��7^�h<F3��W1��j�O�}l{v��K�1����$���sg�q I4w����AUCb�>{Y���v��)?�-N{0D�"���z_���
�Əs��$F-$�ۡ�$�I����}!!�zP�D"���#��t�I��߽(�����S�9�5��H����������F�9�f/'����fJ��ך��T�Pzh�pߑ�λ}�Q	��\�%}�L���|�D�:]8�[��ch=t��2���/+�љo�(���~�"_LG�_�G�g�2��c�/$��d�D'����«L#L�Pw����x��p\AP�O��Gv?�K}U �"�ի ���s�I�1�C� �r1���    IEND�B`�
```

---

### `src-tauri/src/autostart.rs`

```rust
use std::fs;

#[tauri::command]
pub async fn enable_autostart() -> Result<String, String> {
    let exe_path = std::env::current_exe().map_err(|e| e.to_string())?;
    let desktop_entry = format!(
        "[Desktop Entry]\n\
         Type=Application\n\
         Name=MCP Manager\n\
         Exec={} --minimized\n\
         Hidden=false\n\
         NoDisplay=false\n\
         X-GNOME-Autostart-enabled=true\n",
        exe_path.display()
    );
    
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    fs::create_dir_all(&autostart_dir).map_err(|e| e.to_string())?;
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    fs::write(desktop_file, desktop_entry).map_err(|e| e.to_string())?;
    
    Ok("Autostart enabled".to_string())
}

#[tauri::command]
pub async fn disable_autostart() -> Result<String, String> {
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    
    if desktop_file.exists() {
        fs::remove_file(desktop_file).map_err(|e| e.to_string())?;
    }
    
    Ok("Autostart disabled".to_string())
}

#[tauri::command]
pub async fn is_autostart_enabled() -> Result<bool, String> {
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    
    Ok(desktop_file.exists())
}

pub fn should_start_minimized() -> bool {
    std::env::args().any(|arg| arg == "--minimized")
}
```

---

### `src-tauri/src/lib.rs`

```rust
mod mcp_server;
mod tray;
mod autostart;

use tauri::Manager;
use std::sync::Mutex;
use std::collections::HashMap;

pub struct AppState {
    servers: Mutex<HashMap<String, mcp_server::McpServer>>,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(AppState {
            servers: Mutex::new(HashMap::new()),
        })
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();
            tray::create_tray(app)?;

            // CARREGAR DADOS SALVOS DO DISCO
            let initial_servers = mcp_server::load_servers(app.handle());
            let state = app.state::<AppState>();
            *state.servers.lock().unwrap() = initial_servers;

            if autostart::should_start_minimized() {
                window.hide()?;
            }
            Ok(())
        })
        .on_window_event(|window, event| {
            if let tauri::WindowEvent::CloseRequested { api, .. } = event {
                window.hide().unwrap();
                api.prevent_close();
            }
        })
        .invoke_handler(tauri::generate_handler![
            mcp_server::start_server,
            mcp_server::stop_server,
            mcp_server::restart_server,
            mcp_server::get_server_status,
            mcp_server::get_all_servers,
            mcp_server::get_server_config,  // ← ADICIONAR ISSO
            mcp_server::add_server,
            mcp_server::update_server,
            mcp_server::remove_server,
            mcp_server::get_server_logs,
            autostart::enable_autostart,
            autostart::disable_autostart,
            autostart::is_autostart_enabled,
        ])
        .build(tauri::generate_context!())
        .expect("error while building tauri application")
        .run(|_app_handle, _event| {});
}
```

---

### `src-tauri/src/main.rs`

```rust
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    mcp_manager_lib::run();
}
```

---

### `src-tauri/src/mcp_server.rs`

```rust
use serde::{Deserialize, Serialize};
use std::process::{Command, Child, Stdio};
use std::sync::{Arc, Mutex};
use std::io::{BufRead, BufReader};
use std::thread;
use std::collections::HashMap;
use std::path::PathBuf;
use tauri::{State, Manager};
use crate::AppState;
use std::env;

// ============================================================
// PERSISTÊNCIA EM DISCO
// ============================================================

fn get_config_path(app: &tauri::AppHandle) -> Result<PathBuf, String> {
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir.join("servers_config.json"))
}

pub fn save_servers(app: &tauri::AppHandle, servers: &HashMap<String, McpServer>) -> Result<(), String> {
    let path = get_config_path(app)?;
    let configs: Vec<McpServerConfig> = servers.values().map(|s| s.config.clone()).collect();
    let json = serde_json::to_string_pretty(&configs).map_err(|e| e.to_string())?;
    std::fs::write(path, json).map_err(|e| e.to_string())?;
    Ok(())
}

pub fn load_servers(app: &tauri::AppHandle) -> HashMap<String, McpServer> {
    let mut map = HashMap::new();
    if let Ok(path) = get_config_path(app) {
        if path.exists() {
            if let Ok(data) = std::fs::read_to_string(path) {
                if let Ok(configs) = serde_json::from_str::<Vec<McpServerConfig>>(&data) {
                    for config in configs {
                        map.insert(config.id.clone(), McpServer {
                            config,
                            process: None,
                            container_id: None,
                            logs: Arc::new(Mutex::new(Vec::new())),
                            started_at: None,
                        });
                    }
                }
            }
        }
    }
    map
}

// ============================================================
// UTILS
// ============================================================

/// Obtém o caminho home do usuário atual de forma dinâmica
fn get_home_dir() -> String {
    env::var("HOME").unwrap_or_else(|_| "/home/user".to_string())
}

/// Substitui placeholders de caminho no template
fn resolve_path_template(template: &str) -> String {
    let home = get_home_dir();
    template.replace("/home/user", &home).replace("$HOME", &home)
}

// ============================================================
// STRUCTS (com camelCase para o frontend)
// ============================================================

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DockerConfig {
    pub image: String,
    pub volumes: Vec<String>,
    pub env_vars: Vec<String>,
    pub network: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct McpServerConfig {
    pub id: String,
    pub name: String,
    pub command: String,
    pub args: Vec<String>,
    pub port: u16,
    pub work_dir: Option<String>,
    pub use_docker: bool,
    pub docker: Option<DockerConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct McpServerStatus {
    pub id: String,
    pub name: String,
    pub port: u16,
    pub status: String,
    pub pid: Option<u32>,
    pub uptime: u64,
    pub container_id: Option<String>,
    pub use_docker: bool,
}

pub struct McpServer {
    pub config: McpServerConfig,
    pub process: Option<Child>,
    pub container_id: Option<String>,
    pub logs: Arc<Mutex<Vec<String>>>,
    pub started_at: Option<std::time::Instant>,
}

// ============================================================
// HELPERS DOCKER
// ============================================================

fn get_container_status(container_id: &str) -> String {
    let output = Command::new("docker")
        .args(["inspect", "-f", "{{.State.Status}}", container_id])
        .output();
    match output {
        Ok(out) if out.status.success() => {
            String::from_utf8_lossy(&out.stdout).trim().to_string()
        }
        _ => "not_found".to_string(),
    }
}

fn get_container_pid(container_id: &str) -> Option<u32> {
    let output = Command::new("docker")
        .args(["inspect", "-f", "{{.State.Pid}}", container_id])
        .output();
    match output {
        Ok(out) if out.status.success() => {
            let pid_str = String::from_utf8_lossy(&out.stdout).trim().to_string();
            pid_str.parse().ok()
        }
        _ => None,
    }
}

// ============================================================
// COMMANDS TAURI
// ============================================================

#[tauri::command]
pub async fn start_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&server_id) {
        if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let status = get_container_status(container_id);
                if status == "running" {
                    return Err("Server already running".to_string());
                }
            }
        } else {
            if server.process.is_some() {
                return Err("Server already running".to_string());
            }
        }

        if server.config.use_docker {
            let docker_config = server.config.docker.as_ref()
                .ok_or("Docker config not provided")?;

            let mut cmd = Command::new("docker");
            cmd.args(["run", "-d", "--rm"]);
            cmd.args(["--name", &format!("mcp-{}", server.config.id)]);
            cmd.args(["-p", &format!("{}:{}", server.config.port, server.config.port)]);

            // Resolve path templates in volumes (replace /home/user with actual home)
            for volume in &docker_config.volumes {
                let resolved_volume = resolve_path_template(volume);
                cmd.args(["-v", &resolved_volume]);
            }
            for env_var in &docker_config.env_vars {
                cmd.args(["-e", env_var]);
            }
            if let Some(ref network) = docker_config.network {
                cmd.args(["--network", network]);
            }

            cmd.arg(&docker_config.image);
            cmd.arg(&server.config.command);
            for arg in &server.config.args {
                cmd.arg(arg);
            }

            let output = cmd.output().map_err(|e| format!("Failed to start container: {}", e))?;

            if !output.status.success() {
                let stderr = String::from_utf8_lossy(&output.stderr);
                return Err(format!("Docker run failed: {}", stderr));
            }

            let container_id = String::from_utf8_lossy(&output.stdout).trim().to_string();
            server.container_id = Some(container_id.clone());
            server.started_at = Some(std::time::Instant::now());

            let logs = server.logs.clone();
            let server_id_clone = server_id.clone();
            let container_id_clone = container_id.clone();

            thread::spawn(move || {
                let output = Command::new("docker")
                    .args(["logs", "-f", &container_id_clone])
                    .stdout(Stdio::piped())
                    .stderr(Stdio::piped())
                    .spawn();

                if let Ok(mut child) = output {
                    if let Some(stdout) = child.stdout.take() {
                        let reader = BufReader::new(stdout);
                        for line in reader.lines().flatten() {
                            if let Ok(mut logs) = logs.lock() {
                                logs.push(format!("[{}][OUT] {}", server_id_clone, line));
                                if logs.len() > 1000 {
                                    logs.remove(0);
                                }
                            }
                        }
                    }
                }
            });

            Ok(format!("Container {} started", container_id))
        } else {
            let mut cmd = Command::new(&server.config.command);
            
            // Resolve path templates in args
            let resolved_args: Vec<String> = server.config.args.iter()
                .map(|arg| resolve_path_template(arg))
                .collect();
            cmd.args(&resolved_args);

            // Resolve path templates in work_dir
            if let Some(ref work_dir) = server.config.work_dir {
                let resolved_work_dir = resolve_path_template(work_dir);
                cmd.current_dir(&resolved_work_dir);
            }

            // Add environment variables with path resolution
            if let Some(ref docker_config) = server.config.docker {
                for env_var in &docker_config.env_vars {
                    if let Some((key, value)) = env_var.split_once('=') {
                        let resolved_value = resolve_path_template(value);
                        cmd.env(key, &resolved_value);
                    } else {
                        cmd.env(env_var, "");
                    }
                }
            }

            cmd.stdout(Stdio::piped())
               .stderr(Stdio::piped());

            let mut child = cmd.spawn().map_err(|e| format!("Failed to spawn process: {}", e))?;

            if let Some(stdout) = child.stdout.take() {
                let logs = server.logs.clone();
                let server_id_clone = server_id.clone();
                thread::spawn(move || {
                    let reader = BufReader::new(stdout);
                    for line in reader.lines().flatten() {
                        if let Ok(mut logs) = logs.lock() {
                            logs.push(format!("[{}][OUT] {}", server_id_clone, line));
                            if logs.len() > 1000 {
                                logs.remove(0);
                            }
                        }
                    }
                });
            }

            if let Some(stderr) = child.stderr.take() {
                let logs = server.logs.clone();
                let server_id_clone = server_id.clone();
                thread::spawn(move || {
                    let reader = BufReader::new(stderr);
                    for line in reader.lines().flatten() {
                        if let Ok(mut logs) = logs.lock() {
                            logs.push(format!("[{}][ERR] {}", server_id_clone, line));
                            if logs.len() > 1000 {
                                logs.remove(0);
                            }
                        }
                    }
                });
            }

            server.started_at = Some(std::time::Instant::now());
            server.process = Some(child);

            Ok(format!("Server {} started", server_id))
        }
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn stop_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&server_id) {
        if server.config.use_docker {
            if let Some(container_id) = server.container_id.take() {
                let output = Command::new("docker")
                    .args(["stop", &container_id])
                    .output()
                    .map_err(|e| e.to_string())?;

                if output.status.success() {
                    server.started_at = None;
                    Ok(format!("Container {} stopped", container_id))
                } else {
                    let stderr = String::from_utf8_lossy(&output.stderr);
                    Err(format!("Failed to stop container: {}", stderr))
                }
            } else {
                Err("Container not running".to_string())
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
                server.started_at = None;
                Ok(format!("Server {} stopped", server_id))
            } else {
                Err("Server not running".to_string())
            }
        }
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn restart_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    stop_server(state.clone(), server_id.clone()).await.ok();
    start_server(state, server_id).await
}

#[tauri::command]
pub async fn get_server_status(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<McpServerStatus, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        let (status, pid) = if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let container_status = get_container_status(container_id);
                let container_pid = get_container_pid(container_id);
                (container_status, container_pid)
            } else {
                ("stopped".to_string(), None)
            }
        } else {
            let status = if server.process.is_some() { "running" } else { "stopped" };
            let pid = server.process.as_ref().map(|p| p.id());
            (status.to_string(), pid)
        };

        let uptime = server.started_at
            .map(|t| t.elapsed().as_secs())
            .unwrap_or(0);

        Ok(McpServerStatus {
            id: server.config.id.clone(),
            name: server.config.name.clone(),
            port: server.config.port,
            status,
            pid,
            uptime,
            container_id: server.container_id.clone(),
            use_docker: server.config.use_docker,
        })
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_all_servers(
    state: State<'_, AppState>,
) -> Result<Vec<McpServerStatus>, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    let statuses: Vec<McpServerStatus> = servers.values()
        .map(|server| {
            let (status, pid) = if server.config.use_docker {
                if let Some(ref container_id) = server.container_id {
                    let container_status = get_container_status(container_id);
                    let container_pid = get_container_pid(container_id);
                    (container_status, container_pid)
                } else {
                    ("stopped".to_string(), None)
                }
            } else {
                let status = if server.process.is_some() { "running" } else { "stopped" };
                let pid = server.process.as_ref().map(|p| p.id());
                (status.to_string(), pid)
            };

            let uptime = server.started_at
                .map(|t| t.elapsed().as_secs())
                .unwrap_or(0);

            McpServerStatus {
                id: server.config.id.clone(),
                name: server.config.name.clone(),
                port: server.config.port,
                status,
                pid,
                uptime,
                container_id: server.container_id.clone(),
                use_docker: server.config.use_docker,
            }
        })
        .collect();

    Ok(statuses)
}

#[tauri::command]
pub async fn add_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    config: McpServerConfig,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    let server = McpServer {
        config,
        process: None,
        container_id: None,
        logs: Arc::new(Mutex::new(Vec::new())),
        started_at: None,
    };

    servers.insert(server.config.id.clone(), server);

    // SALVAR EM DISCO
    save_servers(&app, &servers)?;

    Ok("Server added".to_string())
}

#[tauri::command]
pub async fn remove_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(mut server) = servers.remove(&server_id) {
        if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let _ = Command::new("docker").args(["stop", container_id]).output();
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
            }
        }

        // SALVAR EM DISCO
        save_servers(&app, &servers)?;

        Ok("Server removed".to_string())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_server_logs(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<Vec<String>, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        let logs = server.logs.lock().map_err(|e| e.to_string())?;
        Ok(logs.clone())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn update_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    config: McpServerConfig,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&config.id) {
        if server.config.use_docker {
            if let Some(container_id) = server.container_id.take() {
                let _ = Command::new("docker").args(["stop", &container_id]).output();
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
            }
        }

        server.config = config;
        server.started_at = None;

        // SALVAR EM DISCO
        save_servers(&app, &servers)?;

        Ok("Server updated".to_string())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_server_config(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<McpServerConfig, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        Ok(server.config.clone())
    } else {
        Err("Server not found".to_string())
    }
}
```

---

### `src-tauri/src/tray.rs`

```rust
use tauri::{
    App, Manager,
    menu::{Menu, MenuItem},
    tray::{TrayIconBuilder, TrayIconEvent, MouseButton, MouseButtonState},
};

pub fn create_tray(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let show = MenuItem::with_id(app, "show", "Show Dashboard", true, None::<&str>)?;
    let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;

    let menu = Menu::with_items(app, &[&show, &quit])?;

    TrayIconBuilder::with_id("main")
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&menu)
        .on_menu_event(move |app, event| {
            match event.id.as_ref() {
                "show" => {
                    if let Some(window) = app.get_webview_window("main") {
                        window.show().unwrap();
                        window.set_focus().unwrap();
                    }
                }
                "quit" => {
                    app.exit(0);
                }
                _ => {}
            }
        })
        .on_tray_icon_event(|tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                let app = tray.app_handle();
                if let Some(window) = app.get_webview_window("main") {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
        })
        .build(app)?;

    Ok(())
}
```

---

### `src-tauri/tauri.conf.json`

```json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "MCP Manager",
  "version": "1.0.0",
  "identifier": "com.birblabs.mcp-manager",
  "build": {
    "beforeDevCommand": "npm run dev",
    "devUrl": "http://localhost:1420",
    "beforeBuildCommand": "npm run build",
    "frontendDist": "../dist"
  },
  "app": {
    "windows": [
      {
        "title": "MCP Manager",
        "width": 1200,
        "height": 800,
        "resizable": true,
        "fullscreen": false,
        "visible": true
      }
    ],
    "security": {
      "csp": null
    }
  },
  "bundle": {
    "active": true,
    "targets": ["appimage"],
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ],
    "linux": {
      "deb": {
        "depends": []
      }
    }
  }
}
```

---

### `src/App.css`

```css
@import "tailwindcss";

/* ============================================================
   TAILWIND v4 — Variant Dark
   No Tailwind v4 estável, usa-se @variant (não @custom-variant)
   ============================================================ */
@variant dark (&:where(.dark, .dark *, .nord, .nord *, .dracula, .dracula *, .monokai, .monokai *));

/* ============================================================
   Força navegadores a estilizar inputs/selects corretamente
   no dark mode (resolve o "texto branco em fundo branco")
   ============================================================ */
.dark {
  color-scheme: dark;
}

select,
input,
textarea,
option {
  color-scheme: inherit;
}

/* Remove estilos nativos do SO que sobrescrevem o Tailwind */
select,
input,
textarea {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/* ============================================================
   PALETAS BASE (Nord, Dracula, Monokai)
   ============================================================ */
@theme {
  /* Cores Nord */
  --color-nord-0: #2E3440;
  --color-nord-1: #3B4252;
  --color-nord-2: #434C5E;
  --color-nord-3: #4C566A;
  --color-nord-4: #D8DEE9;
  --color-nord-5: #E5E9F0;
  --color-nord-6: #ECEFF4;

  /* Cores Dracula */
  --color-dracula-bg: #282A36;
  --color-dracula-current: #44475A;
  --color-dracula-fg: #F8F8F2;
  --color-dracula-comment: #6272A4;
  --color-dracula-cyan: #8BE9FD;
  --color-dracula-green: #50FA7B;
  --color-dracula-orange: #FFB86C;
  --color-dracula-pink: #FF79C6;
  --color-dracula-purple: #BD93F9;
  --color-dracula-red: #FF5555;
  --color-dracula-yellow: #F1FA8C;

  /* Cores Monokai */
  --color-monokai-bg: #272822;
  --color-monokai-fg: #F8F8F2;
  --color-monokai-comment: #75715E;
  --color-monokai-cyan: #66D9EF;
  --color-monokai-green: #A6E22E;
  --color-monokai-orange: #FD971F;
  --color-monokai-pink: #F92672;
  --color-monokai-purple: #AE81FF;
  --color-monokai-red: #F92672;
  --color-monokai-yellow: #E6DB74;
}

/* ============================================================
   TEMA NORD
   Mapeia as cores Nord para as variáveis internas do Tailwind,
   fazendo com que classes como bg-white, bg-gray-800,
   text-blue-600 etc. assumam automaticamente a paleta Nord.
   ============================================================ */
.nord {
  color-scheme: dark;

  /* Fundos e textos base */
  --color-white: #ECEFF4;       /* nord-6 - texto principal */
  --color-black: #2E3440;       /* nord-0 - fundo mais escuro */

  /* Escala de cinzas (do mais claro ao mais escuro) */
  --color-gray-50: #ECEFF4;     /* nord-6 - texto principal */
  --color-gray-100: #E5E9F0;    /* nord-5 - texto secundário claro */
  --color-gray-200: #D8DEE9;    /* nord-4 - ícones e bordas claras */
  --color-gray-300: #CDD3DE;    /* bordas médias */
  --color-gray-400: #B8C0CC;    /* placeholders */
  --color-gray-500: #A3AEBF;    /* texto desabilitado */
  --color-gray-600: #4C566A;    /* nord-3 - fundos secundários */
  --color-gray-700: #434C5E;    /* nord-2 - fundos de cards */
  --color-gray-800: #3B4252;    /* nord-1 - fundos primários */
  --color-gray-900: #2E3440;    /* nord-0 - fundo da página */

  /* Azuis - mais vibrantes para melhor visibilidade */
  --color-blue-50: #88C0D0;     /* nord-8 */
  --color-blue-100: #88C0D0;
  --color-blue-200: #81A1C1;    /* nord-9 */
  --color-blue-300: #81A1C1;
  --color-blue-400: #5E81AC;    /* nord-10 */
  --color-blue-500: #5E81AC;
  --color-blue-600: #81A1C1;
  --color-blue-700: #88C0D0;
  --color-blue-800: #4C566A;
  --color-blue-900: #3B4252;

  /* Verdes - mais saturados */
  --color-green-50: #A3BE8C;    /* nord-14 */
  --color-green-100: #A3BE8C;
  --color-green-200: #A3BE8C;
  --color-green-300: #A3BE8C;
  --color-green-400: #A3BE8C;
  --color-green-500: #A3BE8C;
  --color-green-600: #8FBCBB;   /* nord-7 - teal */
  --color-green-700: #8FBCBB;
  --color-green-800: #4C566A;
  --color-green-900: #3B4252;

  /* Vermelhos - mais claros */
  --color-red-50: #BF616A;      /* nord-11 */
  --color-red-100: #BF616A;
  --color-red-200: #BF616A;
  --color-red-300: #BF616A;
  --color-red-400: #BF616A;
  --color-red-500: #BF616A;
  --color-red-600: #D08770;     /* nord-12 - laranja avermelhado */
  --color-red-700: #D08770;
  --color-red-800: #4C566A;
  --color-red-900: #3B4252;

  /* Amarelos - mais brilhantes */
  --color-yellow-50: #EBCB8B;   /* nord-13 */
  --color-yellow-100: #EBCB8B;
  --color-yellow-200: #EBCB8B;
  --color-yellow-300: #EBCB8B;
  --color-yellow-400: #EBCB8B;
  --color-yellow-500: #EBCB8B;
  --color-yellow-600: #D08770;
  --color-yellow-700: #D08770;
  
  /* Laranjas */
  --color-orange-50: #D08770;   /* nord-12 */
  --color-orange-100: #D08770;
  --color-orange-200: #D08770;
  --color-orange-300: #D08770;
  --color-orange-400: #D08770;
  --color-orange-500: #D08770;
  --color-orange-600: #D08770;
  --color-orange-700: #D08770;
  
  /* Roxos - mais vibrantes */
  --color-purple-50: #B48EAD;   /* nord-15 */
  --color-purple-100: #B48EAD;
  --color-purple-200: #B48EAD;
  --color-purple-300: #B48EAD;
  --color-purple-400: #B48EAD;
  --color-purple-500: #B48EAD;
  --color-purple-600: #5E81AC;
  --color-purple-700: #81A1C1;
}

/* ============================================================
   TEMA DRACULA
   ============================================================ */
.dracula {
  color-scheme: dark;

  --color-white: #F8F8F2;       /* texto principal */
  --color-black: #282A36;       /* fundo mais escuro */

  --color-gray-50: #F8F8F2;     /* texto principal */
  --color-gray-100: #F1FA8C;    /* texto secundário claro */
  --color-gray-200: #E5E5E5;    /* ícones e bordas claras */
  --color-gray-300: #C9D6E8;    /* bordas médias */
  --color-gray-400: #A8B8D0;    /* placeholders */
  --color-gray-500: #8A9AB8;    /* texto desabilitado */
  --color-gray-600: #6272A4;    /* comment - fundos secundários */
  --color-gray-700: #44475A;    /* current - fundos de cards */
  --color-gray-800: #282A36;    /* bg - fundos primários */
  --color-gray-900: #282A36;    /* bg - fundo da página */

  --color-blue-50: #8BE9FD;     /* cyan - mais brilhante */
  --color-blue-100: #8BE9FD;
  --color-blue-200: #8BE9FD;
  --color-blue-300: #BD93F9;    /* purple */
  --color-blue-400: #BD93F9;
  --color-blue-500: #BD93F9;
  --color-blue-600: #BD93F9;
  --color-blue-700: #BD93F9;
  --color-blue-800: #6272A4;
  --color-blue-900: #44475A;

  --color-green-50: #50FA7B;    /* verde neon */
  --color-green-100: #50FA7B;
  --color-green-200: #50FA7B;
  --color-green-300: #50FA7B;
  --color-green-400: #50FA7B;
  --color-green-500: #50FA7B;
  --color-green-600: #50FA7B;
  --color-green-700: #50FA7B;
  --color-green-800: #6272A4;
  --color-green-900: #44475A;

  --color-red-50: #FF5555;      /* vermelho vibrante */
  --color-red-100: #FF5555;
  --color-red-200: #FF5555;
  --color-red-300: #FF5555;
  --color-red-400: #FF5555;
  --color-red-500: #FF5555;
  --color-red-600: #FF5555;
  --color-red-700: #FF5555;
  --color-red-800: #6272A4;
  --color-red-900: #44475A;

  --color-yellow-50: #F1FA8C;   /* amarelo claro */
  --color-yellow-100: #F1FA8C;
  --color-yellow-200: #F1FA8C;
  --color-yellow-300: #F1FA8C;
  --color-yellow-400: #F1FA8C;
  --color-yellow-500: #F1FA8C;
  --color-yellow-600: #F1FA8C;
  --color-yellow-700: #F1FA8C;
  
  --color-orange-50: #FFB86C;   /* laranja suave */
  --color-orange-100: #FFB86C;
  --color-orange-200: #FFB86C;
  --color-orange-300: #FFB86C;
  --color-orange-400: #FFB86C;
  --color-orange-500: #FFB86C;
  --color-orange-600: #FFB86C;
  --color-orange-700: #FFB86C;
  
  --color-purple-50: #BD93F9;   /* roxo vibrante */
  --color-purple-100: #BD93F9;
  --color-purple-200: #BD93F9;
  --color-purple-300: #BD93F9;
  --color-purple-400: #BD93F9;
  --color-purple-500: #BD93F9;
  --color-purple-600: #BD93F9;
  --color-purple-700: #BD93F9;
  
  --color-pink-50: #FF79C6;     /* rosa vibrante */
  --color-pink-100: #FF79C6;
  --color-pink-200: #FF79C6;
  --color-pink-300: #FF79C6;
  --color-pink-400: #FF79C6;
  --color-pink-500: #FF79C6;
  --color-pink-600: #FF79C6;
  --color-pink-700: #FF79C6;
}

/* ============================================================
   TEMA MONOKAI
   ============================================================ */
.monokai {
  color-scheme: dark;

  --color-white: #F8F8F2;       /* texto principal */
  --color-black: #272822;       /* fundo mais escuro */

  --color-gray-50: #F8F8F2;     /* texto principal */
  --color-gray-100: #F1F1E9;    /* texto secundário claro */
  --color-gray-200: #E8E8E3;    /* ícones e bordas claras */
  --color-gray-300: #D0D0CB;    /* bordas médias */
  --color-gray-400: #B8B8B0;    /* placeholders */
  --color-gray-500: #A0A098;    /* texto desabilitado */
  --color-gray-600: #75715E;    /* comment - fundos secundários */
  --color-gray-700: #49483E;    /* current - fundos de cards */
  --color-gray-800: #3E3D32;    /* bg escuro - fundos primários */
  --color-gray-900: #272822;    /* bg - fundo da página */

  --color-blue-50: #66D9EF;     /* cyan vibrante */
  --color-blue-100: #66D9EF;
  --color-blue-200: #66D9EF;
  --color-blue-300: #AE81FF;    /* purple */
  --color-blue-400: #AE81FF;
  --color-blue-500: #AE81FF;
  --color-blue-600: #AE81FF;
  --color-blue-700: #AE81FF;
  --color-blue-800: #75715E;
  --color-blue-900: #3E3D32;

  --color-green-50: #A6E22E;    /* verde lima vibrante */
  --color-green-100: #A6E22E;
  --color-green-200: #A6E22E;
  --color-green-300: #A6E22E;
  --color-green-400: #A6E22E;
  --color-green-500: #A6E22E;
  --color-green-600: #A6E22E;
  --color-green-700: #A6E22E;
  --color-green-800: #75715E;
  --color-green-900: #3E3D32;

  --color-red-50: #F92672;      /* rosa/vermelho vibrante */
  --color-red-100: #F92672;
  --color-red-200: #F92672;
  --color-red-300: #F92672;
  --color-red-400: #F92672;
  --color-red-500: #F92672;
  --color-red-600: #F92672;
  --color-red-700: #F92672;
  --color-red-800: #75715E;
  --color-red-900: #3E3D32;

  --color-yellow-50: #E6DB74;   /* amarelo claro */
  --color-yellow-100: #E6DB74;
  --color-yellow-200: #E6DB74;
  --color-yellow-300: #E6DB74;
  --color-yellow-400: #FD971F;  /* orange */
  --color-yellow-500: #FD971F;
  --color-yellow-600: #FD971F;
  --color-yellow-700: #FD971F;
  
  --color-orange-50: #FD971F;   /* laranja vibrante */
  --color-orange-100: #FD971F;
  --color-orange-200: #FD971F;
  --color-orange-300: #FD971F;
  --color-orange-400: #FD971F;
  --color-orange-500: #FD971F;
  --color-orange-600: #FD971F;
  --color-orange-700: #FD971F;
  
  --color-purple-50: #AE81FF;   /* roxo vibrante */
  --color-purple-100: #AE81FF;
  --color-purple-200: #AE81FF;
  --color-purple-300: #AE81FF;
  --color-purple-400: #AE81FF;
  --color-purple-500: #AE81FF;
  --color-purple-600: #AE81FF;
  --color-purple-700: #AE81FF;
  
  --color-pink-50: #F92672;     /* rosa vibrante */
  --color-pink-100: #F92672;
  --color-pink-200: #F92672;
  --color-pink-300: #F92672;
  --color-pink-400: #F92672;
  --color-pink-500: #F92672;
  --color-pink-600: #F92672;
  --color-pink-700: #F92672;
}

/* ============================================================
   ESTILOS BASE
   ============================================================ */
body {
  margin: 0;
  padding: 0;
}

#root {
  width: 100%;
  height: 100%;
}
```

---

### `src/App.tsx`

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Logs from './pages/Logs';
import './App.css';  // ← ADICIONE ESSA LINHA!

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'dark:bg-gray-800 dark:text-white',
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
```

---

### `src/assets/react.svg`

```text
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

---

### `src/components/Sidebar.tsx`

```typescript
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, Server } from 'lucide-react';

export default function Sidebar() {
    const navItems = [
        { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/logs', icon: FileText, label: 'Logs' },
        { to: '/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                    <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        MCP Manager
                    </h1>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    v1.0.0
                </div>
            </div>
        </aside>
    );
}
```

---

### `src/contexts/ThemeContext.tsx`

```typescript
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system' | 'nord' | 'dracula' | 'monokai';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'system';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remover todas as classes de tema
    root.classList.remove('light', 'dark', 'nord', 'dracula', 'monokai');
    
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(systemDark ? 'dark' : 'light');
    } else {
      root.classList.add(theme);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') applyTheme('system');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

---

### `src/data/features.json`

```json
{
  "features": [
    {
      "name": "Dashboard",
      "description": "Start/Stop/Restart/Remove MCP servers"
    },
    {
      "name": "Logs",
      "description": "Real-time viewing with auto-refresh"
    },
    {
      "name": "Settings",
      "description": "Themes, Autostart"
    },
    {
      "name": "System Tray",
      "description": "Show Dashboard / Quit / Left-click opens dashboard"
    },
    {
      "name": "Window Management",
      "description": "Window minimizes to tray on close (doesn't exit)"
    },
    {
      "name": "DevTools",
      "description": "Enabled in release"
    }
  ]
}
```

---

### `src/data/templates.json`

```json
{
  "templates": [
    {
      "id": "default",
      "name": "Default Template",
      "description": "Standard MCP Manager layout",
      "layout": {
        "sidebar": true,
        "header": true,
        "footer": false
      },
      "components": ["Sidebar", "Dashboard", "Logs", "Settings"]
    },
    {
      "id": "compact",
      "name": "Compact Template",
      "description": "Minimalist layout for focused work",
      "layout": {
        "sidebar": false,
        "header": true,
        "footer": false
      },
      "components": ["Dashboard", "Logs"]
    },
    {
      "id": "full",
      "name": "Full Template",
      "description": "Complete layout with all features",
      "layout": {
        "sidebar": true,
        "header": true,
        "footer": true
      },
      "components": ["Sidebar", "Dashboard", "Logs", "Settings", "Header", "Footer"]
    }
  ]
}
```

---

### `src/data/themes.json`

```json
{
  "themes": [
    {
      "id": "light",
      "name": "Light",
      "description": "Classic light theme"
    },
    {
      "id": "dark",
      "name": "Dark",
      "description": "Classic dark theme"
    },
    {
      "id": "system",
      "name": "System",
      "description": "Automatically follows system preference"
    },
    {
      "id": "nord",
      "name": "Nord",
      "description": "Arctic-inspired color palette"
    },
    {
      "id": "dracula",
      "name": "Dracula",
      "description": "Dark theme with vibrant colors"
    },
    {
      "id": "monokai",
      "name": "Monokai",
      "description": "Popular developer theme"
    }
  ]
}
```

---

### `src/main.tsx`

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'  // ← Importante!

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

### `src/pages/Dashboard.tsx`

```typescript
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { Play, Square, RotateCcw, Plus, Trash2, Activity, X, Edit, Container } from 'lucide-react';
import toast from 'react-hot-toast';

interface Server {
    id: string;
    name: string;
    port: number;
    status: string;
    pid?: number;
    uptime: number;
    useDocker: boolean;
    containerId?: string;
    docker?: {
        image: string;
        volumes: string[];
        envVars: string[];
        network?: string;
    };
    command?: string;
    args?: string[];
    workDir?: string;
}

interface ServerConfig {
    id: string;
    name: string;
    command: string;
    args: string[];
    port: number;
    workDir: string | null;
    useDocker: boolean;
    docker: {
        image: string;
        volumes: string[];
        envVars: string[];
        network?: string;
    } | null;
}

export default function Dashboard() {
    const [servers, setServers] = useState<Server[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingServerId, setEditingServerId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        command: '',
        args: '[]',
        port: 3000,
        workDir: '',
        useDocker: false,
        dockerImage: 'node:20-slim',
        dockerVolumes: '',
        dockerEnvVars: '',
        dockerNetwork: 'host',
    });

    // MCP Server Templates - Using verified packages from @modelcontextprotocol/servers repo
    const mcpTemplates = [
        {
            id: 'memory',
            name: 'Memory Server',
            description: 'Persistent memory storage for AI context via knowledge graph',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-memory"]',
            port: 3001,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'filesystem',
            name: 'Filesystem Server',
            description: 'Access local files and directories (isolated via Docker, read-only)',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-filesystem"]',
            port: 3002,
            workDir: '',
            envVars: 'ALLOWED_DIRS=$HOME/Projects',
            useDocker: false,
        },
        {
            id: 'filesystem-docker',
            name: 'Filesystem Server (Docker Isolated)',
            description: 'Filesystem access in isolated container with read-only volume',
            command: 'docker',
            args: '["run", "--rm", "-i", "--read-only", "-v", "$HOME/Projects:/mnt/data:ro", "node:20-slim", "npx", "-y", "@modelcontextprotocol/server-filesystem", "/mnt/data"]',
            port: 3003,
            workDir: '/mnt/data',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['$HOME/Projects:/mnt/data:ro'],
        },
        {
            id: 'shell-sandboxed',
            name: 'Shell Server (Sandboxed)',
            description: 'Execute shell commands in isolated container (only /tmp access)',
            command: 'docker',
            args: '["run", "--rm", "-i", "-v", "/tmp:/workspace", "node:20-slim", "sh", "-c", "echo \\"Shell sandboxed ready\\""]',
            port: 3004,
            workDir: '/workspace',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['/tmp:/workspace'],
        },
        {
            id: 'shell-full',
            name: 'Shell Server (Full Access)',
            description: 'Full system access for diagnostics, drivers, processes and configurations',
            command: 'npx',
            args: '["-y", "@mako10k/mcp-shell-server"]',
            port: 3005,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'adb',
            name: 'ADB Server',
            description: 'Android Debug Bridge integration (requires native ADB installed). Use system adb command.',
            command: 'adb',
            args: '["start-server"]',
            port: 3006,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'sequential-thinking',
            name: 'Sequential Thinking Server',
            description: 'Chain of thought reasoning for complex problem solving',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-sequential-thinking"]',
            port: 3007,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'git',
            name: 'Git Server',
            description: 'Git repository operations with read-only access to projects',
            command: 'npx',
            args: '["-y", "@cyanheads/git-mcp-server", "--dir", "$HOME/Projects"]',
            port: 3008,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'git-docker',
            name: 'Git Server (Docker Isolated)',
            description: 'Git operations in isolated container with read-only repo access',
            command: 'docker',
            args: '["run", "--rm", "-i", "-v", "$HOME/Projects:/repos:ro", "node:20-slim", "npx", "-y", "@cyanheads/git-mcp-server", "--dir", "/repos"]',
            port: 3009,
            workDir: '/repos',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['$HOME/Projects:/repos:ro'],
        },
        {
            id: 'playwright',
            name: 'Playwright Server',
            description: 'Browser automation and testing via Playwright',
            command: 'npx',
            args: '["-y", "@playwright/mcp"]',
            port: 3010,
            workDir: '',
            useDocker: false,
        },
    ];

    const applyTemplate = (template: typeof mcpTemplates[0]) => {
        setFormData({
            id: template.id,
            name: template.name,
            command: template.command,
            args: template.args,
            port: template.port,
            workDir: template.workDir || '',
            useDocker: template.useDocker || false,
            dockerImage: template.dockerImage || 'node:20-slim',
            dockerVolumes: (template.dockerVolumes || []).join('\n'),
            dockerEnvVars: '',
            dockerNetwork: 'host',
        });
        setShowModal(true);
    };

    useEffect(() => {
        loadServers();
        const interval = setInterval(loadServers, 2000);
        return () => clearInterval(interval);
    }, []);

    const loadServers = async () => {
        try {
            const result = await invoke<Server[]>('get_all_servers');
            setServers(result);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };

    const startServer = async (id: string, name: string) => {
        try {
            await invoke('start_server', { serverId: id });
            toast.success(`${name} started`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to start ${name}: ${e}`);
        }
    };

    const stopServer = async (id: string, name: string) => {
        try {
            await invoke('stop_server', { serverId: id });
            toast.success(`${name} stopped`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to stop ${name}`);
        }
    };

    const restartServer = async (id: string, name: string) => {
        try {
            await invoke('restart_server', { serverId: id });
            toast.success(`${name} restarted`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to restart ${name}`);
        }
    };

    const removeServer = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to remove ${name}?`)) return;
        try {
            await invoke('remove_server', { serverId: id });
            toast.success(`${name} removed`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to remove ${name}`);
        }
    };

    const editServer = async (server: any) => {
        try {
            setEditingServerId(server.id);
            
            // Buscar configuração completa do servidor
            const config = await invoke<any>('get_server_config', { 
                serverId: server.id 
            });
            
            setFormData({
                id: config.id,
                name: config.name,
                command: config.command || '',
                args: JSON.stringify(config.args || [], null, 2),
                port: config.port,
                workDir: config.workDir || '',
                useDocker: config.useDocker || false,
                dockerImage: config.docker?.image || 'node:20-slim',
                dockerVolumes: (config.docker?.volumes || []).join('\n'),
                dockerEnvVars: (config.docker?.envVars || []).join('\n'),
                dockerNetwork: config.docker?.network || 'host',
            });
            setShowModal(true);
        } catch (error) {
            toast.error(`Failed to load server config: ${error}`);
        }
    };

    const openAddModal = () => {
        setEditingServerId(null);
        setFormData({
            id: '',
            name: '',
            command: '',
            args: '[]',
            port: 3000,
            workDir: '',
            useDocker: false,
            dockerImage: 'node:20-slim',
            dockerVolumes: '',
            dockerEnvVars: '',
            dockerNetwork: 'host',
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingServerId(null);
    };

    const handleSaveServer = async () => {
        try {
            // Corrige o crash quando o campo args está vazio
            let argsArray: string[] = [];
            const trimmedArgs = formData.args.trim();
            if (trimmedArgs) {
                try {
                    const parsed = JSON.parse(trimmedArgs);
                    argsArray = Array.isArray(parsed) ? parsed : [parsed];
                } catch {
                    toast.error('Arguments must be a valid JSON array');
                    return;
                }
            }
            
            const dockerConfig = formData.useDocker ? {
                image: formData.dockerImage,
                volumes: formData.dockerVolumes.split('\n').map(v => v.trim()).filter(v => v),
                envVars: formData.dockerEnvVars.split('\n').map(e => e.trim()).filter(e => e),
                network: formData.dockerNetwork || undefined,
            } : null;

            const config: ServerConfig = {
                id: formData.id,
                name: formData.name,
                command: formData.command,
                args: argsArray,
                port: formData.port,
                workDir: formData.workDir || null,
                useDocker: formData.useDocker,
                docker: dockerConfig,
            };

            if (editingServerId) {
                await invoke('update_server', { config });
                toast.success(`Server ${formData.name} updated`);
            } else {
                await invoke('add_server', { config });
                toast.success(`Server ${formData.name} added`);
            }
            
            closeModal();
            loadServers();
        } catch (e) {
            toast.error(`Failed to save server: ${e}`);
        }
    };

    const formatUptime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-gray-500 dark:text-gray-400">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">MCP Servers</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your Model Context Protocol servers</p>
                </div>
                <button 
                    onClick={openAddModal}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus size={20} />
                    Add Server
                </button>
            </div>

            {/* MCP Templates Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Start Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mcpTemplates.map((template) => (
                        <button
                            key={template.id}
                            onClick={() => applyTemplate(template)}
                            className="flex flex-col items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all text-left group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Container size={18} className="text-blue-600 dark:text-blue-400" />
                                <h3 className="font-medium text-gray-900 dark:text-white">{template.name}</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{template.description}</p>
                            <div className="mt-3 flex items-center gap-2 text-xs">
                                {template.useDocker ? (
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded">Docker</span>
                                ) : (
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">Native</span>
                                )}
                                <span className="text-gray-400 dark:text-gray-500">Port: {template.port}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {servers.length === 0 ? (
                <div className="text-center py-12">
                    <Activity className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">No servers configured yet</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {servers.map((server) => (
                        <div
                            key={server.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{server.name}</h3>
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                server.status === 'running'
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                            }`}
                                        >
                                            {server.status}
                                        </span>
                                        {server.useDocker && (
                                            <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                                                <Container size={12} />
                                                Docker
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                        <p>Port: {server.port}</p>
                                        {server.pid && <p>PID: {server.pid}</p>}
                                        {server.containerId && <p>Container: {server.containerId.substring(0, 12)}</p>}
                                        {server.status === 'running' && (
                                            <p>Uptime: {formatUptime(server.uptime)}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    {server.status === 'running' ? (
                                        <>
                                            <button
                                                onClick={() => stopServer(server.id, server.name)}
                                                className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                                                title="Stop"
                                            >
                                                <Square size={20} />
                                            </button>
                                            <button
                                                onClick={() => restartServer(server.id, server.name)}
                                                className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
                                                title="Restart"
                                            >
                                                <RotateCcw size={20} />
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => startServer(server.id, server.name)}
                                            className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                                            title="Start"
                                        >
                                            <Play size={20} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => editServer(server)}
                                        className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                        title="Edit"
                                    >
                                        <Edit size={20} />
                                    </button>
                                    <button
                                        onClick={() => removeServer(server.id, server.name)}
                                        className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        title="Remove"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full mx-4 my-8">
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {editingServerId ? 'Edit MCP Server' : 'Add MCP Server'}
                            </h2>
                            <button 
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Server ID</label>
                                    <input
                                        type="text"
                                        value={formData.id}
                                        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                                        disabled={!!editingServerId}
                                        className={`w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white ${
                                            editingServerId ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                        placeholder="filesystem"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Server Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                        placeholder="Filesystem Server"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <Container size={20} className="text-blue-600 dark:text-blue-400" />
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Run in Docker Container</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Isolated environment with custom dependencies</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.useDocker}
                                        onChange={(e) => setFormData({ ...formData, useDocker: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            {formData.useDocker ? (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Docker Image</label>
                                        <input
                                            type="text"
                                            value={formData.dockerImage}
                                            onChange={(e) => setFormData({ ...formData, dockerImage: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="node:20-slim"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Command</label>
                                        <input
                                            type="text"
                                            value={formData.command}
                                            onChange={(e) => setFormData({ ...formData, command: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="npx"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Arguments (JSON array)</label>
                                        <textarea
                                            value={formData.args}
                                            onChange={(e) => setFormData({ ...formData, args: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={2}
                                            placeholder='["-y", "@modelcontextprotocol/server-filesystem", "/projects"]'
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Port Mapping</label>
                                        <input
                                            type="number"
                                            value={formData.port}
                                            onChange={(e) => setFormData({ ...formData, port: parseInt(e.target.value) || 0 })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="8001"
                                        />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Host port will be mapped to the same container port</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Volumes (one per line: host:container)</label>
                                        <textarea
                                            value={formData.dockerVolumes}
                                            onChange={(e) => setFormData({ ...formData, dockerVolumes: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={3}
                                            placeholder="/home/user/Projects:/projects"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Environment Variables (one per line: KEY=VALUE)</label>
                                        <textarea
                                            value={formData.dockerEnvVars}
                                            onChange={(e) => setFormData({ ...formData, dockerEnvVars: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={3}
                                            placeholder="NODE_ENV=production"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Network Mode</label>
                                        <select
                                            value={formData.dockerNetwork}
                                            onChange={(e) => setFormData({ ...formData, dockerNetwork: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                        >
                                            <option value="host">host</option>
                                            <option value="bridge">bridge</option>
                                            <option value="none">none</option>
                                        </select>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Command</label>
                                        <input
                                            type="text"
                                            value={formData.command}
                                            onChange={(e) => setFormData({ ...formData, command: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="npx"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Arguments (JSON array)</label>
                                        <textarea
                                            value={formData.args}
                                            onChange={(e) => setFormData({ ...formData, args: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={2}
                                            placeholder='["-y", "@modelcontextprotocol/server-filesystem", "/home/user/Projects"]'
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Port</label>
                                            <input
                                                type="number"
                                                value={formData.port}
                                                onChange={(e) => setFormData({ ...formData, port: parseInt(e.target.value) || 0 })}
                                                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                                placeholder="3001"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Working Directory</label>
                                            <input
                                                type="text"
                                                value={formData.workDir}
                                                onChange={(e) => setFormData({ ...formData, workDir: e.target.value })}
                                                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                                placeholder="/home/user/Projects"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-800">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveServer}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                {editingServerId ? 'Update Server' : 'Add Server'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
```

---

### `src/pages/Logs.tsx`

```typescript
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { RefreshCw, Trash2 } from 'lucide-react';

interface Server {
    id: string;
    name: string;
    status: string;
}

export default function Logs() {
    const [servers, setServers] = useState<Server[]>([]);
    const [selectedServer, setSelectedServer] = useState<string>('');
    const [logs, setLogs] = useState<string[]>([]);
    const [autoRefresh, setAutoRefresh] = useState(true);

    useEffect(() => {
        loadServers();
    }, []);

    useEffect(() => {
        if (selectedServer && autoRefresh) {
            const interval = setInterval(loadLogs, 1000);
            return () => clearInterval(interval);
        }
    }, [selectedServer, autoRefresh]);

    const loadServers = async () => {
        try {
            const result = await invoke<Server[]>('get_all_servers');
            setServers(result);
            if (result.length > 0 && !selectedServer) {
                setSelectedServer(result[0].id);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const loadLogs = async () => {
        if (!selectedServer) return;
        try {
            const result = await invoke<string[]>('get_server_logs', {
                serverId: selectedServer,
            });
            setLogs(result);
        } catch (e) {
            console.error(e);
        }
    };

    const clearLogs = async () => {
        setLogs([]);
    };

    return (
        <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Server Logs
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        View real-time logs from your MCP servers
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={autoRefresh}
                            onChange={(e) => setAutoRefresh(e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            Auto-refresh
                        </span>
                    </label>
                    <button
                        onClick={loadLogs}
                        className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        title="Refresh"
                    >
                        <RefreshCw size={20} />
                    </button>
                    <button
                        onClick={clearLogs}
                        className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                        title="Clear"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <select
                    value={selectedServer}
                    onChange={(e) => setSelectedServer(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    {servers.map((server) => (
                        <option key={server.id} value={server.id}>
                            {server.name} ({server.status})
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex-1 bg-gray-900 rounded-lg p-4 overflow-auto font-mono text-sm">
                {logs.length === 0 ? (
                    <div className="text-gray-500 text-center py-12">
                        No logs available
                    </div>
                ) : (
                    <div className="space-y-1">
                        {logs.map((log, index) => (
                            <div key={index} className="text-gray-300 break-all">
                                {log}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
```

---

### `src/pages/Settings.tsx`

```typescript
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Monitor, Palette, Power } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Settings() {
    const { theme, setTheme } = useTheme();
    const [autostartEnabled, setAutostartEnabled] = useState(false);

    useEffect(() => {
        loadAutostartStatus();
    }, []);

    const loadAutostartStatus = async () => {
        try {
            const result = await invoke<boolean>('is_autostart_enabled');
            setAutostartEnabled(result);
        } catch (e) {
            console.error(e);
        }
    };

    const toggleAutostart = async () => {
        try {
            if (autostartEnabled) {
                await invoke('disable_autostart');
                toast.success('Autostart disabled');
            } else {
                await invoke('enable_autostart');
                toast.success('Autostart enabled');
            }
            setAutostartEnabled(!autostartEnabled);
        } catch (e) {
            toast.error('Failed to toggle autostart');
        }
    };

    const themes = [
        { id: 'light', label: 'Light', icon: Sun },
        { id: 'dark', label: 'Dark', icon: Moon },
        { id: 'system', label: 'System', icon: Monitor },
        { id: 'nord', label: 'Nord', icon: Palette },
        { id: 'dracula', label: 'Dracula', icon: Palette },
        { id: 'monokai', label: 'Monokai', icon: Palette },
    ];

    return (
        <div className="p-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Settings
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Configure your MCP Manager preferences
                </p>
            </div>

            <div className="space-y-6">
                {/* Theme Selection */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Theme
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id as any)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all ${theme === t.id
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                            >
                                <t.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                <span className="text-gray-900 dark:text-white font-medium">
                                    {t.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Autostart */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Power className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Start with System
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Automatically start MCP Manager when you log in
                                </p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={autostartEnabled}
                                onChange={toggleAutostart}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>

                {/* About */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        About
                    </h2>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p>
                            <span className="font-medium">Version:</span> 1.0.0
                        </p>
                        <p>
                            <span className="font-medium">Built with:</span> Tauri + React +
                            TypeScript
                        </p>
                        <p>
                            <span className="font-medium">License:</span> MIT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

---

### `src/vite-env.d.ts`

```typescript
/// <reference types="vite/client" />
```

---

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

### Tauri Configuration

### `src-tauri/build.rs`

```rust
fn main() {
    tauri_build::build()
}
```

---

### `src-tauri/capabilities/default.json`

```json
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "Capability for the main window",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "opener:default"
  ]
}
```

---

### `src-tauri/Cargo.toml`

```toml
[package]
name = "mcp-manager"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
# The `_lib` suffix may seem redundant but it is necessary
# to make the lib name unique and wouldn't conflict with the bin name.
# This seems to be only an issue on Windows, see https://github.com/rust-lang/cargo/issues/8519
name = "mcp_manager_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
tauri = { version = "2", features = ["tray-icon", "devtools"] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
dirs = "5.0"
```

---

### `src-tauri/icons/128x128.png`

```text
�PNG

   IHDR   �   �   �>a�   	pHYs     ��   sRGB ���   gAMA  ���a  MIDATx��r��{�CR�J~�lDHU����@�B�'@<A�'@<��'�xO��:QE�_��)	��	rI����t��Hbg�gw���*a�t������t� 444444444444444444444�8
 �;�G|*��q��>w£#��"�$�^�߇jy8�s.@'c!(\�E8��y�@��b@��!ADP#΍ ��d���!��l�����O�̼ �ho�5�!�K��d�g�0����T�W!̜ t@�R?za��P���I��3% ܹ�J�^�s�=,�e_��L��QjC-�Z���� ��^=�/;P7���Q���Z ���ђ�G�7�N	����g��L�<�v��,�Zz m�4�s��1��?�t��K��?���N Y��H�8��;����y�cw ��,��� �.�Z	�>��,೅����V}ug���-ޣ}��a�f"(%0�� �Is%؍���	<v����`���hu��z %P�t�����e�,�&����a-`�Ѧ����(�Y���֡#A�u<��20]4>��+0>C[�<���+�<���c����� ������+v���E@�m ���@�|
ͣ�N��x�v�EE�5��mny+�,�*��i���̑��#�� A���?�i�J&��`�Zu�<���f��؇[.$~��"u��\�?8#NӷC�Y3]�խ<�u��xY8/�{��G���GzI�ĺ��ֵ�����7���W|�x���� ���)97i�q��6�(����' �����>��T������\�ְ�1O�*�tĦ?c��ɖ\i� ��x�8�Y=i�����~>�Pk�yqЁK�Q�트��$}dO I���4�+��Z����� :�s���E1��
��ۿ� �aЎ�f�7����kz��^��U��~�Б(dajQz��^x������,��U�ѥ\�N�o`|�W*�d8�d�i$���cA���ro{btPx,ZV@�DK�Z(hH���Z�M'&Ә�kN�R �g̍��}��xV�żg/S�j��P�*�+\��.��3����n�0^�g�-i9z>��=p�/{�c�95���2��8J����II�4�"�*����p̥�!��(ۥ_R�Ȝl�������`�¡ɨ?�� �$�s��k��*@e�=��iv"�1h�:M"�"������)��S�LP� ����7A�2seS� ��K��@��4�vh������(M ��'�Y7v" w���/������7�T2��>�b����@)A ?V�vр�I���� w c�����H�PHN��_��/�x 2�ڸl����_�oo^�3>d];
���
ߓA�)@�M�=�7=2~
��^����Uw�}iq&'r:`������G�d����=���UP4M:�Q������N]_�`�����,����a�Al���u����n]-��zi������9�a����m��=��_��q��4/�ƻ��V��O�u��Ћs�i҈�P~��T>V��p�¡Xi�3@�7�jU8ܻY����H�(�L���%��S8 '|�p^�/Nb�{�����lYa�	��$Cb�������yg��J#.�4�g�Rf��?=�ư��W�D\ ��<Ϯ��w:8����8�D>.q1�&sz�z����1�����a��@����������y8G>C0= ad=@ ���?g�����~Fz�}P�~ɝ�����{	��ܺR�=���^@Ed���.�@p#�	��{�plR; A���q�Y�cs[��{��k	�w�Df|�����S��Z���y���d��<�$\E�ȝr�I']�:'s��/R:�>�NL ��^��0�Hj�/3�i�)l�x����(U_i��EP��� ���sK+=��]kP 똾�/s}�x�Y�|}�������uuw�|?Bn��^
�`Yk0a%۷����yw������R�cr ��| !�@G�>#��ԃ��4�V�Ԯu�CT恗r���C/�,A�dg�x`��?�ں�~�ȍ���$" �4@�,�^/!��$;$�DFٱ3��� .�o$��o~�O���Q�����L�0�F�X�W^j{q�W��F��0���� Z�{�;��2��&q�Ͱ�����X��_�������U�|%�$��u�}�i.!b��r�gy� �P"�d*8��l`t��Ѯdߦ��&=��}1>#& Z��vɔ��%��� ,�1�җ7y�.B��Ʒ��< ��.]�t.�Y�Ũ,���&���U�]�%W��#����;�CI��\��"Ũ��r�\���{l�	bA b�ڤ°��w\>f]��w�j���ZGO��P���w����z�go6u�������?��`�ւX����Ä�����42쏓��d���7��V�1�y�fd��w�Rg�O����b����$z�IT�/�{���l��`� O�\��e���޻s5�R�3�-�=�G������lNO`�uY�LN?o�x�� ��� �7����,�|�p���89�.@�O�LL����<�I@HV�0-O�`�qt�� �_���ǫ�+��8*�t	��R�unB	 !��;��I��K����G_�bB?��ӵM�.F���������A�$�j���<�し��\{��D �aO&��SA�
��ձS�q0~jz�Y�Yn+�	�*�Z��f�Qõy�c�C,�x�/t3���Ύ�c(�[8��J�F1��}H�������ު�Գ�pZ�+�B�	OPuL�s~��8z{Ju�8ǩ ���Q,l�]��Y������J)���WN��	��%a�;�ʜ�2O��^�7v���O(E ̕��Om>T���'!l�Bv15	U=���HxY�3K@�_�+��	��*y���וֹ+uw0�m����%V���n��<,M ̵�DJk[H���
��V0N^g��g����Y��"F�B����|�T0�"��H���݂�h*1�suU���s��4J �\eBn���j��T" f&D@�W	.���OSYs(�]��5�3���9૳��<�4ESƕ�ps�կ�P�� �ZL	z�OH,?}�L`o�{�	a�F�4�	�ɼ����3��������� &L�@_��zv�
�������U� �IO�GÅ����`��⿟��.��`7��Ɨ��W0�p�p� �*$P��d�ij'�OaA��._0�1)ݫ(��g�L�|��)i����V����5<���/����������������������0��?)j��    IEND�B`�
```

---

### `src-tauri/icons/128x128@2x.png`

```text
�PNG

   IHDR         \r�f   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx��rW���T�����쭛1ވ����`�#��	O�x�O�x� � �	�8��Ũ}5�%��{;�=�GU�f�*�,$ԭ�s*�����nc�>��'O&                                                      ���S���yy�_=�+����wN�{�/�����<��syt7�� ���(���"1/Ra��4;��6�������P-�R�
u�e1�>�^#/�["
ODF�h	b�}1��bh+T�����P�?1
��1�U�m8I�� �����$Y�g_R=��4#�{Hf�!���%�>5G"�@�`��T@ jN��]F�Xw��G�������3��@̀ῗ�`2  5A�'���?C����g0N����qn��`�'��m7�Xg���t  )��z���,@4p" c�\?q�I/�Y3���t�%!`~rmM��`��Pqݖ��:"  � G[��WmO	  ���R4%��f@
P!��o��*��#��
�@E�G|���TɼF`�z�Q� T sm���h�B�8�@d��3?# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

w�-�m�Z"��x�7�mS$� ����#��5��oy.��������(q.ǉ;W�"g;"@jc�����ޜ����K�ME`Q������|� ƿ�j�MtF�6�tݖ�|�g��?%���-b�'��j�/A r䜿G�(�^�s<���ü�Bj �@�4~5�ĭ�/v��Q����]�U�Á��R;! ��o���L�aޔ��VWa�/�-je�ɨ�F�2� �8F�T554�㘊�V"��-j�#o��r�O�_��PR�A�onPC� �y�A9��5�R`5��QU4�(�N�YR\��Q��ے�6��1�M5@��T�Dx����e�hE�-������k��S��;:ދ�������T_�Hf@��S|�-w�I���T�v5 @0�7`l���b�W|�#���f�MR����Tl�ü��QVGѳ��x��).�O�LA%��|�N��,�A�u�I� 4��`
��Q4���^��^�H���SMApN��xC��_��@M�� �K��O�~�DD��zF�s�?�*�aHL0�sP� ź˿(Q�m���Љ��?*��7�ZTr�qߑ
t���3 0!���t�G}S��SD�������@ &%Z��k0��P6�9=�5��Lp
0*�R[8�We��_��,�:~P�N  ��\{8����C?�WGnw�0�Pζ�O�¯_w4p_�ܠ �b���w����ܐ2���j�6��&݁]�2�l��?h��K�QJ*��b��M�v�p~  ��q����~g����09=]��mܾ�`���`�[���ג(�kPD0~<����{��oI��}��b�����=��DW��H�X��
�߰�QL�D���\�	���
�|�����l>V_9�D�.�� � g�(kq��A��$
�S(��� @���j�߁[��w кN8�}��(H�X��o��ܔ������=*n��)vi�c�'#��J���u
EB�d4@
 ދ�^j�����d�6E��bL�b�����=�����x����W͵���'|2�Ж��/�4��1�l �����܋�+�K���L���rzi�ٿ����ښ�>�w�mHDp�bjP^��~�0�@���  Q/���g��;��9`�ݏ��ާW���:�q��G#�������ŭ(���_淙���}1��?��)�Yr�����#�Ϟ��%
��U-�}?8�W����<�{�}����R�̿�\�}v'P���C�%r��B�I@
0%O\e�۫?���p��ق��P�)9'3*sc35��MA&�H΁�����ܗ��|ogcX�������S��~���i��/�f��]����7� r�/�k���.�����s��m����ap�C�;�"csi `L4�_x��/?��S�!
�������/;�'�p����x� g��.UC����f��O:��wT!��/ւ������5g�,dj�#c 8���믋�ksH�f� GKK��:�K2�����d�׆! �@����َ��CPq�\of'�.X4tk.�8�K  Ǹ�loCt���[8�>��E�Q��J���1P(�~�>�*p�J��UI�ݜa9c���3	��g�"��"����������5]���\���1��<B�F�@}���39�&7�j1ٖ�h�UO(�1Z��n����q�b�n �s���ɼ�`Ij$Zh��}�nWb��K�bN-��G�j]�Ɵ�l�p@4Z,|������L���>�V�!���D j��d��;��ҏ�i�{���w6�����"ʻ�vE �J�H��Ͻ��9�%�7��Qd���>�ɛ��1�O8���	y�}�MI��[F�h� �ł;W� �d3�Nh�l������4+ ��o�����]_�G�7��KF�a�����%ܜ 4����c#�X^�6��>�|�QB��>FҒr2Q�����h� ho�����84�������1m�G�*����q���J��/��Ip��~��%�M?�ǁ9E&�u3KB��Ba0h� hя:�c�����ۻ~�+��1�M���[Z��zQ#\�ٻcИ u�}���'�s����Us���$�;�����m��X;�������f�קt���O�̜u1G�Y�X C	�9�Wj/ >�w���_r��OnX[�=)�3E�H�oo[n�B���;�������OB~v�-���!�z@κ�|D��USy�!�$�PR#���Sk�Ŝy�-�4������t�͌2М|Da(��.�E��
�d��
@�'QC5���ڇ��Csr��sICt�����l��;	z
��k+ ���Fm�u<�.���d�?��}40���o�^���5���InS8l�r<� ��CS��ۧX��~�Q���P�7�7)�ۄ%�=�R^���9}m���O���ԣ ����zQ-� �e�Q�aˍ_)/꼹�#!�"u���Y�^�/u1�����J!����' ���"����-7����˟���tSRFO�(��8g�}
~�͢�>��y`9*�� �_��`�-��$��&�V�΅�Ծ��z����)�?�RHr��R���oU=�D"��/���6�"x���ic�{��D������G{S�Kq�:����q�)4����]�͟�_�٣f�?�g
{}�y�z��ԥ�O!a:�(C��|�D�>��M��#����V��%��п%$���~4r_����0���ME�U�vP��Ƙ�/P����ٟ^�����-��3�Ƃ�10- s/^-Ԩ�G�%t|y�����;bZ 8I�����퀟\[��]�R#l� �p/�;�׉ё&GZp2&f�������&Z�b��o�)���+v� �����rV�9�����N�j1ɋ�y�.OR�F�]���%���)��?Ǳ+ tI�V]���$��"]��e��-�K�8"O�����2��i�@�`��me:_��.�r�Ii���(ָx[��&�� 蛞^�}
��H���9Nntg�DEʴ�W�/S]���q�^�"�
���t��5 �x!�?e���9�^|��lw[�^��}�G��u�~�2����?��3o��s06������ز:��O�VS�vh�w$��h`_��P|�?���OL��>nS ��Z��K'���9�h�'u�����j�j0��7"V��~���Ǥ 8r=
D��6wIÇ���Ѽ�����{qF�F�{����8���P���Q�	@��ߣ ��Z�?��A�������1�	�w�u��ءX{�	@� ��F6�CX��:����}�_������~��1' .����U,7��t#nX�e�o�����"x�	��!�@<�G�$}afCk��'ӯC=@���\_}y}�H��F͎0���'�� �~�&R �ܔ�U� Ӻ�n�۟�w�]��\�5.��7%�?��) �� �f��CN�ES.kQ�����U�ށךf���@ߐdk�3��c����b>~�Q���y}�3 Mx�7H�oyX��cgaN ���3{�σ�d��OAn*����_�_���TEq����x�IE���K�� �D�o8!�Wi���ڳu���ћ�L	��O�ޣ@HZ1"�^��T�u9���b(o�[�pj�x*�+�0�_9�h:�>U��`XV�?O�5����`��F�?����ȫ���bJ R�������KogǬ@E�UƯ�' g�����0o�����,  r��ov��4LE ]JG*��>��൦����D �S��mgNr̔L����r E��Ű[|Cў�s���9sg�oq�JH\��ž�����)x����P�y��s��# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

D1�*m��Yj�Ş�`J B.�`�bv'A�_��;�(���|�$,NQ �]�,`pw�.J���B��p����O��D �Ҏ��D��g�i��*�o�	��߶��q1Xti�J@^�6�gU_w�uzv��u�량� �q��y��NH/tX�$�߬|TzB�Ь`��<��6#�`���Uf"�bg�ʋQ����Z��Ӵ0|���B�|�	@�8X7�sdB ���_��{ŕw���X�2�	�[ÿ�pr�	�\�:�y�����Ν�R�"B�O��^D󁿼ßs�z$4���D ���nT [{ׯZ9�5a�9���%1�;0��1�<�AH!����>B/�ҋ��!+t��g|ā?�/��%�f���@�@�:�c�d�����F�:�L�G���ߐ�/`��j���;1��`��0) .��䬜B�L+�`����w���ݻ嶞�!G���w~��'Sm�eP���~(^~K�~��>��+:8u�}
���#���/��]�Vi��"���¯FKK��a�x��\D��IP�<��G�	�����/�_�p(�?Ij���6�j��f`���C&��j��g��T#��uw���bN�臋JA�1����F�7���빹A;'���`X ~��)ߠPO ��ى@�/&a�T���@U��r8Ȁ�ѷ� fGog{���L@����Np~t��֏:/_� z6����A� )����C��h4w���v����x< p&�ǂks���yڧ@t]�Pn��Ͻ�o��W���p���+V��@Ӏ���|- '�@���"]�E��"k���ct��O��n�10/ :=��2]��'&yc�	��_��?��W��l�Q4�#
|�?Ͼ��Ϗ������̜�o2�+R�]��+4����A'5���u��)$L)u�F�]��·?.R�����	��)nE�>]@MgLj�P��g?��^���.� ����b�ݏ|[��)Oz>���{$��/Y��l�ZD J�k�'�T`���|���COd�ſO�^"06�Y���`��:w�0[2�ݍ2��%�&�6�[��%�lm��A�7��nu�{CN�F�փǊ��m��>$0e�6Υ+x�sQ+����"p.>�i�{L��??� %Z-@��5~����Mt:����� D�
���k����Y�E �:j' ���L#�܇�Ml����OE-@avq�[� 8�J��h�:j+ ����5��������~��Q[P��މV<DE���}�	\~��JJ�Nl�����3=�i>1F���Sd��(�΍6_��P�U��;;j/ J���'�"���my����2�3�>U ��ΎZ� �T�
P�1�7۔hw���l�*2~�����r��ފc�γ�hz4P�������?�ý�W�̌FD �ޖ`e�x�����6�6ᕿ�u_d�U���i��"0Sr���N���g ��	�չH��s�a�
�	��oY[o�' �F���Ӄ&��Bp�_�,P�m�u�q�,|���I��(c�B�d���ϯ� ���5���-x�78ސ�?�h� (O\e	_�R�bJ6����BT��^W�9�K��A�/8� %���3p�lQ�=����z՗ϻL�[5g�%Z��8��#��4Z ���G��$a(�9`οK?���S�����>'��,}?c�80�x4^ ����;hs����L�G.�O�X��P*��̮'B2/��B'��V�R[h0���F ��]`���*P ���WGcZ���7�8���㯎�	��g
2Wr������o0�
i]
pkmí��&hep���y:~��0�s�0~�:8
���A���� ��I<ӭ��ڄ���oK0~[ 8FY�+u�US�^�%��y�	s@ NAo�x�@��T��p�b�{@4p>���`p\8&Rᗪ�*��0H���Z8��H��)G{�Pݯ'�)h���~���`��0��uW�k��e�P�94��>@��  3D��i��Rl6,*�ᯣ��<  �Ш��~�N��b��������� >E`M\��֢).�lu\6xu�_��� 2�&��v?��_� h>�xy7�$"�o' �B��.���ݎ�g%z�I<��&�y'��p��&�z  ��������_z<�>d�N�c���:����&���1K�)Bdݎ�/� �                                                      �����$D�'�    IEND�B`�
```

---

### `src-tauri/icons/32x32.png`

```text
�PNG

   IHDR           szz�   	pHYs     ��   sRGB ���   gAMA  ���a  cIDATx�VAn�P�1Q�E���tȢIT)�4=A�	� s�	BN���.B�	tժ� D�"��������������y�ϟ�o�+���4_&?���E�/%�&U��N�Q�^��h�ت�3�����n�j�8�}�w�\X������?H&�� �W��3`�>ê8�eP��Cl𳎇��d�"���eMd$	��*؄�~���n5f��sj���8'�N�$H)"�i^u�]�����ζ�����A���h�A.A�Zp ���hC�IA�y�?޼��Eb*� ~\!5i����HAQ�+ ��r7�]"��#o�K�� Ҩ�?�9����}�g���:oR�\b4%5d�<fz�Ӊd�{�]N3��:�̮�Î�i�H�v{ ʌ������o���{l�G}�iH��a��_�2kL�]���9��,��ڸ��:�%�����8�bgC�	D@��rf�i[�p������L�ϣ�$.�te�5��En�B�a�B��{oBsy֙��>���j"�"�@�s��IHB!���K���0�ir٥i�`�Jܺ#��2Dş��vd�ԟ��v�z�5n����P�	��l�h�a�(1��A@��������:'(���w�����w2�Q�@�*X�=z���^>e�{��t�&��|p2�r� ��NW�yU	��a���r��w��<�ɜ �9�/-{�C��s���b:&��#kt	�=���UX�>ӄ�1���AƔ�K�Q������^v5��3�W���;�"�e����G���K�=c���HD���4�3.-@`��]c�s`�"a�ы����XY������=���2����_d�u��/�    IEND�B`�
```

---

### `src-tauri/icons/icon.png`

```text
�PNG

   IHDR         �x��   	pHYs     ��   sRGB ���   gAMA  ���a  6�IDATx��mrTG��񓷄�g�;Z^��FR�#&?4�8T��b� V�Xb� ���#ܘ�����H��W`���/U�L�+!�Vo��nf�1���ۀ�<��I                                                                                                                                  ���1�g�������_;(�����: cA `(6���w�o�|!&)��E�.r:�+���$��f�d���f�'a �G �\E�_,���.J7�ץ�\��ʿWm��t�� �	 ���;�/�u)��^-�����f��� f$ @����"��+�g6����>66)0-�Nȓ*�		 ����T��?m��д?G[$	 (��$1�lO��0R[!hJ'����I� !! Q���)�vqʏ��?^�����l�d �c$ ��>�������A2 ϑ  �������d " <a�����ۀ�w��_]�lJ'{b�� F TX^�O�*+�y'��O$�6�
��H �
��d��~ �
��H �
����}N��J���Yn=`�H �
 �G'u� C��& `�l�_��~6���p��L	 0~�ҝ �Đ  D�GO�l�D�� ƍ ���^~�X��O���� `��ÈRn`\H �1���n�C�W]*F�̍�w�� (|0V
�D$ @I��cr��0* `DE��1}~LX*��a�0�E �@��v�~w��r?��� �D �S?*&� E �S?*�j @ �S?<�l ��������
��?<P��W��Jպ � \��׿^��|�7i	�,T �s�࿘��	������k�@ 8�~N��A7 x ��  ����� ��O�'��� �rI�=�l	��  G{��	���]n	�
 �W��
c6̍��	�D��uOA����m	�b. >$ �Rw��l�� F� �a�8SZTZ�(0����a?�b��"U�H�  ǂ] �e��7�!Z �B���6�}1��O�`�  x`X$!���[�C���i�� ���^%��"	- ɞ�W��~ JA; 4$ =��PM��oi��L�}��ߣ��7�.�2����  (��:(�|�~���?��|b~1���,c�opt�@�������,�����_� 		 �Q����8�`��O�F�6 ��䇕'5�U��4�[5`��X��� A`�O�\���O�3f�j��_�|�'�	A�t�,���E ��K�=�o�2�v�����+���&�Z4���[/� �kū~��_ʝ�]�~������DF�_Z�Al�H�A�򀐇H �5������_ݓ~�A�<ǒ��20��	 ���_o�?���zݰA�A�7[Y����.*��%K���	 ���L��s��Ĭ�;ۂ��3F��"胑��}vS� x�-=q�/Y����sIg]p6c6̍��	�@ �p��B�	��$�������!�< x��~�"�O���C�MA�� ����SQY"�W ����� x�����+�D��+� �g?XE�n�_�'�j�.�����u]�P`ő ����q��r��Ǯ�J�X\Y$ �46�9�N��O�rŒ�TP)� ���c��ܟ�e��z@����u�t�p��F��3͏�C �T���%Nn�o��G�`�,.�%F�� TN�/����i*N���V /V- TO��K���]���t�ܯ�i���_�;�Wz"����ZeT  TJ�W�ܐ�&����V	 *#��?%�����C�Q�&1aUp%�@uDW�����[�܀��$1�iL T��0X,N���5��q\�5����K�.SC�J��%w�.�;�_u+l��Y���V�T���u���/�?��8G���Gl��@h�<L LUDx�f8�ASC �UKbx��.t*t�@�.1�� LM�P�ꪄ�U���叁u��Of#9T	 ���JZ�T7	�UI��Z�E�����]o�.���߭|%��Q$��� &.��N�[6���d��h��Y�P�!p�� `������%*w��+��1!$ ������_J��xP��q��0E$ ��p�}	���b��	�'� ��%?�8���*F��Y��
Ǝ ����|1-uæ�ǬQ? LD��]�1LK�r��'	/	�
0$ �� O��s�<鋩*
��	U�q#��y�ww�y��ߝ�����*��� `��;���ڇ-<�}QO{U�*�8� `��<�3���U�R	U�1"�xw�χ�R*��P`@�(��Ƅ c���=���*�
i>eV�_�VP: �ӊ�L�����?��V��0�/�� F�$TƁ� 16���/��� ���K�fZ�N��Z_�,�K̎���/�� ca?|V+���A~�7��TKfL�|�� ��_����m�ي����3�%"�X��K�lɼ!Ӥ�*v��-�^|L	=�ϩ̕gF��u������{�͖t�%�t�&�*�J��W��)	 �N����D��]��:��U�%7����$ (�n/�"�9me�-[�ߢ���m�20XZ (U~�(7�������3��S>0��ޱU�}�]͸�bM�Ȩ �T%�2�A?1���������f]��^�satT P�����_"ґm���1���s7|t�ܶ߳�sDlDy|]���k���F릹Ѣ��I�V��S����e�"h�4l��^7������- &ʓ-���:�����R������@���߲e�'��)rU ߯����- ��ۓ;[7�7��r���.�5�Yl��m�Q� �$����z����J�x?�XT1$ ��D��0�_������jʗ��^f�GH 0�n�?-��	��/:�D|fLC04n`d��QVs~��F ��F ##�>�M�Y[	  �,�7��۲c)��H   b�y�_i~����SC  ����a@��8  ����^_	�:�PX`��W"�	-�/�$�����l���ɲ�B�}�eO�/�S�Z������|��` \P���vC�;���G�Ϻө[)��w$���u3�J���t�u��#! 0�cA���d�զ)��A^�Fit{�k�%]5�-�M3  ���@��_?�����S�ՀU�����\+����� D���?�.]�l8���_3�'����7(8���̀�Y޹,�	 �R�_�$�����G��Q�޵�%A_���d���T��-��=Zóm���'r]|��@�����$ˉd�v]]ޫ�?5�Ƭ
����c{�Z��Rq�Wt��f��u��2���9\�e�G��E Aq%��7mw��[��b�}���������?��sU���ԞoR��m ݰm ���
 ������m�lE�tmZ���o�E�X��O̳J��������w[��U�S�[^�0�A�� �K����F�������\�g@����»�����%0KK` �6@"�% �M�A� ���au�mΤ��*��%z��;������pܲ%7L�[�7�?,}a���Y�{ Pys�ws?�>�y�ٷ�ߕr2"Mw��6ʝ�����
��5����5�$�?�>:J�OT PI�0�-A�����=������5����N�*�U����\L�9������&@H P)�oO�]��;�Wj�?�l	>�ݨ�%t�$��v@�^d�o\����M�:�/����~�.-�0�PL������A���n/�"���`#`���Ը�oO��G���e�M����E�w;��t������z��=� `��������WK\Ͽ.1J�c����>���A�	 &�������ϼm�2��_P5MA����e�xu5��2y)>jkC�	 �Ν�]�o��-�O?�t>����rT�w�_*+<)|._�eTu�@�����_�S���O��s��$Zg*^�K�7��	 J7��������#/��4k?}{�h2�� ��	 Ju��?V.���T-��u�Y�j&���3kT������� �8\�k4y�U~9��kM�ʯ����D�,���W�.� #q��+?�m����7��ڝ6����;U�3xY5s�	.D���?����FԏS��Az�ϩD,����� '���T|�N?\� s��]�_�y\�>�y��N��BfMpR*��	�H 0�����v�7�?\�S��a��'��<+7z�5@�ŝ�ۦ�6�5��BߘE^(����%��d���������BT Г��#*&��Ւo}2����- v�D�s�}l���.y�U���h*1��?� ��x�@O$ 8��ן/�����y����|�%��$�����3$ =� ���{��^�3��o�#� 6���ǥ��đ�~��5� �dٶ 0�!8��׏1$ =P@Ε�;���6�a��ȯ �U͙�Y��  �S�!���3�� �y�a���#0� "��/�y��Fn�U�b9�;�I�
@�\��]ۭ�%��|���UJ�/u��H "4���b�,�bbN 8���;� 2|���I'�~?N!��e23 ���C��1  8�
@$���+}�u  N��|���] �@���6m��k~q����@�;�3o�O5��~	���|�	@�������������� ����I�``��?�_?�����E��|�J"�g)�����u�gE�?.d�g?�T ��&�@�/fb�|��
���#�% ���  ���d[0U�&�����ܒ��������sv��- �7=P�[�k����&�f^�&�����|!�!��S�n#��1�a�%���_���
����ΞH <��%�H堾�w��v �)��g�� �@�������jjMVڟ�z9]Z����h�����w��C����~�c:O��}��n�?��Q�A���`��ٟ#��'�x�ȘTp! O�E?���gL�_�i$�z���<!�#�G69Z����Ȧ�H�ȿ�/���B$ ��y�yL�?W����������������u�YR��z"8��#��B� x ��]��c���M�� 2!��K�'y��g�co$ w��?V��?��?�n�@wN�gIdY��
z�Pa�Пv�ҿ �旚Ĭ�K�,�H��� ���; }�Pa��_Nm9Ot������r���L�T�8���� T �APQŎ����膻ÿ{mᑠT6	�`/@A��}�X?�D��'Z 4��ժƾ��h˖�������:zG�#Q�t�{�����1���* ���b�x���#�{W�(��_�bntK��B��� �H�
@?H *&��-�����| OP�
�(����{�� ���ς�hT���m��O����tͶ����Aޤ�߃JC|�J��OT *�[��﾿�ڗ��'�OUq+���2<�������bC��
�BP��/�1���O��_�<�M	�TW����b�|+>2B�O$ c����߽�p�G{�%�$������W#��7#�*W�o���D������f�/�
��'�U���h���?ů���K�~�; ��0eQ����:ڹI𯾣J@�����@���$ SS����۟�v3���T���;7�ޑ��,��I:Q3~��y` \�����Կ��ݫL�{�-ʱ%ᗶ$�P�j	ؒ��
�a�x��a��@� L�-�G�ݰW���Oͻ���T]�Կd��l��"���f p NA��ߘ�8�����}��bO�zK��+�~��c�D�����1m T �!�]�n�"���ـ�%�LG�q]� �S��2���+�#W��@�����l�7�T�{�I���D`�~���/-��j˯�2I�߈mM�&��a�;��m�����(�LP�w��?���T�߰�*�m2АqpS�F6����a�d�l2��~�Y0����`H &h�ǽ����*!"����JM��ir���U��O��k]�|���╷��z����-�	�O��^��qBQ�����������mP�K78+!p'������Rڟ������PH &Ė�����Ĭ�]�'��B���}�L[E��w8�͂``���+/�\O�!r�����V<�[_e$�� ��D塄�m������w5sW����y8$ c�/�	�ڟ�6��ˇ�|��w���`�B\�c��wu� �_��Ϩ�����O���'�d�[�{�ӿ�W�;���E`�B;��t�Ó�@(j�ϽW����� �I���Ĭ�W	�@�ӿ����#�0&j�m	��u��I�U��������:q��}��$������e�b�������T��Ѻ)�10!����� G��(FB�d���g[����p���ϑL?g p4T J�1�`&�m�����{���&�t$ %���������v��$�{��J�5�]z�~Ŗ������R��<���F�;�Ȩ �)��?���������nQ|���Ґ ��]�a�� <��_�I*|>���$�\���!6X�&I���k�����
J�5��Ῑ��_�s,��̵������ɒP(��� Ԍ�{��������_.����������� �����P��)W�JF0"��O����[�_��I�L	JE0��ɾϹ�?�@8l���Ww�_*(	��tM<Ƶ? @��S����		���s�����N�@@l�-�u����76��j������u���_����$f]0T F`�x}m��?������J8Rscg[0$ C���N�����E�<����9]�	���lY�����!���"/��	��T2��ؘ������q�7��[��6mowk���^[�# ��/�I̎�Ǟ�wx�d̨ �#��1��M�⑟p��|���$� A��������<S��Ǌ��&��w���D� ��,���$�[Ǯ��%D5��vU��h@����]���6Gf=!���ٙ7�E#Z��|�j�����G��ULj�M�̴N�&��f�%�	������x�tBH ���?5<�9N.�_z���D���&�&����z��_�����lu)���=�;�Ҳ�a�������MAԎo+�=���H ���?���w���o��������+�_�p�UW~�K�7�����D�E7��?Y\�=��R|8{�m�{}m�k5%�{�k��kf'������]}�vN���J�7I &�!�������1F(�����w�� �l��q3��i��W^�y� .I�w��?y$ ���o��8-��-��mY�H�V\�sK~������цxȕ�w���ʇ4��ݵ�t�qC*�0�	�ӺMT����I��/�
��z����p�N��<����2#흹���{�;�޷.�c�o�H �䦽}}�������|o�ʧ�s�=��C��<����.|�}��?�_�T2��M	@�j�:�����=�]O�>�u೰V{��Z������D#�;L	@�l��+�SSз+?�m�_� �Vu�5�yFPmn�_�_r�J�J,��?����o��I\C��O��_m��>�I���߯���F���H ��g���鯼���՘ �ґTӱ~]���``�G]޶�hk���B��J��"n�`Gk7��S����}j�id��.W�o��*�
@܋n�#C���X��sT	�v����߈����Ő �����@U���ʋ����I���G4i^�����e��Y��R���>���⡎�yW�n�O��(�MVY49G�����O�}�;�#U	@?<� �������
��6�Ǿ.v*���g(p��:_�~�iԧ���YnQ�� �~��r1,�9���W��ۆ�����36	��-������Y!��[�J"臇 [�m
Nq�1IT}�4h�˕�u{i����c�2�{������/���.҄
�Y:�s?���I�������m��L~ߟEdF�C[f����_ <���m�_|�Z�~�p�h>
�q^�;��}��#���xZT9H��xd�w����U����)��L��=A� �`K�_�o�P�?������ĉ?���ؾ�M��~ �ͻ��[�*����\��J�}����3�L݅T���आ�|�
p����ǐ	r���$Y+��z�10����U�* J�8w����l�ȕ��N ��Ś��=�������@>�D <F��[A?ѷ��$җ��՝�g��C$ =�&�} vfj� �r���k��h �r�<��)�^�-������ W{�i�V����A���?GO� \ ?=z�=$8��P���b�m�L	f�I���?�|�捇� ��?N�z���T�� o~�ϙ���@� \��5���B����CN�f�~%����bn��-�H ��Xa�M��?�L�x�2a~�|�[���	@`�
�M��`$#q�I� � \�� bLFP0u){h�;�|��F�	��,����
�!��.�S�x���1��H ,����O���+�(�?p$  ���U�%��H  �Rkw�Xq�?$  �C-�<x �^>k��-v�ǃ �)�(�0��- ��p%�M��2�?FT ,�r��a�t�5�;��%�	@p���5�
���e8`�� .�bR�jBP0�r�����~�%tnد{�?D�
 �U�Ԓ�-�Q������	��Lm�@= ���G�_�t�`@Fmy8V�����~8���m
� .P�����ҥ����������,��a�������5�7޷����_��j #�5[�$�� \������g"���L��/��Ib����Z6�2��#�E�[&�S��?�i��k8-j̦�LCh�%��c2�������\w���~u����������}��	@>��f>�J��
מ��L=l{�E�-�ӿ� N�C�=؞z�����*��\`�M�UX�t����~��S�*��0* =�Q������m�Ğ�p.�䦯��=���� ��>��1
* =Ml �ɸ�vB���G3o��3N��8�G����W��*_��
@/�����
�)�
`[#��S�鿝�c?��,��swȯ������O�7Ff�
xZM;�x�;��<�wD+{�r?Ƃ��;ɻm���N�|���G*�5�O�_6˭\�C�H zȃ���Ƅ� gr� T�1�:���
`C�Du�����ؐ ���e@*�!8��h"wN���BU ݀_���>?ƍ�j�� li��9l�۲iݖ�L堭m�C&���ˇ��>?&��/��gܣ@���i���׵,�(���tJ	��&��B���K�P�>kΔ���y6��{m�W�
�
�I& �S��m�C�Ǵ� ��ǫ��B�^���7�w�{{SOURCE_CODE}}F[{W��w�!��!�w��S����/I*R������o�Li]"н�׹%�X"�2N����Ϲ·*!�C�E.ϸ9������wu����
z?���ܤ���ܘ9<�NU�[ }�o�w�k�~�����^=�$��܋])�$0���ź���?��-I�:>��'��)>҉�7�璀����2*W�]+��8��T ���٨xǨ�9 �{�ɵ�J��������[��=��Ԓe7,3�n_K2yBO�2���w�gg޶��,&�ѧ��c�������n0�ߛn/����}��ǂ�w}��` �?���2 ��������C&��M�r�Iv���?Ž�����<;�o�~K�٢���HҴ�
���: 	�����ߚ�j���$[��~�CɿO���G�7�g����6�|��` ��X�q�]I�6�pv�/l�j@�cj.	X��1.p�����sJ��|�ٟ��t�%��0����_Ԭ�#>2���w�H\[�*����w����a� h���/����r�����8JԬد�I�~hJb:N� F@0��{OE=
;�� �s�/���5涌q���Di���d[�����ǩ T3 r�ԧ���u[���w��Kj��-�L�zY~Ü��$�DL��������? ��
�����m��g�^fJ|r�x��}b�H:I]M6k[���1n���}�m�������k`�H �����'�5ނ �����)��  ��h���u�� @�H ����K~�Y5r_  Q#B�t�h5�_�����  �E0$#��U����]��*�m�_y�fy02�!���w�̬�{����̛ξk�u>�WS�� �x)�)�22;��wT�
;����M�D�$ �0�o��d�* P=��܋݇'έ��$ #���~��F ��<�����~m>uO�^8����J�&��_�c|f�XL�+�ϼi�ُ�}lm�]��)@	� ���6����{�	;<�ϼm�r����(��ٻ��\[g.��/�`l��_Ԥ���i�����~N�e�9���@6�o��m kƴ��(-%s��Ko��*يJ����*�R�M�?�DP��~q7�o�{��`$ǃ��m7�����?�E��!w]��'��������``n��%�}���+���o�6��D�,A�6@���9#Z�{��@ Ч���s/^��6ھ�2�v�a�c@�$�����ܵ@�Yb 8��)�!j�����}9�nJCP"�w|�]c@>�LtѨ�L�ͷe�o	P2� K�0�Ә�������D�XȳhL�Շ~{���'�i���cA�D��h `�d_K�-&:�;�'6૘�T�'* %�w��ݰ_���;�!P� �W����nOЋbj���&[�,����hb�T���U=�d]�1�P�P6�:�h�s�]����y߯�j���M��0.\,Y~%�Ȗ�������jQ���o�$�����hÉ4	�'�q�䑄¶�Z򴾳�*����cK@���� cD0�:ݦ�-��@TY�tڒy]�����1#�в�5w5P�����u��"��I`p�Zԥr`2����BK�
���+F��w�}m� cF`�B���~� S����ZP}��?&�`�B�p�y��=C��*�;��,�i�#��1I$ ��,��kV���(�����Ӑ��q��$� �Y�U �VV��W�d]�q�m�n7�L	�$�Xp��'	�$��o6��+��I#��P� 9�\y�w[�1˓M��M���@0!3��Z�Q�$	�8����ZN���	����M��z�$ ������V��N"��1,�����7��Ю.aQJ�b4����܋��-\`
� LP�R`��>�kdVkf�v �z�ϙd]�)�0�?��W1u	�������t������Յ%��
�����|�3<�!D��vֹ%�� LA�Z�ْ�%���	� b	�6Cf�SG0%3�����H�X�>����6c�n�Ϟ�	0e� L�܏��D�N������I���Oz0������z߳0�� �2�<��5$*&�h�fz�r*�5�����:A>�s�������g��Z S����S�5�yv��?V�s��4�<�(��l�C�� LY�!p]"� ��S���^�������,&Yg�UB�"�^����=��֙;��[���T����ڷ���-�x��[:�%���QUT *$�[Sy�w}~]wů���n�?w%BL���H *&�['qK <�Hc��X�N��*�P1����Z97 8c���ϝ�ݠ��E�f�������o��(* �NM�S"��v�S�������?C[ۗ��G�� T�܋݇6
F���M6m[�m���'�M�=�ې���u��<��4�
�y��+˕�g޴עxħ����
�����S�=TS�����/�n���Cŕ�������c�4���jULr?��3����D��/H <�~��L��|Ftm�����$ �`(�|$��J���f��������C$ �������"|/�o��@'�msk`t�����wm�� �!�C��s��N�h����` ݹ�Ey���b��R����.���3.	h˥Nd}2�RI6�
\�负ȷT����?|G�!nmK���|R�.]����������~C�?&�  Oq3`dQ&}5�T���&���ꟶ�	���^�޷'�u���F�-�t�C��+F�odY8鏌�~	��HJ�^b4���j�r��|S<R���I��?\�C@H 0��զ-g��K�~���&�K
ڟʹ��6����z_�Zm9�A?[�>ƃ���� �# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

�l8-�����=m�4YrЖ����.�����v���Ꚙ/TM�������A�G�H BP-y�`� o+����W?�c�{��ػ�pO��� �$ (�M�6wy��"I 0:�?B���{}aը�00,[�'�#t$ �"	 �����G�H � �a�! �ô?"B8�av�}�	���� #��@�|j���s������p�ʁ�de�/��D� 2�?�/J��S� v*�v�s�'}+f "����V�~�-u��h���ؑ D���C�%��"���?�������Á�
��� 0��h��y}�O[ G�ܗ��V��3�����1�܇� �		�0�����%�?p ��\ �gK����G�L$ 8-x�h��unq�.F gr-���^ZrW���-�s�� �4���{U�>� T��3�Ye�/�?* �i���f�=pS��)���`� ` TP����P�@��8�#���Q��m�1k~`t$ {0v��JG�R{\5`U��^��-��K��@iH P�+���m�y�A[ %hJ"���� �X0�a��~����}�x� `��|�Q]%@O��oO�{W���#�ع��v2s�AA����O~}D�� L�ᠠ�a�� ��t� `�+�"E�*� SS�ٙ����W��і����O��	��> T��5��ܶ?lB�u>��H P)�?�Z���e����2�n�1[~��H PI�������4�lQ��� �7����&�U��@5q��D �\���oMǵtE0=6���~�>�' x�����[��	9�ۗ~}I��	 �璁Z�w�I'Oh��Xy���� �q36p5�o\+��FZn�O��Ey	 �vX0�6�ow�,
Nj�%=�򁸐  *.!�y����*.!02+��O��i�4�	��ċ �sˇ�O�&�ɀ�h=�J�MU��;�k"��Vk��ǟ � 8�a�@mu�(1��A�^�!�n�7�7c4M$K�m^����RN� .B ��O��E�ݩ�!�$��l�%�I�$��KT�����������?w���90&;p?v���$�;���f~�4                                                                                                                                      Pq����z��~    IEND�B`�
```

---

### `src-tauri/icons/Square107x107Logo.png`

```text
�PNG

   IHDR   k   k   p�|   	pHYs     ��   sRGB ���   gAMA  ���a  
�IDATx�]r�ǻ�R��P'�2"d�TU,)�2��<���:��X>���>AU��`BOqD0\� ̃�,{w;ݳ��I`�vw@�,K*���3�5C���������������?(�:�-�o1��A� �xj�9P~9�Q����ڈU�ӇN�D�Pe����߲pC���E�>/Z$�p�,\��b"�@lMU����n�ֶpb�*�4�,ړ�,ma�R{R�O_@��.�?��Y��5E�윆�H ��:�,����{;,��%��s�Dڄ�Z,j���
�f|^<g���B}	>!J�����t�},H�<��	)�qH����>/�nA��Q_y��}p�Z���I(��(�olRG��� Y����`m�������R�5�`�X�~z|��gٶ��V���XjV�{}l=4���5T�X0�I)���p8�`'2���R�P�]�����'.ߏ�g� (��g/�im%+�/�q�ò��A�څ�dja�j]��U����	�&��J�y" ˢ�56*ԄR�-(����h]��Ys��I`;%�5�@�g���^*���լX�kgpq	,�ڡTh}�LUA/���j����l�#���3�'Yk(b��l9_�ް2MY�9���M�������_�
Y�غ�Z����N1�mE�m��^{��v �Ո�l1{d��}IW�{e9��v���7�� �Z}u³>�����l����6_�����U�r.�k��|��G���>��6 -�P�%�B�Z$�t��n��6pX��F� �b5�H��O����QB��,(��51���z�1e�����@c�u��Y�b*q��A�����e�6��l����[�&V#���4`�$ ���X�LPv�`����o�Z���!�sBfR�e)k����8�ϖ:	�҉�1!�&U=���ջ��Ͳn�{3��XW(�ι�\0x�)t�,���ZĒe)z>�<T��`M���X"/�K�WR�rt)�Ec�Sn�R�\�����g��F?���t�5L�V�;ٱ��M!��5�7�÷������������Tc�$cA���ݛ���]�@�hL�U�Y��"��!
K���l9���ؙ@z�������U�n֌���,Nx�XM�^�i��.V�}6 �Y����?��ղw	*Y�+�t�.�-[�2h�	G��˳�L�2�6Ɵt� ���cV`^'��8f�UZ��k��H���g�V5*y��*�^�8��4��:/{=�}T��Kr9��,o��!
%�#��ܼ�+(��x�@�`G�-�����ny�BU�n_�Erċe�Xg�Ƀ�!����^�[����H��v����JO}Ԋn�g�9{��b� �fWJ��;4F=�����0�r[y�ܻ.��Q� ;�z#��"�7uƱSa���~�@d|j�J�I-����1t�ê��F�����P/�������`|�N�������I���ҞNX��8 �ꤲ��Q��7-��=$ڼ�z<��|��ѝJN����҃���&n�`�7�,��zv)��Lfs�81��>�z��Ћ{���i��ľS�i�h�����J$[q���
X�l�o�$��A7����T뵴�h��H8�d��g����?4.���eZj�e�0Y2��������ȸobr��;N� �d-,k8bUl��`G_�c"���"<+]s��R�<���>�7-����ەDd��ek��]�Q�ʻ�r���"�>�@�9)���l��}���cX}�b�yB	����������r��l�H�Qn9���@���X{d��Q�uN���:��)���~��(�r

��l�䀷?�����"�k������l��$�j�Y2��j©�&��p�,�0�Yc���,�(}��GǦ=��6 6ȵ��m�"�{:j[�.�qϚ�����|��j?p���[��K-�����}���4P���G�C���ɲt����SɭY-'�VFw_�k-�����Q�>�p���U���*wE=힨	N�\�g-�O��1t8~�uΗ���>�e1�2#�Fԡ�ӿw+i5	�&Ou�^��`�tZ,q��4Olt@��"r�L��BC8[��R)-�$WX �/SI)]i���K���R�i�5��]��v�)�������^�����;��}
�PZ�:q�.�8�>��V��v.������I���3�����SXZa94ipiO���D�n'��;��E'oc�PF'4Q~*^�x=��zt�)	g�����&,l"�����J�["�A����ׄ��
%t�s�/�U,�J�Fi���/�Z'{Mg�T(9�����N�K}����Xڕ:���Is���"���z�T�44=���xL���=k.Z��{��\V�o]�r*�Ț��a�5]��K%b	E�����ey���)�~{_�^�%��:;�P�X{�����\�����hu��'��{�z����(�7�TI�b	���@�*KX�J�E,���xsxV����3AQ�����6Q�Q�X��9 �]���Iɶ�s�bMfY|ٛ����4Z��⠚�\D|�h�4&ք���sNq ��C������kB���٨��=M�p�hOکU�	��uemrV��6���	�@��)�4���o�(�b�|�.��ˏ�@���sJ��/~������������������%��sɷ+�    IEND�B`�
```

---

### `src-tauri/icons/Square142x142Logo.png`

```text
�PNG

   IHDR   �   �   ��0   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx�r��_ϮIHY>�GA"NU���G�r��:�,'@����N�8�Z��A�����$HD�	X�hf:��̂BR������
c̮��~����Wx<����x<����x<����x<� �s*rsa�_3�7�/DfH���cH��`$�Fch(^8ǀB	Q�P e2��0Ɵ��� ��B@C���A�t���7y̅r$��?6PHO]�H�Z8��
���'�/#�:$�
h�q.�sH0��b��!+�H�8¹N�s�L@�]�@�F8r�	��Q0G�\�CP5���Q'��x�����X=��h�8ee�Df}����X�hV�X�	D�ʥ:���	'��&��4�J��uI"� ���B�DC���Z�5�1��EC�&�F#����b᪬�F��9Pu����L�ן<��Oo_�c��h���5d������crO!pB�I���+0@��,�ЖQDT�=�e1O%�f���cg�1G�G^��o����/
��"��@<P�ܩ��p2_��4E�*��0(��Sj��Y��?�GPrI�V���G��(�R����P"N
�)�)�5���>U��U(	7���5�=��S�L,Z���XsJ�w���(UL4��ʓ@�w�, �3���%�^0*M喦�-�(���r�<]��pJ8y�43j-�	*N)"����pT���� �	Y�k��2�Y�X� 聙��$�	�mQ����}��C�J�ڌ1��y�u�ݺ�g&�wAujڎu�8����"d��ami`Z[�#J Y�GL
.�%��q��I2��M�%�����2蒥�LL��樠x"r?�X֚.�OH����:�1XN�c��3���Q���s%P��Ha���K��U��q6�e$�;z����D9 fjoq�,u�������4�K W�~[�F��\<�yOvb I���$��	���1�	�{3S��2Wi�����0�=s�̀[�ɭ�k���bq�50�pH,��- ,�����x6�����e�����8O>�����#�l=���8�;93�l�;����~�F�P����o�Y4��}�>a�I�],�9N	g�ً���������2	 �D+`��Y�����>��p&��B<� Ó+%�04�M`m���&�<��7��p��[ �t�L�w<u�bc���`�kU����
㘾l�4h��y��w-�or�d�R��9g�3ծV����01��.h�V)uJcFMr�w�}�[-B`�V�NK1$�Vf� B��v��a��VW���}gE������?v^ô�
8H�TL-�C������G�&K�Շ�)V:�{�c)�\�^B������	+�OcQ��2����L��I�P3���>%E�L%¹����̢�w�ݽq������u�"����b����Qy�4�
�H0�ݿ���N#�ky�oq���#��(*�̔nq�>rS�O�����%+�eu6���_0O�&��1�p�U�2�kN'��\������Y�\�%���(�"��''��.�(*X�k��2��N��̩:���.#�g�6�r/w���tI�}@�<��J��)��vn\)}{Y�8��Z��R�+�d��u��+E8TN0vQ(���R\�	�k2�`��լz6�eeۗQ����Z�*:Ea@|�&�hv��b��%���ȟ:�m��.eH��A!h=�|���XNq����E4�Q�r�lڠ#1+�N�����¬Y[@�����d�ϺD��XN]�؆�4����Galm@Z�����S����^'1�6䦬Ylk¹�|w��$�.�k.�	O[`J��ܽ5�R�9ۻ�O�ͬ��u����h.��������uE��Od�.++�i�O��	Y����~�.�v:��o˞��X�㐛2H��BL�!1�8>��Tufk�ݫ�uJQ7��J vA<IY�mh�FX��Bk�ZdK@�]��w#�� ������*F�x����`�ֆ`_s���i=	䈫{�0J04=q�Ƨ���ۇeUߏR��6��a��.� {�s$��"��u`�Ü�^��J����ΠdP4�P�?j+�D�.�/i�b��`M�+��i��["���R&	����0��U�+��ܗh�T�?>���I���p����y��A+���`\l�\T�7��Gj�����CW�H���2JxQ���&���E�0���2�,������u d(Ꮊ��늮��8��S�&e�S`�:�r�=Z��(��fV�P�4�\�I�kgZ�����g_#�d��
{#��¹����Ñ��U)�ZX��BP,p�cn��k�+��%����,��G�31Y�+��p��v謴��q,����,�g%.@��q�!0��2c�9����~X��±��U���p}Z�Ev�h�n��
ǤE�1����:0s ��P���cur¢e/v�Q��t��)~��0`�u�[�٪ON'�.)�܅����UC�"�>pp�K8>^!YK+s~�#u+�b��ݖ�]�XG�U��8%�Q0Ku
�O�Fu\;�l�_b�:�B�"(��$�(����px�������1�L`N*��<5�
����6�e�6�<�W`����I��c���	f{먺��. �@M8ܸ2�|��a"Z�Y�Q�u*B�ϫ�p��$�\}�.b~���Y��s��[�G�0�?�X�ܓtG��VR���#�����>����E���%}�$�h=)��1 �R>�=����7R�y�b����I>%���|����U�ESE��.V�_l��S3���
6l�ņ��/���� �p_/Vbb�����
c�������B�ٯ[dq'�D�_��g`��ܕ�Y�w��ϗm�t��Q�x��#�N�Dy�6�0�]��X�8Z����x�'��Q��xA�઄��.�{b�"�Iai[<'V�C>X��	��$��q�e����򯓖��ϲ��F���c��m>W�+�N�ü:�"�\�C���
G��R��䬨;�"߲jt9�k��������5�j�����-�|���yǶ�YY��)IH�^w�������f���W֡@9��SW�UX4H�&��1J�rI�Xn�V��C�pɰ�\���z?���%� QGu�Z�z�����UQp��K�*�CkH�P��"�0I؇�1X�EbϺ��t���U��9�cP�rh��,�X����cP7�8|�I��!�E��u�D@�t�)���K�Z���ku}�|%�!柽�I�d��|����D�4������"����W�2�X}��������( 1JE�J��X-�����҃��-� 32WUܒm��P�MO,5�m�R���S$��m�׋�g�$��[�	��Q��Ț��
��~�q�i��yT���O�rWu�m�d	���0��N�&_F[+�s:�S��9냮��Λ�p_[�Z#�CVF��B�0�΄��_,�T]3؅�Au� V��]�Ng���;����{�&L<�v�<�;%�	\��4��2�-XM�o���칓�9LV�
n��E�D4��=H�Z�4w��sreX�Z�@���B�a@���J����ߞ����(���_L���PN����)����F����/��گ�E�x<����x<����x<����x���k�����    IEND�B`�
```

---

### `src-tauri/icons/Square150x150Logo.png`

```text
�PNG

   IHDR   �   �   <q�   	pHYs     ��   sRGB ���   gAMA  ���a  IDATx�]rG�3{Ffc��lk-a������X:�	N�8�	'��/�>X�ݵ���X����6�����tuewUO�" AHB��;3+�
 �@ �@ �@ K J�v{��>D�'�(����*�{o$��2������x-'�HH1����J��b�>߈����6���u�*E�&�Z%K�y� q��Q[D�uT:x�&1�GB/�#Ȳ!�,O	�-�u�HP�ܜ-�d���(�����:���Ka��z���7���B�J��ĵ0w�RO�����/,�5׭��+O�cz�m S[.[������:��Nf��<�b��c�^X-p}�kl���ӕ!��=����Za͑���r��Ja�(�#���31���_�Ώ���qhpF\����XH;����~���Y?P�;xU�9��X\+M��V	K(P��r���{
����~#��o<�j��HT���}�j2x }�*-�q5��h�����!XC��{��m�!n㷿lAx/��w
��Ƌ��w
6��O���`����GP3��kI�P5��8Ba�w���H0��h�Q]TG�x�]��@1�>�V�O��f��X�Z�*s�� �H�܄*d�;�>w�&��Xyj���bȚn�E"�_LՂ���s@��㍨��ZUi��i�*?�R�i�:�M��#�D5E[�J1n�e����V�v:�y<����TMrv.�e���X��*���0�6� ������g��ju�7�i����]RY���2�b��:)��l��H/��y�n(J��d�u��#��b�1N��CG?�5�/�����2%/��V�s#�w��F��/��>��I�my#�<h����E8�'�t��A��22���E'�E|
�/��K�Du�T��p	�Z Y�]#�ՅX�`�ߩ�A�����Zo9�4c�:���vi0hu��� t:l�Ŋ�u�&YYya��Ջ� �K=���C([�PjH���:a-=���)-`���|�l5&3��{��� 0t�	��-� ��1e��z��*8:���XDo�ɏ���kqQJ5X�H���$\��1���W��
2��:����w��$�'�:+�D�]r�`]\<�����:�J�?�xW+dA��t_��$*�A��{_�y٤�����8�H���<����+a-?�m}�U�G�����;������w�څ�,tx!�/��K?��*ć�w���d���`e{�:��������K~��j'煵����	N�(�/�q�'++V�Rr[��`���N�<1�l��V���&��:X�\�(�q�ک,���6�1�����RB��m�a7�=p�Ů����,���P|�-�NN�~
-�)aq��"��=ጰ��8��&�ll�'�%!*J��;F�A!Re1%��V�ƅ%g�f�w]��@��pl�N�w(��$�5�
���J�%�ml�y�<p��&��"X,�S�1ޞ�
AM��|����߮a���Vź��U���$-�2}�$HYT)�Tе�ڞ\zq�V��L2x@��&X�
j�z�2��%�X$���F�j��Z9�~eKTT�f�N��R;�'��e�1�[",�P Q�CU�J}�bm��+r'�����/Uq��\)�h6�� 2LQ���*�WQ*a�+u����2��J�6w�[P�#���Z�U�r�A�ƕF{h��kY(��C��L��Ď�7e?F�����^t+���&Q!��u��Yxs ��b~{܏u�b��s��u��A��;��
�cT�m���)Q1��nX�j�wwZ�N&����b�)�X0�c��ݟ�T�<Al�'ƪ�]��_�����A�S�[�*��ɿn\{�|��U/|����-���T���������k��BTX<��?��V���W	�$����gk!�{!��Zxy|ۤŘ] Y+�� q���ǭ���)���h47����F�V�/$���0S�:r1�U��CY(:�&�_���D��Ԑ�Z<����N�`�B����T���&kň	+Rp�$���sV��e7���P0������!D;�*z��\L�!,�w��e��<����{�����ƕ"o���� Sչ���\�^�E�"1���L��`��G?����O�TFZ��d��l/)�Qq��ދ>E\a��gd-/Jct��tW�uW^F�K�u.�\@�轢:�]|���p�O͈X,��*���:Z��L����m�T����&#˓oa�=����Fn;��,��L��EU�h~̢��ޞ�x'>��Z;���BsSw]�䱌�+�݌y�řEr�������nO�R֬�&ꭟ	aa�):�'`r��E���M��.�,�c��3틟��o�����A}����k@�1=0�ן�-��<�B���Fӷ���X�14��������@bl=Skg���N���):,,��؉:����_ �U�ӛ�%��;�b��_%A�+(���Pn�n�2�JaE�I����4}�;�<��:�4K/n��o�r'�6�j�EQ1B%������,Q�O8	,�u-�LX�����-�6+ T�)o�"�Y���
,ý��1�%_*��B:�"��哝DVSǗ�G��kb4 {�3�gKE,#d�T�o�r�Q�Cr��jezx������,ר�Ԛ��md,Vf�b{��n.�3���hv{�>�/�cAM�9v�NNݗ[Ϙ��*⚊����Ow1�]Uj����XPSD������$�@���	�� ����mQ�Owz1�ڤlbLbZ��)_b�����s�;m_~�/��=N�sWq�Ç[{F��$:Z�W�9���]� ʢ`M�F�,�m���4ƹ���xaatx��"_�	���0����SX#����n�V�$�"��7 ށט����d��e���͡5Y-�����	���NF�:���<A�+�'`��Z-=\K�;~��&��,��G�Z,v�K�����#��b�]bF��2=�Ċ�#�w���,�:�˗��"���w�����R�/��q����8!=4�Z�+�+�m~1�]�c�A��n�NY�=�7*2�돇D�������l��De��]�SL>�>0L=詘ΫO��پ�-�v[uj�aU�Z��*�z�X��W'⫵bj��d�z�}�JE��5/O�S����BUm�'��GZTX�j⑯֊?�ƨ��}v&��o4q�E蘪���2Q�E�/P�}��&�\b�m
��b^U��V�z�І��1��[9j�?�V�%���.N]p�\�Yx��^�p�Qј�5���)�t[z!x�M�Oy�1Iq�_��H�A7Ec�ҥ�W�{6W�%0�F�wH�`LՊkW�Ҙ���Ux��>-X�m�"�i����}�L�n�mTX̛|O�����]8�����b��B�^�o�V���{�ľF�!�:I��b��u>��=���#,�k��wj���XlDE�8!,�Vq�BKE�8��o���1f�5��\�Ţb��XS�zgP�#���\3�� ����\Ch���L��]T�s�$�ښ�����N���5�룓�M9�Yp^XS�~��$�x�'�����^l͋�:�7�b�,� \�]*�^	k���{AM�RXSr�}t �l�ER�W	 �A��ka����Q~ǬJ��mc}����>���"Z#���"�zy�z&�'���V�(�9J�ϟ1}�V
�4�?��S���1�(&��#6��N$d����|�!�@ �@ �@ �@ ��@W��/53]    IEND�B`�
```

---

### `src-tauri/icons/Square284x284Logo.png`

```text
�PNG

   IHDR       ��   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx��rE����eC�����a#6�?0V��'�|['�|�'�8��	�&l�F����Ab՜�fu��|Y�F�%[?��^V}?38f��%}���̗D                                                    �L ��¬���I�>_���qa�uY���%N��.X�KBůO�c��?F�;t�-2������Ә :8.���I�\读t�@�����u!�CJ�G��Ј�4������y�U,0!��F>�D�\%�d�U�Z����� ��̀y��Ⱦ���r��'�^₦�B��e�3dN2*���!A-8�W3Ir���65+dN2r�_ױ�
��by5�k�'ӣ�b�tU�]O��ɫ���+D����-�D�[[�A�D�M�5��/�$(�\جP��As��,w���+�� p��h~@��<8�-��ZE����W:.h��.�˥HE}�¦dz�1�my�p���P�4�O��97T8ચ��%�M�v�N�|�&ᇄ�4�A�s&�H����OZlu�0�L�#t�K��%���k66h�����Z�p"�%T�7��w��B�D"��æK`��-�n`��*N�-o,�⁾�1��1�7��-o�M\�~�<���a�	�7�!N�#8F�;�F�Y�z8!l�JV�>g�cL��FdD��j��1���1��]�������:�N��%����z]��l�Y����}j)�!Q�M.}�.TF�0ݨ��1�����ӛ�yu)>�"tZ�rǈ�BL���]P5�[���'
���|B�.�z��6n�#p(�("Z�l�*�+K�{ʇnF>�<����Yq]��h	,��B澥�9��3eZ+��Kv��1�gZN��|e�%���Ix��Q��犗���u�"�M���-j	N���Ň��`M�As���
���wy�ujNM��H��w�J���(<w\���\]��%����1�Ɏ�z4u�ǳBv�b�
���&�.��n�q�������.�S��.Uh��JA��;��v�����}ڗ,��%_���	�h\Z8܇QG�zf'_Z5�$2*�@����&��j0�(߰u.�a\7J�@��bb)�PK��64;a��Z4��Z�G���%U �RzK{����e��y����]+T8+N��i5�߸�3q��]��V�	`�߸��jI��]�y_��s�,�:�,A�]�5�T*�{T�MI��:u�K�F��P�T)o�aS"�E�����Т���p*Rcu���NU����_�+M�rP�T���*����N=[�M�rP�T��˙���}�J�-�{�G'��FT9�p�Щc\�6a��I
"�U*���Ի�!����C�\E_��)[���QqV�}��;W�W9�pJTyu���rC��\J�p7�>5�sƮ��+Ej��<Z݈P)�ͧ<T*yXJ��]Wu�\�.�1����#E�S"y���M��#T�O�[��3�K<��JF<�S�s
ӗ+�|�{T�.��*����=�%UY:|�޼��C&�MT1�/�V(ԮU�<�K�A�S�76��w�2�x�N��cl���w̿6�����A���Mj������qt���j9�f�z��C�2��֙�[�$�EK�z��j��p>ڭ<��U�pʠ�͋e�lR�-�8�'�c��r�,�Z�� p J���d�B`�QD�Á�|�+?�r��ʰ)M�ⵎ�)��"p�r����G,K$�@�?7�����d�/��(R��ⶾ�@���#�%E '��2��G~��o����κ�o�}.�����)��.x�(6�dɣ!E��1�;؛���G�)Yڽ:�J(��qt/Q�*�"���C4�8�Y�n�om�~:_�S%��{3:<��e��Y4*�-�"��`Ie��̥��P�L���t�P}���0��������4���w���^�N�eU��öxM4d��x{�������g6���;��O/��+2J��x%�˔z�{ۿ�i]����GN`s�wz>d��{o
�C���E���:���"t�eΐ������%U Z��<������|�Q�Lbr9�Q��͔6e�_^I�}��H "p*�"h���]j���3�%�p���gT\Z�3l���wD�HVe�,�Z�K���4n鴮�&4k��9oCh��ɼ�K��S�]�a�-��]}
@�Y|��C���Ԡ�b�Xݬ�9A{n��j?�X�U߃K�|�S��ow�4S,��8�gO��V9����*��]��;�'y�Ԡ)�p��Ս�~����·�1�Z��C�������t�}'�>o3�48	4W崬V7S?�O���j���sA�s�?��.�Xæb�K�>##��K��U����~��u�8T8g෹���<^>�9�ss;T��u���=e\��b�������☻d*�S�^ͥ�t�R`�B� ����� ���\#�]�t���2lI��b3ߤ�2%��1x�6�Mn�pb���<���[�5��G��&�8�7��z8'���^7�O]US_#�9�T�w)&���2�T8��~̈́�A�%�Qv�T�;�������dK p���گ��@Ռ.%_@���zb *��);Q�O������B؜J����I�sZ8�S�m�gD`N��~ؘj\�)V��R��(�6pb�lD3�S� �(bo�P��#�E�,��V�����
6Y�u�zk�{��E�Fh�~ڿ!�}�%6��x���MK��[J���黏�u���ݲ�/������D6M�o�<T����ߍ����F�af��e��g��Jx�l�R��?�5�3I&��ޚ�du���(�w�x�,V9"}^�l�*G��ñ��'��BՊ������h�ݪL�EB�Ȫ�l��ģ8�X	1{���d$��pAs����x.t6��ɺ��~�+�!*�NW7:p�o#��i�l�o����տű��:�h5a�����ͪ+��v��
�N�Ilb̄V5~�t��USC�/�W�ܠ����:Y��U�|ب������ת&�����6��a_��h?�եԟ�Xc�O���ѥ���}춹]��)U�q|?�����eDѿ	�0F�S�����O^�����W(M:��QQ�M�G!��'�OҸ��]�:�Rگ�Ф�K��)�W׫߽�E�˨B���R1�B��05Hq�x���ѰI%�ӹ�*�e�J�y��"�w���|mM���	�L���`�"Ш
ǅ�Zm��a�s�Ǧ���*�:�Eh�0��7�S��)��8NҘ
G��	O����q;QMn_���_��}��z������Eȸ%}i}F���׋�A�fY�k�(n�7&p���t�`uv��⻯�����0��ݩ��| fr%��V#.o�b�M,��d�k(�Yu�5W�Q �h�Ԕ'��ܸ�o��H�GA���W8um�K��]E����.]��ؙ����SGuôވ�P��H@��v����;������ ��Z�H\�)��*�}��I\�eE�.\ucy�ꉢ�p���;S��
��py���^�R�-�T�����)$���ݏ���o���,�aGD8��ެH�c�T\ȼ��6p�NR�ݱ7�a��2p.=?X:ɏ�u\[����"+��N�a�âa�I�l�xu�K8I�)$�M�Tt��Y�oF�	\�x�B.����~ F8�d��q��M�J�I�R��%��SY��E8,�B����Q�*n��~�h��Q�F8���[u���V޷�RP�k�x*�
'�B��㡺�����Q𧣵��~�"��ʂ��Au'ɛ�u<u��	���S���|��J�&�׈�FEsy� I8� 5=U��'4�
��Ⱦ���kn�\�g��9KƓ�g���+8�x
��T�hBu��	�D� 9Y����X�"˲?�J�ձ�n��O��ٟ����"����_�~6�'xE>��z\Q��Dy��8����O�\�DW�h%3�|rǥ�m�C�R;�||�&�g˴����gr�3[�Ϯ�4lzŎT��4/�֩A�x�!�0}}�"2���b^+�n�+<����p�Z��lj[F�o@��7�AE�X�7�p<�ba�4NB�ʾ��z�)��s�^7oַ��mSg���5�ZM��~ >� bYNi�fB�*޵���������6
Ă����>E|�w�ޔF�aql��x��d�ٛ�﮸$�6��i�%y�Bn�N�+��2k9g�m7��i$���/��iY�4l���gZ����;�PEs8�Ӽo�IT}ĳ08���\��d��7{��͔�u��rA3�P��w�j�̥Ԕ��q۽A��[�����S֝4쐧p�<hJ#��j�P9���ХԔ�s8��GBU��o�Ձ�u�.z,��q�d���-����Dx	���-�nQÙ�p�� �Q�Q�S�+dK/�~��|�𞱰Ѿ�j��RS4��4��dUO�wֺ�AM�o�N_ĔG�{��Kc�o߷i�����6H�����)��.Y�V���]ǽ���/���9�ug��&n��%�=�w�{A甤�?�A�_�83�uY!���_�L��e��*�}�������R���`D���c4�mz���-s?g���4Af\�H�۸�T�ƃ����38U[ܡJ9��b���ߧ��{o6.�fD-c:p�~����a�A�Ʃ^�����ֆ�28i��[�6�IC\�(/X٭�by��-����+Z1Ӂ#�$�7��oR}'���t��K]�cDf�J[��O���e�N��-M6�v��!qsa��e�f�h�H³,�wY�t�Ĵ�׆��Q��,��b���HUEдA�ڞ�Q�_RTD��,"l^����8i��S�y��u8u.E���F�2�C66'k}����s'}>�p<_>������)w��h]LW834Q����:�]�H<Jh���Y����z�����������YB~E��Q�Bs��L���maa�[�l|���[�Z:9ۥp�~	��hۍ_�T��`��8���$�S��~Evt)�>�P�c>p���?=���F�W��w�l�z<0�w�ZӪ�P�d�z��f�	�=i�-�.U�ow_AUs1�+� �Ô�QL��A��>��ꜭeW0�C�OL=4���\���z���{��]2�әU�LdL��ހ0��G�&�u4�tY"�N&�87<�r��+C�	�A��l�p�o��?8��38ӊF�4����ߥ
q���T]���n8�����U+�]t)5�����R�.A���9�f�[r��Ȱ�lr���;K6���M>��I�3�}��!h�18�=����=�q?쵅��8I醩m��Dzg�{��ڥ�u҃{�`"�ڐ��b,��G�:Zٸ^����?0y|߿G��%��om�Ռڻ�]��"	���G�ȸ��2�e�հ)��WE����Y��om���U3D�g���Kh����1�2�tg͕�T��b�=��:|�8:1��i�����'��,��������g��?���W(">��nʝ����]���~2E5 �n������q�L�{��M��+t��[�gq������F,A�h��+�C�$�oe�)2�2�Vw0X�L��䚼=�z����c�i�$z�@�	����~����	�O��]�m���A����&�����w�9���}��\4������t\������Z�4��"<Q�@��1��ðٚe���E5Ә)	5βÙCwI��ú��v��*p���dZ#h�iи�����D���
��c7Q崔~����Ӡ�<�o�L���G+���tY%�fw^��	O���i���n���ғ����7��јM�:E�->�������UlB_P�+'��xݪ�*]V�=��S�S���?p�7[�Ke���C�H5�
N�	J������	&��%�ݫ�_P������d��J�tò�� W=Jݒjj���ϕ����4�8��ʈ���U�	 =:'���t˩[����Q�lT:��0������:�).�~?��eA��ED��'e}�rb����E[��b�m��QY����m���"�{aN>κ�æ떻Bܥ��Y\�hG�Y	�]q�BqK+ˣ6�l�۝;���G��s��E.���0�٣������-b�C8>��N(��fQ�T#���G3`���Zu��#�'m���9�t;��Ya+�Q��[䁹�Y�;6���O�j�K�|7�!���p�BcZ{���M���^��=�n*���Ȥ�s,�9����aSÍ}T7�jD��^S-�Ւ�6B�\~G��� �n*�.�a��˙�I�Ҽ�xw%ay@5��T�Q�(?+GO�!?�<@�s1u���Է����p����W����?���Y�]]=�)ܙ
�1Δ��M��?1m�}�}���` lF���@�*���q��Jg��D�0��A-[߇�
C8��x�`P���O[�YE3�Uz]AO�>�w����H�TJȵ.����q?Th&�L���nT�a���5��j�FV8S&�VSXb�YBM1ɝ�O?�OL������7ͥs��K����s��΃Z�I�R�ht��o�$���k���t�s���GK����##�])�~� ���QsOvtYej��V;�M�7u�`1W��+
���6W6�hE�(S��C4x�Wa�)۲/�f��1��ԫ5��\��O���i�Y�Q�K-�A�?_<�S�V��$M��m��|,�0m%iv?����Q�|��#�p�ƀV��s������a,C�d�Z���˕��&�[�a��eq��\���SF_��z��JY6]!�)[Z8j��+Ż��q�.@L}��Y2�Q��/2���r�Q��F�����QQ��q4�|��Ϙ%���d��9K^,'xz��;�g�"����V��\P~(�dacK�G5.t ���Q�Aؘ��) t⇞�}�C��^~��x�84r�y�v�,��� �Y����}��y:qp_�����6�����,�{n�x��&܍����:�n'J��֏W��E�)h3�Y4�P\�\�f��7���甊��kXbՈec����B����(����pt�[����d�A԰KuF���o�ֹ�e��z�����f@�sz:Y�O��S>T5̈́�� �vJ�v�\ݽ���fB���OLftP��Gޢ�O�˿��d��B�������"I6��:�>����͇���;��w˧u�i��S���,Q�O*�<}f�5�74��	����<���}�h�����$��V�+�M��F��V�6�����z�L���[��%�8�c����Y�t[�G1���!o��1�;�v&YJRY��K�~�6oM.��!��������_>r��?J��By�w$�Äx(I6D��y!p"�˰�2���IW8u!�t]B̺��,��w��'��cT]5v�4}<�e�P6J�d�u:ý����                                                        ���DG�B��ߕ    IEND�B`�
```

---

### `src-tauri/icons/Square30x30Logo.png`

```text
�PNG

   IHDR         ;0��   	pHYs     ��   sRGB ���   gAMA  ���a  IDATx�VKr�@�F^���� ����W�l|r���>��'0���`/��M�U*ʓh��"�ӣ� $��W%`fz���n��A��_u~�pJ��5)����LX�@>��Z�q��� �-b�;���~	S<��W�)1����M&h»G��`,3�HRL~�G^���ہ
ބC�gL<��3m���
�Y��W�*�]r�C*�k=�9�'4e�j`�m�/�O>�AI�}��ߎ�M�.}����l��D�a+A�cE��BYkq����3q��+Lum��S{�?q�cu��c�J>�;��@Q�0��W��I�xC@o�U� +ul������>]�9�}�_1��hLH��	\���Y!���X�����@]j,�{�M�J2����Nꌍ��Jsd+�JWR"ܳ��W"�L�@/Ӈ�>�BC�K���L��&]_-Q'
<�����H��9Cu��av���%���㚙A�R��Ǳ��3��ʳǉ�����IGi�Е������&�]#���;,E�#=��_.O�酬����/$\*g{�b�"��K�c<����-��:�l��9���R4vl�o8�xq��գ���e5��FP��^퓅� �f�J"T>�xx���a6�9bgqT�s���k�rK��� �rQ��l���s K=-)��ڪ�}-�j��$�4 �+�<�%�5d&�fΏj=؄8&'~�r����7��2gͽk(��?��/��Z���	�[��yo�oJ���iv�MC�<O'��)R�����o�sefV~$�    IEND�B`�
```

---

### `src-tauri/icons/Square310x310Logo.png`

```text
�PNG

   IHDR  6  6   뼾�   	pHYs     ��   sRGB ���   gAMA  ���a  !$IDATx��nTG��S��$�M�� �`�<i$�H/!��
0+���
ܬ�f�଀�HĐ?�Fz��`3� ���ý��:uo3���������H�&a&N����:��                                                                *�@$��t�~)~%�G2�|?n�ɸ��T|=�������{������������j�ޕ֦Fr���ek��@�g_�{��ߣ,߰��#��#eCL*�i[�]'c�6��t\�Ξ}'�ʰ����g�n�@-����c�l���b�����n����Ca�L��wl̑�a�/}�][�=�!�%��.��̒��<U/̎3�����`�sqsf	͗��6�[�>"�r��'��Τ�d�~w�4Ι��1k��{����NTΝ�۹���Z��b..,�4����IW5��0l�h�6�VhC�����Ck$+r���B�����Z.������<ZbQ}֠Ţ/�D�l�1�H �j��H���ކ�V36���*��8�Q��C�`��r.�SΥAl���"���@�� ����c�m8�J�o�l�=%��-[k���Cp)��*�h�*�i�@���{����� �*�8NUZ��p��H無hŔ�i[�P���ڲ���� �*��|�rTIbV0�v>�VD���e��2f����}�S!�* �V#Ƭ�p[$8�M9ޘY�_�	�D:��qE��l�!�j�v�R5�=b�s_�_���0M�&uj� ܎�$P�Ω��W�Us���k?n�k�rzIW�o��֯��,N�n�w6�6K�MS�L�]����bS�B���z��cz��K��ef��{����ƴ�

�@�)�>Ԥ"+�l����A(�n�:���|���[|K�B��*��b
��[��}[����c��_:6��Q�6)=���g��f�q�\�6�H^��G����ζ:Kd�Gg��C�6ऊ�0�WvJk�q����[-ڹc��������N���Z�~n}�)[��eq�-Sm��<P�-P�um�|�j
������.KE�ոS�`�P9��Kq�+��H �Ղ}�d	N�bTI�T38�-FE� >R��<�P�7knH��<q�5�`�Ly�`��"Uڒi�j=!}yL�c�hNV��).��5��hD�c�c��j�a;W��)&��q�6�2#�"�Ҏ��y�G�oL�y7ӡx�i��|@a(�$�;Z� ��+����y�R%Q<j5$E��Ⱥ��|��E��	��U\�N��-�̫�qjC�6I�4����x%��`̭���Ӽ_���r�!s�Z�[y�I�a(PD���� ���Tl!%�!�j#�ʭ�Tl�D�0�7DS�Ux�*�PI�#�s^D��w�r���a*{�6*� ��ܒ��(��&��P���Z��1p�zoE�6Tl�EP����oL�ط��R���oa�5�۹K��P�Ni�6Tl��j��F��!� ��P���_m��uw�!/��9Y�i�	���S��BI�U*6�xcF��Ob��W�)z��֯j�_f�:�M�4NT�4�&�v�1�������b9m`Ze�hH:^�!W5�͗������72c�u��NdHj���a�t�BW"�0���M�"��mU�=���-Φ"MTl~�O�38(wCR���&B��C���	��rZ�*��p�@��J4P���;�p��[�i�2� @uG�������4-�5�%�l��������u���P���d��Vm]�U�q��.)����a�m��`�O ����QTl�Vt�0܄	T���bKՈ!��Ҳ [��o�B�D�\W���-�Usl��[�\�n9�W}��7����FhRK��cD���w��u�QnS1�s��#�{i�T�H�o����l�	l�{���7��یV�&�v��L��H
a��BZ[��S�^�V�DKͽyey���\�	��<��v(7O�e��|2z��P�)���m���vn�ل�6�i1����T}ʺaV#Y����������!j9��y��4R:φ`Sfrs�-�x�<'A��H���ݔ���T���E~�sG~��!��4>VX��� �(7dx\�u�#>�l����5=������
�e��f��f��i#�����Q��@��pf��i��.)a��c��v$^�?���~t(�b��9[[Dd�l?�g�eҶ}�0;������}�V��;�'_Cw&����h$�l��i��vm�ɧq�. ��M�����Bm�����%R�}~���/ITl�p�3���B1ev�K�ן��z_jyD�#�MbV���Ss$vN/��$Kզ�3�`�͟���͗
�������߷/��\n3J-�O��K�Pԣo6w[S�w��7x����t)b64��~�����W����-R���`-5��C�"�$ۏv�PA#�W;�锛��'�d�����i{I���s4���o������qY��DA �`�'_�i�2��z�;=�|��}�W�:�Q���}�Q1�sdGGq�H��>�-R�6d2��|g��y��Nx�;T�1�U̵�^����!�!�n��~�e���1b��Fߩ���w��9׶��6$2�&�N�h�gL�O�����ٟY�pTò�`l�$K8>̥b�ǉ�sp'w(�8�_f�}�]�k��v	2�L)�9�v$�~������^�H��V��`� Y��ښ�Ox����,�3k�V
�n�몼����	o߯��h&�w��*�Źr�͐v�y��̳�v2���K���3��\4�e�S��1b�3�P�L�C�s��X�lz��`;�E`�O�M�����jsg��,�&�B�� l'�PK?B�]��a��j!؎�!���r�[�q���?���c!؎�P��O9��}L�����`;�ꋿ�i��_��e9�_/��"8�� �~���Jmx$tG#e��3�s��1l%Y�����H�E�m��9��۟=���E>]1�n�;��,��jL�t�M��{�sHT��^_������D�~f�Y�s�.�k?�:;�MEA��=���4����!����)�j_�5����P�?�Zb�靛S�U���U҂y���.v-�O�ԺbsG�>��$�2�����>i$PBK��jcz@�<9���G�m�v�6��uSN'^߼��6�HQզ�Z� �w�P-+��Y��#=���\}��-��3)���w�U_K�V^����2���R��D;�f���g��T*Ԩ��r^�hqGM����rc�Ul��r^m�bc�g2�ٹ1��?3S�S1lptm�ݧ��P��=&-�%��-��
6�F9�fx5�����[�*�?ц۪	ły݆����^�=�S�X���cs�pc"l4��ݵJ;O#A��%�,QX=�D<<�T9��o(ʬ�ö6�A��W�Cϔ��ͥ����A+7�������缼6�����Z[lCPC�&CO�K8���̹�9�voQa�5��k:N9�D-�-5i<'vخ綬K�h��ܜ[��gIA�>�m}sj��Ɨң�*lS��(�M��P��'�Gd���ݚ(���i��ܰ7��Öڡ��_�P�~Me�@T:�d�;�$�!(B�T�M��!��3i=�	��T=j$w�'��Q�h�m��&����s���_�l�2��l1͑9�殛�6f]suv�;X�y�|2��ȩ���r���t�BC������}��>�r#z����S}Uv�߾@��;W,Cw�C�������@!!�`HxcF>�[�O1�T%���1��C�Wj0�Zk���dH�X%�-3Y؆���΍k���<���_���՚9���]�����3R�x�\����2�j�� ��`���jo�T*�BWk�x	���Z3�F�U*�BVkr/���k��nz4-.��GR�jC�6 �jr�
I�j���A�Z���<�=���%2I��Z� �%1a�T��L�Ɖ	r��A_ߘ�s�4D��2s�M���S?����w��^G6���!(��&&�ܚ�E�U�b˳0�'��.(U�0hQZ.�>��E��4�e
��A9�r%M�E���`��bg.H��6`H�AEb֨B�[����=*�54`��H��ѫ��uB}��B��5"���c?-��RŨ>�M����	y䪵��ԞSqq�$��k���Gu�b�j���W|�Z��]GH�P�Man��5�]��֩�l�֫��Ym�ɢ\��P;n��v�]�R�Z���f�&���s�7bS�YeO�hm�ɻ鄛_��?�"Lο2�~�y�ן��EϗM�ək�jVkBm�1徻��*�2�;W���y�8��M�L:N���*�G�=��~JW�����]۴y���T��������1-R����L�a�ž�ר&7��v����pQ���q4���~� !g����i�����+�P��.���\��ޜ���~��O����09]X��	�2L-+��'�
5�0��oW=�T6�I��_�Cm������Q��8C˶�ە�:�����j$�q�jBe��!T�<��P��P�G�|���>�+4v��\Ӥ����7�G���@�w���z��=�.���������sl?���rF˓ϷW��x�ۥ�B�dJ5�n�M�۝�����ܜR��(�Ӟ;*�d���^ߜ�t���b>Mv�p�3��[���-u[�m�w��p��%Ԅ�.ԩr+��[�����@u��q�l~-M�'1��K�?�m�*.ʡga�NC�u��&o�G�؛������X�o$��D���J���@c�LC��<��֠z����7.��,�!�L�S�lg�Qkk+�7���\���V��3�Yj'���5��/،�OE�'%d^�"斂��"���)���ΥԷ�{�j
�I�h�,�<rZ�\��e+�1���rwAm,P�WT�z�~J�0�62re��}�f���jSӡ+�oм���"r^���A�*���~_XI��+EN&�UTkJ��r�S9��	�"\�������8K�}.)޾���+6c�<k��l����B����"�� h�{EC@����j�֫GU�f|V&L*�'���uIF�=�U��G��<�9۫m��0]���#���qP���&�c��5N���cz��U�v����K����Ca��S��'����������ֹz�&�
kXæq�Tʛ��>S�4D-��]sllZ�f�^Ku"Cy�[N�w�K��b;�1ܧ�Ÿ/�L+\B�6�hZ{�B�tzo���o6���"ѫ�V��B�h 'u�{�:��20U�o��N���� ؎�`�+�C�i³�//`���!؎��k�(��#ڮsB�v����|������z�ȣ`ب�h栈��
���ܵ�6c�j����<8���l�N�(d��z�D�`�%;�V�㼇I�΃���
�p�Y��Ey���׏��aL���*��w�؎a�y�ϱIg�V�}��P���y�U=�K���N��q'��Fʘ�]��~�����-�a��p�
�&�}�h�_c-�\z��m�ҍ�dbw����M�qt\�����Щ
�����S-�u>��L����)y�٢Qt<g{P����`�7��E���sH�38mC����d��Z4:Ű���v�5|.Je�"���*C�����g͉��	;�Ql^�*:��ε=��Cjx�Ս�c]�V0C� ̣M`����������_�2Lg6Qn��!hz������� ��"�2�0������"]���ۤ���S]�%�+ؘ�2�n�gf�~�ێh�.����[��%�����`kP�%��]��ssjվ�:	�At;�]%t���[\;h
`-��M���r��Gع1� x��J��YؾuM�jzc��<Kuf�p�>->��|���ub��v9�S�>N��g�g2��dtWK��������?䆚��c3��t����/؊e ]RF*��/v^&��0��ѵsj��o�:�}��۳a������#�L��f�m^�ayS̳�<������o6���Lcن���zÝ����N�H���+�2	�lH�M�P���d���Qv�����+-��i��WӜ��!6Dl�يv5���a����/ͭ-��-|Le����v=���I�
�z�jڶ��1�	��&/��eߧ�@��Rl;�X:S����6�D3���,I�W��IC映sAFIϐ�R�m��vB-���W�bxD>)펞���ڇ�P?j����;��O#��;7�n DM����#�K0�N��;�w8;���{p	���m���l9��ʒ��68/�:��֙��������`��|�g�ٮ!�68�A�5�f����L��M��m�_��}Tmp
nN>�y�\e��ߗ}�;�Ma����	^���{�R���L��}A�N��tɾ>doq[b�]��S������O�����rs���D���$��޾��#�7k���M�?���U��b#I�d���I�M��a�k�����m6m��qZ�{5?*Q�C ��e��^5ٍPw���Ƭ� �)�tr�f��VF%�ML��~bC��i�L��}�3�^-���֘�����F^W���d�K)�QqLzTb(����ƴ�`3�-4ts!F�ۜ���  9���2��>����φ��7j�T�b����Qs�b�zߢ��m�}�lZ��Ӕ'-S)�����N�fq��j��M�I#��-I#���:�0��jv��<ir[y�E���~��A��{�G�7XTI�DG����O��"I<�!�E���Ix��i���h|c�Ϙ�
;¨\��W�CUm���/���.�*�P�L�4�2��t��\��s��Vmd��t��JM*�Ƿ(�ְn-��E)��m�a+�[8W��ȇ[�BB�L%�M�6Cy�ue�Lp�S@��yΠ͂B�Z8�6����5�.A��N�? �<r�9&(���E�`*lN�n 6�7?b	5;���ukaU:�ʝ ]
mn�s�XBMd�U�bmͪ]�YM�l$�pCCa4b
5�stP��W���Ǚ|��l���;��q@�pLm�Z+y�-�ym� �Z��z�j׆J�b���I������"�o�$}�N�Db��W7�~I\凢�&�.��q��l����g��nGAD�F�Wj�M��F���;>a�&�o?����M���čt+䎂�d�^����f(*ܙ\�﷢��d��0/�<�����S9=�M�I����q�M�&�>�l�n]�d!���S[��`�ۧ�Pw�E��f����Ԫb��d�;��$R�ɛ�q�AqX�"�.h�jlBn�/�h����q�A��|�x�̽�G�@B-��6֬ũ���|�au89�L�Ss�(l�X�����f󯭔ƶb�
���㔚kU�������]�j	�qd^�����u�	��"R�J\Q5����j)�
����Sw	�V�`1m�:�u;z�q8$l9I�b�C;��W��w�D� ��d�M�AK���u�,�}�Z���N2�ΘriشI4tA����!����Ű�w�٫ij4f��� BM�n���4�=��#�Ⱥ��F�y��(�ȇ��m���ӆiN�0�XL{&��1W��)�!Z��\��0ܓ#�'}��mڶ���Y����[oRڒ���/�M+��]�ǋ��C+�dHfO��f=�?c�*�Z>$�Y��lǨu�BM�Zm�?��ى↝0�C�>A}�!�5�P����8�����IL�4o�� L W�,�@�U*�sP�CN�ujՃ����g�`����&�P�Tlp���\��
:��^ݹq�>A� �.�A�&�����k	*	�v	e�tY�������$��hT�mܙn��Tbod�١�\��c���6$�4ޤ���P�E�I��=���`2,	�N7�t]�zA�����L3�k�j�Uif	[��	�6BōK��Ωg�K�=ۈ��B$�F�K	nf�7�ё%d���0�`�l���Y�]s�Mp9v�Vhv���!��p�-�% ����$�L������������1N�`��`�~[ًQ.M8[dZ[[�co�0���S����p3�|�Ս�_�9 �"Vl�jܓ;:kQ������P��e ؔ�[չI��3�J�G=f�؛��;�a@�)����f��!�}��*�-.n6��`lPtV�i�5lʧ���\���'��5�l�*�QC�U�4 �￸.a�O�����+N���)��M�	q���Xw�ۯ~% �l5�:���C����[6�Z�����j_6��:,��1���$����[�ϒd/yǿ����                                                                 �?Z�K�ћ    IEND�B`�
```

---

### `src-tauri/icons/Square44x44Logo.png`

```text
�PNG

   IHDR   ,   ,   �Z   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx�X]��F�XW*�T�A��l%Uy�<ػ�*'{�	�'@{�]�`��>���:Fy���r��*'e��:�x��F ���?CO�G�����="�	��j�ފ��sѴ�#�JX4�B� �
wdװ�7���ȏ �F�?X�څ8I\��Dݾ�ؙ0E����>V!��O^=��v���>���II,)Eְ!��69^��H!�ү��J��T)D]"�Q�T��O�	�;�8���d%ѳM�ҦQ�Oi�E��\�i�-x���:��?=��vhhN�kD���1 ��� �MK�������w`Y�M�a�n�f�������ŀ�5V{a�rY����t-I`�#��ԆTh���N�s�Di2+Vn�to��7/�h%��Bb��e��3�D�D�1>WF������N��ޟ!���w���g �+�ke�#�Q]�:�Q-,<^��׸�<NX�7eJ[WSE[޷"�����/�!&T4�V˶�L�쀍�9�K�X����E>��&�\�d2NZ���6�����w��J��.[G��a��SHFt�	�5v��T���*�,����"�����j�����#L�ch[0��Su�r3���vBC��qec����b\7�^�]�,x���F�ʱ&�z	mJ�p�? "?pO�s�lyc,�6���nzR���B�6��S�M��¨C$���$3�t���Ҝ���sF�-��mRDT�$u|)�ehSBU�_��� �s`�a��F��eɞ�jI�������B�y�}l�2��>�y��C��?M�%Oq��Y���A6>�󜻍yJJ7����ϯU�a٦'�&��/�=,�>�eٰO����+�Ƹ�v���J���4�R���(�[Rk3�I,}kP�~�A9�i�Fi2)��u3���"sC�Z²���7� �m56ݯ���>=_k��2�2Ci~M�9t� �����An���6��Pa�t��!#RU�D?�������2�䏴��d%�aAl<��t�+:�"��'e7m.?~nO��0��M�V�f>l�O�KP�?x�<>�(J��xr�U� ���~Sח셰�(����7t�\��H��h�#Y�?�1��!� Fܞ�B���"���%I���'Z���3�r�����E�\\��T��#4q�ލ�YH�vU��5P�}�)+�=��?�T�f>12    IEND�B`�
```

---

### `src-tauri/icons/Square71x71Logo.png`

```text
�PNG

   IHDR   G   G   U�Z   	pHYs     ��   sRGB ���   gAMA  ���a  pIDATx�]n�F�gi9�G��Be#}���|4@,���	�� �	,� �	�� �	,h�T�S�H�����Img��*�K�,��@? �MQK�ϙٙ���9s�̙s�pM�;�K��
����{i�c��C�����z�
���AQj� 6A�0��HG@�j�X�%ԕ�#w�6��&��'�������Cf.��O��_}pK��7�Z�8b�⠵4G�RBlC4�r�j3G�V[��fC C����f"��04+��Ż;��V.�U���.��6�|n>Q�15!��\B���ᗮ�Pu0�	���
�cH	�l�0v�$�4�$DK<��d�0q��{�0�����
�]G��f��|��o�%ŉ�[%a����G��׊Ď�ze[�� �f�0#a�8&�\G�~Ssܻ@!��S��5ɆKaƌz�]�g4F����l��j(�b\A��� jݲ��"��2)�X[��#wW_�rx5������:�@g%�X딁�{q��\�2v����[cΤ��x��8w+��;�K��^�PŎ�]-�����G9;f��&��`RL@�� ��~o�4���w8��KI��:=�J&=����{�87n*%p�R:	p=��|�	�5ʨ�j0c��q0���]:�g,�ZN�C�Q:��^�{��{˻i��-��ΐPS=!q;U�L�X���AHO�Fw		���~���	n�?A�qv��[��{�~4�vd��Br��E��C.�R�F���t-��)��a�.��T�m�
$D�qV���BfqB�6
#�~�o��`�ؖ��#i�c��ή�8.��I��C���E����X�Xwma�C�}�t��[��q��9Ղeam9�Nj�N�)ٍn~��
3��Z��E�8O��cx������Lxx�8�M���3��D7���j��
h�K+km)V����%����`�ѷ>1��V��?pŤt!��r+�J�����C*A�r&�lݪ�;H��g�HE�bMZ	b�R�r��8u�	���Tv�#���	'H�|��`M?5����
��9��A`�.� ��~@���}�:��`
~��95R0_D���@k�TQ�א�Ѯ�4a@��eX�#��8~�60E�2-��q�?z�4ͫ�f�0�N��6����9M��E�hO��w:�8$��}7эk��N/ #��]�l���$�W�� c�-s;BJ�[ƾL�g����_~�{���!�L���t]��a��)wrgv�ə�_jQ�(�C��z��A�:��Ï�B��Ƀ{+�^�Z���,��옃�I����?\n���V#Z`�bLW�e��lq��!A�g!$�Yz�$0�����͉�8����%
���XzfW����%/w��n�MA�`	�@Q�ѡ�D��f�j�U��i��U�����5(<]c�ϩ���..�h�W�>�K�C��W������	����������TU>|j���Ye����5��dj��
bO���+��l�>�	,a'�@PSs��S�j��]�'U�1V�CP-���u`꿀�Xԧǌ�ݦ^5�b�ֵUx���w��)Ƚ\�jgE���Ұ'�����Z��s��lڵ�fH�$� W��� <M�mo���[SݠɅ-�84v#H[b��S���Pp^�u���4$�,oFeD�x'g��jgL`k��Q� ׆IjeDba�#��b��R^t�&�p�c�!�h1��?��w�Z�!�]'{I��R����b��&	_�1��p�yy�s=-�A[D�E��	Yq�I��,�JO1 �s��⓷]Tc�<�",�|ϟ}Ơ��g�	�;��ES�8ӐP��[w�6Yl��s�C�������ݫdΜ9s�������h���z�    IEND�B`�
```

---

### `src-tauri/icons/Square89x89Logo.png`

```text
�PNG

   IHDR   Y   Y   U��   	pHYs     ��   sRGB ���   gAMA  ���a  	9IDATx��NY�ϝ�Md��A��&���Ǣ1���O`}��'�>��'��bb����Y�a|�ɚ��s�����3�ܹ3S��I���Ιsϯ[����������+��+n����ٯ��Sĕ9��	��H?��N�G���.��C��� �^d�	��!j��W����-}jE&q[��� .�F���y�=u"��u��r�E��H�d�Ԉ�\�i�OB�x��s�1"��.Y�k��z'�^��mȀ�E&���.����*X�P�#���<jP��A��#����I��`��D�\�>�q��-���z��y��m,��&��H��B"r$0[����Tܠ��I$�c��k�?ʞ�.F䷍mJ.���Y\+aVh��݋�㲍�#w�q�~��]�X�ѫk���;`�0T��jEc9�w��8W�~؋�ȃ�^�N��n'.�q8�'�-�p���{AR�"�Yh
r9�b��'�\	�����t��D��Њ/�ò}u��փ!�W�ivc�&�ƚ���8�u�b]��#|N{�Q����p1&����-��ĺY���N�7y��X2��v~��]|�V�&m�ag����t��	��pB����d����3n>\H^�|)�wԳ�,!��k]�c)�Y�����pfw߬��ÛȚ'��`@����U��+J�3�/bt�8|��v�S3k4
q���by����B���G��^�u�d��.��X`
�"�y�K˃"T���GA�kqAH�"�����oՐB$|zaA�:�#JHh���8f����������͙�Ѿ���)�X1_$DHʛ�~�#X&3�I�6Y�6��+��3�"�����!�D�݃*x���|�� �A������[TqX�孋��wH֫[�'�D_�ʔ� ���j�V`�]��@����R�c��D!�7Vx Ě��Q)-ѥ��<|p���1�I
�Y��y7��w��ɂ[�j-�h���?�-���*p�ER9T����W !i�`�AHj�9� ��
�1��U,X�miu4���`���nj�Gj����]�+��;�^��z�:�E{�. qJ��g�H]p�A��ֱ���H|o"# MCP Manager Application

> **Last Updated:** June 27, 2026
> Gerenciador de servidores MCP com interface Tauri + React para integração com Open WebUI via Tailscale

---

## Table of Contents

1. [Project Details](#project-details)
    1. [Features](#features)
    2. [Available Themes](#available-themes)
    3. [Templates](#templates)
2. [File Structure](#file-structure)
3. [Source Code](#source-code)

---
## System Information

### Environment

- **Hostname**: c-6a3f11b9-01471659-a604765c04b5
- **User**: root
- **Home Directory**: /root
- **Generation Date**: 27/06/2026, 00:04:38

### System Details

- **Operating System**: Linux
- **Kernel Version**: 4.19.91-c8dfc93.al7.x86_64
- **Architecture**: x86_64
- **Node.js Version**: v20.19.5
- **NPM Version**: 10.8.2
- **Rust Version**: Não instalado
- **Cargo Version**: Não instalado

### Network

- **Local IP**: 21.0.9.74
- **Tailscale Status**: Verificando...
- **Tailscale IP**: 

### Docker

- **Docker Version**: 
- **Docker Status**: inactive

---

## Project Details

| Property   | Value                               |
|------------|-------------------------------------|
| Location   | `~/Projects/mcp-manager`              |
| Framework  | Tauri v2 + React + TypeScript                       |
| CSS        | Tailwind CSS v4 (@tailwindcss/vite)                   |
| Identifier | com.birblabs.mcp-manager                  |
| Icons      | `src-tauri/icons/`                    |

### Features

- **Dashboard:** Start/Stop/Restart/Remove MCP servers
- **Logs:** Real-time viewing with auto-refresh
- **Settings:** Themes, Autostart
- **System Tray:** Show Dashboard / Quit / Left-click opens dashboard
- **Window Management:** Window minimizes to tray on close (doesn't exit)
- **DevTools:** Enabled in release

### Available Themes

- Light
- Dark
- System
- Nord
- Dracula
- Monokai

### Templates

- **Default Template:** Standard MCP Manager layout
- **Compact Template:** Minimalist layout for focused work
- **Full Template:** Complete layout with all features

---

## File Structure

```text
📁 mcp-manager/
├─── 📁 src/
│    ├─── 📁 assets/
│    │    └─── 🖼️ react.svg
│    ├─── 📁 components/
│    │    └─── 📄 Sidebar.tsx
│    ├─── 📁 contexts/
│    │    └─── 📄 ThemeContext.tsx
│    ├─── 📁 data/
│    │    ├─── 📋 features.json
│    │    ├─── 📋 templates.json
│    │    └─── 📋 themes.json
│    ├─── 📁 pages/
│    │    ├─── 📄 Dashboard.tsx
│    │    ├─── 📄 Logs.tsx
│    │    └─── 📄 Settings.tsx
│    ├─── 🎨 App.css
│    ├─── 📄 App.tsx
│    ├─── 📄 main.tsx
│    └─── 📄 vite-env.d.ts
├─── 📁 src-tauri/
│    ├─── 📁 capabilities/
│    │    └─── 📋 default.json
│    ├─── 📁 icons/
│    │    ├─── 🖼️ 128x128.png
│    │    ├─── 🖼️ 128x128@2x.png
│    │    ├─── 🖼️ 32x32.png
│    │    ├─── 🖼️ icon.icns
│    │    ├─── 🖼️ icon.ico
│    │    ├─── 🖼️ icon.png
│    │    ├─── 🖼️ Square107x107Logo.png
│    │    ├─── 🖼️ Square142x142Logo.png
│    │    ├─── 🖼️ Square150x150Logo.png
│    │    ├─── 🖼️ Square284x284Logo.png
│    │    ├─── 🖼️ Square30x30Logo.png
│    │    ├─── 🖼️ Square310x310Logo.png
│    │    ├─── 🖼️ Square44x44Logo.png
│    │    ├─── 🖼️ Square71x71Logo.png
│    │    ├─── 🖼️ Square89x89Logo.png
│    │    └─── 🖼️ StoreLogo.png
│    ├─── 📁 src/
│    │    ├─── 🦀 autostart.rs
│    │    ├─── 🦀 lib.rs
│    │    ├─── 🦀 main.rs
│    │    ├─── 🦀 mcp_server.rs
│    │    └─── 🦀 tray.rs
│    ├─── 🦀 build.rs
│    ├─── ⚙️ Cargo.toml
│    └─── 📋 tauri.conf.json
├─── 📋 package.json
├─── 📋 tsconfig.json
├─── 📋 tsconfig.node.json
└─── 📄 vite.config.ts
```

---

## Source Code

��u�!���2W���T+�3z���l0 ]����
|����J��VR�-0��]�Cr���/�^�U����x��2c�UR�Fյ!��e�����`�D��Z�/v`�{��W�p./�;�H��ӧq�����,>-j p���/�T�y�6>�,��1tM�����訛
��IkJ��Ò\oNaŌitь��3�&�&8����&�����)��=�R>-.X�;��y�r�F\8zt�B����U|zpg����$מɢȪې�p�S��Щ�X���dj�Ƨ��DY_4-��'_����`Ht|��J�
Y>�acVD,�JCس����%���}g�����h�۶�
�E�)��(�,_��T0%BZ`����=�<�N|��z�O9���(�vA�K�k��_�,
��;����F�D�
�D&n��g���i���'����{�h^H\!Τ�eݒ%V�5���z E	&+U��	ô�f�х���Q��@�X�z�(��ʤ�3:,al%����]$�I�����~`x��r���}6.	ş$ �b;)��KĖ<���^u�(J�eTp���6��upv{l�A�2��y��H7����Z²��sw�/J�+<�ٺ�tt�~Z�Eԙf��	U�w;kE�o�֓�+�MS0��>�V�)�A��{i��Ӏ�Ȼ-ڰ&�����w�Fg:+�a�zVeԳ�p��3[L�R�귟���-8%_x�^=%�la|�!�e�5C��=���@����xS�%&%YS�3>D|ŧ�'.`k�!��OJn��[��'���d��4��Tr"������ �v	�wGu����Q'}>�Fo��Z��E��`�>�����u�:r�<;�D杙n�N���f�鰰/�(ׁ�����3����z�p2�}0:�-,���<H*�<����SڹoS�k�����4l�6/=�v���E�O5Y��ؓ?������دL��jn])Ԫ�n���F	�5���ԓ�HCh�
�x䕋O\0�l�K�ڌ� �l�M����Ƭ�̘}�Ɲ-�rwљӵ�)Z`ƺ�����V�`�A`&�Fj�Ɵ�ӆb�N��L&�<��1�o7������D2	�ȁ���7 �j��i��Ԓ���� �lOkq?7�Ǆb_{0ZI�F��J������I�"���g6)Ds�*����N�*�^��T�"_���?��ƹC�G�o�-))))))))�_��QFz=���    IEND�B`�
```

---

### `src-tauri/icons/StoreLogo.png`

```text
�PNG

   IHDR   2   2   ?��   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx�YmN#G�j{��r���n�H�WJX�� '�{��	 ' N ��f�l"��W���''��F|x�R5c�=�M~�I����{�uuU�j �c�T.8�ႂ����4���ZF�'!��� i�I���S��=&���9:������)�
ģA	��Hh���`8�m&s�e�H��~���_�c�Ԋފb���.��)14���
z�p:��W��yl�<��
6��5�^���1���D޿��D%M�G%9��9ʅo����j�1+�񙡈tp�����2�s<O�kzW(�\I�`D�_Rf�p��{�Ӂ�$ݤ�	�q�#!���B��1h��#�۰�XLd�_P�;�(@�}^�VOc�+5Ә���ڜ��Fǎ| V!
��-u��k�١�����$�V��ܺvaQ�ߏ5��'LQ�΋��s|�Stk�����E}7�7���t��{.�}$ \dN���� �!#^_4��j�p4)HHy|�B��U�i��H,�����~[�@&��}h��W#)A�Lч�KmO şRK���,��'$h)
�`�4 N�T��+��*�TD�������ӟ^]i ����,�ǀ~����T>�$v��n�ߞ�a��4o��0ɱï��c��p�g?�DX�H���ˋ.���<����o=H��蛦�����+���H�w��'�A��v���dDj��ͮ�! �X���o ���l����T5� 5\��d-�$��1X��)��*
%��o���n,�U �D�}�?I�%��Z���XK����ѹg.����|��7�Ȫ��"
��1�5	�7RI�czR$˔�����q�v�Uc2�R��؁���\�mH;�XD2�rD�ж3�g�/�}+��%���l�2�L%@������N<��e�4:k=�� %�+u;����*�;�hLf�ê7#	����w��Y)�c�j�c�ۻ�T+,��Zf�T�Z��xD�'�m�	D��X�
@|P, �~@�C����ُ�~�nw[{��7^�h<F3��W1��j�O�}l{v��K�1����$���sg�q I4w����AUCb�>{Y���v��)?�-N{0D�"���z_���
�Əs��$F-$�ۡ�$�I����}!!�zP�D"���#��t�I��߽(�����S�9�5��H����������F�9�f/'����fJ��ך��T�Pzh�pߑ�λ}�Q	��\�%}�L���|�D�:]8�[��ch=t��2���/+�љo�(���~�"_LG�_�G�g�2��c�/$��d�D'����«L#L�Pw����x��p\AP�O��Gv?�K}U �"�ի ���s�I�1�C� �r1���    IEND�B`�
```

---

### `src-tauri/src/autostart.rs`

```rust
use std::fs;

#[tauri::command]
pub async fn enable_autostart() -> Result<String, String> {
    let exe_path = std::env::current_exe().map_err(|e| e.to_string())?;
    let desktop_entry = format!(
        "[Desktop Entry]\n\
         Type=Application\n\
         Name=MCP Manager\n\
         Exec={} --minimized\n\
         Hidden=false\n\
         NoDisplay=false\n\
         X-GNOME-Autostart-enabled=true\n",
        exe_path.display()
    );
    
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    fs::create_dir_all(&autostart_dir).map_err(|e| e.to_string())?;
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    fs::write(desktop_file, desktop_entry).map_err(|e| e.to_string())?;
    
    Ok("Autostart enabled".to_string())
}

#[tauri::command]
pub async fn disable_autostart() -> Result<String, String> {
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    
    if desktop_file.exists() {
        fs::remove_file(desktop_file).map_err(|e| e.to_string())?;
    }
    
    Ok("Autostart disabled".to_string())
}

#[tauri::command]
pub async fn is_autostart_enabled() -> Result<bool, String> {
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    
    Ok(desktop_file.exists())
}

pub fn should_start_minimized() -> bool {
    std::env::args().any(|arg| arg == "--minimized")
}
```

---

### `src-tauri/src/lib.rs`

```rust
mod mcp_server;
mod tray;
mod autostart;

use tauri::Manager;
use std::sync::Mutex;
use std::collections::HashMap;

pub struct AppState {
    servers: Mutex<HashMap<String, mcp_server::McpServer>>,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(AppState {
            servers: Mutex::new(HashMap::new()),
        })
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();
            tray::create_tray(app)?;

            // CARREGAR DADOS SALVOS DO DISCO
            let initial_servers = mcp_server::load_servers(app.handle());
            let state = app.state::<AppState>();
            *state.servers.lock().unwrap() = initial_servers;

            if autostart::should_start_minimized() {
                window.hide()?;
            }
            Ok(())
        })
        .on_window_event(|window, event| {
            if let tauri::WindowEvent::CloseRequested { api, .. } = event {
                window.hide().unwrap();
                api.prevent_close();
            }
        })
        .invoke_handler(tauri::generate_handler![
            mcp_server::start_server,
            mcp_server::stop_server,
            mcp_server::restart_server,
            mcp_server::get_server_status,
            mcp_server::get_all_servers,
            mcp_server::get_server_config,  // ← ADICIONAR ISSO
            mcp_server::add_server,
            mcp_server::update_server,
            mcp_server::remove_server,
            mcp_server::get_server_logs,
            autostart::enable_autostart,
            autostart::disable_autostart,
            autostart::is_autostart_enabled,
        ])
        .build(tauri::generate_context!())
        .expect("error while building tauri application")
        .run(|_app_handle, _event| {});
}
```

---

### `src-tauri/src/main.rs`

```rust
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    mcp_manager_lib::run();
}
```

---

### `src-tauri/src/mcp_server.rs`

```rust
use serde::{Deserialize, Serialize};
use std::process::{Command, Child, Stdio};
use std::sync::{Arc, Mutex};
use std::io::{BufRead, BufReader};
use std::thread;
use std::collections::HashMap;
use std::path::PathBuf;
use tauri::{State, Manager};
use crate::AppState;
use std::env;

// ============================================================
// PERSISTÊNCIA EM DISCO
// ============================================================

fn get_config_path(app: &tauri::AppHandle) -> Result<PathBuf, String> {
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir.join("servers_config.json"))
}

pub fn save_servers(app: &tauri::AppHandle, servers: &HashMap<String, McpServer>) -> Result<(), String> {
    let path = get_config_path(app)?;
    let configs: Vec<McpServerConfig> = servers.values().map(|s| s.config.clone()).collect();
    let json = serde_json::to_string_pretty(&configs).map_err(|e| e.to_string())?;
    std::fs::write(path, json).map_err(|e| e.to_string())?;
    Ok(())
}

pub fn load_servers(app: &tauri::AppHandle) -> HashMap<String, McpServer> {
    let mut map = HashMap::new();
    if let Ok(path) = get_config_path(app) {
        if path.exists() {
            if let Ok(data) = std::fs::read_to_string(path) {
                if let Ok(configs) = serde_json::from_str::<Vec<McpServerConfig>>(&data) {
                    for config in configs {
                        map.insert(config.id.clone(), McpServer {
                            config,
                            process: None,
                            container_id: None,
                            logs: Arc::new(Mutex::new(Vec::new())),
                            started_at: None,
                        });
                    }
                }
            }
        }
    }
    map
}

// ============================================================
// UTILS
// ============================================================

/// Obtém o caminho home do usuário atual de forma dinâmica
fn get_home_dir() -> String {
    env::var("HOME").unwrap_or_else(|_| "/home/user".to_string())
}

/// Substitui placeholders de caminho no template
fn resolve_path_template(template: &str) -> String {
    let home = get_home_dir();
    template.replace("/home/user", &home).replace("$HOME", &home)
}

// ============================================================
// STRUCTS (com camelCase para o frontend)
// ============================================================

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DockerConfig {
    pub image: String,
    pub volumes: Vec<String>,
    pub env_vars: Vec<String>,
    pub network: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct McpServerConfig {
    pub id: String,
    pub name: String,
    pub command: String,
    pub args: Vec<String>,
    pub port: u16,
    pub work_dir: Option<String>,
    pub use_docker: bool,
    pub docker: Option<DockerConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct McpServerStatus {
    pub id: String,
    pub name: String,
    pub port: u16,
    pub status: String,
    pub pid: Option<u32>,
    pub uptime: u64,
    pub container_id: Option<String>,
    pub use_docker: bool,
}

pub struct McpServer {
    pub config: McpServerConfig,
    pub process: Option<Child>,
    pub container_id: Option<String>,
    pub logs: Arc<Mutex<Vec<String>>>,
    pub started_at: Option<std::time::Instant>,
}

// ============================================================
// HELPERS DOCKER
// ============================================================

fn get_container_status(container_id: &str) -> String {
    let output = Command::new("docker")
        .args(["inspect", "-f", "{{.State.Status}}", container_id])
        .output();
    match output {
        Ok(out) if out.status.success() => {
            String::from_utf8_lossy(&out.stdout).trim().to_string()
        }
        _ => "not_found".to_string(),
    }
}

fn get_container_pid(container_id: &str) -> Option<u32> {
    let output = Command::new("docker")
        .args(["inspect", "-f", "{{.State.Pid}}", container_id])
        .output();
    match output {
        Ok(out) if out.status.success() => {
            let pid_str = String::from_utf8_lossy(&out.stdout).trim().to_string();
            pid_str.parse().ok()
        }
        _ => None,
    }
}

// ============================================================
// COMMANDS TAURI
// ============================================================

#[tauri::command]
pub async fn start_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&server_id) {
        if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let status = get_container_status(container_id);
                if status == "running" {
                    return Err("Server already running".to_string());
                }
            }
        } else {
            if server.process.is_some() {
                return Err("Server already running".to_string());
            }
        }

        if server.config.use_docker {
            let docker_config = server.config.docker.as_ref()
                .ok_or("Docker config not provided")?;

            let mut cmd = Command::new("docker");
            cmd.args(["run", "-d", "--rm"]);
            cmd.args(["--name", &format!("mcp-{}", server.config.id)]);
            cmd.args(["-p", &format!("{}:{}", server.config.port, server.config.port)]);

            // Resolve path templates in volumes (replace /home/user with actual home)
            for volume in &docker_config.volumes {
                let resolved_volume = resolve_path_template(volume);
                cmd.args(["-v", &resolved_volume]);
            }
            for env_var in &docker_config.env_vars {
                cmd.args(["-e", env_var]);
            }
            if let Some(ref network) = docker_config.network {
                cmd.args(["--network", network]);
            }

            cmd.arg(&docker_config.image);
            cmd.arg(&server.config.command);
            for arg in &server.config.args {
                cmd.arg(arg);
            }

            let output = cmd.output().map_err(|e| format!("Failed to start container: {}", e))?;

            if !output.status.success() {
                let stderr = String::from_utf8_lossy(&output.stderr);
                return Err(format!("Docker run failed: {}", stderr));
            }

            let container_id = String::from_utf8_lossy(&output.stdout).trim().to_string();
            server.container_id = Some(container_id.clone());
            server.started_at = Some(std::time::Instant::now());

            let logs = server.logs.clone();
            let server_id_clone = server_id.clone();
            let container_id_clone = container_id.clone();

            thread::spawn(move || {
                let output = Command::new("docker")
                    .args(["logs", "-f", &container_id_clone])
                    .stdout(Stdio::piped())
                    .stderr(Stdio::piped())
                    .spawn();

                if let Ok(mut child) = output {
                    if let Some(stdout) = child.stdout.take() {
                        let reader = BufReader::new(stdout);
                        for line in reader.lines().flatten() {
                            if let Ok(mut logs) = logs.lock() {
                                logs.push(format!("[{}][OUT] {}", server_id_clone, line));
                                if logs.len() > 1000 {
                                    logs.remove(0);
                                }
                            }
                        }
                    }
                }
            });

            Ok(format!("Container {} started", container_id))
        } else {
            let mut cmd = Command::new(&server.config.command);
            
            // Resolve path templates in args
            let resolved_args: Vec<String> = server.config.args.iter()
                .map(|arg| resolve_path_template(arg))
                .collect();
            cmd.args(&resolved_args);

            // Resolve path templates in work_dir
            if let Some(ref work_dir) = server.config.work_dir {
                let resolved_work_dir = resolve_path_template(work_dir);
                cmd.current_dir(&resolved_work_dir);
            }

            // Add environment variables with path resolution
            if let Some(ref docker_config) = server.config.docker {
                for env_var in &docker_config.env_vars {
                    if let Some((key, value)) = env_var.split_once('=') {
                        let resolved_value = resolve_path_template(value);
                        cmd.env(key, &resolved_value);
                    } else {
                        cmd.env(env_var, "");
                    }
                }
            }

            cmd.stdout(Stdio::piped())
               .stderr(Stdio::piped());

            let mut child = cmd.spawn().map_err(|e| format!("Failed to spawn process: {}", e))?;

            if let Some(stdout) = child.stdout.take() {
                let logs = server.logs.clone();
                let server_id_clone = server_id.clone();
                thread::spawn(move || {
                    let reader = BufReader::new(stdout);
                    for line in reader.lines().flatten() {
                        if let Ok(mut logs) = logs.lock() {
                            logs.push(format!("[{}][OUT] {}", server_id_clone, line));
                            if logs.len() > 1000 {
                                logs.remove(0);
                            }
                        }
                    }
                });
            }

            if let Some(stderr) = child.stderr.take() {
                let logs = server.logs.clone();
                let server_id_clone = server_id.clone();
                thread::spawn(move || {
                    let reader = BufReader::new(stderr);
                    for line in reader.lines().flatten() {
                        if let Ok(mut logs) = logs.lock() {
                            logs.push(format!("[{}][ERR] {}", server_id_clone, line));
                            if logs.len() > 1000 {
                                logs.remove(0);
                            }
                        }
                    }
                });
            }

            server.started_at = Some(std::time::Instant::now());
            server.process = Some(child);

            Ok(format!("Server {} started", server_id))
        }
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn stop_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&server_id) {
        if server.config.use_docker {
            if let Some(container_id) = server.container_id.take() {
                let output = Command::new("docker")
                    .args(["stop", &container_id])
                    .output()
                    .map_err(|e| e.to_string())?;

                if output.status.success() {
                    server.started_at = None;
                    Ok(format!("Container {} stopped", container_id))
                } else {
                    let stderr = String::from_utf8_lossy(&output.stderr);
                    Err(format!("Failed to stop container: {}", stderr))
                }
            } else {
                Err("Container not running".to_string())
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
                server.started_at = None;
                Ok(format!("Server {} stopped", server_id))
            } else {
                Err("Server not running".to_string())
            }
        }
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn restart_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    stop_server(state.clone(), server_id.clone()).await.ok();
    start_server(state, server_id).await
}

#[tauri::command]
pub async fn get_server_status(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<McpServerStatus, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        let (status, pid) = if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let container_status = get_container_status(container_id);
                let container_pid = get_container_pid(container_id);
                (container_status, container_pid)
            } else {
                ("stopped".to_string(), None)
            }
        } else {
            let status = if server.process.is_some() { "running" } else { "stopped" };
            let pid = server.process.as_ref().map(|p| p.id());
            (status.to_string(), pid)
        };

        let uptime = server.started_at
            .map(|t| t.elapsed().as_secs())
            .unwrap_or(0);

        Ok(McpServerStatus {
            id: server.config.id.clone(),
            name: server.config.name.clone(),
            port: server.config.port,
            status,
            pid,
            uptime,
            container_id: server.container_id.clone(),
            use_docker: server.config.use_docker,
        })
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_all_servers(
    state: State<'_, AppState>,
) -> Result<Vec<McpServerStatus>, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    let statuses: Vec<McpServerStatus> = servers.values()
        .map(|server| {
            let (status, pid) = if server.config.use_docker {
                if let Some(ref container_id) = server.container_id {
                    let container_status = get_container_status(container_id);
                    let container_pid = get_container_pid(container_id);
                    (container_status, container_pid)
                } else {
                    ("stopped".to_string(), None)
                }
            } else {
                let status = if server.process.is_some() { "running" } else { "stopped" };
                let pid = server.process.as_ref().map(|p| p.id());
                (status.to_string(), pid)
            };

            let uptime = server.started_at
                .map(|t| t.elapsed().as_secs())
                .unwrap_or(0);

            McpServerStatus {
                id: server.config.id.clone(),
                name: server.config.name.clone(),
                port: server.config.port,
                status,
                pid,
                uptime,
                container_id: server.container_id.clone(),
                use_docker: server.config.use_docker,
            }
        })
        .collect();

    Ok(statuses)
}

#[tauri::command]
pub async fn add_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    config: McpServerConfig,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    let server = McpServer {
        config,
        process: None,
        container_id: None,
        logs: Arc::new(Mutex::new(Vec::new())),
        started_at: None,
    };

    servers.insert(server.config.id.clone(), server);

    // SALVAR EM DISCO
    save_servers(&app, &servers)?;

    Ok("Server added".to_string())
}

#[tauri::command]
pub async fn remove_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(mut server) = servers.remove(&server_id) {
        if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let _ = Command::new("docker").args(["stop", container_id]).output();
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
            }
        }

        // SALVAR EM DISCO
        save_servers(&app, &servers)?;

        Ok("Server removed".to_string())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_server_logs(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<Vec<String>, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        let logs = server.logs.lock().map_err(|e| e.to_string())?;
        Ok(logs.clone())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn update_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    config: McpServerConfig,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&config.id) {
        if server.config.use_docker {
            if let Some(container_id) = server.container_id.take() {
                let _ = Command::new("docker").args(["stop", &container_id]).output();
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
            }
        }

        server.config = config;
        server.started_at = None;

        // SALVAR EM DISCO
        save_servers(&app, &servers)?;

        Ok("Server updated".to_string())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_server_config(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<McpServerConfig, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        Ok(server.config.clone())
    } else {
        Err("Server not found".to_string())
    }
}
```

---

### `src-tauri/src/tray.rs`

```rust
use tauri::{
    App, Manager,
    menu::{Menu, MenuItem},
    tray::{TrayIconBuilder, TrayIconEvent, MouseButton, MouseButtonState},
};

pub fn create_tray(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let show = MenuItem::with_id(app, "show", "Show Dashboard", true, None::<&str>)?;
    let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;

    let menu = Menu::with_items(app, &[&show, &quit])?;

    TrayIconBuilder::with_id("main")
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&menu)
        .on_menu_event(move |app, event| {
            match event.id.as_ref() {
                "show" => {
                    if let Some(window) = app.get_webview_window("main") {
                        window.show().unwrap();
                        window.set_focus().unwrap();
                    }
                }
                "quit" => {
                    app.exit(0);
                }
                _ => {}
            }
        })
        .on_tray_icon_event(|tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                let app = tray.app_handle();
                if let Some(window) = app.get_webview_window("main") {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
        })
        .build(app)?;

    Ok(())
}
```

---

### `src-tauri/tauri.conf.json`

```json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "MCP Manager",
  "version": "1.0.0",
  "identifier": "com.birblabs.mcp-manager",
  "build": {
    "beforeDevCommand": "npm run dev",
    "devUrl": "http://localhost:1420",
    "beforeBuildCommand": "npm run build",
    "frontendDist": "../dist"
  },
  "app": {
    "windows": [
      {
        "title": "MCP Manager",
        "width": 1200,
        "height": 800,
        "resizable": true,
        "fullscreen": false,
        "visible": true
      }
    ],
    "security": {
      "csp": null
    }
  },
  "bundle": {
    "active": true,
    "targets": ["appimage"],
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ],
    "linux": {
      "deb": {
        "depends": []
      }
    }
  }
}
```

---

### Frontend

### `src/App.css`

```css
@import "tailwindcss";

/* ============================================================
   TAILWIND v4 — Variant Dark
   No Tailwind v4 estável, usa-se @variant (não @custom-variant)
   ============================================================ */
@variant dark (&:where(.dark, .dark *, .nord, .nord *, .dracula, .dracula *, .monokai, .monokai *));

/* ============================================================
   Força navegadores a estilizar inputs/selects corretamente
   no dark mode (resolve o "texto branco em fundo branco")
   ============================================================ */
.dark {
  color-scheme: dark;
}

select,
input,
textarea,
option {
  color-scheme: inherit;
}

/* Remove estilos nativos do SO que sobrescrevem o Tailwind */
select,
input,
textarea {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/* ============================================================
   PALETAS BASE (Nord, Dracula, Monokai)
   ============================================================ */
@theme {
  /* Cores Nord */
  --color-nord-0: #2E3440;
  --color-nord-1: #3B4252;
  --color-nord-2: #434C5E;
  --color-nord-3: #4C566A;
  --color-nord-4: #D8DEE9;
  --color-nord-5: #E5E9F0;
  --color-nord-6: #ECEFF4;

  /* Cores Dracula */
  --color-dracula-bg: #282A36;
  --color-dracula-current: #44475A;
  --color-dracula-fg: #F8F8F2;
  --color-dracula-comment: #6272A4;
  --color-dracula-cyan: #8BE9FD;
  --color-dracula-green: #50FA7B;
  --color-dracula-orange: #FFB86C;
  --color-dracula-pink: #FF79C6;
  --color-dracula-purple: #BD93F9;
  --color-dracula-red: #FF5555;
  --color-dracula-yellow: #F1FA8C;

  /* Cores Monokai */
  --color-monokai-bg: #272822;
  --color-monokai-fg: #F8F8F2;
  --color-monokai-comment: #75715E;
  --color-monokai-cyan: #66D9EF;
  --color-monokai-green: #A6E22E;
  --color-monokai-orange: #FD971F;
  --color-monokai-pink: #F92672;
  --color-monokai-purple: #AE81FF;
  --color-monokai-red: #F92672;
  --color-monokai-yellow: #E6DB74;
}

/* ============================================================
   TEMA NORD
   Mapeia as cores Nord para as variáveis internas do Tailwind,
   fazendo com que classes como bg-white, bg-gray-800,
   text-blue-600 etc. assumam automaticamente a paleta Nord.
   ============================================================ */
.nord {
  color-scheme: dark;

  /* Fundos e textos base */
  --color-white: #ECEFF4;       /* nord-6 - texto principal */
  --color-black: #2E3440;       /* nord-0 - fundo mais escuro */

  /* Escala de cinzas (do mais claro ao mais escuro) */
  --color-gray-50: #ECEFF4;     /* nord-6 - texto principal */
  --color-gray-100: #E5E9F0;    /* nord-5 - texto secundário claro */
  --color-gray-200: #D8DEE9;    /* nord-4 - ícones e bordas claras */
  --color-gray-300: #CDD3DE;    /* bordas médias */
  --color-gray-400: #B8C0CC;    /* placeholders */
  --color-gray-500: #A3AEBF;    /* texto desabilitado */
  --color-gray-600: #4C566A;    /* nord-3 - fundos secundários */
  --color-gray-700: #434C5E;    /* nord-2 - fundos de cards */
  --color-gray-800: #3B4252;    /* nord-1 - fundos primários */
  --color-gray-900: #2E3440;    /* nord-0 - fundo da página */

  /* Azuis - mais vibrantes para melhor visibilidade */
  --color-blue-50: #88C0D0;     /* nord-8 */
  --color-blue-100: #88C0D0;
  --color-blue-200: #81A1C1;    /* nord-9 */
  --color-blue-300: #81A1C1;
  --color-blue-400: #5E81AC;    /* nord-10 */
  --color-blue-500: #5E81AC;
  --color-blue-600: #81A1C1;
  --color-blue-700: #88C0D0;
  --color-blue-800: #4C566A;
  --color-blue-900: #3B4252;

  /* Verdes - mais saturados */
  --color-green-50: #A3BE8C;    /* nord-14 */
  --color-green-100: #A3BE8C;
  --color-green-200: #A3BE8C;
  --color-green-300: #A3BE8C;
  --color-green-400: #A3BE8C;
  --color-green-500: #A3BE8C;
  --color-green-600: #8FBCBB;   /* nord-7 - teal */
  --color-green-700: #8FBCBB;
  --color-green-800: #4C566A;
  --color-green-900: #3B4252;

  /* Vermelhos - mais claros */
  --color-red-50: #BF616A;      /* nord-11 */
  --color-red-100: #BF616A;
  --color-red-200: #BF616A;
  --color-red-300: #BF616A;
  --color-red-400: #BF616A;
  --color-red-500: #BF616A;
  --color-red-600: #D08770;     /* nord-12 - laranja avermelhado */
  --color-red-700: #D08770;
  --color-red-800: #4C566A;
  --color-red-900: #3B4252;

  /* Amarelos - mais brilhantes */
  --color-yellow-50: #EBCB8B;   /* nord-13 */
  --color-yellow-100: #EBCB8B;
  --color-yellow-200: #EBCB8B;
  --color-yellow-300: #EBCB8B;
  --color-yellow-400: #EBCB8B;
  --color-yellow-500: #EBCB8B;
  --color-yellow-600: #D08770;
  --color-yellow-700: #D08770;
  
  /* Laranjas */
  --color-orange-50: #D08770;   /* nord-12 */
  --color-orange-100: #D08770;
  --color-orange-200: #D08770;
  --color-orange-300: #D08770;
  --color-orange-400: #D08770;
  --color-orange-500: #D08770;
  --color-orange-600: #D08770;
  --color-orange-700: #D08770;
  
  /* Roxos - mais vibrantes */
  --color-purple-50: #B48EAD;   /* nord-15 */
  --color-purple-100: #B48EAD;
  --color-purple-200: #B48EAD;
  --color-purple-300: #B48EAD;
  --color-purple-400: #B48EAD;
  --color-purple-500: #B48EAD;
  --color-purple-600: #5E81AC;
  --color-purple-700: #81A1C1;
}

/* ============================================================
   TEMA DRACULA
   ============================================================ */
.dracula {
  color-scheme: dark;

  --color-white: #F8F8F2;       /* texto principal */
  --color-black: #282A36;       /* fundo mais escuro */

  --color-gray-50: #F8F8F2;     /* texto principal */
  --color-gray-100: #F1FA8C;    /* texto secundário claro */
  --color-gray-200: #E5E5E5;    /* ícones e bordas claras */
  --color-gray-300: #C9D6E8;    /* bordas médias */
  --color-gray-400: #A8B8D0;    /* placeholders */
  --color-gray-500: #8A9AB8;    /* texto desabilitado */
  --color-gray-600: #6272A4;    /* comment - fundos secundários */
  --color-gray-700: #44475A;    /* current - fundos de cards */
  --color-gray-800: #282A36;    /* bg - fundos primários */
  --color-gray-900: #282A36;    /* bg - fundo da página */

  --color-blue-50: #8BE9FD;     /* cyan - mais brilhante */
  --color-blue-100: #8BE9FD;
  --color-blue-200: #8BE9FD;
  --color-blue-300: #BD93F9;    /* purple */
  --color-blue-400: #BD93F9;
  --color-blue-500: #BD93F9;
  --color-blue-600: #BD93F9;
  --color-blue-700: #BD93F9;
  --color-blue-800: #6272A4;
  --color-blue-900: #44475A;

  --color-green-50: #50FA7B;    /* verde neon */
  --color-green-100: #50FA7B;
  --color-green-200: #50FA7B;
  --color-green-300: #50FA7B;
  --color-green-400: #50FA7B;
  --color-green-500: #50FA7B;
  --color-green-600: #50FA7B;
  --color-green-700: #50FA7B;
  --color-green-800: #6272A4;
  --color-green-900: #44475A;

  --color-red-50: #FF5555;      /* vermelho vibrante */
  --color-red-100: #FF5555;
  --color-red-200: #FF5555;
  --color-red-300: #FF5555;
  --color-red-400: #FF5555;
  --color-red-500: #FF5555;
  --color-red-600: #FF5555;
  --color-red-700: #FF5555;
  --color-red-800: #6272A4;
  --color-red-900: #44475A;

  --color-yellow-50: #F1FA8C;   /* amarelo claro */
  --color-yellow-100: #F1FA8C;
  --color-yellow-200: #F1FA8C;
  --color-yellow-300: #F1FA8C;
  --color-yellow-400: #F1FA8C;
  --color-yellow-500: #F1FA8C;
  --color-yellow-600: #F1FA8C;
  --color-yellow-700: #F1FA8C;
  
  --color-orange-50: #FFB86C;   /* laranja suave */
  --color-orange-100: #FFB86C;
  --color-orange-200: #FFB86C;
  --color-orange-300: #FFB86C;
  --color-orange-400: #FFB86C;
  --color-orange-500: #FFB86C;
  --color-orange-600: #FFB86C;
  --color-orange-700: #FFB86C;
  
  --color-purple-50: #BD93F9;   /* roxo vibrante */
  --color-purple-100: #BD93F9;
  --color-purple-200: #BD93F9;
  --color-purple-300: #BD93F9;
  --color-purple-400: #BD93F9;
  --color-purple-500: #BD93F9;
  --color-purple-600: #BD93F9;
  --color-purple-700: #BD93F9;
  
  --color-pink-50: #FF79C6;     /* rosa vibrante */
  --color-pink-100: #FF79C6;
  --color-pink-200: #FF79C6;
  --color-pink-300: #FF79C6;
  --color-pink-400: #FF79C6;
  --color-pink-500: #FF79C6;
  --color-pink-600: #FF79C6;
  --color-pink-700: #FF79C6;
}

/* ============================================================
   TEMA MONOKAI
   ============================================================ */
.monokai {
  color-scheme: dark;

  --color-white: #F8F8F2;       /* texto principal */
  --color-black: #272822;       /* fundo mais escuro */

  --color-gray-50: #F8F8F2;     /* texto principal */
  --color-gray-100: #F1F1E9;    /* texto secundário claro */
  --color-gray-200: #E8E8E3;    /* ícones e bordas claras */
  --color-gray-300: #D0D0CB;    /* bordas médias */
  --color-gray-400: #B8B8B0;    /* placeholders */
  --color-gray-500: #A0A098;    /* texto desabilitado */
  --color-gray-600: #75715E;    /* comment - fundos secundários */
  --color-gray-700: #49483E;    /* current - fundos de cards */
  --color-gray-800: #3E3D32;    /* bg escuro - fundos primários */
  --color-gray-900: #272822;    /* bg - fundo da página */

  --color-blue-50: #66D9EF;     /* cyan vibrante */
  --color-blue-100: #66D9EF;
  --color-blue-200: #66D9EF;
  --color-blue-300: #AE81FF;    /* purple */
  --color-blue-400: #AE81FF;
  --color-blue-500: #AE81FF;
  --color-blue-600: #AE81FF;
  --color-blue-700: #AE81FF;
  --color-blue-800: #75715E;
  --color-blue-900: #3E3D32;

  --color-green-50: #A6E22E;    /* verde lima vibrante */
  --color-green-100: #A6E22E;
  --color-green-200: #A6E22E;
  --color-green-300: #A6E22E;
  --color-green-400: #A6E22E;
  --color-green-500: #A6E22E;
  --color-green-600: #A6E22E;
  --color-green-700: #A6E22E;
  --color-green-800: #75715E;
  --color-green-900: #3E3D32;

  --color-red-50: #F92672;      /* rosa/vermelho vibrante */
  --color-red-100: #F92672;
  --color-red-200: #F92672;
  --color-red-300: #F92672;
  --color-red-400: #F92672;
  --color-red-500: #F92672;
  --color-red-600: #F92672;
  --color-red-700: #F92672;
  --color-red-800: #75715E;
  --color-red-900: #3E3D32;

  --color-yellow-50: #E6DB74;   /* amarelo claro */
  --color-yellow-100: #E6DB74;
  --color-yellow-200: #E6DB74;
  --color-yellow-300: #E6DB74;
  --color-yellow-400: #FD971F;  /* orange */
  --color-yellow-500: #FD971F;
  --color-yellow-600: #FD971F;
  --color-yellow-700: #FD971F;
  
  --color-orange-50: #FD971F;   /* laranja vibrante */
  --color-orange-100: #FD971F;
  --color-orange-200: #FD971F;
  --color-orange-300: #FD971F;
  --color-orange-400: #FD971F;
  --color-orange-500: #FD971F;
  --color-orange-600: #FD971F;
  --color-orange-700: #FD971F;
  
  --color-purple-50: #AE81FF;   /* roxo vibrante */
  --color-purple-100: #AE81FF;
  --color-purple-200: #AE81FF;
  --color-purple-300: #AE81FF;
  --color-purple-400: #AE81FF;
  --color-purple-500: #AE81FF;
  --color-purple-600: #AE81FF;
  --color-purple-700: #AE81FF;
  
  --color-pink-50: #F92672;     /* rosa vibrante */
  --color-pink-100: #F92672;
  --color-pink-200: #F92672;
  --color-pink-300: #F92672;
  --color-pink-400: #F92672;
  --color-pink-500: #F92672;
  --color-pink-600: #F92672;
  --color-pink-700: #F92672;
}

/* ============================================================
   ESTILOS BASE
   ============================================================ */
body {
  margin: 0;
  padding: 0;
}

#root {
  width: 100%;
  height: 100%;
}
```

---

### `src/App.tsx`

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Logs from './pages/Logs';
import './App.css';  // ← ADICIONE ESSA LINHA!

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'dark:bg-gray-800 dark:text-white',
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
```

---

### `src/assets/react.svg`

```text
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

---

### `src/components/Sidebar.tsx`

```typescript
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, Server } from 'lucide-react';

export default function Sidebar() {
    const navItems = [
        { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/logs', icon: FileText, label: 'Logs' },
        { to: '/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                    <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        MCP Manager
                    </h1>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    v1.0.0
                </div>
            </div>
        </aside>
    );
}
```

---

### `src/contexts/ThemeContext.tsx`

```typescript
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system' | 'nord' | 'dracula' | 'monokai';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'system';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remover todas as classes de tema
    root.classList.remove('light', 'dark', 'nord', 'dracula', 'monokai');
    
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(systemDark ? 'dark' : 'light');
    } else {
      root.classList.add(theme);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') applyTheme('system');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

---

### `src/data/features.json`

```json
{
  "features": [
    {
      "name": "Dashboard",
      "description": "Start/Stop/Restart/Remove MCP servers"
    },
    {
      "name": "Logs",
      "description": "Real-time viewing with auto-refresh"
    },
    {
      "name": "Settings",
      "description": "Themes, Autostart"
    },
    {
      "name": "System Tray",
      "description": "Show Dashboard / Quit / Left-click opens dashboard"
    },
    {
      "name": "Window Management",
      "description": "Window minimizes to tray on close (doesn't exit)"
    },
    {
      "name": "DevTools",
      "description": "Enabled in release"
    }
  ]
}
```

---

### `src/data/templates.json`

```json
{
  "templates": [
    {
      "id": "default",
      "name": "Default Template",
      "description": "Standard MCP Manager layout",
      "layout": {
        "sidebar": true,
        "header": true,
        "footer": false
      },
      "components": ["Sidebar", "Dashboard", "Logs", "Settings"]
    },
    {
      "id": "compact",
      "name": "Compact Template",
      "description": "Minimalist layout for focused work",
      "layout": {
        "sidebar": false,
        "header": true,
        "footer": false
      },
      "components": ["Dashboard", "Logs"]
    },
    {
      "id": "full",
      "name": "Full Template",
      "description": "Complete layout with all features",
      "layout": {
        "sidebar": true,
        "header": true,
        "footer": true
      },
      "components": ["Sidebar", "Dashboard", "Logs", "Settings", "Header", "Footer"]
    }
  ]
}
```

---

### `src/data/themes.json`

```json
{
  "themes": [
    {
      "id": "light",
      "name": "Light",
      "description": "Classic light theme"
    },
    {
      "id": "dark",
      "name": "Dark",
      "description": "Classic dark theme"
    },
    {
      "id": "system",
      "name": "System",
      "description": "Automatically follows system preference"
    },
    {
      "id": "nord",
      "name": "Nord",
      "description": "Arctic-inspired color palette"
    },
    {
      "id": "dracula",
      "name": "Dracula",
      "description": "Dark theme with vibrant colors"
    },
    {
      "id": "monokai",
      "name": "Monokai",
      "description": "Popular developer theme"
    }
  ]
}
```

---

### `src/main.tsx`

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'  // ← Importante!

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

### `src/pages/Dashboard.tsx`

```typescript
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { Play, Square, RotateCcw, Plus, Trash2, Activity, X, Edit, Container } from 'lucide-react';
import toast from 'react-hot-toast';

interface Server {
    id: string;
    name: string;
    port: number;
    status: string;
    pid?: number;
    uptime: number;
    useDocker: boolean;
    containerId?: string;
    docker?: {
        image: string;
        volumes: string[];
        envVars: string[];
        network?: string;
    };
    command?: string;
    args?: string[];
    workDir?: string;
}

interface ServerConfig {
    id: string;
    name: string;
    command: string;
    args: string[];
    port: number;
    workDir: string | null;
    useDocker: boolean;
    docker: {
        image: string;
        volumes: string[];
        envVars: string[];
        network?: string;
    } | null;
}

export default function Dashboard() {
    const [servers, setServers] = useState<Server[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingServerId, setEditingServerId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        command: '',
        args: '[]',
        port: 3000,
        workDir: '',
        useDocker: false,
        dockerImage: 'node:20-slim',
        dockerVolumes: '',
        dockerEnvVars: '',
        dockerNetwork: 'host',
    });

    // MCP Server Templates - Using verified packages from @modelcontextprotocol/servers repo
    const mcpTemplates = [
        {
            id: 'memory',
            name: 'Memory Server',
            description: 'Persistent memory storage for AI context via knowledge graph',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-memory"]',
            port: 3001,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'filesystem',
            name: 'Filesystem Server',
            description: 'Access local files and directories (isolated via Docker, read-only)',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-filesystem"]',
            port: 3002,
            workDir: '',
            envVars: 'ALLOWED_DIRS=$HOME/Projects',
            useDocker: false,
        },
        {
            id: 'filesystem-docker',
            name: 'Filesystem Server (Docker Isolated)',
            description: 'Filesystem access in isolated container with read-only volume',
            command: 'docker',
            args: '["run", "--rm", "-i", "--read-only", "-v", "$HOME/Projects:/mnt/data:ro", "node:20-slim", "npx", "-y", "@modelcontextprotocol/server-filesystem", "/mnt/data"]',
            port: 3003,
            workDir: '/mnt/data',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['$HOME/Projects:/mnt/data:ro'],
        },
        {
            id: 'shell-sandboxed',
            name: 'Shell Server (Sandboxed)',
            description: 'Execute shell commands in isolated container (only /tmp access)',
            command: 'docker',
            args: '["run", "--rm", "-i", "-v", "/tmp:/workspace", "node:20-slim", "sh", "-c", "echo \\"Shell sandboxed ready\\""]',
            port: 3004,
            workDir: '/workspace',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['/tmp:/workspace'],
        },
        {
            id: 'shell-full',
            name: 'Shell Server (Full Access)',
            description: 'Full system access for diagnostics, drivers, processes and configurations',
            command: 'npx',
            args: '["-y", "@mako10k/mcp-shell-server"]',
            port: 3005,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'adb',
            name: 'ADB Server',
            description: 'Android Debug Bridge integration (requires native ADB installed). Use system adb command.',
            command: 'adb',
            args: '["start-server"]',
            port: 3006,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'sequential-thinking',
            name: 'Sequential Thinking Server',
            description: 'Chain of thought reasoning for complex problem solving',
            command: 'npx',
            args: '["-y", "@modelcontextprotocol/server-sequential-thinking"]',
            port: 3007,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'git',
            name: 'Git Server',
            description: 'Git repository operations with read-only access to projects',
            command: 'npx',
            args: '["-y", "@cyanheads/git-mcp-server", "--dir", "$HOME/Projects"]',
            port: 3008,
            workDir: '',
            useDocker: false,
        },
        {
            id: 'git-docker',
            name: 'Git Server (Docker Isolated)',
            description: 'Git operations in isolated container with read-only repo access',
            command: 'docker',
            args: '["run", "--rm", "-i", "-v", "$HOME/Projects:/repos:ro", "node:20-slim", "npx", "-y", "@cyanheads/git-mcp-server", "--dir", "/repos"]',
            port: 3009,
            workDir: '/repos',
            useDocker: true,
            dockerImage: 'node:20-slim',
            dockerVolumes: ['$HOME/Projects:/repos:ro'],
        },
        {
            id: 'playwright',
            name: 'Playwright Server',
            description: 'Browser automation and testing via Playwright',
            command: 'npx',
            args: '["-y", "@playwright/mcp"]',
            port: 3010,
            workDir: '',
            useDocker: false,
        },
    ];

    const applyTemplate = (template: typeof mcpTemplates[0]) => {
        setFormData({
            id: template.id,
            name: template.name,
            command: template.command,
            args: template.args,
            port: template.port,
            workDir: template.workDir || '',
            useDocker: template.useDocker || false,
            dockerImage: template.dockerImage || 'node:20-slim',
            dockerVolumes: (template.dockerVolumes || []).join('\n'),
            dockerEnvVars: '',
            dockerNetwork: 'host',
        });
        setShowModal(true);
    };

    useEffect(() => {
        loadServers();
        const interval = setInterval(loadServers, 2000);
        return () => clearInterval(interval);
    }, []);

    const loadServers = async () => {
        try {
            const result = await invoke<Server[]>('get_all_servers');
            setServers(result);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };

    const startServer = async (id: string, name: string) => {
        try {
            await invoke('start_server', { serverId: id });
            toast.success(`${name} started`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to start ${name}: ${e}`);
        }
    };

    const stopServer = async (id: string, name: string) => {
        try {
            await invoke('stop_server', { serverId: id });
            toast.success(`${name} stopped`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to stop ${name}`);
        }
    };

    const restartServer = async (id: string, name: string) => {
        try {
            await invoke('restart_server', { serverId: id });
            toast.success(`${name} restarted`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to restart ${name}`);
        }
    };

    const removeServer = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to remove ${name}?`)) return;
        try {
            await invoke('remove_server', { serverId: id });
            toast.success(`${name} removed`);
            loadServers();
        } catch (e) {
            toast.error(`Failed to remove ${name}`);
        }
    };

    const editServer = async (server: any) => {
        try {
            setEditingServerId(server.id);
            
            // Buscar configuração completa do servidor
            const config = await invoke<any>('get_server_config', { 
                serverId: server.id 
            });
            
            setFormData({
                id: config.id,
                name: config.name,
                command: config.command || '',
                args: JSON.stringify(config.args || [], null, 2),
                port: config.port,
                workDir: config.workDir || '',
                useDocker: config.useDocker || false,
                dockerImage: config.docker?.image || 'node:20-slim',
                dockerVolumes: (config.docker?.volumes || []).join('\n'),
                dockerEnvVars: (config.docker?.envVars || []).join('\n'),
                dockerNetwork: config.docker?.network || 'host',
            });
            setShowModal(true);
        } catch (error) {
            toast.error(`Failed to load server config: ${error}`);
        }
    };

    const openAddModal = () => {
        setEditingServerId(null);
        setFormData({
            id: '',
            name: '',
            command: '',
            args: '[]',
            port: 3000,
            workDir: '',
            useDocker: false,
            dockerImage: 'node:20-slim',
            dockerVolumes: '',
            dockerEnvVars: '',
            dockerNetwork: 'host',
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingServerId(null);
    };

    const handleSaveServer = async () => {
        try {
            // Corrige o crash quando o campo args está vazio
            let argsArray: string[] = [];
            const trimmedArgs = formData.args.trim();
            if (trimmedArgs) {
                try {
                    const parsed = JSON.parse(trimmedArgs);
                    argsArray = Array.isArray(parsed) ? parsed : [parsed];
                } catch {
                    toast.error('Arguments must be a valid JSON array');
                    return;
                }
            }
            
            const dockerConfig = formData.useDocker ? {
                image: formData.dockerImage,
                volumes: formData.dockerVolumes.split('\n').map(v => v.trim()).filter(v => v),
                envVars: formData.dockerEnvVars.split('\n').map(e => e.trim()).filter(e => e),
                network: formData.dockerNetwork || undefined,
            } : null;

            const config: ServerConfig = {
                id: formData.id,
                name: formData.name,
                command: formData.command,
                args: argsArray,
                port: formData.port,
                workDir: formData.workDir || null,
                useDocker: formData.useDocker,
                docker: dockerConfig,
            };

            if (editingServerId) {
                await invoke('update_server', { config });
                toast.success(`Server ${formData.name} updated`);
            } else {
                await invoke('add_server', { config });
                toast.success(`Server ${formData.name} added`);
            }
            
            closeModal();
            loadServers();
        } catch (e) {
            toast.error(`Failed to save server: ${e}`);
        }
    };

    const formatUptime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-gray-500 dark:text-gray-400">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">MCP Servers</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your Model Context Protocol servers</p>
                </div>
                <button 
                    onClick={openAddModal}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus size={20} />
                    Add Server
                </button>
            </div>

            {/* MCP Templates Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Start Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mcpTemplates.map((template) => (
                        <button
                            key={template.id}
                            onClick={() => applyTemplate(template)}
                            className="flex flex-col items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all text-left group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Container size={18} className="text-blue-600 dark:text-blue-400" />
                                <h3 className="font-medium text-gray-900 dark:text-white">{template.name}</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{template.description}</p>
                            <div className="mt-3 flex items-center gap-2 text-xs">
                                {template.useDocker ? (
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded">Docker</span>
                                ) : (
                                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">Native</span>
                                )}
                                <span className="text-gray-400 dark:text-gray-500">Port: {template.port}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {servers.length === 0 ? (
                <div className="text-center py-12">
                    <Activity className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">No servers configured yet</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {servers.map((server) => (
                        <div
                            key={server.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{server.name}</h3>
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                server.status === 'running'
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                            }`}
                                        >
                                            {server.status}
                                        </span>
                                        {server.useDocker && (
                                            <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                                                <Container size={12} />
                                                Docker
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                        <p>Port: {server.port}</p>
                                        {server.pid && <p>PID: {server.pid}</p>}
                                        {server.containerId && <p>Container: {server.containerId.substring(0, 12)}</p>}
                                        {server.status === 'running' && (
                                            <p>Uptime: {formatUptime(server.uptime)}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    {server.status === 'running' ? (
                                        <>
                                            <button
                                                onClick={() => stopServer(server.id, server.name)}
                                                className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                                                title="Stop"
                                            >
                                                <Square size={20} />
                                            </button>
                                            <button
                                                onClick={() => restartServer(server.id, server.name)}
                                                className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
                                                title="Restart"
                                            >
                                                <RotateCcw size={20} />
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => startServer(server.id, server.name)}
                                            className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                                            title="Start"
                                        >
                                            <Play size={20} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => editServer(server)}
                                        className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                        title="Edit"
                                    >
                                        <Edit size={20} />
                                    </button>
                                    <button
                                        onClick={() => removeServer(server.id, server.name)}
                                        className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        title="Remove"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full mx-4 my-8">
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {editingServerId ? 'Edit MCP Server' : 'Add MCP Server'}
                            </h2>
                            <button 
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Server ID</label>
                                    <input
                                        type="text"
                                        value={formData.id}
                                        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                                        disabled={!!editingServerId}
                                        className={`w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white ${
                                            editingServerId ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                        placeholder="filesystem"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Server Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                        placeholder="Filesystem Server"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <Container size={20} className="text-blue-600 dark:text-blue-400" />
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-white">Run in Docker Container</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Isolated environment with custom dependencies</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.useDocker}
                                        onChange={(e) => setFormData({ ...formData, useDocker: e.target.checked })}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            {formData.useDocker ? (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Docker Image</label>
                                        <input
                                            type="text"
                                            value={formData.dockerImage}
                                            onChange={(e) => setFormData({ ...formData, dockerImage: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="node:20-slim"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Command</label>
                                        <input
                                            type="text"
                                            value={formData.command}
                                            onChange={(e) => setFormData({ ...formData, command: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="npx"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Arguments (JSON array)</label>
                                        <textarea
                                            value={formData.args}
                                            onChange={(e) => setFormData({ ...formData, args: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={2}
                                            placeholder='["-y", "@modelcontextprotocol/server-filesystem", "/projects"]'
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Port Mapping</label>
                                        <input
                                            type="number"
                                            value={formData.port}
                                            onChange={(e) => setFormData({ ...formData, port: parseInt(e.target.value) || 0 })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="8001"
                                        />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Host port will be mapped to the same container port</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Volumes (one per line: host:container)</label>
                                        <textarea
                                            value={formData.dockerVolumes}
                                            onChange={(e) => setFormData({ ...formData, dockerVolumes: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={3}
                                            placeholder="/home/user/Projects:/projects"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Environment Variables (one per line: KEY=VALUE)</label>
                                        <textarea
                                            value={formData.dockerEnvVars}
                                            onChange={(e) => setFormData({ ...formData, dockerEnvVars: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={3}
                                            placeholder="NODE_ENV=production"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Network Mode</label>
                                        <select
                                            value={formData.dockerNetwork}
                                            onChange={(e) => setFormData({ ...formData, dockerNetwork: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                        >
                                            <option value="host">host</option>
                                            <option value="bridge">bridge</option>
                                            <option value="none">none</option>
                                        </select>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Command</label>
                                        <input
                                            type="text"
                                            value={formData.command}
                                            onChange={(e) => setFormData({ ...formData, command: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                            placeholder="npx"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Arguments (JSON array)</label>
                                        <textarea
                                            value={formData.args}
                                            onChange={(e) => setFormData({ ...formData, args: e.target.value })}
                                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm"
                                            rows={2}
                                            placeholder='["-y", "@modelcontextprotocol/server-filesystem", "/home/user/Projects"]'
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Port</label>
                                            <input
                                                type="number"
                                                value={formData.port}
                                                onChange={(e) => setFormData({ ...formData, port: parseInt(e.target.value) || 0 })}
                                                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                                placeholder="3001"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Working Directory</label>
                                            <input
                                                type="text"
                                                value={formData.workDir}
                                                onChange={(e) => setFormData({ ...formData, workDir: e.target.value })}
                                                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                                                placeholder="/home/user/Projects"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-800">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveServer}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                {editingServerId ? 'Update Server' : 'Add Server'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
```

---

### `src/pages/Logs.tsx`

```typescript
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { RefreshCw, Trash2 } from 'lucide-react';

interface Server {
    id: string;
    name: string;
    status: string;
}

export default function Logs() {
    const [servers, setServers] = useState<Server[]>([]);
    const [selectedServer, setSelectedServer] = useState<string>('');
    const [logs, setLogs] = useState<string[]>([]);
    const [autoRefresh, setAutoRefresh] = useState(true);

    useEffect(() => {
        loadServers();
    }, []);

    useEffect(() => {
        if (selectedServer && autoRefresh) {
            const interval = setInterval(loadLogs, 1000);
            return () => clearInterval(interval);
        }
    }, [selectedServer, autoRefresh]);

    const loadServers = async () => {
        try {
            const result = await invoke<Server[]>('get_all_servers');
            setServers(result);
            if (result.length > 0 && !selectedServer) {
                setSelectedServer(result[0].id);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const loadLogs = async () => {
        if (!selectedServer) return;
        try {
            const result = await invoke<string[]>('get_server_logs', {
                serverId: selectedServer,
            });
            setLogs(result);
        } catch (e) {
            console.error(e);
        }
    };

    const clearLogs = async () => {
        setLogs([]);
    };

    return (
        <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Server Logs
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        View real-time logs from your MCP servers
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={autoRefresh}
                            onChange={(e) => setAutoRefresh(e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                            Auto-refresh
                        </span>
                    </label>
                    <button
                        onClick={loadLogs}
                        className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        title="Refresh"
                    >
                        <RefreshCw size={20} />
                    </button>
                    <button
                        onClick={clearLogs}
                        className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                        title="Clear"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <select
                    value={selectedServer}
                    onChange={(e) => setSelectedServer(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    {servers.map((server) => (
                        <option key={server.id} value={server.id}>
                            {server.name} ({server.status})
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex-1 bg-gray-900 rounded-lg p-4 overflow-auto font-mono text-sm">
                {logs.length === 0 ? (
                    <div className="text-gray-500 text-center py-12">
                        No logs available
                    </div>
                ) : (
                    <div className="space-y-1">
                        {logs.map((log, index) => (
                            <div key={index} className="text-gray-300 break-all">
                                {log}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
```

---

### `src/pages/Settings.tsx`

```typescript
import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Monitor, Palette, Power } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Settings() {
    const { theme, setTheme } = useTheme();
    const [autostartEnabled, setAutostartEnabled] = useState(false);

    useEffect(() => {
        loadAutostartStatus();
    }, []);

    const loadAutostartStatus = async () => {
        try {
            const result = await invoke<boolean>('is_autostart_enabled');
            setAutostartEnabled(result);
        } catch (e) {
            console.error(e);
        }
    };

    const toggleAutostart = async () => {
        try {
            if (autostartEnabled) {
                await invoke('disable_autostart');
                toast.success('Autostart disabled');
            } else {
                await invoke('enable_autostart');
                toast.success('Autostart enabled');
            }
            setAutostartEnabled(!autostartEnabled);
        } catch (e) {
            toast.error('Failed to toggle autostart');
        }
    };

    const themes = [
        { id: 'light', label: 'Light', icon: Sun },
        { id: 'dark', label: 'Dark', icon: Moon },
        { id: 'system', label: 'System', icon: Monitor },
        { id: 'nord', label: 'Nord', icon: Palette },
        { id: 'dracula', label: 'Dracula', icon: Palette },
        { id: 'monokai', label: 'Monokai', icon: Palette },
    ];

    return (
        <div className="p-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Settings
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Configure your MCP Manager preferences
                </p>
            </div>

            <div className="space-y-6">
                {/* Theme Selection */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Theme
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id as any)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all ${theme === t.id
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                            >
                                <t.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                <span className="text-gray-900 dark:text-white font-medium">
                                    {t.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Autostart */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Power className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Start with System
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Automatically start MCP Manager when you log in
                                </p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={autostartEnabled}
                                onChange={toggleAutostart}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>

                {/* About */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        About
                    </h2>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p>
                            <span className="font-medium">Version:</span> 1.0.0
                        </p>
                        <p>
                            <span className="font-medium">Built with:</span> Tauri + React +
                            TypeScript
                        </p>
                        <p>
                            <span className="font-medium">License:</span> MIT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

---

### `src/vite-env.d.ts`

```typescript
/// <reference types="vite/client" />
```

---

### Backend

### `src-tauri/src/autostart.rs`

```rust
use std::fs;

#[tauri::command]
pub async fn enable_autostart() -> Result<String, String> {
    let exe_path = std::env::current_exe().map_err(|e| e.to_string())?;
    let desktop_entry = format!(
        "[Desktop Entry]\n\
         Type=Application\n\
         Name=MCP Manager\n\
         Exec={} --minimized\n\
         Hidden=false\n\
         NoDisplay=false\n\
         X-GNOME-Autostart-enabled=true\n",
        exe_path.display()
    );
    
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    fs::create_dir_all(&autostart_dir).map_err(|e| e.to_string())?;
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    fs::write(desktop_file, desktop_entry).map_err(|e| e.to_string())?;
    
    Ok("Autostart enabled".to_string())
}

#[tauri::command]
pub async fn disable_autostart() -> Result<String, String> {
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    
    if desktop_file.exists() {
        fs::remove_file(desktop_file).map_err(|e| e.to_string())?;
    }
    
    Ok("Autostart disabled".to_string())
}

#[tauri::command]
pub async fn is_autostart_enabled() -> Result<bool, String> {
    let autostart_dir = dirs::config_dir()
        .ok_or("Could not find config directory")?
        .join("autostart");
    
    let desktop_file = autostart_dir.join("mcp-manager.desktop");
    
    Ok(desktop_file.exists())
}

pub fn should_start_minimized() -> bool {
    std::env::args().any(|arg| arg == "--minimized")
}
```

---

### `src-tauri/src/lib.rs`

```rust
mod mcp_server;
mod tray;
mod autostart;

use tauri::Manager;
use std::sync::Mutex;
use std::collections::HashMap;

pub struct AppState {
    servers: Mutex<HashMap<String, mcp_server::McpServer>>,
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(AppState {
            servers: Mutex::new(HashMap::new()),
        })
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();
            tray::create_tray(app)?;

            // CARREGAR DADOS SALVOS DO DISCO
            let initial_servers = mcp_server::load_servers(app.handle());
            let state = app.state::<AppState>();
            *state.servers.lock().unwrap() = initial_servers;

            if autostart::should_start_minimized() {
                window.hide()?;
            }
            Ok(())
        })
        .on_window_event(|window, event| {
            if let tauri::WindowEvent::CloseRequested { api, .. } = event {
                window.hide().unwrap();
                api.prevent_close();
            }
        })
        .invoke_handler(tauri::generate_handler![
            mcp_server::start_server,
            mcp_server::stop_server,
            mcp_server::restart_server,
            mcp_server::get_server_status,
            mcp_server::get_all_servers,
            mcp_server::get_server_config,  // ← ADICIONAR ISSO
            mcp_server::add_server,
            mcp_server::update_server,
            mcp_server::remove_server,
            mcp_server::get_server_logs,
            autostart::enable_autostart,
            autostart::disable_autostart,
            autostart::is_autostart_enabled,
        ])
        .build(tauri::generate_context!())
        .expect("error while building tauri application")
        .run(|_app_handle, _event| {});
}
```

---

### `src-tauri/src/main.rs`

```rust
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    mcp_manager_lib::run();
}
```

---

### `src-tauri/src/mcp_server.rs`

```rust
use serde::{Deserialize, Serialize};
use std::process::{Command, Child, Stdio};
use std::sync::{Arc, Mutex};
use std::io::{BufRead, BufReader};
use std::thread;
use std::collections::HashMap;
use std::path::PathBuf;
use tauri::{State, Manager};
use crate::AppState;
use std::env;

// ============================================================
// PERSISTÊNCIA EM DISCO
// ============================================================

fn get_config_path(app: &tauri::AppHandle) -> Result<PathBuf, String> {
    let dir = app.path().app_data_dir().map_err(|e| e.to_string())?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir.join("servers_config.json"))
}

pub fn save_servers(app: &tauri::AppHandle, servers: &HashMap<String, McpServer>) -> Result<(), String> {
    let path = get_config_path(app)?;
    let configs: Vec<McpServerConfig> = servers.values().map(|s| s.config.clone()).collect();
    let json = serde_json::to_string_pretty(&configs).map_err(|e| e.to_string())?;
    std::fs::write(path, json).map_err(|e| e.to_string())?;
    Ok(())
}

pub fn load_servers(app: &tauri::AppHandle) -> HashMap<String, McpServer> {
    let mut map = HashMap::new();
    if let Ok(path) = get_config_path(app) {
        if path.exists() {
            if let Ok(data) = std::fs::read_to_string(path) {
                if let Ok(configs) = serde_json::from_str::<Vec<McpServerConfig>>(&data) {
                    for config in configs {
                        map.insert(config.id.clone(), McpServer {
                            config,
                            process: None,
                            container_id: None,
                            logs: Arc::new(Mutex::new(Vec::new())),
                            started_at: None,
                        });
                    }
                }
            }
        }
    }
    map
}

// ============================================================
// UTILS
// ============================================================

/// Obtém o caminho home do usuário atual de forma dinâmica
fn get_home_dir() -> String {
    env::var("HOME").unwrap_or_else(|_| "/home/user".to_string())
}

/// Substitui placeholders de caminho no template
fn resolve_path_template(template: &str) -> String {
    let home = get_home_dir();
    template.replace("/home/user", &home).replace("$HOME", &home)
}

// ============================================================
// STRUCTS (com camelCase para o frontend)
// ============================================================

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DockerConfig {
    pub image: String,
    pub volumes: Vec<String>,
    pub env_vars: Vec<String>,
    pub network: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct McpServerConfig {
    pub id: String,
    pub name: String,
    pub command: String,
    pub args: Vec<String>,
    pub port: u16,
    pub work_dir: Option<String>,
    pub use_docker: bool,
    pub docker: Option<DockerConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct McpServerStatus {
    pub id: String,
    pub name: String,
    pub port: u16,
    pub status: String,
    pub pid: Option<u32>,
    pub uptime: u64,
    pub container_id: Option<String>,
    pub use_docker: bool,
}

pub struct McpServer {
    pub config: McpServerConfig,
    pub process: Option<Child>,
    pub container_id: Option<String>,
    pub logs: Arc<Mutex<Vec<String>>>,
    pub started_at: Option<std::time::Instant>,
}

// ============================================================
// HELPERS DOCKER
// ============================================================

fn get_container_status(container_id: &str) -> String {
    let output = Command::new("docker")
        .args(["inspect", "-f", "{{.State.Status}}", container_id])
        .output();
    match output {
        Ok(out) if out.status.success() => {
            String::from_utf8_lossy(&out.stdout).trim().to_string()
        }
        _ => "not_found".to_string(),
    }
}

fn get_container_pid(container_id: &str) -> Option<u32> {
    let output = Command::new("docker")
        .args(["inspect", "-f", "{{.State.Pid}}", container_id])
        .output();
    match output {
        Ok(out) if out.status.success() => {
            let pid_str = String::from_utf8_lossy(&out.stdout).trim().to_string();
            pid_str.parse().ok()
        }
        _ => None,
    }
}

// ============================================================
// COMMANDS TAURI
// ============================================================

#[tauri::command]
pub async fn start_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&server_id) {
        if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let status = get_container_status(container_id);
                if status == "running" {
                    return Err("Server already running".to_string());
                }
            }
        } else {
            if server.process.is_some() {
                return Err("Server already running".to_string());
            }
        }

        if server.config.use_docker {
            let docker_config = server.config.docker.as_ref()
                .ok_or("Docker config not provided")?;

            let mut cmd = Command::new("docker");
            cmd.args(["run", "-d", "--rm"]);
            cmd.args(["--name", &format!("mcp-{}", server.config.id)]);
            cmd.args(["-p", &format!("{}:{}", server.config.port, server.config.port)]);

            // Resolve path templates in volumes (replace /home/user with actual home)
            for volume in &docker_config.volumes {
                let resolved_volume = resolve_path_template(volume);
                cmd.args(["-v", &resolved_volume]);
            }
            for env_var in &docker_config.env_vars {
                cmd.args(["-e", env_var]);
            }
            if let Some(ref network) = docker_config.network {
                cmd.args(["--network", network]);
            }

            cmd.arg(&docker_config.image);
            cmd.arg(&server.config.command);
            for arg in &server.config.args {
                cmd.arg(arg);
            }

            let output = cmd.output().map_err(|e| format!("Failed to start container: {}", e))?;

            if !output.status.success() {
                let stderr = String::from_utf8_lossy(&output.stderr);
                return Err(format!("Docker run failed: {}", stderr));
            }

            let container_id = String::from_utf8_lossy(&output.stdout).trim().to_string();
            server.container_id = Some(container_id.clone());
            server.started_at = Some(std::time::Instant::now());

            let logs = server.logs.clone();
            let server_id_clone = server_id.clone();
            let container_id_clone = container_id.clone();

            thread::spawn(move || {
                let output = Command::new("docker")
                    .args(["logs", "-f", &container_id_clone])
                    .stdout(Stdio::piped())
                    .stderr(Stdio::piped())
                    .spawn();

                if let Ok(mut child) = output {
                    if let Some(stdout) = child.stdout.take() {
                        let reader = BufReader::new(stdout);
                        for line in reader.lines().flatten() {
                            if let Ok(mut logs) = logs.lock() {
                                logs.push(format!("[{}][OUT] {}", server_id_clone, line));
                                if logs.len() > 1000 {
                                    logs.remove(0);
                                }
                            }
                        }
                    }
                }
            });

            Ok(format!("Container {} started", container_id))
        } else {
            let mut cmd = Command::new(&server.config.command);
            
            // Resolve path templates in args
            let resolved_args: Vec<String> = server.config.args.iter()
                .map(|arg| resolve_path_template(arg))
                .collect();
            cmd.args(&resolved_args);

            // Resolve path templates in work_dir
            if let Some(ref work_dir) = server.config.work_dir {
                let resolved_work_dir = resolve_path_template(work_dir);
                cmd.current_dir(&resolved_work_dir);
            }

            // Add environment variables with path resolution
            if let Some(ref docker_config) = server.config.docker {
                for env_var in &docker_config.env_vars {
                    if let Some((key, value)) = env_var.split_once('=') {
                        let resolved_value = resolve_path_template(value);
                        cmd.env(key, &resolved_value);
                    } else {
                        cmd.env(env_var, "");
                    }
                }
            }

            cmd.stdout(Stdio::piped())
               .stderr(Stdio::piped());

            let mut child = cmd.spawn().map_err(|e| format!("Failed to spawn process: {}", e))?;

            if let Some(stdout) = child.stdout.take() {
                let logs = server.logs.clone();
                let server_id_clone = server_id.clone();
                thread::spawn(move || {
                    let reader = BufReader::new(stdout);
                    for line in reader.lines().flatten() {
                        if let Ok(mut logs) = logs.lock() {
                            logs.push(format!("[{}][OUT] {}", server_id_clone, line));
                            if logs.len() > 1000 {
                                logs.remove(0);
                            }
                        }
                    }
                });
            }

            if let Some(stderr) = child.stderr.take() {
                let logs = server.logs.clone();
                let server_id_clone = server_id.clone();
                thread::spawn(move || {
                    let reader = BufReader::new(stderr);
                    for line in reader.lines().flatten() {
                        if let Ok(mut logs) = logs.lock() {
                            logs.push(format!("[{}][ERR] {}", server_id_clone, line));
                            if logs.len() > 1000 {
                                logs.remove(0);
                            }
                        }
                    }
                });
            }

            server.started_at = Some(std::time::Instant::now());
            server.process = Some(child);

            Ok(format!("Server {} started", server_id))
        }
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn stop_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&server_id) {
        if server.config.use_docker {
            if let Some(container_id) = server.container_id.take() {
                let output = Command::new("docker")
                    .args(["stop", &container_id])
                    .output()
                    .map_err(|e| e.to_string())?;

                if output.status.success() {
                    server.started_at = None;
                    Ok(format!("Container {} stopped", container_id))
                } else {
                    let stderr = String::from_utf8_lossy(&output.stderr);
                    Err(format!("Failed to stop container: {}", stderr))
                }
            } else {
                Err("Container not running".to_string())
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
                server.started_at = None;
                Ok(format!("Server {} stopped", server_id))
            } else {
                Err("Server not running".to_string())
            }
        }
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn restart_server(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    stop_server(state.clone(), server_id.clone()).await.ok();
    start_server(state, server_id).await
}

#[tauri::command]
pub async fn get_server_status(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<McpServerStatus, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        let (status, pid) = if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let container_status = get_container_status(container_id);
                let container_pid = get_container_pid(container_id);
                (container_status, container_pid)
            } else {
                ("stopped".to_string(), None)
            }
        } else {
            let status = if server.process.is_some() { "running" } else { "stopped" };
            let pid = server.process.as_ref().map(|p| p.id());
            (status.to_string(), pid)
        };

        let uptime = server.started_at
            .map(|t| t.elapsed().as_secs())
            .unwrap_or(0);

        Ok(McpServerStatus {
            id: server.config.id.clone(),
            name: server.config.name.clone(),
            port: server.config.port,
            status,
            pid,
            uptime,
            container_id: server.container_id.clone(),
            use_docker: server.config.use_docker,
        })
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_all_servers(
    state: State<'_, AppState>,
) -> Result<Vec<McpServerStatus>, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    let statuses: Vec<McpServerStatus> = servers.values()
        .map(|server| {
            let (status, pid) = if server.config.use_docker {
                if let Some(ref container_id) = server.container_id {
                    let container_status = get_container_status(container_id);
                    let container_pid = get_container_pid(container_id);
                    (container_status, container_pid)
                } else {
                    ("stopped".to_string(), None)
                }
            } else {
                let status = if server.process.is_some() { "running" } else { "stopped" };
                let pid = server.process.as_ref().map(|p| p.id());
                (status.to_string(), pid)
            };

            let uptime = server.started_at
                .map(|t| t.elapsed().as_secs())
                .unwrap_or(0);

            McpServerStatus {
                id: server.config.id.clone(),
                name: server.config.name.clone(),
                port: server.config.port,
                status,
                pid,
                uptime,
                container_id: server.container_id.clone(),
                use_docker: server.config.use_docker,
            }
        })
        .collect();

    Ok(statuses)
}

#[tauri::command]
pub async fn add_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    config: McpServerConfig,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    let server = McpServer {
        config,
        process: None,
        container_id: None,
        logs: Arc::new(Mutex::new(Vec::new())),
        started_at: None,
    };

    servers.insert(server.config.id.clone(), server);

    // SALVAR EM DISCO
    save_servers(&app, &servers)?;

    Ok("Server added".to_string())
}

#[tauri::command]
pub async fn remove_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    server_id: String,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(mut server) = servers.remove(&server_id) {
        if server.config.use_docker {
            if let Some(ref container_id) = server.container_id {
                let _ = Command::new("docker").args(["stop", container_id]).output();
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
            }
        }

        // SALVAR EM DISCO
        save_servers(&app, &servers)?;

        Ok("Server removed".to_string())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_server_logs(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<Vec<String>, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        let logs = server.logs.lock().map_err(|e| e.to_string())?;
        Ok(logs.clone())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn update_server(
    app: tauri::AppHandle,
    state: State<'_, AppState>,
    config: McpServerConfig,
) -> Result<String, String> {
    let mut servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get_mut(&config.id) {
        if server.config.use_docker {
            if let Some(container_id) = server.container_id.take() {
                let _ = Command::new("docker").args(["stop", &container_id]).output();
            }
        } else {
            if let Some(mut child) = server.process.take() {
                let _ = child.kill();
                let _ = child.wait();
            }
        }

        server.config = config;
        server.started_at = None;

        // SALVAR EM DISCO
        save_servers(&app, &servers)?;

        Ok("Server updated".to_string())
    } else {
        Err("Server not found".to_string())
    }
}

#[tauri::command]
pub async fn get_server_config(
    state: State<'_, AppState>,
    server_id: String,
) -> Result<McpServerConfig, String> {
    let servers = state.servers.lock().map_err(|e| e.to_string())?;

    if let Some(server) = servers.get(&server_id) {
        Ok(server.config.clone())
    } else {
        Err("Server not found".to_string())
    }
}
```

---

### `src-tauri/src/tray.rs`

```rust
use tauri::{
    App, Manager,
    menu::{Menu, MenuItem},
    tray::{TrayIconBuilder, TrayIconEvent, MouseButton, MouseButtonState},
};

pub fn create_tray(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let show = MenuItem::with_id(app, "show", "Show Dashboard", true, None::<&str>)?;
    let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;

    let menu = Menu::with_items(app, &[&show, &quit])?;

    TrayIconBuilder::with_id("main")
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&menu)
        .on_menu_event(move |app, event| {
            match event.id.as_ref() {
                "show" => {
                    if let Some(window) = app.get_webview_window("main") {
                        window.show().unwrap();
                        window.set_focus().unwrap();
                    }
                }
                "quit" => {
                    app.exit(0);
                }
                _ => {}
            }
        })
        .on_tray_icon_event(|tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                let app = tray.app_handle();
                if let Some(window) = app.get_webview_window("main") {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
        })
        .build(app)?;

    Ok(())
}
```
