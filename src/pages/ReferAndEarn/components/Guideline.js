import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function Guideline() {
  return (
    <div className="flex gap-x-5 items-center">
      <div className="bg-[#D9D9D9] p-5 rounded-full">
        <FontAwesomeIcon icon={faUsers} className="guidelineIcon" />
      </div>
      <div>
        <h6 className="font-medium">Invite your Friends</h6>
        <p className="text-[#4D4D4D]">
          Share the link tutedude.com with your friends
        </p>
      </div>
    </div>
  );
}

export default Guideline;
