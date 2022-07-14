import React, {useRef} from "react";
import { useReactToPrint } from "react-to-print";

export const ShipmentManifest = () => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <>
            <button onClick={handlePrint} className="print__button">  Print </button>
            <div style={{margin: '2em'}} ref={componentRef}>
                <h1 style={{fontWeight: 500}}><span style={{fontSize: '1.5rem'}}>ДЕКОРИМЕКС ООД</span> <span style={{fontSize: '1.25rem'}}>- гр. Свети Влас,</span> <span style={{fontSize: '1rem'}}>Булстат BG 203 188 513</span></h1>
                <hr />
                <p>гр. Свети Влас, 8256, кв. "Русалка" № 205, Teл: 00359 (0) 554 68516, М-Тел: 00359 (0) 888 667 892, E-mail: tanyanacheva9@gmail.com</p>
                <p style={{textAlign: 'center', marginTop: '1em', fontSize: '1.25rem'}}>
                    Опис и размери на товара
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
                            <th>№</th>
                            <th>КОД</th>
                            <th>Наименование</th>
                            <th>Вид</th>
                            <th>Дъл-<br/>жина</th>
                            <th>Ши-<br/>рина</th>
                            <th>Един.<br/>Площ</th>
                            <th>Брой</th>
                            <th>Обща<br/>Площ</th>
                            <th>Дебел</th>
                            <th>Обем</th>
                            <th>Обем на<br/>товара</th>
                            <th>Един.<br/>тегло</th>
                            <th>Общо<br/>тегло</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{textAlign: 'left', fontWeight: 900}}>
                            <td style={{textAlign: 'center'}}>A.</td>
                            <td></td>
                            <td>Палет № 1/3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{textAlign: 'left', fontWeight: 900}}>
                            <td style={{textAlign: 'center'}}>1</td>
                            <td></td>
                            <td>Client Name</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{textAlign: 'left'}}>
                            <td style={{textAlign: 'center'}}>1.1</td>
                            <td></td>
                            <td >Продукт</td>
                            <td style={{textAlign: 'center'}}>детайл</td>
                            <td style={{textAlign: 'center'}}>1000</td>
                            <td style={{textAlign: 'center'}}>100</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>1</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>18</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                        </tr>
                        <tr style={{textAlign: 'left'}}>
                            <td style={{textAlign: 'center'}}>1.2</td>
                            <td></td>
                            <td >Продукт</td>
                            <td style={{textAlign: 'center'}}>детайл</td>
                            <td style={{textAlign: 'center'}}>1000</td>
                            <td style={{textAlign: 'center'}}>100</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>1</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>18</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>КОД</th>
                            <th>Наименование</th>
                            <th>Вид</th>
                            <th>Дъл-<br/>жина</th>
                            <th>Ши-<br/>рина</th>
                            <th>Един.<br/>Площ</th>
                            <th>Брой</th>
                            <th>Обща<br/>Площ</th>
                            <th>Дебел</th>
                            <th>Обем</th>
                            <th>Обем на<br/>товара</th>
                            <th>Един.<br/>тегло</th>
                            <th>Общо<br/>тегло</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{textAlign: 'left', fontWeight: 900}}>
                            <td style={{textAlign: 'center'}}>A.</td>
                            <td></td>
                            <td>Палет № 2/3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{textAlign: 'left', fontWeight: 900}}>
                            <td style={{textAlign: 'center'}}>1</td>
                            <td></td>
                            <td>Client Name</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{textAlign: 'left'}}>
                            <td style={{textAlign: 'center'}}>1.1</td>
                            <td></td>
                            <td >Продукт</td>
                            <td style={{textAlign: 'center'}}>детайл</td>
                            <td style={{textAlign: 'center'}}>1000</td>
                            <td style={{textAlign: 'center'}}>100</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>1</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>18</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                        </tr>
                        <tr style={{textAlign: 'left'}}>
                            <td style={{textAlign: 'center'}}>1.2</td>
                            <td></td>
                            <td >Продукт</td>
                            <td style={{textAlign: 'center'}}>детайл</td>
                            <td style={{textAlign: 'center'}}>1000</td>
                            <td style={{textAlign: 'center'}}>100</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>1</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>18</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>КОД</th>
                            <th>Наименование</th>
                            <th>Вид</th>
                            <th>Дъл-<br/>жина</th>
                            <th>Ши-<br/>рина</th>
                            <th>Един.<br/>Площ</th>
                            <th>Брой</th>
                            <th>Обща<br/>Площ</th>
                            <th>Дебел</th>
                            <th>Обем</th>
                            <th>Обем на<br/>товара</th>
                            <th>Един.<br/>тегло</th>
                            <th>Общо<br/>тегло</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{textAlign: 'left', fontWeight: 900}}>
                            <td style={{textAlign: 'center'}}>A.</td>
                            <td></td>
                            <td>Палет № 3/3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{textAlign: 'left', fontWeight: 900}}>
                            <td style={{textAlign: 'center'}}>1</td>
                            <td></td>
                            <td>Client Name</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{textAlign: 'left'}}>
                            <td style={{textAlign: 'center'}}>1.1</td>
                            <td></td>
                            <td >Продукт</td>
                            <td style={{textAlign: 'center'}}>детайл</td>
                            <td style={{textAlign: 'center'}}>1000</td>
                            <td style={{textAlign: 'center'}}>100</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>1</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>18</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                        </tr>
                        <tr style={{textAlign: 'left'}}>
                            <td style={{textAlign: 'center'}}>1.2</td>
                            <td></td>
                            <td >Продукт</td>
                            <td style={{textAlign: 'center'}}>детайл</td>
                            <td style={{textAlign: 'center'}}>1000</td>
                            <td style={{textAlign: 'center'}}>100</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>1</td>
                            <td style={{textAlign: 'right'}}>0.10</td>
                            <td style={{textAlign: 'right'}}>18</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1,800</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                            <td style={{textAlign: 'right'}}>1.3</td>
                        </tr>
                    </tbody>
                </table>
            </div> 

            
             
        </>
    )
}