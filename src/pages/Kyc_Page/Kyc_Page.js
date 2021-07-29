import React from 'react';
import { Route } from 'react-router-dom';
import Kyc from './../../components/Kyc/Kyc';
// export const StepContext = createContext()
const Kyc_Page = () => {
    
    return (
        <div>
            <Route exact path='/profile/kyc'>
                <Kyc/>
            </Route>
        </div>
    );
};

export default Kyc_Page;