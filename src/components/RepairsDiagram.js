import React from "react";
import D3Hierarchy from "./D3Hierarchy";
import repairsData from "../../assets/repairs_db.json";

const RepairsDiagram = () => {
    return <D3Hierarchy data={repairsData} />;
};

export default RepairsDiagram;
