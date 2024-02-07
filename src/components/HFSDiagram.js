import React from "react";
import D3Hierarchy from "./D3Hierarchy";
import hfsData from "../../assets/hfs_db.json";

const HFSDiagram = () => {
    return <D3Hierarchy data={hfsData} />;
};

export default HFSDiagram;
