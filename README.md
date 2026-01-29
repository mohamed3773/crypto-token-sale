# ComfortBreak Penguin (CBP) - Official Token Sale Website

A professional single-page website for the ComfortBreak Penguin token sale on Polygon blockchain.

## 🐧 Project Information

- **Token Name:** ComfortBreak Penguin
- **Symbol:** CBP
- **Network:** Polygon
- **Standard:** ERC-20
- **Total Supply:** 1,000,000,000 CBP
- **Public Sale:** 600,000,000 CBP (60%)
- **Team Allocation:** 400,000,000 CBP (40%)
- **Sale Price:** 0.0005 POL per CBP

## 📋 Smart Contracts

- **Token Contract:** `0x30519133FeA74Fdda2fa8E68c1F4EC8e90AAa8e9`
- **Token Drop Contract:** `0x579c7603A5482F9Cf4f65b78dea6AAebd95C2d79`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A thirdweb account (free at [thirdweb.com](https://thirdweb.com))

### Installation

1. **Install dependencies:**
   ```bash
   cd cbp-sale
   npm install
   ```

2. **Configure Environment Variables:**
   
   - Get your thirdweb Client ID from [thirdweb.com/dashboard](https://thirdweb.com/dashboard)
   - Open `.env.local` and add your client ID:
     ```
     NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id_here
     ```

3. **Add the Penguin Logo:**
   
   Place your penguin logo image as `public/penguin-logo.png`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add your `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` environment variable
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Add environment variables in Netlify dashboard

## 🎨 Features

- ✅ **Wallet Connection** - Connect with MetaMask, WalletConnect, and more
- ✅ **Purchase Widget** - Buy CBP tokens directly with POL
- ✅ **Real-time Calculation** - Automatic cost calculation in POL
- ✅ **Network Detection** - Automatic Polygon network verification
- ✅ **Transaction Links** - Direct Polygonscan links for all transactions
- ✅ **Responsive Design** - Works perfectly on desktop and mobile
- ✅ **Premium UI/UX** - Glassmorphism effects and smooth animations
- ✅ **Complete Transparency** - All contract addresses visible and verifiable
- ✅ **FAQ Section** - Comprehensive answers to common questions

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **thirdweb SDK** - Web3 integration
- **ethers.js** - Ethereum interactions

## ⚠️ Important Disclaimers

- This website is for informational purposes only
- This is NOT financial advice
- Cryptocurrency involves significant risk
- No promises or guarantees of future value or returns
- Always verify contract addresses on Polygonscan before transactions
- Never invest more than you can afford to lose

## 📄 License

This project is for demonstration purposes. All rights reserved.

## 🔗 Links

- [Polygon Network](https://polygon.technology/)
- [thirdweb Documentation](https://portal.thirdweb.com/)
- [Polygonscan](https://polygonscan.com/)

---

**Built with ❄️ by the ComfortBreak Penguin Team**
