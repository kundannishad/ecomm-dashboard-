
import {useNavigate} from "react-router-dom";
import React, {useEffect } from "react"
function Protected(props) {
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user_info')) {
            navigate('/add');
        }
      })

      let Cmp = props.Cmp;

    return(
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected