import queryString from 'query-string'

const translations = {
    en: {
        simulators: "Simulators",
        devices: "Devices",
        autoStart: "Auto start",
        startSimulator: "Start simulator",
        startAsimulator: "Start a simulator",
        clearSimulators: "clear simulators",
        filterSimulators: "filter simulators",
        blockAdd: "Add blocks",
        blockEnabled:
            "Add blocks for your connected and simulated devices to the modules drawer",
        blockDisabled:
            "This button becomes available if you have devices connected that don't have their matching blocks added to the 'Modules' drawer",
        simAdd: "Add simulators",
        simEnabled:
            "Create a simulator for each Role without an assigned device",
        simDisabled:
            "This button becomes available if there are Roles without assignable devices",
    },
    de: {
        simulators: "Simulatoren",
        devices: "Geräte",
        autoStart: "Automatisch starten",
        startSimulator: "Simulator starten",
        startAsimulator: "Einen Simulator starten",
        clearSimulators: "Simulatoren löschen",
        filterSimulators: "Simulatoren filtern",
        blockAdd: "Blöcke hinzufügen",
        blockEnabled:
            "Fügen Sie Blöcke für Ihre verbundenen und simulierten Geräte zur Modulauswahl hinzu",
        blockDisabled:
            "Diese Schaltfläche wird verfügbar, wenn Sie Geräte verbunden haben, für die noch keine passenden Blöcke zur 'Module'-Leiste hinzugefügt wurden",
        simAdd: "Simulatoren hinzufügen",
        simEnabled:
            "Erstellen Sie einen Simulator für jede Rolle ohne zugewiesenes Gerät",
        simDisabled:
            "Diese Schaltfläche wird verfügbar, wenn es Rollen ohne zuweisbare Geräte gibt",
    },
}

function getLang() {
    const qs = queryString.parse(location.search)
    if (qs.language && typeof qs.language === "string" )
        return qs.language
    const lang =
        typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "en"
    return lang    
}

export function translateLang(key: string) {
    const lang = getLang()
    return translations[lang]?.[key] || translations.en[key]
}

const translate_servers = {
    de: {
        "accelerometer": "Beschleunigungssensor",
        "humidity + temperature": "Feuchtigkeit + Temperatur",
        "vibration motor": "Vibrationsmotor",
        "button": "Knopf",
        "light level (solar)": "Lichtstärke (solar)",
        "magnetic field level": "Magnetfeldstärke",
        "power": "Stromversorgung",
        "relay (EM/10A)": "Relais (EM/10A)",
        "water pump (relay)": "Wasserpumpe (Relais)",
        "LED ring 8 pixels": "LED-Ring 8 Pixel",
        "LED pixel strip 30": "LED-Pixelstreifen 30",
        "LED pixel strip 60": "LED-Pixelstreifen 60",
        "LED pixel strip 150": "LED-Pixelstreifen 150",
        "LED pixel strip 300": "LED-Pixelstreifen 300",
        "rotary encoder + button": "Drehgeber + Knopf",
        "servo": "Servo",
        "servo (270°)": "Servo (270°)",
        "servo (360°)": "Servo (360°)",
        "servo (continuous)": "Servo (kontinuierlich)",
        "rotary potentiometer": "Drehpotentiometer",
        "slider (potentiometer)": "Schieberegler (Potentiometer)",
        "Hall sensor (potentiometer)": "Hallsensor (Potentiometer)",
        "distance (sonar)": "Entfernung (Sonar)",
        "DC current/voltage measurement": "Gleichstrom-/Spannungsmessung",
        "light bulb": "Glühbirne",
        "line sensor (3x digital)": "Liniensensor (3x digital)",
        "soil moisture": "Bodenfeuchtigkeit",
        "water acidity (pH)": "Wasser-Säuregehalt (pH)",
        "thermometer (outdoor)": "Thermometer (außen)",
        "thermometer (indoor)": "Thermometer (innen)",
        "thermometer (medical)": "Thermometer (medizinisch)",
        "buzzer": "Summer",
        "motion": "Bewegung",
        "UV index": "UV-Index",
    }
}

export function translateServer(name: string) {
    const lang = getLang()
    if (lang === "en") return name
    if (translate_servers[lang]) {
        return translate_servers[lang][name] || name
    } 
    return name
}