import React from 'react';
import Image from 'next/image';

async function ArticleDetails({ params }) {
    // In a real application, you would fetch the article data based on the ID
    const articleId = params.id;

    const article = {
        id: articleId,
        title: "India's Rohan Shah Wins Two Silver Medals At 10th World Strength Lifting And Incline Bench Press Championship 2023 ",
        date: "December 23, 2023",
        author: "Rohan Shah",
        image: "/article-images/f2b7ea82ce06dc2de6a30a8632df5030.jpeg",
        content: `Indian athlete Rohan Shah makes India proud again with two big wins.

He won two Silver Medals for India at the 10th World Strength lifting & Incline Bench Press Championship 2023.

No matter how much we speak about how a few individuals and professionals pave the way for elevated growth and success in their careers all on their own, it still feels like many more discussions are needed around them for the world to know more. It is also imperative for other up-and-comers across industries to learn more about the journeys of these self-made professionals who leave no stone unturned and no effort untouched in getting ahead on their paths.

Indian athlete Rohan Shah is among these high-performing and determinedly driven sporting talents, who since the beginning was firm in creating a success story in the world of sports, becoming one of the most prominent international athletes and bringing more glory to his hometown Bilaspur and, of course, India.

In his journey to elevated success in power and strength lifting, he says that every win has only ignited in him more passion, love, and determination to bring more success to the nation. One such success has now come in two silver medals for India at the 10th World Strength lifting & Incline Bench Press Championship 2023.

The much-spoken-about event occurred at L.B. Stadium in Hyderabad between 18th and 21st December 2023 and was jointly organized by the Indian Strength lifting Federation and Telangana. Rohan Shah became eminent by participating with other sportsmen across 15 countries like the USA, Africa, Kazakhstan, Kyrgyzstan, Nepal, Bhutan, Pakistan, India, Iraq, Iran, Afghanistan, and more.

Competing with other established players in the competition and bringing two Silver medals for the country has made our nation prouder than ever. Rohan Shah, an athlete and a powerhouse of talent in strength lifting and powerlifting, continues to spread the cheer of success among countrymen with his consistent wins in the sport, something not all sporting talents have been able to do in all these years.

Rohan Shah (@rohan_shah_athlete) remains a noteworthy sports personality not just in power and strength lifting but also in the business realm. He is also a TEDx speaker who astonished audiences with his powerful speech in November 2023 at Lingaya's Lalita Devi Institute of Management & Sciences (LLDIMS), New Delhi. He is well on his way to attaining even more success worldwide with his sporting endeavors.`
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-full">
                        <Image
                            src={article.image}
                            alt={article.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {article.title}
                        </h1>
                        <div className="flex items-center text-gray-800 mb-8">
                            <span className="mr-4">By {article.author}</span>
                            <span>{article.date}</span>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            {article.content.split('\n\n').map((paragraph, index) => (
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

export default ArticleDetails; 