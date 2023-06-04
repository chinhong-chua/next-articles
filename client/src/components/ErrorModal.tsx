import { FunctionComponent } from "react";

interface ErrorModalProps {
    hasError: boolean
    message: string
}
 
const ErrorModal: FunctionComponent<ErrorModalProps | any> = ({hasError,message}) => {
    return (
<div className="flex mx-auto mt-3 ps-5 justify-start space-x-10">
    <div className="ml-20 flex-1">
        <p className="text-red-600 text-xl font-bold">
            Error occurs: {message}
        </p>
    </div>
    <div className="flex-grow">
        <div className="w-4/6">
        <p className="text-red-500 text-xl font-medium border-slate-400 border-2">
            Please ensure api server is working...
        </p>
        </div>
        
    </div>

</div>
        
      );
}
 
export default ErrorModal;