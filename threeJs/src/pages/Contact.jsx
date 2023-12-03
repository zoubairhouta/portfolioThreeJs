import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'

import Loader from '../components/Loader'
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';
const Contact = () => {
  const formRef = useRef(null);
 const [form,setForm] = useState({name:"",email:"",message:""});
 const [isLoading, setIsLoading] = useState(false)
 const [currentAnimations,setCurrentanimation] = useState('idle')
 const {alert,showAlert,hideAlert} =useAlert();
 const handleChange = (e) =>{
  setForm({...form,[e.target.name]: e.target.value})
 };


 const handleFocus = () =>setCurrentanimation('walk');
 const handleBlur = () => setCurrentanimation('idle');





 const handleSubmit = (e) =>{
e.preventDefault();
setIsLoading(true);
setCurrentanimation('hit')
console.log(import.meta.env.VITE_APP_EMAILJS_PUPLIC_key);
emailjs.send(
import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
{
  from_name : form.name,
  to_name : "Zoubair",
  from_email : form.email,
  to_email : 'zoubelhout@gmail.com',
  message : form.message

},
import.meta.env.VITE_APP_EMAILJS_PUPLIC_key

 ).then(()=> {
  setIsLoading(false);

showAlert({show : true, text : 'message sent successfully!', type : 'success'})
  // TODO : Hide an allert

  setTimeout(()=> {
    setCurrentanimation('idle')
  setForm({name: '',email : '' ,message : ''});
 },[3000])
})
 .catch((error) =>
 {
  setIsLoading(false);
  setCurrentanimation('idle')
  console.log(error);
  // TODO : Show Error Message
  showAlert({show : true, text : 'I didnt receive yor message !', type : 'danger'})
 }
 )


};
  return (
    <section className ="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert}/>}
      <Alert text = "ya3tek3asba"/>
<div className ="flex-1 min-w-[50%] flex-col">
  <h1 className ="head-text">
    Get in touch
  </h1>

<form
className='w-full flex flex-col gap-7 mt-14'
onSubmit={handleSubmit}
>
  <label className='text-black-500 font-semibold'>
    Name
 
  <input
 type='text'
 name='name'
 className='input' 
 placeholder='John'
 required
 value={form.name}
 onChange={handleChange}
 onFocus={handleFocus}
 onBlur={handleBlur}
 
  /> 
  </label>
 <label className='text-black-500 font-semibold'>
   email

  <input
 type='email'
 name='email'
 className='input' 
 placeholder='John@gmail.com'
 required
 value={form.email}
 onChange={handleChange}
 onFocus={handleFocus}
 onBlur={handleBlur}
  />
    </label>
 <label className='text-black-500 font-semibold'>
    Your Message

  <textarea

 name='message'
 className='input' 
 rows = {4}
 placeholder='Let me know how ca n i help you!'
 required
 value={form.message}
 onChange={handleChange}
 onFocus={handleFocus}
 onBlur={handleBlur}
  />

</label>
<button
type='submit'
className='btn'
onFocus={handleFocus}
onBlur={handleBlur}
disabled={isLoading}

>
{isLoading?'Sending ...' : 'Send Message'}
</button>

</form>



</div>

<div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>

  <Canvas
  camera={
    {
      position : [0,0,5],
      fov : 75,
      near : 0.1,
      far : 1000
    }
  }
  
  >
    <directionalLight intensity = {2.5}  position={[0,0,1]}/>
    <ambientLight intensity = {0.5}/>
<Suspense fallback = {<Loader/>}>

  <Fox position = {[0.5,0.35,0]}
    rotation = {[12.625,-0.6,0]}
    scale ={[0.5,0.5,0.5]}
    currentAnimation={currentAnimations}
  
  />
</Suspense>

  </Canvas>


</div>

    </section>
  )
}

export default Contact