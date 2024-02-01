import React from "react";
import D3Tree from "./D3Tree";
import dynamodbData from "../../assets/dynamodb.json";

const HFSDiagram = () => {
    return <D3Tree data={dynamodbData} />;
};

export default HFSDiagram;
