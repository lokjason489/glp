import React from 'react';
import Layout from '../components/ui/layout';
import { useLocation } from 'react-router-dom';

interface Props {
}

const Terms_of_use : React.FC<Props> = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const skin = queryParams.get('skin');
    return (
        <Layout skin={skin}>
            { ()=>
                (
                    <h1>terms of use</h1>
                )
            }
        </Layout>
    )
}
export default Terms_of_use;