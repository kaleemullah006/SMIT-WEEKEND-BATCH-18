import CardComponents from "../components/cardComponents"
export default function StatsCard(){
    const cards = [
        {number:4, label:"Teachers", icon:"👨‍🏫"},
        {number:12, label:"Students", icon:"👨‍🎓"},
        {number:8, label:"Active Today", icon:"✅"},
    ]

    return(
        <>
        <div className="min-h-screen flex flex-wrap justify-center items-center gap-4">

        {cards.map((card)=>(
            <CardComponents
            number={card.number} 
            label={card.label}
            icon={card.icon} />
            
            
            
        ))}
        
        </div>
        </>
    )
}