import dayjs from "dayjs";

export function getChipLabel(label,value){
        const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
        const match = value.match(regex);
    
        if (match) {
            const formatted = `${match[2]}-${match[3]}-${match[1]}`;
    
                return formatted
        } else {
            return value
        }
    }

    