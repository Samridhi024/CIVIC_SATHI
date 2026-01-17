// src/lib/trafficOracle.js
import roadData from '../data/major_roads.json';

// Helper: Calculate distance between a Point (p) and a Line Segment (v, w)
// This is pure geometry logic.
const distToSegmentSquared = (p, v, w) => {
    const l2 = (v[0] - w[0])**2 + (v[1] - w[1])**2;
    if (l2 === 0) return (p[0] - v[0])**2 + (p[1] - v[1])**2;
    let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
    t = Math.max(0, Math.min(1, t));
    return (p[0] - v[0] - t * (w[0] - v[0]))**2 + (p[1] - v[1] - t * (w[1] - v[1]))**2;
};

const distToSegment = (p, v, w) => {
    return Math.sqrt(distToSegmentSquared(p, v, w));
};

// Main Function: Check if location is near a major road
export const getTrafficProfile = (locationString) => {
    if (!locationString || !locationString.includes(',')) return null;

    // Report format is "Lat, Lon" (e.g., 20.296, 85.824)
    // GeoJSON format is [Lon, Lat] (Standard X, Y order)
    const [reportLat, reportLon] = locationString.split(',').map(Number);
    
    // We check every road in the file.
    // Optimization: In a real app, we would use a spatial index (R-Tree), 
    // but for <1000 roads in a hackathon, a simple loop is fine.
    
    for (const feature of roadData.features) {
        const roadType = feature.properties.highway; // 'primary', 'secondary', etc.
        const coordinates = feature.geometry.coordinates;

        // Coordinates in GeoJSON are arrays of points: [[lon1, lat1], [lon2, lat2]...]
        // We check the distance from the Report to every "segment" of the road.
        
        for (let i = 0; i < coordinates.length - 1; i++) {
            const p1 = coordinates[i];     // [lon, lat]
            const p2 = coordinates[i + 1]; // [lon, lat]

            // Convert Lat/Lon distance to approx meters (Rough estimation: 1 deg ≈ 111km)
            // We want to check if it's within ~30 meters (0.0003 degrees approx)
            
            // Note: pass [Lon, Lat] to match GeoJSON format
            const distDegrees = distToSegment([reportLon, reportLat], p1, p2);
            
            // 0.0003 degrees is roughly 30-40 meters
            if (distDegrees < 0.0003) {
                
                // MATCH FOUND! It is on a major road.
                let urgency = "HIGH";
                let desc = "This is a key arterial road.";
                let color = "warning";

                if (roadType === 'trunk' || roadType === 'primary') {
                    urgency = "CRITICAL";
                    desc = "This is a MAIN HIGHWAY carrying heavy city traffic.";
                    color = "danger";
                } else if (roadType === 'secondary') {
                    urgency = "HIGH";
                    desc = "This is a major connector road.";
                    color = "warning";
                }

                return {
                    level: urgency,
                    label: `${roadType.toUpperCase()} ROAD DETECTED`,
                    description: desc,
                    color: color,
                    roadName: feature.properties.name || "Unnamed Major Road"
                };
            }
        }
    }

    // If no match found
    return {
        level: "LOW",
        label: "Local Street",
        description: "Traffic likely local or residential.",
        color: "success"
    };
};
