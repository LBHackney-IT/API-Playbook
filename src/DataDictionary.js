import React, { useEffect, useState } from "react";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const DataDictionary = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const file = await fetch("../assets/dynamodb.json");
            const json = await file.json();
            setData(json);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            const width = 1600;
            const dx = 10;
            const dy = width / (data.height + 1);

            const root = d3.hierarchy(data);
            const tree = d3.tree().nodeSize([dx, dy]);
            tree(root);

            let x0 = Infinity;
            let x1 = -x0;
            root.each((d) => {
                if (d.x > x1) x1 = d.x;
                if (d.x < x0) x0 = d.x;
            });

            const height = x1 - x0 + dx * 2;

            const svg = d3
                .create("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [-dy / 2, x0 - dx, width, height])
                .attr("style", "max-width: 100%; height: auto; font: 11px sans-serif;");

            const link = svg
                .append("g")
                .attr("fill", "none")
                .attr("stroke", "#555")
                .attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1)
                .selectAll()
                .data(root.links())
                .join("path")
                .attr("d", d3.linkHorizontal().x((d) => d.y).y((d) => d.x));

            const node = svg
                .append("g")
                .attr("stroke-linejoin", "round")
                .attr("stroke-width", 3)
                .selectAll()
                .data(root.descendants())
                .join("g")
                .attr("transform", (d) => `translate(${d.y},${d.x})`);

            node
                .append("circle")
                .attr("fill", (d) => (d.children ? "#555" : "#999"))
                .attr("r", 2.5);

            node
                .append("text")
                .attr("dy", "0.31em")
                .attr("x", (d) => (d.children ? -6 : 6))
                .attr("text-anchor", (d) => (d.children ? "end" : "start"))
                .text((d) => d.data.name + " (" + d.data.value + ")")
                .clone(true)
                .lower()
                .attr("stroke", "white");

            // Render the SVG
            const container = document.getElementById("container");
            container.innerHTML = "";
            container.append(svg.node());
        }
    }, [data]);

    return <div id="container"></div>;
};

export default DataDictionary;
