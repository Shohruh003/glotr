export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const londonToCurrentTimezone = (date: string | Date) => {
    const londonDate = new Date(date);
    const currentTimezoneOffset = new Date().getTimezoneOffset();
    const localDate = new Date(londonDate.getTime() - currentTimezoneOffset * 60000);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(localDate);
};

export const localFormatDate = (date: Date | string) => {
    let transformedDate: Date;
    date = londonToCurrentTimezone(date);
    if (typeof date === 'string') {
        transformedDate = new Date(date);
    } else {
        transformedDate = date;
    }

    const checkLenght = (data: string) => {
        return data.length === 1 ? `0${data}` : data;
    }

    let month = transformedDate.getUTCMonth() + 1;
    const resultDate = `${checkLenght(transformedDate.getUTCDate().toString())}.${checkLenght(month.toString())}.${transformedDate.getFullYear()}`;
    const resultTime = `${checkLenght(transformedDate.getHours().toString())}:${checkLenght(transformedDate.getMinutes().toString())}:${checkLenght(transformedDate.getSeconds().toString())}`;
    return `${resultDate} ${resultTime}`;
}

export const localFormatTime = (date: Date | string) => {
    let transformedDate: Date;
    date = londonToCurrentTimezone(new Date(date));
    if (typeof date === 'string') {
        transformedDate = new Date(date);
    } else {
        transformedDate = date;
    }

    const checkLenght = (data: string) => {
        return data.length === 1 ? `0${data}` : data;
    }

    return `${checkLenght(transformedDate.getHours().toString())}:${checkLenght(transformedDate.getMinutes().toString())}:${checkLenght(transformedDate.getSeconds().toString())}`;
}

export const checkDateSymbolesCount = (value: number) => {
    return value.toString().length === 1 ? `0${value}` : value;
}

export const getFormattedTimeDifference = (enterTime: Date, exitTime: Date) => {
    const enterTimeSeconds = enterTime.getTime();
    const exitTimeSeconds = exitTime.getTime();

    const difference = exitTimeSeconds - enterTimeSeconds;

    if (isNaN(difference) || difference < 0) return '--:--';

    const hours = Math.floor(difference / 3600000);
    let a = difference - hours * 3600000;
    const minutes = Math.floor(a / 60000);
    a = a - minutes * 60000;
    const seconds = a / 1000;

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
};

export const overflowControl = (maxHeight: number | string) => {
    return {
      maxHeight: maxHeight || "auto",
      overflowY: maxHeight ? "scroll" : "unset",
      overflow: maxHeight ? "auto" : "unset",
    };
};