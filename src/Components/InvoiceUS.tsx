import React, {useRef} from "react";
import { useReactToPrint } from "react-to-print";

export const InvoiceUS = () => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <>
            <h1>Invoice US</h1>
            <div ref={componentRef}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Date
                            </th>
                        </tr>
                    </thead>
                </table>
            </div> 

            <button onClick={handlePrint} className="print__button">  Print </button>
             
        </>
    )
}