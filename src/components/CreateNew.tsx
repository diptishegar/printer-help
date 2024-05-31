import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { BiPlusCircle } from "react-icons/bi";
import { BiSolidPencil } from "react-icons/bi";
import { BiCopyAlt } from "react-icons/bi";
import '../css/create_new.css';


export const CreateNew = () => {

    const [createNewPgs, setCreateNewPgs] = useState(false);
    const [inputNumber, setInputNumber] = useState('');
    const [items, setItems] = useState({});


    const handleDivOpen = () => {
        setCreateNewPgs(true)
    }

    const handleDivclose = () => {
        setCreateNewPgs(true)
    }

    const generateNumbers = () => {

        let num1 = inputNumber.toString();


        if ('allNumbers' in localStorage) {
            let allNumbers1 = JSON.parse(localStorage.getItem('allNumbers'));
            if (allNumbers1.includes(num1)) {
                console.log("Number is present in the array");
                let values = JSON.parse(localStorage.getItem(num1));
                setItems(values);
            } else {
                let allNumbers1 = JSON.parse(localStorage.getItem('allNumbers'));
                const allNumbers = [num1, ...allNumbers1]
                localStorage.setItem('allNumbers', JSON.stringify(allNumbers));
                let evenNumbers = '';
                let oddNumbers = '';

                for (let i = 1; i <= inputNumber; i++) {
                    if (i % 2 === 0) {
                        evenNumbers += i + ',';
                    } else {
                        oddNumbers += i + ',';
                    }
                }
                const generatedVal = {
                    even: evenNumbers.slice(0, -1),
                    odd: oddNumbers.slice(0, -1)
                };
                localStorage.setItem(num1, JSON.stringify(generatedVal));
                if (num1 in localStorage) {
                    let values = JSON.parse(localStorage.getItem(num1));
                    setItems(values);
                }
            }
        } else {
            const allNumbers = [num1]
            localStorage.setItem('allNumbers', JSON.stringify(allNumbers));
            let allNumbers1 = JSON.parse(localStorage.getItem('allNumbers'));
            let evenNumbers = '';
            let oddNumbers = '';

            for (let i = 1; i <= inputNumber; i++) {
                if (i % 2 === 0) {
                    evenNumbers += i + ',';
                } else {
                    oddNumbers += i + ',';
                }
            }
            const generatedVal = {
                even: evenNumbers.slice(0, -1),
                odd: oddNumbers.slice(0, -1)
            };
            localStorage.setItem(num1, JSON.stringify(generatedVal));
            if (num1 in localStorage) {
                let values = JSON.parse(localStorage.getItem(num1));
                setItems(values);
            }
        }

        console.log(JSON.parse(localStorage.getItem('allNumbers')));


        //localStorage. removeItem('allNumbers');

    };


    return (
        <div className="create_new_div">
            <h1>Create New Series</h1>
            {createNewPgs?
                (
                    <span>
                        <div className="icon_div">
                            <div className="inner_icon_div">
                                <BiSolidPencil />
                                <input
                                    className="input_field"
                                    placeholder="Enter total no. of pgs"
                                    type="number"
                                    value={inputNumber}
                                    onChange={(e) => setInputNumber(parseInt(e.target.value))}
                                />
                                <button className="buttons_style" onClick={generateNumbers}>Generate</button>
                            </div>
                        </div>
                        <div className="extra">
                            {items ? (
                                <div className="icon_div_result">
                                    <div className="inner_icon_div_result">
                                        <h6 className="result_h6">Result : </h6>
                                        <span className="span_copy"><button onClick={() => { navigator.clipboard.writeText(items.odd) }}><BiCopyAlt /> Copy Odd Series</button><p style={{    
                                            margin:"0rem",
                                            marginBottom: "9px"
                                            }}>{items.odd}</p></span>
                                        <span className="span_copy"><button onClick={() => { navigator.clipboard.writeText(items.even) }}><BiCopyAlt /> Copy Even Series</button><p
                                        style={{
                                            margin:"0rem",
                                            marginBottom: "9px",
                                
                                        }}
                                        >{items.even}</p></span>
                                    </div>
                                </div>
                            ) : (
                                <div className="icon_div_result">
                                    <h6 className="result_h6">Result : </h6>
                                </div>

                            )
                            }
                        </div>
                    </span>
                ) :
                (
                    <button onClick={handleDivclose} className="icon_div">
                        <BiPlusCircle className="icon_plus" />
                    </button>
                )
            }
        </div>
    )
}
