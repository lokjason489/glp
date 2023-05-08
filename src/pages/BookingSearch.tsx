import React from "react";
import Layout from "../components/ui/layout";
import { useLocation } from 'react-router-dom';


interface Props {
}

const BookingSearch: React.FC<Props> = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const skin = queryParams.get('skin');
    return (
        <Layout skin={skin}>
            {() => (
                <div>
                <h1>BookingSearch</h1>
                </div>
            )}
        </Layout>
        
    );
}

export default BookingSearch;