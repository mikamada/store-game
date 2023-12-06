import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { setCheckout } from '../../../services/player';
import { useRouter } from 'next/router';

export default function CheckoutConfirmation() {
  const router = useRouter()
  const [checkBox, setCheckBox] = useState(false)
  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem('data-item');
    const dataTopupLocal = localStorage.getItem('data-topup');
    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopup = JSON.parse(dataTopupLocal!);

    if (!checkBox) {
      toast.error('Pastikan anda telah melakukan pembayaran')
    }

    const data = {
      voucher: dataItem._id,
      nominal: dataTopup.nominalItem._id,
      payment: dataTopup.paymentItem.payment._id,
      bank: dataTopup.paymentItem.bank._id,
      name: dataTopup.bankAccountName,
      accountUser: dataTopup.verifytID,
    }
    
    const response = await setCheckout(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Checkout Berhasilh');
      router.push('/complete-checkout');
    }
  }
  return (
    <>
      <label
        className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkBox} onChange={() => setCheckBox(!checkBox)} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type='button'
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  )
}
