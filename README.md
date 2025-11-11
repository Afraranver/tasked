# Tasked - Simple TODO List App

A clean and intuitive TODO list application built with React Native and Expo.

## ✨ Features

- ✅ Add, edit, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Data persists across app restarts
- ✅ Clean, minimal UI
- ✅ Smooth animations

## 🚀 Quick Start
```bash
# Install dependencies
npm install

# Start the app
npx expo start - c tunnel
```

## 🛠️ Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **AsyncStorage** - Local data persistence

## 📱 How to Use

1. **Add Task** - Tap the floating + button, type your task, press Done
2. **Complete Task** - Tap the checkbox to mark complete
3. **Edit Task** - Long-press on task text to edit
4. **Delete Task** - Tap the × button

## 📁 Project Structure
```
tasked/
├── App.tsx              # Main app component
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript types
└── constants/          # App constants
```

## 🎯 Key Decisions

**Storage:** AsyncStorage - Simple, reliable, perfect for TODO data

**State Management:** Local state with custom hooks - No global state needed for single-screen app

**Architecture:** Modular components for maintainability and reusability

## 📝 Assignment

This project was created as part of a technical assessment to demonstrate:
- React Native development skills
- Clean code architecture
- State management patterns
- Data persistence strategies

## 📄 License

Created as part of a technical assessment.
