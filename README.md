# ImagineAI

ImagineAI is a SaaS (Software as a Service) application leveraging artificial intelligence to offer a suite of powerful image manipulation tools. Built with modern technologies such as Next.js, TypeScript, and MongoDB, and integrated with Stripe for payment processing and Clerk for user management, ImagineAI provides an intuitive and seamless experience for users looking to enhance their images with features such as resizing, restoring, generative filling, object removal, recoloring, and background removal.

## Features

- **Image Resize**: Scale images up or down without losing clarity.
- **Image Restore**: Repair and restore old or damaged photographs.
- **Generative Fill**: Fill in missing parts of images with AI-generated content.
- **Object Remove**: Delete unwanted objects from images seamlessly.
- **Object Recolor**: Change the color of objects in images without affecting the rest.
- **Background Remove**: Extract subjects from their backgrounds with precision.

## Technology Stack

- **Frontend**: Next.js, TypeScript
- **Backend**: MongoDB for database management
- **AI**: Cloudinary for AI-powered image processing
- **User Management**: Clerk
- **Payment Processing**: Stripe
- **Hosting/Deployment**: Vercel

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm
- MongoDB
- Cloudinary
- Stripe
- Clerk

### Installation

1.  Clone the repository

```sh
git clone https://github.com/rafiqulshopon/ImagineAI.git
```

2.  Navigate to the project directory

```sh
cd ImagineAI
```

3.  Install NPM packages

```sh
npm install
```

4.  Enter your API keys in `.env.local`

```
# .env.local
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

WEBHOOK_SECRET=

MONGODB_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_SERVER_URL=
```

## Usage

To start the server, run the following command:

```sh
npm run dev
```

Navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch from `master` branch (`git checkout -b feature/amazing_feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/amazing_feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
