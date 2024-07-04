import tipsData from "../../../../utils/tipsData";
import Tips from "./Tips";



const TipsStatus = () => {

    return (
        <div className="my-[3em]">
          <Tips items={tipsData}/>
        </div>
    )
}

export default TipsStatus;