import React from "react";
import Layout from "../components/ui/layout";
import { useParams } from 'react-router-dom';

interface Props {
}

const RoomType: React.FC<Props> = () => {
    const { skin, startDay, endDay } = useParams();
    return (
        <Layout skin={skin}>
            {() => (
                <h1>RoomType {startDay} {endDay}</h1>
            )
            }
        </Layout>
    )
}

export default RoomType;