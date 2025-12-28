# VoiceText Website

Landing page for VoiceText app.

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel
1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Deploy

## Add Desktop App Download

After building your desktop installer:

1. Copy `VoiceText-Setup.exe` to this folder
2. The download button will automatically work

## Customize

1. Replace `YOUR_BOT_USERNAME` with your Telegram bot username (2 places)
2. Update pricing if needed
3. Add your own branding/colors

## Structure

```
voicetext-website/
├── index.html              # Main page
├── package.json            # For Vercel
├── VoiceText-Setup.exe     # Desktop installer (add after building)
└── README.md
```
