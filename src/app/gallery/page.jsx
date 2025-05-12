'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ZoomableImage from '@/components/ZoomableImage';

const photoGallery = [
    {
        id: 1,
        src: '/rohan.png',
        alt: 'Photo 1',
        title: 'Photo Title 1',
        description: 'Description for photo 1'
    },
    {
        id: 2,
        src: '/rohan2.png',
        alt: 'Photo 2',
        title: 'Photo Title 2',
        description: 'Description for photo 2'
    },
    {
        id: 3,
        src: '/rohan3.png',
        alt: 'Photo 3',
        title: 'Photo Title 3',
        description: 'Description for photo 3'
    },
    {
        id: 4,
        src: '/rohan6.png',
        alt: 'Photo 4',
        title: 'Photo Title 4',
        description: 'Description for photo 4'
    },
];

export default function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isPreviewOpen) {
                closePreview();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isPreviewOpen]);

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

    const handleImageClick = (image) => {
        const index = photoGallery.findIndex(img => img.id === image.id);
        setCurrentImageIndex(index);
        setSelectedImage(image);
        setIsPreviewOpen(true);
    };

    const navigateImage = (direction) => {
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentImageIndex + 1) % photoGallery.length;
        } else {
            newIndex = (currentImageIndex - 1 + photoGallery.length) % photoGallery.length;
        }
        setCurrentImageIndex(newIndex);
        setSelectedImage(photoGallery[newIndex]);
    };

    const closePreview = () => {
        setIsPreviewOpen(false);
        setSelectedImage(null);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closePreview();
        }
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 md:px-8">
            {/* Page Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>
                Photos
            </h1>

            {/* Image Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 max-w-7xl mx-auto">
                {photoGallery.map((image) => (
                    <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl w-full"
                        onClick={() => handleImageClick(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={350}
                            className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-110 rounded-2xl"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-transparent transition-all duration-300 group-hover:bg-black/50">
                            <div className="p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-white">
                                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {image.title}
                                </h3>
                                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Preview Modal */}
            {isPreviewOpen && selectedImage && (
                <div className="fixed inset-0 bg-gray-200 bg-opacity-50 z-50 flex flex-col md:flex-row" onClick={handleBackdropClick}>
                    {/* Close button */}
                    <button
                        onClick={closePreview}
                        className="cursor-pointer absolute top-2 right-2 md:top-4 md:right-4 text-gray-600 hover:text-orange-500 transition-colors z-10 p-2 rounded-full hover:bg-white/20 text-2xl md:text-3xl"
                        aria-label="Close preview"
                    >
                        <IoClose size={28} className="md:hidden" />
                        <IoClose size={32} className="hidden md:inline" />
                    </button>

                    {/* Image content */}
                    <div className="flex-1 flex items-center justify-center p-2 md:p-4 w-full">
                        <div
                            className="relative w-full h-full bg-white rounded-lg shadow-xl flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Navigation buttons inside image area */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage('prev');
                                }}
                                className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-600 hover:text-orange-500 transition-colors z-20 p-1 sm:p-2 rounded-full hover:bg-white/20 text-xl sm:text-2xl"
                                aria-label="Previous image"
                            >
                                <IoIosArrowBack />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage('next');
                                }}
                                className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 hover:text-orange-500 transition-colors z-20 p-1 sm:p-2 rounded-full hover:bg-white/20 text-xl sm:text-2xl"
                                aria-label="Next image"
                            >
                                <IoIosArrowForward />
                            </button>
                            <ZoomableImage
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div
                        className="w-full md:w-96 bg-white p-4 md:p-6 overflow-y-auto shadow-xl md:rounded-none rounded-b-lg md:rounded-r-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {selectedImage.title}
                        </h2>
                        <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {selectedImage.description}
                        </p>
                        <div className="text-xs md:text-sm text-gray-500">
                            Photo {currentImageIndex + 1} of {photoGallery.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
