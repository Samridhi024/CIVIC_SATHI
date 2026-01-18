const CITY_ZONES = [
    { 
        name: "Raj Bhavan Square", 
        lat: 20.271278, 
        lon: 85.817585,
        radius: 800, 
        tags: ["Flood Prone", "Drainage Issue"] 
    },
    { 
        name: "KIIT University", 
        lat: 20.3533, 
        lon: 85.8186, 
        radius: 1200, 
        tags: ["School Zone", "High Pedestrian"] 
    },
    { 
        name: "Capital Hospital", 
        lat: 20.2700, 
        lon: 85.8400, 
        radius: 800, 
        tags: ["Hospital Zone", "Silence Zone"] 
    },
    {
        name: "Patia Residential Area",
        lat: 20.3644,
        lon: 85.8160,
        radius: 1000,
        tags: ["Flood Prone", "Residential"]
    }
];

// Haversine Formula (Same as before)
const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

export const analyzeIssueContext = (issue) => {
    const insights = [];
    
    // 1. Safety Check: Agar location ya type missing hai toh return karo
    if (!issue.location || !issue.location.includes(',') || !issue.type) {
        return insights;
    }
    
    const [lat, lon] = issue.location.split(',').map(coord => parseFloat(coord.trim())); // Added trim() for safety
    
    // 2. Convert Issue Type to Lowercase for Better Matching
    const issueTypeLower = issue.type.toLowerCase(); 
    const weatherCondition = "Rainy"; // Hardcoded for Demo (Can be dynamic later)

    // 3. Keywords Lists (Lowercased)
    const floodKeywords = ['garbage', 'drainage', 'water', 'sanitation', 'sewage', 'clog', 'leak'];
    const safetyKeywords = ['streetlight', 'pothole', 'safety', 'road', 'light', 'accident', 'dark'];

    CITY_ZONES.forEach(zone => {
        const dist = getDistance(lat, lon, zone.lat, zone.lon);
        
        // Debugging log (Remove in final production if not needed)
        // console.log(`Checking Zone: ${zone.name}, Dist: ${dist}m`);

        if (dist <= zone.radius) {
            
            // 🌧️ RULE 1: MONSOON PROTOCOL
            // Check if zone has "Flood Prone" tag AND issue is related to water/garbage
            const isFloodRisk = zone.tags.includes("Flood Prone");
            const isWaterIssue = floodKeywords.some(k => issueTypeLower.includes(k));

            if (isFloodRisk && isWaterIssue) {
                if (weatherCondition === "Rainy") {
                    insights.push({
                        title: "⛈️ MONSOON PROTOCOL ACTIVATED",
                        type: "Disaster",
                        color: "danger", 
                        message: `CRITICAL: Heavy Rain detected. Immediate removal required to prevent urban flooding at ${zone.name}.`,
                        icon: "🌊"
                    });
                }
            }

            // 🚸 RULE 2: CHILD SAFETY (CRITICAL)
            // Check if zone has "School Zone" tag AND issue is related to road safety
            const isSchoolZone = zone.tags.includes("School Zone");
            const isSafetyIssue = safetyKeywords.some(k => issueTypeLower.includes(k));

            if (isSchoolZone && isSafetyIssue) {
                insights.push({
                    title: "🚨 CRITICAL: CHILD SAFETY RISK",
                    type: "Safety",
                    color: "danger", 
                    message: `URGENT: Issue located ${dist.toFixed(0)}m from ${zone.name}. Immediate danger to students detected.`,
                    icon: "🚸"
                });
            }
        }
    });

    return insights;
};

// const CITY_ZONES = [
//     { 
//         name:"Raj Bhavan Square", 
//         lat:20.271278, 
//         lon:85.817585,
//         radius: 800, 
//         tags:["Flood Prone", "Drainage Issue", "drainage", "leak", "water", "paani", "Paani", "Pani", "Pipe", "pipe", "water_leak"] 
//     },
//     { 
//         name:"KIIT University", 
//         lat:20.3533, 
//         lon:85.8186, 
//         radius:1200, 
//         tags:["School Zone", "High Pedestrian", "traffic", "Traffic", "Heavy traffic", "heavy traffic", "Schhol", "kids", "street_light", "light"] 
//     },
//     { 
//         name:"Capital Hospital", 
//         lat:20.2700, 
//         lon:85.8400, 
//         radius:800, 
//         tags:["Hospital Zone", "Silence Zone"] 
//     },
//     // 📍 YOUR PATIA LOCATION
//     {
//         name: "Patia Residential Area",
//         lat: 20.3644,
//         lon: 85.8160,
//         radius: 1000,
//         tags:["Flood Prone", "Residential", "Garbage", "Drainage"]
//     }
// ];

