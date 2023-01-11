import React, { useState } from 'react';
import './PropertyData.css'

function Pagination({ dataPerPage, dataLength, paginate }) {
    const [currNum, setCurrNum] = useState(1)

    const pageNumber = [];
    let length = Math.abs(dataLength / dataPerPage)

    for (let i = 1; i <= length; i++) {
        pageNumber.push(i);
    }
    const funPrev = () => {
        if (currNum > 0 && currNum !== 1) {
            setCurrNum(currNum - 1);
            paginate(currNum-1)
        }
        console.log(currNum)

    }

    const funNext = () => {
        if (currNum <= length) {
            setCurrNum(currNum + 1)
            paginate(currNum+1)
        }                       
        
        console.log(currNum)
    }

    return (
        <div>
            <div id='page'>
                <button
                    id='prev'
                    onClick={() => {
                        funPrev();
                        
                    }}>Previous</button>
                <div className="pageNum">
                    {currNum}
                </div>
                <button
                    id='next'
                    onClick={() => {
                        funNext()
                    }}>Next</button>

            </div>

        </div>
    )
}

export default Pagination