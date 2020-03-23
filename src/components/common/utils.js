export const getLocationDescription = (location) => {
    switch(location) {
        case  "NT": {
            return "NowyTarg"
        }
        case "zakopane": {
            return "Zakopane"
        }
        case "okolice": {
            return "Okolice Zakopanego i Nowego Targu"
        }

        default:
            return location;

    }

};

export const getMachineDescription = (machine) => {
    switch(machine) {
        case "pralka": {
            return "Pralka"
        }
        case "zmywarka": {
            return "Zmywarka"
        }
        case "lodówka": {
            return "Lodówka"
        }
        case "ekspres": {
            return "Ekspres do kawy"
        }

        default:
            return machine
    }
};

export const getMeetingTime = ( time ) => {

    switch(time) {
        case "morning": {
            return "Rano: od 8:00 do 11:00"
        }
        case "noon": {
            return "Południe: od 11:00 do 13:00"
        }
        case "afternoon": {
            return "Popołudnie: od 13:00 do 17:00"
        }
        case "evening": {
            return "Wieczór: od 17:00 do 20:00"
        }
        case "night": {
            return "Noc: od 20:00 do 23:00 - usługa premium"
        }
    }
    return 'Rano: od 8:00 do 11:00'
};
