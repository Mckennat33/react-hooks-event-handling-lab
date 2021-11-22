// Code Keypad Component Here

function KeyPad() {

function prompt() {
    console.log('Entering password...')
}

    return (
        <div>
            <input type="password" onChange={prompt}></input>
        </div>
    )
}

export default KeyPad