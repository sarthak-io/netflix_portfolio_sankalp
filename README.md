## 🎬 Sankalp Chaturvedi — Netflix Inspired Portfolio

This repo powers my playful-but-professional homepage inspired by the Netflix browsing experience. I'm a Delhi NCR based director, writer, cinematographer and colourist. The app highlights my filmography, colour work, festival credentials and contact info using cinematic UI flourishes.

![Portfolio preview](image.png)

---

## ✨ What's inside?

- **Top Picks for collaborators** – Custom profile flows for directors, writers, colourists and cinephiles.
- **Filmography timeline** – A vertical timeline that showcases recent shorts, features and training.
- **Skills, awards and projects** – Modular cards that can be edited from code or from a CMS when tokens are provided.
- **Contact CTA** – A stylised badge with direct email/phone links.

---

## 🛠️ Tech Stack

- ⚛️ React + TypeScript
- 🎨 CSS Modules & custom motion design
- 📦 Create React App tooling
- 🌐 (Optional) DatoCMS for dynamic content – the components now include graceful fallbacks so the site stays useful even without tokens.

---

## 🚀 Getting Started

```bash
nvm install 18
nvm use 18
npm install
npm start
```

If you plan to hook the UI back into DatoCMS, create a `.env` with the appropriate `REACT_APP_DATOCMS_*` tokens mentioned in `src/queries/getDatoCmsToken.ts`.

> 🔐 **Need a token quickly?**
>
> 1. Copy the new `.env.example` file to `.env` in the project root.
> 2. It already includes the provided default token (`REACT_APP_DATOCMS_DEFAULT_TOKEN=93e74cf44cec08aad277ce02e529d5`).
> 3. Restart `npm start` so Create React App reloads the environment variables.

From there you can swap in your own token at any time or add host-specific entries (e.g., `REACT_APP_DATOCMS_FRONTEND_TOKEN`) if you deploy to multiple domains.

---

## 🤝 Contributing

Pull requests are welcome. Please open an issue if you spot a bug or want to suggest a cinematic enhancement.

---

## 📬 Contact

- Email: [sankalpchaturvedi31@gmail.com](mailto:sankalpchaturvedi31@gmail.com)
- Phone: [+91 92050 62634](tel:+919205062634)
- LinkedIn: [linkedin.com/in/sankalp-chaturvedi](https://www.linkedin.com/in/sankalp-chaturvedi)

---

MIT License.
