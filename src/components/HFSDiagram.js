import React from "react";
import D3Tree from "./D3Tree";
import hfsData from "../../assets/hfs_db.json";

const HFSDiagram = () => {
    return <D3Tree data={hfsData} />;
};

export default HFSDiagram;
