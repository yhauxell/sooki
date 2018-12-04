export interface Weather{
    name:string;
    weather:SlotWeather;
    main:SlotMain;
    wind:Wind;
}

export interface Forecast {
    city: City;
    list?: ForecastSlot[];
}

export interface City{
    name:string;
}

export interface SlotWeather{
    main:string;
    description:string;
    icon:string;
}

export interface Wind{
    speed: number;
    deg:number;
}

export interface SlotMain{
    temp: number;
    temp_min:number;
    temp_max:number;
    pressure: number;
    humidity: number;
}
export interface ForecastSlot{
    dt: number;
    main: SlotMain;
    weather: SlotWeather[];
    wind: Window;
}
