# ⚖️ JuryX — The Future of Fair Judging

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://juryx.abhaybansal.in/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/Targter/JURYX-BLOCKCHAIN.git)
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)

> **Decentralized. Transparent. Immutable.**
> JuryX is a blockchain-powered judging and voting platform built to eliminate bias, ensuring 100% fair and verifiable results for hackathons and competitions.

---

## 🚀 Overview

Traditional judging systems are plagued by **bias, manual errors, and a lack of transparency**. Participants rarely know how they were scored, and organizers often struggle with spreadsheet chaos.

**JuryX solves this.** By leveraging **Smart Contracts (Solidity)** for scoring and a modern **Next.js** frontend for interaction, JuryX ensures that once a score is locked, it cannot be altered—not even by the organizers.

### 🌟 Core Philosophy
1.  **Decentralization:** No central authority can manipulate the results.
2.  **Transparency:** All scoring logic is verifiable on-chain.
3.  **Privacy:** Judges cannot influence one another; scores are revealed only after the round closes.

---

## 🛠️ Tech Stack

JuryX utilizes a robust **Hybrid Web3 Architecture**:

### **Blockchain Layer**
-   **Solidity:** Smart contracts for immutable scoring and result calculation.
-   **Ethereum / Polygon:** Deployed network for transaction handling.
-   **Hardhat:** Development environment for compiling and deploying contracts.

### **Frontend & Interface**
-   **Next.js (React):** High-performance, server-side rendered UI.
-   **Tailwind CSS:** Professional, dark-mode-first styling.
-   **Framer Motion:** Smooth animations for modals and transitions.
-   **WebContainers:** Allowing live code previews of participant projects directly in the browser.

### **Backend & Infrastructure**
-   **Node.js / Express:** Handling auth, team management, and API routing.
-   **IPFS / Web3.Storage:** Decentralized storage for project assets.
-   **Vercel:** CI/CD and deployment.

---

## 🔥 Key Features

### 🏛️ Blockchain-Based Scoring
Every score submitted by a judge is signed and stored on the blockchain. This creates an **immutable audit trail** that guarantees the winner is chosen purely on merit.

### 🔐 Secure Judge Panels
Judges receive unique access codes. They can evaluate projects using a weighted metric system. The UI ensures a smooth experience without needing deep crypto knowledge.

### ⚡ Real-Time Live Leaderboard
As soon as the smart contract computes the final votes, the leaderboard updates instantly. No waiting, no manual tallying.

### 📁 Live Project Previews
Integrated **WebContainers** allow judges to run and preview participant projects (Next.js/React apps) directly within JuryX, without downloading ZIP files.

### 🎛️ Organizer Control Center
A comprehensive dashboard to:
- Create events and rounds.
- Generate secret entry codes.
- Assign panelists and manage permissions.

---

## 📸 Screen Previews

*(Add screenshots of your Dashboard, Landing Page, and Voting Screen here)*

| Landing Page | Judge Dashboard |
| :---: | :---: |
| ![Landing](https://via.placeholder.com/600x300?text=JuryX+Landing) | ![Dashboard](https://via.placeholder.com/600x300?text=Judge+View) |

---

## 🧭 How It Works (Flow)

1.  **Organizer** creates an event and deploys a specific Smart Contract for the round.
2.  **Participants** register via wallet, form teams, and upload project repos/files.
3.  **Judges** access the panel, view projects, and sign transactions to submit scores.
4.  **Smart Contract** aggregates scores based on pre-defined weights.
5.  **JuryX** displays the final, unalterable winner on the public leaderboard.

---

## 💻 Getting Started

Follow these steps to set up JuryX locally for development.

### Prerequisites
- Node.js (v18+)
- Metamask (or any Web3 wallet)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Targter/JURYX-BLOCKCHAIN.git
   cd JURYX-BLOCKCHAIN