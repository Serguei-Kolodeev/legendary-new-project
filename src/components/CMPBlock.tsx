//блок состоит из слов

import IBlock from "../types/IBlock";
import CMPWord from "./CMPWord";

interface BlocksProps {
    blocks : IBlock
}

export const CMPBlock = ({blocks} : BlocksProps) => {
    return(
        <div className="block flex flex-row">
            {blocks.WORDS.map((word, index) => (
                <CMPWord key={index} word={word}/>)
            )}
        </div>
    )
}

export default CMPBlock;