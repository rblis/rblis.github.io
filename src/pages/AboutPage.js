import resume from '../files/Resume - Ryan Biswas.pdf';

const AboutPage = () => {
    return (
        <div className="PDFviewer">
            <embed src={resume} height='100%' width='90%' style={{boxShadow: '0 0 5em 2 rgb(44, 255, 255)'}}/>
        </div>
    )
}

export default AboutPage
