import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tokenService from "../../core/services/tokenService";

type Props = {
    children:ReactElement
}

const ProtectedRoute = (props: Props) => {
    const navigate = useNavigate();
    const [isSafe, setIsSafe] = useState(false);
    useEffect(() => {
      if (tokenService.hasToken()) {
        setIsSafe(true);
      }
      else {
        navigate('/giris')
      }
    })
  return (
    <>
    {isSafe?props.children:null}
    </>
  )
}

export default ProtectedRoute