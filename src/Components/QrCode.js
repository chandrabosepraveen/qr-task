import React, { useState } from "react";
import "../Components/QrCode.css";
import { Form } from "react-bootstrap";

function QrCode() {

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
        <div>


           
            <section className="page-center">

            <div class="camera">
                    <div class="camera-dot">
                        <div class="camera-dot-2"></div>
                        <div class="camera-dot-3"></div>
                    </div>
                    <div class="camera-speaker"></div>
                </div>
                <div className="header">
                <Form>
         

         <div className="img-center">
         <h4 style={{paddingBottom:"30px"}} >QR CODE <span className="heading-color">GENERATOR</span></h4>
         {loading && <p>Please Wait....</p>}
         {img && <img className="img-size" src={img}/>}
         </div>
        <div className="row">
             <div className="col-md-12">
                 <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                 >
                     <Form.Label style={{fontSize:"14px"}}>Data For Qr Code</Form.Label>
                     <Form.Control value={qrCode} onChange={(e)=>setQrCode(e.target.value)}  className="border-color" type="text" placeholder="Data Enter For Qr Code" />
                 </Form.Group>
             </div>
            
         </div>
         

         <div className="button-list">
         <button onClick={genarateQR}  className="but-1">Genarate Qr Code</button>
         <button onClick={downloadQR}  className="but-2">Download Qr Code</button>
     </div>


     <div className="designed">
<p>Designed By <a href="" >Praveen</a></p>
   
</div>
        
     </Form>


                  </div>
               


  
    
               
            </section>

        </div>
    );
}

export default QrCode;


// import React from 'react'
// import "../Components/QrCode.css";
// function QrCode() {
    
//   return (
//     <div>
      
//       <div class="iphone-x">
//   <div class="side">
//     <div class="screen">
//        <video  src="https://images.apple.com/media/us/iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7/overview/primary/hero/small_2x.mp4" autoplay="autoplay" loop="loop"></video> 
//     </div>
//   </div>
//   <div class="line"></div>
//   <div class="header">
//     <div class="sensor-1"></div>
//     <div class="sensor-2"></div>
//     <div class="sensor-3"></div>
//   </div>
//   <div class="volume-button"></div>
//   <div class="power-button"></div>
// </div>
//     </div>
    
//   )
// }

// export default QrCode

