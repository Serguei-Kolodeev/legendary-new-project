//программа состоит из блоков

import { programm } from "../data/programm";
import CMPBlock from "./CMPBlock";

//const blocks  = ['G0','G90'] as string[];

export const CMPProgramm = () => {
    return (
        <div className="programm-blocks">
            {programm.BLOCKS.map((block, index) =>
                <CMPBlock key={index} blocks = {programm.BLOCKS[index]}/>
            )}
                 
            
        </div>
    )
}

export default CMPProgramm;