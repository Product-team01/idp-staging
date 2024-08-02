// // gradient.js
// import React, { useEffect, useRef } from "react";
// import { NeatConfig, NeatGradient } from "@firecms/neat";

// const MyComponent = () => {
//   const canvasRef = useRef(null);
//   const gradientRef = useRef(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const config = {
//       colors: [
//         {
//             "color": "#FFFCFD",
//             "enabled": true
//         },
//         {
//             "color": "#2A6B96",
//             "enabled": true
//         },
//         {
//             "color": "#8A8A8A",
//             "enabled": true
//         },
//         {
//             "color": "#BDBDBD",
//             "enabled": true
//         },
//         {
//             "color": "#DED9DB",
//             "enabled": false
//         }
//       ],
//       speed: 4,
//       horizontalPressure: 4,
//       verticalPressure: 5,
//       waveFrequencyX: 2,
//       waveFrequencyY: 3,
//       waveAmplitude: 5,
//       shadows: 0,
//       highlights: 1,
//       colorSaturation: 0,
//       colorBrightness: 1,
      
//       colorBlending: 6,
//       backgroundAlpha: 0,
//       resolution: 1 / 2
//     };

//     console.log("NeatGradient Config: ", config);

//     gradientRef.current = new NeatGradient({
//       ref: canvasRef.current,
//       ...config
//     });

//     return () => {
//       if (gradientRef.current) {
//         gradientRef.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <canvas
//       style={{
//         isolation: "isolate",
//         height: "100%",
//         width: "100%"
//       }}
//       ref={canvasRef}
//     />
//   );
// };

// export default MyComponent;

// gradient.js
import React, { useEffect, useRef } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

const MyComponent = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const config = {
        "colors": [
            {
                "color": "#FFFCFD",
                "enabled": true
            },
            {
                "color": "#D5EDFF",
                "enabled": true
            },
            {
                "color": "#F5D6D6",
                "enabled": true
            },
            {
                "color": "#FFFFFF",
                "enabled": true
            },
            {
                "color": "#DED9DB",
                "enabled": false
            }
        ],
        "speed": 5,
        "horizontalPressure": 4,
        "verticalPressure": 5,
        "waveFrequencyX": 2,
        "waveFrequencyY": 3,
        "waveAmplitude": 6,
        "shadows": 0,
        "highlights": 2,
        "colorBrightness": 0.95,
        "colorSaturation": 7,
        "wireframe": false,
        "colorBlending": 9,
        "backgroundColor": "#FDFDFD",
        "backgroundAlpha": 1,
        "resolution": 1
    };

    console.log("NeatGradient Config: ", config);

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      ...config
    });

    return () => {
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      style={{
        isolation: "isolate",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1 // Ensure it is behind other content
      }}
      ref={canvasRef}
    />
  );
};

export default MyComponent;
