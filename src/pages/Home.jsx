import React from 'react'
import Counter from '../component/Counter/Counter'

const Home = () => {
    return (
        <>
            <div className="Container">
                <Counter />
            </div>
            <div className="Container">
                <Counter />
            </div>

            <div className="Container">
                <Counter />
            </div>
        </>
    )
}

export default Home
