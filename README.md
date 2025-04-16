# Deploy node.js app in Google cloud app engine

> This project demonstrate how to deploy node.js sample app in Google cloud app engine

## 🚀 Features

- ✨ Google cloud acount setup
- ⚡ App Engine
- 🔒 How to deploy app using Google cloud SDK from local

## 🛠 Tech Stack

- Node.js
- Express
- Google Cloud(App Engine)

## 🧑‍💻 Local Setup
- Create free account in google cloud if not already have
- Login to Google cloud console, create a new project, or can use existing one
- Link billing account to project if not already linked
- Create/Enable app engine api from Google cloud console (this is one time activity and has to be done for first time)
- Install and setup google cloud cli(Google cloud sdk) in local as per OS
- Create simple node.js app in local
- Create app.yaml file in root of your project and add - runtime: nodejs22
- Run from terminal - gcloud auth login (authenticate to google cloud)
- Run from terminal - gcloud config set project PROJECT_ID (set project id))
- Run from terminal - gcloud app deploy (will prompt for region choose any region, choose or select appropriate project)
- Once deploy you will get a url, run in browser and check
- Voila its done now

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/rupachowrasia/node-gcp-app-engine-deploy.git

# Move into the project directory
cd node-gcp-app-engine-deploy

# Install dependencies
npm install






