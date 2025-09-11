import { useEffect, useState } from "react";

type hooksStatusResponse = {

}

export default function useResponseHandler() {
       const [ status, setStatus ] = useState<boolean>(false); 
       const [ messageResponse, setMessageResponse ] = useState<string>(""); 
       

       useEffect(()=> {
              // if(status && onSuccess)
       });

       return { status, message, data }
}
