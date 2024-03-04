//значение адреса цифра или выражение

import IAddressValue from "../types/IAddressValue";

interface AddressValueProps {
    addresValue : IAddressValue
}

export const CMPAddressValue = ({addresValue} : AddressValueProps) => {
    return (
        <span className="addres-value"> {addresValue.ADDR_VALUE} </span>
    )
}

export default CMPAddressValue;