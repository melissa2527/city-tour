import React, {useState, useEffect} from 'react'

function Price({price}) {
    // const [cheap, setCheap] = useState(false);
    let cheap = true

    if ({price} > 100) {
        cheap = false
    } 

    // useEffect(() => {
    //     if (price < 100) {
    //         setCheap(true)
    //     }
    // })
    return (
        <div>
            <p id="price" className={cheap ? 'background-green' : null}>Price: {price}</p>
            {/* <p id="price" style={{(price.value < 100) ? 'background-green' : null}}>Price: {price}</p> */}
        </div>
    )
}

export default Price
