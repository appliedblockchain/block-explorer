import format from 'date-fns/format'

export const convertTimestamp = (timeStamp, formatString = 'MMM-DD-YYYY HH:mm A') => {
  if (timeStamp) {
    const date = new Date(timeStamp)
    return format(date, formatString)
  }
}
