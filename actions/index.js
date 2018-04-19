
export const RECEIVE_CASH = 'RECEIVE_CASH'

export function receiveCash(amount) {
  return {
    type: RECEIVE_CASH,
    amount: (amount > 0 ? amount : 0)
  }
}

export const SPEND_CASH = 'SPEND_CASH'

export function spendCash(amount) {
  return {
    type: SPEND_CASH,
    amount: (amount > 0 ? amount : 0)
  }
}