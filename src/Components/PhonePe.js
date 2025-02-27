import React, { useState } from 'react'
import '../Components/PhonePe.css'
import GooglePayButton from "@google-pay/button-react";
function PhonePe() {

    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"]
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example"
              }
            }
          }
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant"
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: "100.00",
          currencyCode: "USD",
          countryCode: "US"
        }
      };
    
      const [buttonColor, setButtonColor] = useState("default");
      const [buttonType, setButtonType] = useState("buy");
      const [buttonSizeMode, setButtonSizeMode] = useState("static");
      const [buttonWidth, setButtonWidth] = useState(240);
      const [buttonHeight, setButtonHeight] = useState(40);
    
      const isTop = window === window.top;
    
  return (
    <div className='page-center'>
       
       <form className="top-bottom">


       <div className='row'>
            <div style={{textAlign:"center",paddingBottom:"20px"}} className='col-md-12'>
            <label className="control">
          <span>Button color</span>
          <select
            value={buttonColor}
            onChange={event => setButtonColor(event.target.value)}
          >
            <option value="default">default</option>
            <option value="black">black</option>
            <option value="white">white</option>
          </select>
        </label>
            </div>
            <div style={{textAlign:"center"}} className='col-md-12'>
            <label className="control">
          <span>Button type</span>
          <select
            value={buttonType}
            onChange={event => setButtonType(event.target.value)}
          >
            <option value="buy">buy</option>
            <option value="plain">plain</option>
            <option value="donate">donate</option>
          </select>
        </label>
            </div>


            <div style={{textAlign:"center",paddingTop:"30px"}} className='col-md-12'>
            <div className="demo">
        <GooglePayButton
          environment="TEST"
          buttonColor={buttonColor}
          buttonType={buttonType}
          buttonSizeMode={buttonSizeMode}
          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
          style={{ width: buttonWidth, height: buttonHeight }}
        />
      </div>
     
            </div>
        </div>

      
       
        {/* <label>
          <input
            type="checkbox"
            checked={buttonSizeMode === "fill"}
            onChange={event =>
              setButtonSizeMode(event.target.checked ? "fill" : "static")
            }
          />
          <span>Custom button size</span>
        </label><br/>
        <label className="control">
          <span>
            Button width <span className="value">({buttonWidth}px)</span>
          </span>
          <input
            type="range"
            min="160"
            max="800"
            value={buttonWidth}
            onChange={event => setButtonWidth(Number(event.target.value))}
            disabled={buttonSizeMode !== "fill"}
          />
        </label><br/>
        <label className="control">
          <span>
            Button height <span className="value">({buttonHeight}px)</span>
          </span>
          <input
            type="range"
            min="40"
            max="100"
            value={buttonHeight}
            onChange={event => setButtonHeight(Number(event.target.value))}
            disabled={buttonSizeMode !== "fill"}
          />
        </label><br/> */}
      </form>

     
      

      

      <div className="note" style={{ display: isTop ? "none" : "" }}>
        <p>
          Note: This page may need to open in a new window for it to function
          correctly.
        </p>
        <p>
          <a href="/" target="_blank">
            Open in new window
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default PhonePe
