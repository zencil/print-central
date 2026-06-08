function onBoard() {
    return (
        <>
            <div>
                <input type="text" id="name" name="name" placeholder="John Pork" maxLength='20' required></input><br></br>
                <input type="tel" id="phone" name="phone" placeholder="99106xxxxx" pattern="[0-9]{10}" required></input><br></br>
                <input type="email" id="email" name="email" placeholder="johnpork@email.com"></input><br></br>
                <input type="file" id="print" name="print"></input><br></br>
 
            </div>
        </>
    )
}

export default onBoard;