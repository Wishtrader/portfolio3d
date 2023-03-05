import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1000
      }}
      style={{width: "50%", height: "100%", position: "absolute", right: "0", top: "0"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[30.5, 52.5]}
        dx={30}
        dy={-50}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="28" y="-12" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"GOMEL"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
