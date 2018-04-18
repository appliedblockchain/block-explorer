import format from 'date-fns/format'

export const convertTimestamp = (timeStamp, formatString = 'MMM-DD-YYYY HH:mm A') => {
  if (timeStamp) {
    const date = new Date(timeStamp * 1000)
    return format(date, formatString)
  }
}
