import { PaymentType } from '../types/api'

export const getNameFromPaymentType = (paymentType: PaymentType) => {
  switch (paymentType) {
    case 'PAY_FIFTY_FIFTY':
      return '50/50'
    default:
      return paymentType.at(0) + paymentType.substring(1).toLowerCase()
  }
}
