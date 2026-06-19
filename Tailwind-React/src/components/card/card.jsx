

export default function Card({
  title,
  description,
  badge,
  badgeColor = "bg-green-100 text-green-700",
}) {
  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 w-64">
        
        <span
          className={`${badgeColor} text-sm font-semibold px-2 py-1 rounded-full`}
        >
          {badge}
        </span>

        <h2 className="font-bold text-lg mt-2">{title}

        </h2>

        <p className="text-gray-500 text-sm">{description}

        </p>

      </div>
    </>
  );
}
