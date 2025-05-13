import React from 'react';
import Image from 'next/image';

async function BlogPost({ params }) {
    const postId = params.id;

    const blogPost = {
        id: postId,
        title: "The Journey of Strength: From Local to International",
        date: "March 15, 2024",
        author: "Rohan Shah",
        image: "/blog-images/journey.jpg",
        content: `The path from local competitions to international championships is not just about physical strength, but also about mental fortitude and unwavering dedication.

When I first started competing in local powerlifting events, I never imagined that one day I would be representing India on the international stage. The journey has been filled with challenges, triumphs, and invaluable lessons that have shaped me both as an athlete and as a person.

The transition from local to international competitions requires a significant shift in mindset. Local competitions are important for building confidence and experience, but international events demand a higher level of preparation, both physically and mentally.

One of the most crucial lessons I've learned is the importance of consistent training and proper recovery. International competitions often have different standards and requirements, which means your training regimen needs to be more structured and disciplined.

Another key aspect is mental preparation. The pressure of representing your country on an international stage is immense. Learning to channel this pressure into positive energy is essential for success.

The support system also plays a vital role. From coaches to family members, having people who believe in you and support your journey makes a world of difference. Their encouragement during tough times has been instrumental in my success.

Looking back at my journey, I realize that every competition, whether local or international, has contributed to my growth. Each experience has taught me something new about myself and the sport.

For aspiring athletes looking to make the transition to international competitions, my advice would be to:
1. Focus on building a strong foundation through local competitions
2. Develop a consistent training routine
3. Work on mental strength and visualization
4. Surround yourself with a supportive team
5. Never stop learning and adapting

The journey from local to international competitions is challenging, but it's also incredibly rewarding. The experience of representing your country and competing against the best athletes in the world is something that makes all the hard work worthwhile.`
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-full">
                        <Image
                            src={blogPost.image}
                            alt={blogPost.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {blogPost.title}
                        </h1>
                        <div className="flex items-center text-gray-800 mb-8">
                            <span className="mr-4">By {blogPost.author}</span>
                            <span>{blogPost.date}</span>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            {blogPost.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-4 text-gray-700">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default BlogPost; 