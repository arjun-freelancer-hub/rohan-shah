'use client';

import { useState } from 'react';
import PhotoGallery from './page';
import VideoGallery from './videos/page';

export default function GalleryLayout() {
    const [activeTab, setActiveTab] = useState('photos');

    return (
        <div className="min-h-screen bg-white">
            {/* Tab Navigation */}
            <div className="sticky top-0 z-40 bg-white mt-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-8">
                        <button
                            onClick={() => setActiveTab('photos')}
                            className={`cursor-pointer py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200 ${activeTab === 'photos'
                                ? 'border-orange-500 text-orange-500'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Photos
                        </button>
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`cursor-pointer py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200 ${activeTab === 'videos'
                                ? 'border-orange-500 text-orange-500'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Videos
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative">
                {activeTab === 'photos' ? <PhotoGallery /> : <VideoGallery />}
            </div>
        </div>
    );
} 