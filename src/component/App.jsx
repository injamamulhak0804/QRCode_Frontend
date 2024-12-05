import { useRef, useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [value, userValue] = useState("https://zamam-portfolio-v3.netlify.app/")
  const [isValid, setIsValid] = useState(false);
  const userData = useRef()
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  const handleSubmit = () =>{
    if(!value){
      alert('Add a Value')
    }
    const isLink = urlRegex.test(value);
    setIsValid(isLink);
    userValue(userData.current.value)
  }
  return (
    <>
      <div className="flex justify-between px-20 gap-5 mt-10">
        <div className="bg-slate-200 w-[60%] h-[500px] p-24 ps-44 rounded-lg">
          <QRCode value={value} />
        </div>
        <div className="w-[40%]">
        <h1 className="text-start text-2xl">QR Code Generator</h1>
        <hr className="w-[100%] p-[0.9px] rounded-full my-7 bg-slate-200" />
        <p className="text-xl font-semibold border-b-2 w-fit border-black mb-5">Link</p>
            <label className="mb-5 text-sm font-bold">Enter or paste Your URL *</label>
            <input ref={userData} type="text" id="default-search" class="block w-full max-w-full px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none my-4 leading-relaxed" placeholder="Enter URL link" required=""/>
            <button onClick={handleSubmit} className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Submit
            </button>
            {/* {isValid ? (<p>The input is a valid URL!</p>) : (<p>The input is not a valid URL.</p>)} */}
        </div>
      </div>
  </>
  )
}

export default App
