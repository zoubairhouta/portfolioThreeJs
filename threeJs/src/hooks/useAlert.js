import React,{useState} from 'react'

const useAlert = () => {
    const [alert, setAlert] = useState({show : false,text : '',type:'danger'})
    const showAlert = ({tet,type = 'danger'}) => setAlert({
show : true,
text,
type

    })
    const hideAlert = () => setAlert({
        show : false,
        text : '',
        type:''
        
            })
  return {alert,showAlert,hideAlert}
}

export default useAlert