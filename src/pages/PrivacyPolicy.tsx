import React from 'react';
import Layout from '../components/ui/layout';
import { useLocation } from 'react-router-dom';

interface Props {
}

const Privacy_Policy : React.FC<Props> = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const skin = queryParams.get('skin');
    return (
        <Layout skin={skin}>
            {() =>
                (
                    <h1>Privacy_Policy</h1>
                )
            }
        </Layout>
    )
}
export default Privacy_Policy;