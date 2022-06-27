import ButtonLink from "../components/ButtonLink/ButtonLink.js"

const HomePage = () => {
    return (
        <div>
            <div className="Centerpiece">
                <ButtonLink link="https://rblis.github.io/PersonalMovieDatabase" text="Personal Movie Database (React)"/>
                <ButtonLink link="https://rblis.github.io/Farmbase/" text="FarmBase (Angular)"/>
                <ButtonLink link="https://uva-cs4730-sum22.github.io/project-typer-survivor/typer/index.html" text="HyperTyper (Phaser 3)"/>
                <ButtonLink link="/about" text="About Me"/>
                
            </div>  
        </div>
    )
}

export default HomePage
