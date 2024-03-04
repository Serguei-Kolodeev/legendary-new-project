//слово состоит из адреса и значения адреса

import { useState } from "react";
import IWord from "../types/IWord";
import CMPAddress from "./CMPAddress";
import CMPAddressValue from "./CMPAddressValue";

interface WordProps {
    word: IWord
}


export const CMPWord = ({word} : WordProps) => {
    const [onWheelBackgroundColor, setBackgroundColor] = useState('bg-inherit');
    const spanClassName = ["word flex px-0.5 rounded", onWheelBackgroundColor];
    return (
        <span className={spanClassName.join(' ')} onMouseEnter={() => setBackgroundColor('bg-slate-200')} onMouseLeave={() => setBackgroundColor('bg-inherit')}>
            <CMPAddress address={word.ADDR_CODE}/>
            <CMPAddressValue addresValue={word.ADDR_VALUE}/>
        </span>
    )
}

export default CMPWord;