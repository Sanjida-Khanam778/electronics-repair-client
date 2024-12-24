import React, { createContext, useState } from 'react';
// import { Children } from 'react';
export const signalContext = createContext() 
const SignalProvider = ({children}) => {
    const [signal, setSignal] = useState(null)
    return (
        <signalContext.Provider value={{signal, setSignal}}>
            {children}
        </signalContext.Provider>
    );
};

export default SignalProvider;