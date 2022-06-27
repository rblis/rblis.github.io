const RedirectPage = (link) => {
    const p1 = require('../files/1.jpg'); 
    const p2 = require('../files/2.jpg');
    const p3 = require('../files/3.JPG');
    const p4 = require('../files/4.JPG');
    const p5 = require('../files/5.JPG');
    const p6 = require('../files/6.JPG');
    
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'auto 30em auto', gridTemplateRows: 'auto auto auto', justifyContent: 'space-evenly'}}>
            <img src={p1} className='smallimg'/>
            <img src={p2} className='smallimg'/>
            <img src={p3} className='smallimg'/>
            <img />
            <div className="Centerpiece" >
                <h1>Happy Birthday my HunnyBunny!</h1>

                <h3>
                    You are the love of my life and I hope your birthday
                    brings you happiness and everything
                    you have been wishing for! 
                </h3>
                <img src='https://media4.giphy.com/media/3ohhwmQ0xIg8W3pHd6/giphy.gif'/>
            </div>
            <img />
            <img src={p4} className='smallimg'/>
            <img src={p5} className='smallimg'/>
            <img src={p6} className='smallimg'/>
        
        </div>
        
    )
}

export default RedirectPage
