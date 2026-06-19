import Card from "../card/card";


export default function Assignment(){
    const lessons = [
    { title: "Noorani Qaida", description: "Huroof e Tahajji", badge: "Beginner", badgeColor: "bg-green-100 text-green-700" },
    { title: "Tajweed Basics", description: "Ghunna aur Qalqalah", badge: "Intermediate", badgeColor: "bg-yellow-100 text-yellow-700" },
    { title: "Surah Yaseen", description: "Ayat 1-20", badge: "Advanced", badgeColor: "bg-red-100 text-red-700" },
    ]

return(
    <>
    <div className="min-h-screen flex flex-wrap justify-center items-center gap-6 bg-gray-100">
{lessons.map((lesson) =>(
    <Card 
    title={lesson.title}
    description={lesson.description}
    badge={lesson.badge}
    badgeColor={lesson.badgeColor} />
))}


        
    </div>
    
    
    </>
)
}