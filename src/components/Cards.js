import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Results!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Some Community"
                            label="country"
                            path='/about'
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Another Community"
                            label="country2"
                            path='/about'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-4.jpg"
                            text="Some Community"
                            label="country3"
                            path='/about'
                        />
                        <CardItem 
                            src="images/img-8.jpg"
                            text="Another Community"
                            label="country4"
                            path='/about'
                        />
                        <CardItem 
                            src="images/img-3.jpg"
                            text="Some Community"
                            label="country5"
                            path='/about'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
export default Cards