// // Haversine Formula for Earth Distance
// const getDistance = (lat1,lon1,lat2,lon2) => {
//     const R = 6371e3; 
//     const dLat = (lat2-lat1)*Math.PI/180;
//     const dLon = (lon2-lon1)*Math.PI/180;
//     const a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2) * Math.sin(dLon/2);
//     const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     return R*c;
// };

// // 👇 REMOVED "async" KEYWORD TO PREVENT BUILD ERRORS
// export const analyzeIssueContext = (issue) => {
//     const insights=[];
    
//     if (!issue.location || !issue.location.includes(',')) return insights;
    
//     const [lat,lon] = issue.location.split(',').map(Number);
//     const weatherCondition="Rainy"; 

//     CITY_ZONES.forEach(zone => {
//         const dist = getDistance(lat, lon, zone.lat, zone.lon);
        
//         if (dist <= zone.radius) {
            
//             // 🌧️ RULE 1: MONSOON PROTOCOL
//             if (zone.tags.includes("Flood Prone") && ['Garbage', 'Drainage', 'Water', 'Sanitation'].some(t => issue.type.includes(t))) {
//                 if (weatherCondition === "Rainy") {
//                     insights.push({
//                         title: "⛈️ MONSOON PROTOCOL ACTIVATED",
//                         type: "Disaster",
//                         color: "danger", 
//                         message: `CRITICAL: Heavy Rain detected. Immediate removal required to prevent urban flooding at ${zone.name}.`,
//                         icon: "🌊"
//                     });
//                 }
//             }

//             // 🚸 RULE 2: CHILD SAFETY (CRITICAL)
//             if (zone.tags.includes("School Zone") && ['Streetlight', 'Pothole', 'Safety', 'Road', 'Light'].some(t => issue.type.includes(t))) {
//                 insights.push({
//                     title: "🚨 CRITICAL: CHILD SAFETY RISK",
//                     type: "Safety",
//                     color: "danger", 
//                     message: `URGENT: Issue located ${dist.toFixed(0)}m from ${zone.name}. Immediate danger to students detected.`,
//                     icon: "🚸"
//                 });
//             }
//         }
//     });

//     return insights;
// };

// const CITY_ZONES = [
//     { 
//         name:"Raj Bhavan Square", 
//         lat:20.271278, 
//         lon:85.817585,
//         radius: 800, //range of issues report marked same
//         tags:["Flood Prone", "Drainage Issue", "drainage", "leak", "water", "paani", "Paani", "Pani", "Pipe", "pipe", "water_leak"] 
//     },
//     { 
//         name:"KIIT University", 
//         lat:20.3533, 
//         lon:85.8186, 
//         radius:1200, 
//         tags:["School Zone", "High Pedestrian", "traffic", "Traffic", "Heavy traffic", "heavy traffic", "Schhol", "kids", "street_light", "light"] 
//     },
//     { 
//         name:"Capital Hospital", 
//         lat:20.2700, 
//         lon:85.8400, 
//         radius:800, 
//         tags:["Hospital Zone", "Silence Zone"] 
//     }
// ];

// //calculate distance between two GPS points
// const getDistance = (lat1,lon1,lat2,lon2) => {
//     const R = 6371e3; //earth rad in m
//     const dLat = (lat2-lat1)*Math.PI/180;
//     const dLon = (lon2-lon1)*Math.PI/180;
//     const a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2) * Math.sin(dLon/2);
//     const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     return R*c;
// };

// export const analyzeIssueContext=async (issue) => {
//     const insights=[];
    
//     // Safety Check: If no location, stop.
//     if (!issue.location || !issue.location.includes(',')) return insights;
    
//     const [lat,lon] = issue.location.split(',').map(Number);
//     const weatherCondition="Rainy"; 

//     CITY_ZONES.forEach(zone => {
//         const dist = getDistance(lat, lon, zone.lat, zone.lon);
//         // CHECK IF ISSUE IS INSIDE THE ZONE
//         if (dist <= zone.radius) {
            
