import ButtonLink from "../components/ButtonLink/ButtonLink.js"

const HomePage = () => {
    return (
        <div>
            <div className="Centerpiece">
                <ButtonLink link="https://rblis.github.io/PersonalMovieDatabase" text="Personal Movie Database"/>
                <ButtonLink link="/about" text="About Me"/>
            </div>  
        </div>
    )
}

export default HomePage
