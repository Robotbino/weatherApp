
import sun from '../assets/sun.png';
export default function MainIcon() {
    const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
    return (
      
            <div className="main-icon">
                <img src={sun} alt="Sunny Weather Icon" className="weather-icon" />
                <div className="weather-info">
                    <h2 id="location"></h2>
                    <p id="temperature" className="temperature">25°C</p>
                    <p id="description" className="weather-description">Sunny</p>
                </div>
                <div className="input-section">
                    <input type="text" id="city-input" placeholder="Enter city name" />
                    <button id="searchButton">find my city</button>
                </div>
            </div>
            
        );
        
}