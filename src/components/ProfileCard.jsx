import React from "react";

export default function ProfileCard({ name, image }) {
  return (
    <div className="flex flex-col items-start w-40 md:w-72 px-10 py-10 rounded-2xl">
      {/* Image Box */}
      <div className="w-32 h-32 md:w-56 md:h-56 rounded-xl overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <p className="mt-3 text-lg font-semibold text-gray-900">{name}</p>
    </div>
  );
}
