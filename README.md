
# 🇮🇳 India@77 – Data in Motion

An **interactive data visualization web app** celebrating **India’s 77 years of progress** since Independence.  
It brings together **live public data** on GDP, literacy, life expectancy, population, and major milestones, all wrapped in a **tricolor-themed storytelling experience**.

---

## ✨ Features

- 📊 **Live Data** – GDP, literacy, population, and life expectancy from trusted public APIs.
- 🕰 **Decade Selector** – Explore each decade from 1947 to 2025 with aggregated stats.
- 🎯 **Milestone Timeline** – Key events in technology, policy, space, and sports achievements.
- 🌍 **Interactive Charts** – Smooth animations, tricolor palette, responsive design.
- 📌 **Data Sources Cited** – Transparent attribution for every number and fact.
- 📱 **Responsive & Accessible** – Works on mobile, tablet, and desktop with WCAG 2.1 AA standards.

---

## 🖼 Preview

![Screenshot Placeholder](docs/screenshot.png)  
*(Replace with your actual screenshot)*

---

## 🏗 System Architecture

```

\[ Frontend (React/Vue) ]
|
v
\[ Backend API Layer ]
|
v
\[ External Data APIs ]
├── World Bank API (GDP, Population, Life Expectancy)
├── UNESCO UIS API (Literacy)
├── IMF SDMX API (Macro Indicators – fallback)
├── OGD India API (Local datasets)
└── Wikidata/Wikimedia APIs (Milestones, Images)

```

---

## 🔍 Data Sources

| Dataset                  | API Link |
|--------------------------|----------|
| GDP, Population, Life Expectancy | [World Bank API](https://data.worldbank.org/) |
| Literacy Rates           | [UNESCO UIS API](https://api.uis.unesco.org/) |
| Macro Indicators (backup)| [IMF SDMX API](https://data.imf.org/) |
| India-specific datasets  | [Data.gov.in API](https://data.gov.in/) |
| Milestones & Events      | [Wikidata SPARQL](https://query.wikidata.org/) + [Wikimedia API](https://www.mediawiki.org/wiki/API:Main_page) |

---

## 🚀 How It Works

1. **Frontend** renders charts, maps, and milestone cards.
2. **Backend** fetches & normalizes data from multiple APIs.
3. **Caching** ensures fast loads and avoids API rate limits.
4. **Decade View** dynamically filters the dataset.
5. **Milestone Timeline** is enriched with images & summaries from Wikimedia.

---

## 📂 Project Structure

```

india77/
│
├── frontend/           # React/Vue/Svelte client
│   ├── components/     # UI components
│   ├── pages/          # Views
│   ├── assets/         # Icons, images
│   └── utils/          # Chart helpers, formatters
│
├── backend/            # Node.js/FastAPI backend
│   ├── routes/         # API endpoints
│   ├── services/       # API integration logic
│   ├── cache/          # Redis/Edge cache utilities
│   └── config/         # Environment variables, settings
│
└── docs/               # Documentation, screenshots

````

---

## ⚙️ Environment Variables

Create a `.env` file in `/backend`:

```env
PORT=5000
WORLD_BANK_BASE=https://api.worldbank.org/v2
UNESCO_API_KEY=your_key_here
IMF_BASE=https://sdmx.imf.org
OGD_API_KEY=your_key_here
````

---

## 🛠 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/india77.git

# Install backend dependencies
cd backend
npm install   # or pip install -r requirements.txt

# Install frontend dependencies
cd ../frontend
npm install

# Start backend
cd ../backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

---

## 🖥 Deployment

* **Frontend:** Vercel / Netlify
* **Backend:** Vercel Functions / Cloud Run
* **Cache:** Upstash Redis / Vercel KV

---

## 📜 License

MIT License – feel free to use, adapt, and share with attribution.

---

## 🙌 Acknowledgments

This project uses public datasets provided by:

* [World Bank](https://data.worldbank.org/)
* [UNESCO UIS](http://uis.unesco.org/)
* [IMF Data](https://data.imf.org/)
* [Data.gov.in](https://data.gov.in/)
* [Wikidata & Wikimedia Commons](https://www.wikidata.org/)

---

**Happy Independence Day! 🇮🇳 Jai Hind!**

