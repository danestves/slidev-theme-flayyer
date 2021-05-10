---
theme: none
layout: intro
image: 'https://lh5.googleusercontent.com/M85a8sv4lBHAvDPy7Wi-tJZ7cPD8bKtn4lyJElEjF0QPggUhcS_l0RtpaDdH1mEZsDnOy_FLeEbb99Gj2kveaN8tXhfEhTx0LrgKlY4mTBlXL4_TiluwZGasmhj026t4kDXy5u_M-VA'
floatingImage: '/floating.png'
---

<div class="h-full flex justify-between flex-col">
  <div>
    <div class="w-full max-w-[72%] mt-32">
      <img src="/logo.png" alt="Flayyer" class="w-[128px] dark:hidden" />
      <img src="/logo-dark.png" alt="Flayyer" class="w-[128px] mb-4 hidden dark:block" />
      <h2 class="text-[#111827] text-[30px] font-extrabold dark:text-gray-400">
        <span class="text-primary dark:text-white">Automatización de imágenes</span> para marketing y redes sociales
      </h2>
    </div>
  </div>

  <div>
    <a href="https://flayyer.com/es" target="_blank" rel="noopener noreferrer">
      https://flayyer.com/es
    </a>
  </div>
</div>

---
layout: text-image-text
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>                                      | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
