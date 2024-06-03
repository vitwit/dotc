import { getOfflineSignerAndCosmWasmClient } from '../GetClient'
import { AppConstants } from '../config/constant'
import { fetchTokenDenom } from '../utils/getDecimalByDenom'
export const placeBid = async (amount, price, denom,dealDenom,dealId) => {
  // const { amount, price, denom } = formData;
  try {
    const { offlineSigner, CosmWasmClient } = await getOfflineSignerAndCosmWasmClient()
    const contractAddress = AppConstants.CONTRACT_ADDRESS
    let accounts = await offlineSigner.getAccounts()
    const BidderAddress = localStorage.getItem('walletaddress')
    const defaultFee = {
      amount: [
        {
          denom: 'stake',
          amount: '5000'
        }
      ],
      gas: '250000'
    }
    const { denom: bid_denom, decimal: bid_decimal } = await fetchTokenDenom(
      denom
    )
    const { denom: deal_denom, decimal: deal_decimal } = await fetchTokenDenom(dealDenom)
    console.log('deal', bid_denom)
    const id = parseInt(dealId)
    const bid_amount=amount*(10**deal_decimal);
    const executeMsg = {
      place_bid: {
        deal_id: id,
        bidder: BidderAddress,
        amount: bid_amount.toString(),
        denom: denom,
        price: price
      }
    }
    const total_amount = '' + amount * price*(10**bid_decimal)
    const executeResponse = await CosmWasmClient.execute(
      BidderAddress,
      contractAddress,
      executeMsg,
      defaultFee,
      'Execute place_bid',
      [
        {
          amount: total_amount,
          denom: denom
        }
      ]
    )
    console.log('Execute response:', executeResponse)
    const txHash = executeResponse.transactionHash
    console.log('transation hash', txHash)
    const response = await CosmWasmClient.queryClient.tx.getTx(txHash)
    console.log('response of hash', response)
    return Promise.resolve(response)
  } catch (error) {
    console.error('Error executing bid:', error)


    const errorMessage = error.message || error.toString()
    const indexOfMessage = errorMessage.indexOf('message index: 0:')

    if (indexOfMessage !== -1) {
      const specificMessage = errorMessage
        .substring(indexOfMessage + 'message index: 0:'.length)
        .trim()
      console.error('Specific error message:', specificMessage)
    }

    return Promise.reject(errorMessage)
    return Promise.reject(error.message)
  }
}
