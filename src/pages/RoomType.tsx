import React from "react";
import Layout from "../components/ui/layout";

const RoomType = () => {
    return (
        <Layout skin={undefined}>
            {(currency) => (
                <h1>RoomType{currency}</h1>
            )
            }
        </Layout>
    )
}

export default RoomType;