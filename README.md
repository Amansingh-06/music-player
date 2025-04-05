# 🎵 Custom Music Player UI

A fully responsive and interactive music player application built using **React.js**, **SCSS**, and **React-Bootstrap**. This is a custom design implementation based on the given UI (not a Spotify clone) with dynamic background gradients, search functionality, favourites, and session-based recent plays.

## 🚀 Live Demo / Walkthrough

🔗 [YouTube Walkthrough Link]:https://jam.dev/c/7749d009-8eb4-483f-8fde-974abbee566c  
---

## 🛠️ Tech Stack

- React.js
- SCSS (Sassy CSS)
- React-Bootstrap
- HTML5 `<audio>` element
- Local Storage & Session Storage

---

## 📁 Folder Structure

music-player-ui/ ├── public/ │ └── assets/ │ ├── *.jpg (thumbnails) │ └── *.mp3 (music files) ├── src/ │ ├── components/ │ │ ├── Sidebar.jsx │ │ ├── SongList.jsx │ │ ├── SearchBar.jsx │ │ └── Player.jsx │ ├── data/ │ │ └── musicData.js │ ├── styles/ │ │ └── App.scss │ ├── App.jsx │ └── main.jsx


## 🔑 Features

- 🎧 Play music from a dummy JSON data file
- 🎨 Dynamic background gradient changes based on the current song's cover
- 🔍 Search songs by track title
- 🕹️ Fully functional audio controls
- 💾 Favourites stored in **Local Storage**
- 🕒 Recently played songs stored in **Session Storage**
- 🎬 Smooth animations and transitions

---

## 📦 Installation & Setup

```bash
git clone https://github.com/Amansingh-06/music-player.git
cd vite-project
npm install
npm run dev
