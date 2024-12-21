'use client'

interface VideoCardProps {
  videoUrl: string;
  imageUrl: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, imageUrl, description }) => {
  const handleClick = () => {
    window.location.href = videoUrl;
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-[90%] border-cyan-400 stoke-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
    >
      <div className="relative w-full h-40">
        <img
          src={imageUrl}
          alt="Video thumbnail"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-800 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;