//             // MONSOON : major issues (Garbage + Flood Zone + Rain) 
//             // If it's a "Water", "Garbage", or "Drainage" issue
//             if (zone.tags.includes("Flood Prone") && ['Garbage', 'Drainage', 'Water', 'Sanitation'].some(t => issue.type.includes(t))) {
//                 if (weatherCondition === "Rainy") {
//                     insights.push({
//                         title: "⛈️ MONSOON PROTOCOL ACTIVATED",
//                         type: "Disaster",
//                         color: "danger", //signifies the red alert
//                         message: `CRITICAL: Heavy Rain detected. Immediate removal required to prevent urban flooding at ${zone.name}.`,
//                         icon: "🌊"
//                     });
//                 }
//             }

//             // CHILD SAFETY  major issues : Streetlight/Pothole + School
//             if (zone.tags.includes("School Zone") && ['Streetlight', 'Pothole', 'Safety', 'Road'].some(t => issue.type.includes(t))) {
//                 insights.push({
//                     title: "🎓 Child Safety Protocol",
//                     type: "Safety",
//                     color: "info", //informs as blue alert
//                     message: `High Priority: Issue located ${dist.toFixed(0)}m from ${zone.name}. Risk to students detected.`,
//                     icon: "🚸"
//                 });
//             }
//         }
//     });

//     return insights;
// };


// const CITY_ZONES = [
//     { 
//         name:"Raj Bhavan Square", 
//         lat:20.271278, 
//         lon:85.817585,
//         radius: 800, 
//         tags:["Flood Prone", "Drainage Issue", "drainage", "leak", "water", "paani", "Paani", "Pani", "Pipe", "pipe", "water_leak"] 
//     },
//     { 
//         name:"KIIT University", 
//         lat:20.3533, 
//         lon:85.8186, 
//         radius:1200, 
//         tags:["School Zone", "High Pedestrian", "traffic", "Traffic", "Heavy traffic", "heavy traffic", "Schhol", "kids", "street_light", "light"] 
//     },
//     { 
//         name:"Capital Hospital", 
//         lat:20.2700, 
//         lon:85.8400, 
//         radius:800, 
//         tags:["Hospital Zone", "Silence Zone"] 
//     }
// ];

// //calculate distance between two GPS points using Haversine Formula

// const getDistance = (lat1,lon1,lat2,lon2) => {
//     const R = 6371e3; //earth rad in m
//     const dLat = (lat2-lat1)*Math.PI/180;
//     const dLon = (lon2-lon1)*Math.PI/180;
//     const a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2) * Math.sin(dLon/2);
//     const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     return R*c;
// };

// export const analyzeIssueContext=async (issue) => {
//     const insights=[];
    
//     // Safety Check: If no location, stop.
//     if (!issue.location || !issue.location.includes(',')) return insights;
    
//     const [lat,lon] = issue.location.split(',').map(Number);
//     const weatherCondition="Rainy"; 

//     CITY_ZONES.forEach(zone => {
//         const dist = getDistance(lat, lon, zone.lat, zone.lon);
//         // CHECK IF ISSUE IS INSIDE THE ZONE
//         if (dist <= zone.radius) {
            
//             // MONSOON : major issues (Garbage + Flood Zone + Rain) 
//             if (zone.tags.includes("Flood Prone") && ['Garbage', 'Drainage', 'Water', 'Sanitation'].some(t => issue.type.includes(t))) {
//                 if (weatherCondition === "Rainy") {
//                     insights.push({
//                         title: "⛈️ MONSOON PROTOCOL ACTIVATED",
//                         type: "Disaster",
//                         color: "danger", // Red Alert
//                         message: `CRITICAL: Heavy Rain detected. Immediate removal required to prevent urban flooding at ${zone.name}.`,
//                         icon: "🌊"
//                     });
//                 }
//             }

//             // 👇 UPDATED: CHILD SAFETY PROTOCOL (Now CRITICAL)
//             // If Streetlight or Pothole is near a School -> Red Alert
//             if (zone.tags.includes("School Zone") && ['Streetlight', 'Pothole', 'Safety', 'Road', 'Light'].some(t => issue.type.includes(t))) {
//                 insights.push({
//                     title: "🚨 CRITICAL: CHILD SAFETY RISK", // Changed Title
//                     type: "Safety",
//                     color: "danger", // Changed from 'info' to 'danger' (Red)
//                     message: `URGENT: Issue located ${dist.toFixed(0)}m from ${zone.name}. Immediate danger to students detected.`, // Stronger message
//                     icon: "🚸"
//                 });
//             }
//         }
//     });

//     return insights;
// };
