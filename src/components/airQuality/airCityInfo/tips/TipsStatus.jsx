import tipsData from "../../../../utils/tipsData";
import Tips from "./Tips";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const TipsStatus = () => {
  const { status } = useParams();
  const tipsDataF = tipsData.filter((item) => item.id === "1");

    return (
        <div className="my-[3em]">
          <Tips items={tipsDataF}/>
        </div>
    )
}

export default TipsStatus;