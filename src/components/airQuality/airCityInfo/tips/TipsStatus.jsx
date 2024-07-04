import tipsData from "../../../../utils/tipsData";
import Tips from "./Tips";


const TipsStatus = ({id}) => {

  const tipsDataF = tipsData.filter((item) => item.id === id);

    return (
        <div className="my-[3em]">
          <Tips items={tipsDataF}/>
        </div>
    )
}

export default TipsStatus;