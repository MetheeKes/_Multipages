import { useState } from 'react';
import Variable from '../Variable/Variable';
import './temperatures.css';

function Temperatures() {
    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState(77);
    const [kelvin, setKelvin] = useState(298.15);

    const Celsius = (value) => {
        setCelsius(value);
        setFahrenheit(celsiusToFahrenheit(value));
        setKelvin(celsiusToKelvin(value));
    };

    const Fahrenheit = (value) => {
        setFahrenheit(value);
        const celsiusValue = fahrenheitToCelsius(value);
        setCelsius(celsiusValue);
        setKelvin(celsiusToKelvin(celsiusValue));
    };

    const Kelvin = (value) => {
        setKelvin(value);
        const celsiusValue = kelvinToCelsius(value);
        setCelsius(celsiusValue);
        setFahrenheit(celsiusToFahrenheit(celsiusValue));
    };

    function celsiusToFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    }

    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    return (
        <div className='temperatures-container'>
            <h3 className='temperatures-title'>Temperatures</h3>
            <h3 className='temperatures-display'>
                <span className='badge bg-primary'>{celsius.toFixed(2)} °C</span>
                <span className='badge bg-primary'>{fahrenheit.toFixed(2)} °F</span>
                <span className='badge bg-primary'>{kelvin.toFixed(2)} K</span>
            </h3>
            <div className='temperatures-variables'>
                <Variable
                    name={'Celsius'}
                    value={celsius}
                    setValue={Celsius}
                />
                <Variable
                    name={'Fahrenheit'}
                    value={fahrenheit}
                    setValue={Fahrenheit}
                />
                <Variable
                    name={'Kelvin'}
                    value={kelvin}
                    setValue={Kelvin}
                />
            </div>
        </div>
    );
}

export default Temperatures;
