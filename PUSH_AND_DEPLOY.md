# Push to navNoteUSA & Deploy www.mind-inc.io (GitHub Pages)

## Step 1: Log into GitHub (no token needed)

In your terminal:

```bash
gh auth login
```

Pick **GitHub.com** → **HTTPS** → **Login with a web browser**. Copy the code, paste in the browser, approve. Done once.

---

## Step 2: Create repo & push

```bash
cd "/Users/niklaskennedy/Desktop/navNote - dev/mind-inc-site"

gh repo create navNoteUSA/mind-inc-site --private --source=. --remote=origin --push
```

---

## Step 3: Turn on GitHub Pages

1. Open: **https://github.com/navNoteUSA/mind-inc-site**
2. **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**

---

## Step 4: Custom domain www.mind-inc.io

1. Still in **Settings → Pages**
2. Under "Custom domain", enter: `www.mind-inc.io`
3. Click **Save**
4. Optionally: enable **Enforce HTTPS** after DNS is set

---

## Step 5: DNS (at your registrar for mind-inc.io)

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | navnoteusa.github.io |

(GitHub Pages uses lowercase. For apex `mind-inc.io` → `www`, add a redirect at your registrar if available.)

---

Each push to `main` will build and deploy automatically.
