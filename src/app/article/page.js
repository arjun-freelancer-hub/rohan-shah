import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ArticlePage = () => {
    const articles = [
        {
            id: 1,
            title: "India's Rohan Shah Wins Two Silver Medals At 10th World Strength Lifting And Incline Bench Press Championship 2023",
            date: "December 23, 2023",
            preview: "Indian athlete Rohan Shah makes India proud again with two big wins.",
            author: "Rohan Shah",
            image: "/article-images/f2b7ea82ce06dc2de6a30a8632df5030.jpeg"
        },
        {
            id: 2,
            title: "Indian sporting talent in power and strength lifting Rohan Shah gets felicitated at BNI National Conference, Mahabalipuram, Chennai ",
            date: "July 30, 2023",
            preview: "Rohan Shah as a young athlete yet again garners headlines by making his name count down south, getting honored by the National Director of BNI, India.",
            author: "Rohan Shah",
            image: "/article-images/983b5d523c00f85c2300b00102c3a18a.JPG"
        },
        {
            id: 3,
            title: "Rohan Shah: The Powerhouse of Perseverance and Dedication in Professional Sports",
            date: "March 5, 2024",
            preview: "Rohan Shah From Lifting Weights to Lifting Medals: A Journey of Golds, Bronzes, and a Dreamer",
            author: "Rohan Shah",
            image: "/article-images/4ad876842c963c0ffa74aa5e07c480b7.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Articles</h1>

                <div className="grid gap-8">
                    {articles.map((article) => (
                        <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <div className="relative h-48 w-full md:w-48 md:h-full">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 192px"
                                        />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                        {article.title}
                                    </h2>
                                    <div className="flex items-center text-gray-800 mb-4">
                                        <span className="mr-4">By {article.author}</span>
                                        <span>{article.date}</span>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        {article.preview}
                                    </p>
                                    <Link
                                        href={`/article/${article.id}`}
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

export default ArticlePage; 