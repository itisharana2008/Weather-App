# 🌤 Weather App

A simple and modern **Weather Application** built using **HTML, CSS, and JavaScript** that fetches real-time weather data using the 🌍 **WeatherAPI.com** service.

This app allows users to:

-   Search weather by city name
    
-   View temperature, humidity, wind speed
    
-   See weather conditions and live weather icon
    
-   Get an error message if the city is not found
    

* * *

* * *

## 📂 Project Structure

`weather_app_frontend/ │── index.html     # UI layout │── style.css      # Styling & design └── script.js      # API call + logic`

* * *

* * *

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML | Structure of UI |
| CSS | Styling and layout |
| JavaScript | Logic & API integration |
| WeatherAPI.com | Live weather data |

* * *

* * *

## 🔑 Setup Instructions

### 1️⃣ Clone the Repository

`git clone https://github.com/YOUR_USERNAME/weather_app.git cd weather_app`

* * *

### 2️⃣ Get a Free WeatherAPI Key

Sign up at:

👉 [https://www.weatherapi.com](https://www.weatherapi.com?utm_source=chatgpt.com)

After signing in, copy your API key.

* * *

### 3️⃣ Configure API Key

Open the file:

`script.js`

Find this line:

`const API_KEY = "YOUR_API_KEY_HERE";`

Replace it with your key:

`const API_KEY = "abcd1234yourapikey";`

* * *

### 4️⃣ Run the App

#### Option A: Using Live Server (Recommended)

1.  Install **Live Server** extension in VS Code
    
2.  Right-click `index.html`
    
3.  Click **"Open with Live Server"**
    

* * *

#### Option B: Using Python Local Server

`python -m http.server 5500`

Then open browser:

`http://localhost:5500`

* * *

* * *

## 🧪 Usage

1.  Type a **city name** (e.g., `Delhi`, `London`, `Tokyo`)
    
2.  Click **Search**
    
3.  View:
    
    -   Temperature
        
    -   Humidity
        
    -   Wind Speed
        
    -   Weather Icon
        
    -   Condition Description
        

If an invalid city is entered, an error message will appear.

* * *

* * *

## 🛡️ Security Notice

🚨 **Do not upload your real API key publicly.**

This repository uses:

`const API_KEY = "YOUR_KEY_HERE";`

Users must manually add their own key.  
This keeps the repository clean and safe.

* * *

* * *

## ✨ Future Improvements

-   Add 3-day and 7-day forecast
    
-   Add auto-location using GPS
    
-   Add dark/light theme toggle
    
-   Store search history
    
-   Build full backend-protected version
