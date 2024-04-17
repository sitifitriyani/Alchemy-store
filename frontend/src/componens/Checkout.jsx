import { useState } from 'react';

function Checkout({ total, onClose }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulasi pembayaran, biasanya akan melibatkan API ke gateway pembayaran
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentSuccess(true);
    }, 2000); // simulasi 2 detik untuk pembayaran
  };

  const handleReturn = () => {
    setIsPaymentSuccess(false);
    onClose();
  };

  return (
    <div className="cart-popup">
      {isPaymentSuccess ? (
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4">Pesanan sedang diproses</h2>
          <p className="text-gray-600">Terima kasih atas pesanan Anda. Pesanan Anda sedang diproses oleh penjual.</p>
          <div className="flex justify-center mt-4">
            <button onClick={handleReturn} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">Kembali</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-4">Total Pembayaran: Rp {total}</h2>
          {isProcessing ? (
            <p className="text-gray-600">Sedang memproses pembayaran...</p>
          ) : (
            <button onClick={handlePayment} className="bg-blue-500 text-white py-2 px-4 rounded-md">Bayar Sekarang</button>
          )}
          <button onClick={onClose} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2">Batalkan</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
