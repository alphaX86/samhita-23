# Samhita 2023

**⚠️ This repo is now archived and no longer used in production ⚠️**

This virtual event starter kit was used to run [Next.js Conf 2020](https://nextjs.org/2020/conf), which had almost 40,000 live attendees. It includes the following features:

- Multiple stages - with the ability to add multiple sessions on each stage
- Each stage can be configured as -
  - An embedded YouTube stream OR
  - A live interactive audio-video experience powered by [100ms](https://www.100ms.live)
- Sponsor expo, including individual virtual booths
- Career Fair, allowing attendees to network and find job opportunities
- Ticket registration and generation
- Speaker pages and bios
- Schedule

---

## Built With

- Framework: [Next.js](https://nextjs.org/)
  - [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support)
  - [TypeScript](https://nextjs.org/docs/basic-features/typescript)
- CMS: Prismic CMS
- Deployment: [Vercel](https://vercel.com/), Netlify
- Authentication: [GitHub OAuth](https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps)
- Database: Supabase
## **Clone and Deploy**

Click the button below to clone and deploy this template on [Vercel](https://vercel.com/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/100mslive/virtual-event-starter-kit&project-name=virtual-event-starter-kit&repository-name=virtual-event-starter-kit&demo-url=https://demo.vercel.events&demo-image=https://demo.vercel.events/deploy.png&integration-ids=oac_7yeSwUoVR5no3SlA9WM6oR7l&demo-title=Virtual%20Event%20Starter%20Kit&demo-description=Jumpstart%20your%20virtual%20event%20and%20scale%20to%20any%20size%20with%20Next.js,%20100ms%20and%20DatoCMS)

You’ll be asked to install the **100ms with DatoCMS** integration. It lets you sign up or log in to 100ms and DatoCMS, and connects your DatoCMS and 100ms account to vercel. In a single integration, you will be able to deploy a fully working template that contains all the elements of the virtual events starter kit.

## Running Locally

> **NOTE:** Before this setup make sure to deploy the project using 100ms + DatoCMS integration to speed up the setup process.

After the project is deployed on Vercel, you can find `DATOCMS_READ_ONLY_API_TOKEN` and `NEXT_PUBLIC_HMS_TOKEN_ENDPOINT` already setup in the environment-variables section in project settings. The integration also sets up the [rooms](https://docs.100ms.live/server-side/v2/features/room), [templates & roles](https://docs.100ms.live/server-side/v2/foundation/templates-and-roles) associated with it.

First, to set local environment variables you can either use Vercel CLI [vercel env pull](https://vercel.com/docs/cli#commands/env) or just manually copy paste them.

```bash

cp .env.local.example .env.local
```

Then install the package and run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000/) to see the landing page.

### **CMS**

Environment variables determine which CMS to use. See [lib/cms-api.ts](https://github.com/vercel/virtual-event-starter-kit/blob/main/lib/cms-api.ts) for details and `.env.local.example` for all environment variables. The demo ([demo.vercel.events](https://demo.vercel.events/)) uses DatoCMS, but we also have support for:

- [Agility](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fvirtual-event-starter-kit&project-name=virtual-event-starter-kit&repository-name=virtual-event-starter-kit&demo-title=Virtual%20Event%20Starter%20Kit&demo-description=Jumpstart%20your%20virtual%20event%20and%20scale%20to%20any%20size%20with%20Next.js%20and%20Vercel.&demo-url=https%3A%2F%2Fdemo.vercel.events%2F&demo-image=https%3A%2F%2Fdemo.vercel.events%2Fdeploy.png&integration-ids=oac_Dnqk9CoC6rZ18k9nVR9KresV&external-id=%7B%22manifest%22%3A%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fvercel%2Fvirtual-event-starter-kit%2Fmain%2Fdatocms.json%22%2C%20%22githubRepo%22%3A%20%22vercel%2Fvirtual-event-starter-kit%22%7D)
- [Contentful](https://github.com/vercel/virtual-event-starter-kit/blob/main/lib/cms-providers/contentful.ts)
- [Prismic](https://github.com/vercel/virtual-event-starter-kit/blob/main/lib/cms-providers/prismic/index.ts) ([Instructions](https://github.com/vercel/virtual-event-starter-kit/blob/main/lib/cms-providers/prismic/README.md))
- [Sanity](https://create.sanity.io/?template=sanity-io%2Fsanity-template-nextjs-event-starter)
- [Storyblok](https://github.com/vercel/virtual-event-starter-kit/blob/main/lib/cms-providers/storyblok.ts)
  - Click the following link to create the space for this starter kit in Storyblok: [Create Event Space](https://app.storyblok.com/#!/build/101757)

### **Constants**

`lib/constants.ts` contains a list of variables you should customize.

Note - In case you're looking to add live audio-video to the events template, we'd recommend you to move ahead with DatoCMS for a seamless integration experience. We've created a dato + 100ms integration that will help you to integrate both 100ms and DatoCMS to your vercel account in a few clicks.

---

## **Authentication and Database**

Some features won’t work until you set up authentication and database. The demo ([demo.vercel.events](https://demo.vercel.events/)) uses [GitHub OAuth](https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app) for authentication and [Redis](https://redis.io/) for database. You can use different providers as you see fit.

### **Authentication**

You need to have GitHub OAuth set up to be able to customize the ticket after signing up on the registration form.

First, create a [GitHub OAuth application](https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app) to use for authentication.

- Set **Authorization Callback URL** as `<your domain>/api/github-oauth`
- After creating the OAuth app, create a **client secret**.

### **Running Locally:**

- Set the Authorization Callback URL as `http://localhost:3000/api/github-oauth` on GitHub.
- On `.env.local`, set `NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID` as the **Client ID** of the OAuth app.
- Set `GITHUB_OAUTH_CLIENT_SECRET` as the **Client secret** of the OAuth app.
- Finally, make sure the `NEXT_PUBLIC_SITE_ORIGIN` environment variable is set as `http://localhost:3000`. This is required to get the OAuth popup to work locally.
- Restart the app (`yarn dev`) after editing `.env.local`.

Once it’s set up, sign up using the registration form on the home page (not on a stage page) and then click "Generate with GitHub".

### **On Vercel:**

- Set the Authorization Callback URL as `<your deployment’s URL>/api/github-oauth` on GitHub.
- Set `NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID` and `GITHUB_OAUTH_CLIENT_SECRET` on [Vercel Project Environment Variables Settings](https://vercel.com/docs/environment-variables) for the production environment.
- Edit `SITE_URL` in `lib/constants.ts` to match your deployment’s URL (no trailing slash).
- Push the code to redeploy the Project on Vercel.

### **Database**

You need a database to save user data and enable the following features:

- Generating a unique ticket number for each email when signing up on the registration form. If no DB is set up, it’ll always be `1234`.
- Generating a unique ticket image or ticket URL after signing in with GitHub. If no DB is set up, each ticket image or URL will show generic data.

Environment variables determine which database to use. See [lib/db-api.ts](https://github.com/vercel/virtual-event-starter-kit/blob/main/lib/db-api.ts) for details and `.env.local.example` for all environment variables. There's support for:

- [Redis](https://github.com/vercel/virtual-event-starter-kit/blob/main/lib/db-providers/README.md#redis)
- [Supabase](https://github.com/vercel/virtual-event-starter-kit/blob/main/lib/db-providers/README.md#supabase)
