import numbro from 'numbro'

export const formatNumber = (value) => {
  return numbro(value).format({ thousandSeparated: true })
}
