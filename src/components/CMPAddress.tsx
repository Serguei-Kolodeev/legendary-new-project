//адрес буква латинского алфавита

import IAddress from "../types/IAddress";

interface AddressProps {
    address: IAddress
}

export const CMPAddress = ({address} : AddressProps) => {
    return (
        <span className="address"> {address.ADDR_CODE} </span>
    )
}

export default CMPAddress;