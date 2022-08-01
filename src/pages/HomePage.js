import ButtonLink from "../components/ButtonLink/ButtonLink.js"

const HomePage = () => {
    return (
        <div>
            <div className="Centerpiece">
                <h1>Portfolio</h1>                
                <h2>Ryan Biswas</h2>
                <hr></hr>
                <ButtonLink link="https://pmdb-75c79.web.app/" text="Personal Movie Database (React)"/>
                <ButtonLink link="https://rblis.github.io/Farmbase/" text="FarmBase (Angular)"/>
                <ButtonLink link="https://uva-cs4730-sum22.github.io/project-typer-survivor/typer/index.html" text="HyperTyper (Phaser 3)"/>
                <hr></hr>
                <ButtonLink link="/about" text="Resume"/>                
            </div>  
        </div>
    )
}

export default HomePage
