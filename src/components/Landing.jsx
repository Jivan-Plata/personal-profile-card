import plataPicture from '../assets/plata-picture.JPG'
import mailIcon from '../assets/Mail.png'
import linkedinIcon from '../assets/linkedin.png'

function Landing () {
    return (
        <header className='text-center flex flex-col items-center gap-4'>

            <div className='overflow-hidden w-full rounded-xl'>
                <img className = 'w-full h-full object-cover' alt = "Jivan Plata ID Picture" src = {plataPicture}/>
            </div>

            <h1 className='text-white font-bold text-4xl'> Jivan Plata </h1>
            <p className='text-[#F3BF99] text-lg'>Frontend Developer</p>
            <p className='text-white text-lg'>Dasmarinas Cavite, Philippines</p>

            <div className='w-full flex flex-row justify-center items-center gap-[clamp(2rem,4vw,8rem)] mt-8 px-[clamp(3rem,4vw,8rem)]'>

                <a 
                href="mailto:jivanplata@gmail.com?subject=Inquiry%20from%20Digital%20Card&body=Hi%20Jivan,"
                className='flex flex-1 flex-row items-center justify-center bg-white gap-4 px-4 py-2 rounded-lg'
                >
                    <img src = {mailIcon} alt = "Mail Icon" />
                    <p>Email</p>
                </a>

                <a 
                href="https://www.linkedin.com/in/jivan-elgin-plata-68b852300/"
                className='flex flex-1 flex-row items-center justify-center bg-[#5093e2] gap-4 px-4 py-2 rounded-lg'                
                >

                    <img src = {linkedinIcon} alt = "LinkedIn Icon"/>
                    <p className='text-white'>LinkedIn</p>

                </a>

            </div>

        </header>
    )
}

export default Landing;