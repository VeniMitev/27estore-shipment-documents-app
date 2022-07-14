import React, {useRef} from "react";
import { useReactToPrint } from "react-to-print";

export const Pricing = () => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <>
            <div ref={componentRef}>
                <h1 style={{fontWeight: 500}}><span style={{fontSize: '1.5rem'}}>ДЕКОРИМЕКС ООД</span> <span style={{fontSize: '1.25rem'}}>- гр. Свети Влас,</span> <span style={{fontSize: '1rem'}}>Булстат BG 203 188 513</span></h1>
                <hr />
                <p>гр. Свети Влас, 8256, кв. "Русалка" № 205, Teл: 00359 (0) 554 68516, М-Тел: 00359 (0) 888 667 892, E-mail: tanyanacheva9@gmail.com</p>
                <p style={{textAlign: 'center', marginTop: '1em', fontSize: '1.25rem'}}>
                    ПОКУПНИ (доставни) ЦЕНИ
                </p>
                <p style={{textAlign: 'center', marginTop: '1em'}}>
                    Доставка № 111 Лас Вегас
                </p>
                <p style={{textAlign: 'center'}}>
                    Дата на предаване на товара: 22.02.2022
                </p>
                <p style={{textAlign: 'center'}}>
                    (вторник)
                </p>
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