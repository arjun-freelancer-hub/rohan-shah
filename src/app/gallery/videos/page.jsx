'use client';

import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const videoGallery = [
    {
        id: 1,
        src: '/videos/video1.mp4',
        thumbnail: '/thumbnails/video1.jpg',
        title: 'Video Title 1',
        description: 'Description for video 1'
    },
    {
        id: 2,
        src: '/videos/video2.mp4',
        thumbnail: '/thumbnails/video2.jpg',
        title: 'Video Title 2',
        description: 'Description for video 2'
    },
    // Add more videos as needed
];

export default function VideoGallery() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Add effect to handle body scroll lock
    useEffect(() => {
        if (isPreviewOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isPreviewOpen]);

    const handleVideoClick = (video) => {
        const index = videoGallery.findIndex(vid => vid.id === video.id);
        setCurrentVideoIndex(index);
        setSelectedVideo(video);
        setIsPreviewOpen(true);
    };

    const navigateVideo = (direction) => {
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentVideoIndex + 1) % videoGallery.length;
        } else {
            newIndex = (currentVideoIndex - 1 + videoGallery.length) % videoGallery.length;
        }
        setCurrentVideoIndex(newIndex);
        setSelectedVideo(videoGallery[newIndex]);
    };

    const closePreview = () => {
        setIsPreviewOpen(false);
        setSelectedVideo(null);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closePreview();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4 md:px-8">
            {/* Page Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>
                Videos
            </h1>

            {/* Video Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-w-7xl mx-auto">
                {videoGallery.map((video) => (
                    <div
                        key={video.id}
                        className=" bg-white group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl w-full aspect-video"
                        onClick={() => handleVideoClick(video)}
                    >
                        <video
                            src={video.src}
                            poster={video.thumbnail}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 rounded-2xl"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1" />
                            </div>
                        </div>
                        {/* Title Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-transparent transition-all duration-300 group-hover:bg-black/50">
                            <div className="p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white">
                                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {video.title}
                                </h3>
                                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Preview Modal */}
            {isPreviewOpen && selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col md:flex-row" onClick={handleBackdropClick}>
                    {/* Close button */}
                    <button
                        onClick={closePreview}
                        className="cursor-pointer absolute top-2 right-2 md:top-4 md:right-4 text-gray-600 hover:text-orange-500 transition-colors z-10 p-2 rounded-full hover:bg-white/20 text-2xl md:text-3xl"
                        aria-label="Close preview"
                    >
                        <IoClose size={32} />
                    </button>

                    {/* Video content */}
                    <div className="flex-1 flex items-center justify-center p-2 md:p-4 w-full">
                        <div
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Navigation buttons */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateVideo('prev');
                                }}
                                className="absolute left-1 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-20 p-1 sm:p-2 rounded-full hover:bg-white/20 text-xl sm:text-2xl"
                                aria-label="Previous video"
                            >
                                <IoIosArrowBack />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateVideo('next');
                                }}
                                className="absolute right-1 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-20 p-1 sm:p-2 rounded-full hover:bg-white/20 text-xl sm:text-2xl"
                                aria-label="Next video"
                            >
                                <IoIosArrowForward />
                            </button>
                            <video
                                src={selectedVideo.src}
                                poster={selectedVideo.thumbnail}
                                controls
                                className="max-w-full max-h-[80vh] rounded-lg"
                                autoPlay
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div
                        className="w-full md:w-96 bg-white p-4 md:p-6 overflow-y-auto shadow-xl md:rounded-none rounded-b-lg md:rounded-r-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {selectedVideo.title}
                        </h2>
                        <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {selectedVideo.description}
                        </p>
                        <div className="text-xs md:text-sm text-gray-500">
                            Video {currentVideoIndex + 1} of {videoGallery.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 