import React, { useState } from 'react'
import '../Components/Gpay.css'
import { Form } from 'react-bootstrap';
function Gpay() {

    
    // Qr Code Generator Usestate

    const [qrCode, setQrCode] =useState("");
    const [img,setImg] = useState("")
    const [qrSize,setQrSize]=useState("")
    const [loading,setLoading]=useState(false)


    // Qr Code Generator Api Start

    async function genarateQR  (e)  {
        e.preventDefault();
        setLoading(true)

        try {
            const url =`https://api.qrserver.com/v1/create-qr-code/?size=*150&data=${qrCode}`
            setImg(url)
            
        }
        catch(error) {
            console.error("Error Generating Qr Code",error);
        }
        finally {
            setLoading(false)
        }
      };

      function downloadQR () {
        fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download = qrCode
            document.body.appendChild(link)
            link.click();
            document.body.removeChild(link)
        })
      }
  return (
    <div class="">




     <section>
        <div class="outside-border">
            <div class="silencer"></div>
            <div class="volume-up"></div>
            <div class="volume-down"></div>
            <div class="button-on"></div>
            <div class="inside-border">

                {/* <!-- Camera --> */}
                <div class="camera">
                    <div class="camera-dot">
                        <div class="camera-dot-2"></div>
                        <div class="camera-dot-3"></div>
                    </div>
                    <div class="camera-speaker"></div>
                </div>

                {/* <!-- Lock --> */}
                <div class="lock">
                    <div class="lock-locked"></div>
                </div>

                {/* <!-- Time --> */}
                <div class="time">19:53</div>

                {/* <!-- Battery and Signal --> */}
                <div class="t-r-info">
                    <div class="dots">...</div>
                    <div class="battery">
                        <div class="bar"></div>
                        <div class="dot"></div>
                    </div>
                </div>

                {/* <!-- Date --> */}
                <div class="date">Tuesday, 9 August</div>


         

                {/* <!-- Torch --> */}
                <div class="torch-outter">
                    <div class="light"></div>
                    <div class="top"></div>
                    <div class="switch-top"></div>
                    <div class="switch-section"></div>
                    <div class="switch">
                        <div class="dot"></div>
                    </div>
                </div>
              
                {/* <!-- Camera --> */}
                <div class="camera-outter">
                    <div class="box"></div>
                    <div class="eye"></div>
                    <div class="circle"></div>
                    <div class="dot"></div>
                </div>
              
                {/* <!-- Bottom Line --> */}
                <div class="bottom-line"></div>
            </div>
        </div>
    </section>
</div>
  )
}

export default Gpay
