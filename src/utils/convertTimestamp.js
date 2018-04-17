import moment from 'moment-timezone'

moment.tz.setDefault('Europe/Amsterdam')

export const convertTimestamp = (timeStamp, formatString = 'MMM-DD-YYYY HH:mm A') => {
  if (timeStamp) {
    return moment.unix(timeStamp).format(formatString)
  }
}

export const convertTimestampJs = (timeStamp, formatString = 'MMM-DD-YYYY HH:mm A') => {
  if (timeStamp) {
    return moment(timeStamp).format(formatString)
  }
}

export const convertDateToTimestamp = dateString => {
  return moment(dateString).format('X')
}
