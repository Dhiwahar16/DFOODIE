import React, { useEffect, useState } from 'react';
import './PlaceOrder.css';

const PlaceOrder = ({ cartitems = {} }) => {
  const [gPayLoaded, setGPayLoaded] = useState(false);

  const total = Object.values(cartitems).reduce((acc, item) => acc + (item.price * item.count || 0), 0);
  const totcount = Object.values(cartitems).reduce((acc, item) => acc + (item.count || 0), 0);
  const discount = total * 0.10;
  const discountedTotal = total - discount;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pay.google.com/gp/p/js/pay.js";
    script.async = true;
    script.onload = () => setGPayLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (gPayLoaded) {
      onGooglePayLoaded();
    }
  }, [gPayLoaded]);

  const onGooglePayLoaded = () => {
    if (!window.google) {
      console.error("Google Pay SDK not loaded");
      return;
    }

    const paymentsClient = new window.google.payments.api.PaymentsClient({ environment: "TEST" });

    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["VISA", "MASTERCARD"]
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example",
              gatewayMerchantId: "exampleMerchantId"
            }
          }
        }
      ],
      merchantInfo: {
        merchantId: "dhiwahar126@okaxis",
        merchantName: "Dhiwahar"
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: discountedTotal.toFixed(2),
        currencyCode: "INR",
        countryCode: "IN"
      }
    };

    paymentsClient.isReadyToPay({ apiVersion: 2, apiVersionMinor: 0 })
      .then(response => {
        if (response.result) {
          const button = paymentsClient.createButton({
            onClick: () => onGooglePayPayment(paymentsClient, paymentDataRequest)
          });

          const gpayButtonContainer = document.getElementById("gpay-button");
          if (gpayButtonContainer) {
            gpayButtonContainer.innerHTML = "";
            gpayButtonContainer.appendChild(button);
          }
        }
      })
      .catch(error => console.error("Google Pay error:", error));
  };

  const onGooglePayPayment = (paymentsClient, paymentDataRequest) => {
    paymentsClient.loadPaymentData(paymentDataRequest)
      .then(paymentData => {
        console.log("Payment Success", paymentData);
        alert("Payment Successful! Order Placed.");
      })
      .catch(error => console.error("Payment Failed:", error));
  };

  return (
    <div className='placeorder'>
      <h1>Place Order</h1>
      <h2>Price Details</h2>
      <div className='order-summary'>
        <div className='order-sum-price'>
          <p>Price ({totcount} item{totcount > 1 ? 's' : ''})</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className='order-dis'>
          <p>Discount (10%)</p>
          <p>-${discount.toFixed(2)}</p>
        </div>
        <div className='order-delcharge'>
          <p>Delivery Charge</p>
          <p>Free Delivery</p>
        </div>
        <div className='order-totalamt'>
          <p>Total Amount</p>
          <p>${discountedTotal.toFixed(2)}</p>
        </div>
      </div><br />

      <div className='order-btn-placeorder-div'>
        {gPayLoaded ? (
          <div id="gpay-button"></div>
        ) : (
          <p>Loading Google Pay...</p>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
