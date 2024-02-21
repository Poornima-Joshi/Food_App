import { useState } from "react";

const Contact = () => {

  const [userData,setUserData] = useState({name:'',email:'',textarea:''});
  const [userMsg,setUserMsg] = useState('');
  const [emailMsg,setEmailMsg] = useState('');
  const [textMsg,setTextMsg] = useState('');


  const handleName = (e) =>{
    if(e.target.value === ''){
        setUserMsg('name is required')
    }else if(e.target.value.length < 2){
        setUserMsg('name must be at least 2 characters')
    }
    else{
        setUserMsg('');
        setUserData({
            name:e.target.value,
            email:userData.email,
            textarea:userData.textarea
        })
    }
  }
  const handleTextArea = (e) =>{
    if(e.target.value === ''){
        setTextMsg('required')
    }
    else{
        setTextMsg('');
        setUserData({
            name:userData.name,
            email:userData.email,
            textarea:e.target.value,
        })
    }
  }

  const handleEmail = (e) =>{
    if(e.target.value === ''){
        setEmailMsg('Email is required')
    }else if(e.target.value.indexOf("@") <= 2){
        setEmailMsg('invalid Email')
    }
    else{
        setEmailMsg('');
        setUserData({
            name:userData.name,
            email:e.target.value,
            textarea:userData.textarea
        })
    }
  }

  const handleSubmit = () =>{
    if(userData.name==='' || userData.email==='' || userData.textarea==='' ){
        setUserMsg('required');
        setEmailMsg('required');
        setTextMsg('required');
    }
    else{
        alert('your query / feedback submitted successfully');
        userData.name = '';
        userData.email = '';
        userData.textarea = '';
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById('textarea').value = '';
    }
  }



  return (
    <div className="pt-16">
      <div className="card max-w-2xl mx-auto  bg-white shadow-sm rounded px-8 py-10">
        <div className="card-body">
        <p className="text-2xl text-cyan-500 font-bold mb-5">Send Your Query</p>
          <form>
              <div className="">
                <label
                  htmlFor="Name"
                  className="block mb-1 font-bold text-stone-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 w-full outline-none focus:border-blue-200  px-2 py-2 ps-2 rounded"
                  placeholder="Name"
                  onChange={handleName}
                />
              </div>
              <div className="text-red-500 mb-3">{userMsg}</div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-1 text-stone-700 font-bold"
                  
                >
                  Email
                </label>
                <input
                  type="text"
                  className="border border-gray-300 w-full outline-none focus:border-blue-200 px-2 py-2 ps-2 rounded"
                  placeholder="Email"
                  onChange={handleEmail}
                  id="email"
                />
              </div>
              <div className="text-red-500 mb-3">{emailMsg}</div>
              <div className="">
                <textarea
                  type="text"
                  className="border border-gray-300 w-full outline-none focus:border-blue-200 px-2 py-2 ps-2 rounded"
                  placeholder="Enter Your Query / Feedback"
                  rows={4}
                  onBlur={handleTextArea}
                  id="textarea"
                />
              </div>
              <div className="text-red-500 mb-3">{textMsg}</div>
              <button type="button" className="px-2 hover:bg-cyan-800 hover:text-white text-cyan-500 text-lg  py-[1px] rounded-[7px] border border-cyan-500 hover:border-cyan-800"
              onClick={handleSubmit}>
                Submit
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
