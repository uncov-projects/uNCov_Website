/* eslint-disable @next/next/no-img-element */
import React from "react";

type GiftCardProps = {
  step: number;
  title: string;
  description: string;
  media: string; // can be .gif, .mp4, .webm
};

const GiftCard: React.FC<GiftCardProps> = ({ step, title, description, media }) => {
  const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full transition-transform hover:scale-[1.02] hover:shadow-md">
      {/* Media (GIF or Video) */}
      <div className="relative mb-4">
        {isVideo ? (
          <video
            src={media}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full object-cover"
          />
        ) : (
          <img
            src={media}
            alt={title}
            className="rounded-xl w-full object-cover"
          />
        )}

        
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-2">
        <h3 className="flex items-center gap-2 font-semibold text-gray-900 text-lg">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
            {step}
          </span>
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default GiftCard;
