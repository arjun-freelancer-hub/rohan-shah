import { useState, useRef } from 'react';
import Image from 'next/image';

const ZoomableImage = ({ src, alt, className = '' }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [imgStart, setImgStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleWheel = (e) => {
        e.preventDefault();
        let newScale = scale + (e.deltaY * -0.01);
        newScale = Math.min(Math.max(1, newScale), 4);
        if (newScale === 1) setPosition({ x: 0, y: 0 });
        setScale(newScale);
    };

    const handleMouseDown = (e) => {
        if (scale > 1) {
            setIsDragging(true);
            setDragStart({ x: e.clientX, y: e.clientY });
            setImgStart({ x: position.x, y: position.y });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && scale > 1) {
            setPosition({
                x: imgStart.x + (e.clientX - dragStart.x),
                y: imgStart.y + (e.clientY - dragStart.y)
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const resetZoom = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden cursor-move select-none"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ userSelect: 'none' }}
        >
            <div
                className="absolute inset-0 transition-transform duration-100"
                style={{
                    transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                    transformOrigin: 'center',
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={`object-contain ${className}`}
                    draggable={false}
                />
            </div>
            {scale > 1 && (
                <button
                    onClick={resetZoom}
                    className="absolute bottom-4 right-4 bg-white/80 hover:bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg transition-colors z-20"
                    style={{ pointerEvents: 'auto' }}
                >
                    Reset Zoom
                </button>
            )}
        </div>
    );
};

export default ZoomableImage; 