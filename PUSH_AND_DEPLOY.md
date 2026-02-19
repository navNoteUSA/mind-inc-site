# Push to navNoteUSA & Deploy www.mind-inc.io

## Step 1: Log into GitHub CLI

```bash
gh auth login
```

Follow prompts (browser or token). Ensure you have admin rights to [navNoteUSA](https://github.com/navNoteUSA/).

---

## Step 2: Create Repo & Push

From this folder:

```bash
cd "/Users/niklaskennedy/Desktop/navNote - dev/mind-inc-site"

# Create private repo under navNoteUSA org and push
gh repo create navNoteUSA/mind-inc-site --private --source=. --remote=origin --push
```

If the repo already exists:

```bash
git remote add origin https://github.com/navNoteUSA/mind-inc-site.git
git push -u origin main
```

---

## Step 3: Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import** → Connect GitHub → select `navNoteUSA/mind-inc-site`
3. Framework: Next.js (auto-detected)
4. Deploy

---

## Step 4: Add Domain www.mind-inc.io

In Vercel project **Settings → Domains**:

1. Add `www.mind-inc.io` → set as primary
2. Add `mind-inc.io` → redirect to `www.mind-inc.io`

---

## Step 5: DNS (where you own mind-inc.io)

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

Vercel will show verified once DNS propagates (minutes–hours).
