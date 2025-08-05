import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div
        className="bg-neutral-900/90 border border-accent/50 border-solid backdrop-blur-[8px]
        py-8 px-6 xs:px-10 sm:px-16 rounded shadow-lg text-center space-y-8 text-white"
      >
        <p className="font-semibold text-lg">
          Bạn có thích chơi nhạc nền không?
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-6 py-2 border border-accent/50 border-solid rounded 
            hover:bg-accent hover:text-black transition-colors duration-200"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 border border-accent/50 border-solid rounded
            hover:bg-accent hover:text-black transition-colors duration-200"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setIsPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        );
      }
    } else {
      setShowModal(true);
    }
  }, []);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    if (newState) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
  };

  const closeModalNoMusic = () => {
    setIsPlaying(false);
    audioRef.current.pause();
    localStorage.setItem("musicConsent", "false");
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={closeModalNoMusic} toggle={toggle} />
      )}

      <audio ref={audioRef} loop>
        <source src={`${import.meta.env.BASE_URL}audio/lofi.mp3`} type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phần âm thanh.
      </audio>

      {!showModal && (
        <motion.button
          onClick={toggle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-10 h-10 xs:w-14 xs:h-14 text-white rounded-full flex items-center justify-center cursor-pointer p-2.5 xs:p-4 custom-bg hover:shadow-lg transition"
          aria-label="Sound control button"
          name="Sound control button"
        >
          {isPlaying ? (
            <Volume2
              className="w-full h-full text-white group-hover:text-accent"
              strokeWidth={1.5}
            />
          ) : (
            <VolumeX
              className="w-full h-full text-white group-hover:text-accent"
              strokeWidth={1.5}
            />
          )}
        </motion.button>
      )}
    </div>
  );
};

export default Sound;
