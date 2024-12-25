import React from 'react';
import AOS from "aos";


const Extra2 = () => {
    React.useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,   
        });
        AOS.refresh(); 
      }, []);
    return (
        <div>
            
        </div>
    );
};

export default Extra2;