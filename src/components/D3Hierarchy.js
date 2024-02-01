import React, { useEffect, useRef } from "react";
import * as d3 from 'd3'

const D3Hierarchy = ({data}) => {
    const ref = useRef();

    useEffect(() => {
        if (data) {

            const format = d3.format(",");
            const nodeSize = 17;
            const root = d3.hierarchy(data).eachBefore((i => d => d.index = i++)(0));
            const nodes = root.descendants();
            const width = 928;
            const height = (nodes.length + 1) * nodeSize;
            
            const columns = [
                {
                    label: "Space (MB)", 
                    value: d => d.totalSize/1000, 
                    format, 
                    //format: (value, d) => d.totalSize ? format(value) : "-",
                    x: 375
                },
                {
                    label: "Fields", 
                    value: d => d.children ? 0 : 1, 
                    format: (value, d) => d.children ? format(value) : "-", 
                    x: 420
                }
            ];
            
            const svg = d3.create("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [-nodeSize / 2, -nodeSize * 3 / 2, width, height])
                .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; overflow: visible;");
            
            const link = svg.append("g")
                .attr("fill", "none")
                .attr("stroke", "#999")
                .selectAll()
                .data(root.links())
                .join("path")
                .attr("d", d => `
                    M${d.source.depth * nodeSize},${d.source.index * nodeSize}
                    V${d.target.index * nodeSize}
                    h${nodeSize}
                `);
            
            const node = svg.append("g")
                .selectAll()
                .data(nodes)
                .join("g")
                .attr("transform", d => `translate(0,${d.index * nodeSize})`);
            
            node.append("circle")
                .attr("cx", d => d.depth * nodeSize)
                .attr("r", 2.5)
                .attr("fill", d => d.children ? null : "#999");
            
            node.append("text")
                .attr("dy", "0.32em")
                .attr("x", d => d.depth * nodeSize + 6)
                .text(d => d.data.name);
            
            node.append("title")
                .text(d => d.ancestors().reverse().map(d => d.data.name).join("/"));
            
            for (const {label, value, format, x} of columns) {
                svg.append("text")
                    .attr("dy", "0.32em")
                    .attr("y", -nodeSize)
                    .attr("x", x)
                    .attr("text-anchor", "end")
                    .attr("font-weight", "bold")
                    .text(label);
            
                node.append("text")
                    .attr("dy", "0.32em")
                    .attr("x", x)
                    .attr("text-anchor", "end")
                    .attr("fill", d => d.children ? null : "#555")
                    .data(root.copy().sum(value).descendants())
                    .text(d => format(d.value, d));
              }            

                ref.current.append(svg.node());
        }
    }, [data]);

    return <div id="diagram-container" ref={ref}/>
};

export default D3Hierarchy;
