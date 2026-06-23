import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography, Sphere, Graticule, Marker } from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const markers = [
  { name: "USA", coordinates: [-97.0, 38.0] as [number, number], description: "Delivering powerful keynotes and transformative workshops." },
  { name: "Europe", coordinates: [14.0, 48.0] as [number, number], description: "Building global networks and mentoring leaders." },
  { name: "Africa (Ghana)", coordinates: [-1.0, 7.9] as [number, number], description: "Empowering youth and communities through the Nzuri Uhai Foundation." },
];

export default function GlobeMap() {
  const [rotation, setRotation] = useState(0);
  const [activeMarker, setActiveMarker] = useState<typeof markers[0] | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setRotation((r) => {
        // Only rotate if not hovering over a marker and not dragging the globe
        return (isHovering || isDraggingRef.current) ? r : (r + 0.3) % 360;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      const delta = e.clientX - startXRef.current;
      startXRef.current = e.clientX;
      // Multiply delta by a factor to control rotation speed
      setRotation((r) => (r - delta * 0.5) % 360);
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Globe Container */}
      <div 
        className={`w-full max-w-[600px] mx-auto aspect-square relative flex items-center justify-center touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{
          rotate: [-rotation, -15, 0],
          scale: 280
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Sphere stroke="#e5e7eb" strokeWidth={1} fill="#ffffff" id="sphere" />
        <Graticule stroke="#f3f4f6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#fcd34d" // Gold for continents
                stroke="#fbbf24"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#f59e0b", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        
        {markers.map((marker) => {
          // Calculate if the marker is on the front side of the globe
          // Rotation is positive, so the central longitude is 'rotation'
          // We normalize the longitudes to check if they are within 90 degrees of the center
          const centralLon = rotation;
          let diff = marker.coordinates[0] - centralLon;
          
          // Normalize diff to [-180, 180]
          diff = ((diff + 540) % 360) - 180;
          
          const isVisible = Math.abs(diff) < 90;
          
          if (!isVisible) return null;

          return (
            <Marker key={marker.name} coordinates={marker.coordinates}>
              <g
                className="cursor-pointer transition-transform duration-300 hover:scale-150"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setActiveMarker(marker)}
              >
                <circle 
                  r={activeMarker?.name === marker.name ? 12 : 8} 
                  fill="#982330" 
                  stroke="#fff" 
                  strokeWidth={2} 
                  className="transition-all duration-300"
                />
                <circle 
                  r={16} 
                  fill="#982330" 
                  opacity={activeMarker?.name === marker.name ? 0.3 : 0} 
                  className="transition-all duration-300 animate-pulse-soft"
                />
              </g>
            </Marker>
          );
        })}
      </ComposableMap>
      
      {/* Cinematic Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
    </div>

    {/* Interactive Info Card */}
    <div className="h-28 mt-2 w-full max-w-md px-4 relative z-20 flex justify-center">
      {activeMarker ? (
        <div 
          key={activeMarker.name} 
          className="glass-card p-5 rounded-2xl border-2 border-primary/20 animate-fade-up text-center shadow-lg w-full"
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary font-heading mb-2">{activeMarker.name}</h3>
          <p className="text-sm md:text-base text-muted-foreground">{activeMarker.description}</p>
        </div>
      ) : (
        <div className="text-muted-foreground opacity-60 text-sm md:text-base animate-pulse-soft flex items-center gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          Click on a rotating red dot to explore...
        </div>
      )}
    </div>
  </div>
  );
}
