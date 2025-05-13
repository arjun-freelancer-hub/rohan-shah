import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Journey of Strength: From Local to International",
            date: "March 15, 2024",
            preview: "Exploring the path from local competitions to international championships, and the lessons learned along the way.",
            author: "Rohan Shah",
            image: "/blog-images/journey.jpg"
        },
        {
            id: 2,
            title: "Mindset Matters: The Psychology of Powerlifting",
            date: "March 10, 2024",
            preview: "Understanding the mental aspects of powerlifting and how to develop a champion's mindset.",
            author: "Rohan Shah",
            image: "/blog-images/mindset.jpg"
        },
        {
            id: 3,
            title: "Balancing Business and Sports: A Dual Path to Success",
            date: "March 5, 2024",
            preview: "How to successfully manage both a business career and a professional sports career simultaneously.",
            author: "Rohan Shah",
            image: "/blog-images/balance.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>

                <div className="grid gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <div className="relative h-48 w-full md:w-48 md:h-full">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 192px"
                                        />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                        {post.title}
                                    </h2>
                                    <div className="flex items-center text-gray-800 mb-4">
                                        <span className="mr-4">By {post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        {post.preview}
                                    </p>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="text-orange-600 hover:text-orange-800 font-medium inline-flex items-center"
                                    >
                                        Read more
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage; 