import { MONTHS, DAYS } from '@/app/constant'

export const getFormatTimer = () => {
  const fullTime = new Date()

  const day = fullTime.getDay()
  const date = fullTime.getDate()
  const month = fullTime.getMonth()
  const year = fullTime.getFullYear()
  const hour = fullTime.getHours()
  const menutes = fullTime.getMinutes()
  const second = fullTime.getSeconds()

  return [
    `${DAYS[day]}, ${date} ${MONTHS[month]} ${year}`,
    `${hour >=10 ? hour : '0' + hour} : ${menutes >= 10 ? menutes : '0' + menutes} : ${second >= 10 ? second : '0' + second}`
  ]
}

// from letter space to camelCase
export const formated = (value) => {
  const result = value.split(" ");
  if (result.length > 1) {
    return result
      .map((item, index) => {
        return index !== 0
          ? item[0].toUpperCase() + item.replace(item[0], "")
          : item;
      })
      .join("");
  } else {
    return result.join();
  }
}
