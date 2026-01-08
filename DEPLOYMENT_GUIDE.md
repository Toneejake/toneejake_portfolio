# Vercel Deployment Guide

Follow these exact steps to deploy your portfolio.

## Phase 1: Push to GitHub

1.  **Initialize Git** (if you haven't already):
    *   Open your terminal in the project folder.
    *   Run: `git init`
    *   Run: `git add .`
    *   Run: `git commit -m "Initial commit"`

2.  **Create a Repository on GitHub**:
    *   Go to [github.com/new](https://github.com/new).
    *   Name it `portfolio` (or `ai-portfolio`).
    *   Click **Create repository**.

3.  **Push your code**:
    *   Copy the commands shown on GitHub under "…or push an existing repository from the command line".
    *   They will look like this:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
        git branch -M main
        git push -u origin main
        ```
    *   Run them in your terminal.

## Phase 2: Deploy on Vercel

1.  **Log in to Vercel**:
    *   Go to [vercel.com](https://vercel.com) and log in with **GitHub**.

2.  **Import Project**:
    *   Click **"Add New..."** -> **"Project"**.
    *   You should see your new `portfolio` repository in the list. Click **Import**.

3.  **Configure Project**:
    *   **Framework Preset**: It should auto-detect `Vite`. Leave it as is.
    *   **Root Directory**: `./` (default).

4.  **Environment Variables (CRITICAL)**:
    *   Expand the **"Environment Variables"** section.
    *   Open your local `.env` file (it is ignored by git, so Vercel doesn't know it yet).
    *   Copy and paste each key-value pair into Vercel:
        *   **Key**: `VITE_GEMINI_API_KEY`, **Value**: `Your_Gemini_Key_Here`
        *   **Key**: `VITE_EMAILJS_SERVICE_ID`, **Value**: `Your_Service_ID`
        *   **Key**: `VITE_EMAILJS_TEMPLATE_ID`, **Value**: `Your_Template_ID`
        *   **Key**: `VITE_EMAILJS_PUBLIC_KEY`, **Value**: `Your_Public_Key`
    *   *Note: Using Vercel's "Copy/Paste .env" feature usually works great if you copy the whole file content.*

5.  **Deploy**:
    *   Click **Deploy**.
    *   Wait about 1 minute.
    *   You will see confetti! 🎉

## Phase 3: Final Security Check

1.  **Secure your API Key**:
    *   Go to [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials).
    *   Edit your Gemini API Key.
    *   Under **Website restrictions**, click **Add**.
    *   Add your new Vercel domain (e.g., `https://your-name-portfolio.vercel.app/`).
    *   (Optional) Add `http://localhost:5173/` so it still works on your computer.
    *   Click **Save**.

## Phase 4: Custom Domain Setup (toneejake.tech)

1.  **Vercel Dashboard**:
    *   Go to your project settings in Vercel.
    *   Click on **Domains** in the left sidebar.
    *   Enter `toneejake.tech` in the input field and click **Add**.
    *   (Recommended) Also add `www.toneejake.tech` and choose direct it to the main domain.

2.  **DNS Configuration (at your Domain Registrar)**:
    *   Log in to where you bought your domain (e.g., Namecheap, GoDaddy, Hostinger).
    *   Look for **DNS Management** or **Name Server Settings**.
    *   **Option A: Trusted Name Servers (Easiest)**
        *   Change your "Nameservers" to "Custom DNS" and set them to:
            *   `ns1.vercel-dns.com`
            *   `ns2.vercel-dns.com`
    *   **Option B: A Records (If you want to keep using your registrar's email/other services)**
        *   Add/Edit an **A Record**:
            *   Host/Name: `@`
            *   Value: `76.76.21.21`
        *   Add/Edit a **CNAME Record**:
            *   Host/Name: `www`
            *   Value: `cname.vercel-dns.com`

3.  **Verification**:
    *   Back in Vercel, it might take a few minutes to verify.
    *   Once you see green checkmarks, your site is live at `toneejake.tech`!

## Troubleshooting

*   **"Build Failed"**: Check the "Build Logs" in Vercel. Usually, it's a TypeScript error.
*   **"API Error" on the site**: Check if you added the Environment Variables correctly in Vercel settings. You might need to Redeploy (Deployments -> Redeploy) after changing variables.
