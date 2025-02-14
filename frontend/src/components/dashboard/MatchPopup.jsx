import React, { useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { getDateString } from "../../utils/getDateString";
import ReactConfetti from "react-confetti";
import html2canvas from "html2canvas";

const MatchPopup = ({ receivedMsg, sentMsg, onClose }) => {
  const [shared, setShared] = useState(false);
  const popupRef = useRef(null);

  const handleShareClick = async () => {
    try {
      const canvas = await html2canvas(popupRef.current, {
        useCORS: true,
        backgroundColor: null,
        scale: 5,
      });

      canvas.toBlob((blob) => {
        if (navigator.share) {
          const image = new File([blob], "bristollink-match.png", {
            type: "image/png",
          });

          navigator
            .share({
              title: "BristolLink Match!",
              text: `🎉 I just matched with ${sentMsg.crush_name}! #BristolLink`,
              files: [image],
            })
            .catch((error) => {
              console.error("Error sharing: ", error);
              downloadImage(canvas);
            });
        }
      });
    } catch (error) {
      console.error("Error capturing screenshot: ", error);
      downloadImage(canvas);
    } finally {
      setShared(true);
    }
  };

  const downloadImage = (canvas) => {
    const link = document.createElement("a");
    link.download = "bristollink-match.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-md">
      {/* Confetti Background */}
      <ReactConfetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={window.innerWidth * 0.2}
        recycle={true}
        initialVelocityX={5}
        initialVelocityY={5}
      />

      <div
        className="relative w-full max-w-md mx-4 bg-gradient-to-br from-purple-100 via-pink-500 to-indigo-300  bg-[length:300%_300%] rounded-2xl shadow-2xl shadow-pink-300 overflow-hidden animate-gradient z-50"
        ref={popupRef}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-pink-800 transition-colors z-50"
        >
          <MdClose className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="relative z-10 p-8 text-center">
          <div className="mb-6">
            <div className="flex justify-center text-center">
              <img
                src="/favicon.png"
                alt="logo"
                className="rounded-full h-16 w-16"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mt-4">
              It's a Match! 💖
            </h2>
          </div>

          <div className="bg-gray-300/20 backdrop-blur-sm rounded-xl p-6 mb-6 space-y-3">
            <p className="text-xl font-semibold text-white">
              {sentMsg.crush_name}
            </p>
            <p className="text-white/80">
              has a crush on{" "}
              <span className="font-bold">{receivedMsg.crush_name}</span>
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-white/90 italic">"{receivedMsg.message}"</p>
            </div>
            <p className="text-sm text-white/60">
              Matched on {getDateString(receivedMsg.created_at)}
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleShareClick}
              className="w-full py-3 px-4 bg-white text-pink-600 rounded-lg font-semibold 
                            hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
            >
              {shared ? "Thanks for sharing!" : "Share the News"}
              <IoMdShare className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPopup;
