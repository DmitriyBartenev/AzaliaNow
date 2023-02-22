import {createContext, Dispatch, SetStateAction} from "react";

interface initialValue {
    logged: boolean,
    setLogged: Dispatch<SetStateAction<boolean>> 
}

const AppContext = createContext<Partial<initialValue>>({});

export default AppContext;