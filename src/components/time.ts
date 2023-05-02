export const todayDate = () => {
    const current = new Date();

    const currentDay = current.getDate();
    const currentMonth = current.toLocaleString('default', {month: 'long'});
    const currentYear = current.getFullYear();

    return `${currentDay} ${currentMonth} ${currentYear}`
};

export const sunTime = (sunTimeInMS: number): string => {
    const sunTimeDate = new Date(sunTimeInMS);

    const hoursSunTime = sunTimeDate.getUTCHours();
    const minutesSunTime = sunTimeDate.getUTCMinutes();

    return `${hoursSunTime}:${minutesSunTime < 10 ? (`0${minutesSunTime}`) : minutesSunTime}`
};