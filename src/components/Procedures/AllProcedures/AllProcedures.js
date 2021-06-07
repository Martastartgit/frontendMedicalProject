import React, {useEffect, useState} from "react";
import {getAllProcedures} from "../../../services/procedure";
import {ProcedureCart} from "../ProcedureCart";


export const AllProcedures = () => {
    const [value, setValue] = useState([])
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        async function getData() {
            const value = await getAllProcedures();
            setIsSuccess(true)

            setValue({value});

            console.log(value);
        }
        getData()
        // getAllProcedures().then(value => setValue({value}))
    },[])

    return (
        <>
            {
            !isSuccess && <p>sdferf</p>
            }

            {isSuccess &&
                <>
                    {value.map(item => <ProcedureCart key={item.id} item={item}/>)}
                    dgdf
                </>

            }
        </>

    )
}


