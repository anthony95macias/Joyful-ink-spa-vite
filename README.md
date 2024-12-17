# Joyful Ink

## Scalp Micropigmentation Appointment Booking Page

This project is a **Single Page Application (SPA)** built with **TypeScript** and **Vite**. It showcases Scalp Micropigmentation (SMP) services and includes a **"Book Now"** feature using **EmailJS** for clients to sign up for appointments. The project also provides a self-hosting option using **Docker Compose**.

---

## Features

- **Single Page Application** for Scalp Micropigmentation services.
- Informative section showcasing the transformative power of SMP.
- **Book Now** feature with EmailJS integration for personal notifications.
- Easy-to-follow Docker Compose setup for self-hosting.
- Social media links for enhanced connectivity.

---

## Prerequisites

To run the project locally or self-host, ensure you have the following:

- **Docker** and **Docker Compose** installed.
- An EmailJS account to use the notification feature.
- **pnpm** as the package manager.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
```

### 2. Create a `.env` File

Create a `.env` file in the root directory and include your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID="<YOUR_EMAILJS_SERVICE_ID>"
VITE_EMAILJS_TEMPLATE_ID="<YOUR_EMAILJS_TEMPLATE_ID>"
VITE_EMAILJS_PUBLIC_KEY="<YOUR_EMAILJS_PUBLIC_KEY>"
```

Replace `<YOUR_EMAILJS_SERVICE_ID>`, `<YOUR_EMAILJS_TEMPLATE_ID>`, and `<YOUR_EMAILJS_PUBLIC_KEY>` with your EmailJS credentials.

### 3. Install Dependencies

Use **pnpm** to install the project's dependencies:

```bash
pnpm install
```

### 4. Build and Run the Project with Docker Compose

To self-host the application using Docker Compose, run the following command:

```bash
docker-compose up -d
```

This will:

- Build the Docker image for the project.
- Start the application in detached mode.

The application will be available at [http://localhost:8080](http://localhost:8080).

---

## Project Structure

```plaintext
.
├── Dockerfile
├── README.md
├── components.json
├── dist
│   ├── index.html
├── docker-compose.yml
├── index.html
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
├── qodana.yaml
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   ├── index.css
│   ├── lib
│   ├── main.tsx
│   └── vite-env.d.ts
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.tsbuildinfo
└── vite.config.ts
```

---

## Booking Appointment with EmailJS

The **Book Now** form uses **EmailJS** to send personal notifications:

1. Ensure you have configured your EmailJS account and `.env` file.

2. The form captures the user's details and sends an email notification directly.

---

## Showcase: Scalp Micropigmentation (SMP)

**Experience the transformative power of Scalp Micropigmentation (SMP):**

- **Natural, defined hairlines** that enhance your appearance.
- Non-invasive, long-lasting solution for hair loss.
- Suitable for receding hairlines, thinning hair, or baldness.
- Restore your confidence and achieve a youthful, well-groomed look.

---

## Social Links

Stay connected via our social media links integrated into the page.

---

## License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute.

---

## Support

If you encounter any issues or need assistance, feel free to reach out via the project's repository.

---

Enjoy self-hosting your SMP Booking Page with ease! 🚀
