import './ImageSlider.css';
import { useState, useEffect } from 'react';

const people = [
    {
        src: 'https://untree.co/demos/impact/images/person_1.jpg',
        name: "Maria Jones",
        role: "Customer"
    },
    {
        src: 'https://untree.co/demos/impact/images/person_2.jpg',
        name: "Maria Jones",
        role: "Customer"
    },
    {
        src: 'https://untree.co/demos/impact/images/person_3.jpg',
        name: "Maria Jones",
        role: "Customer"
    }
]



const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const [stopTimer, setStopTimer] = useState(false)
    useEffect(() => {


        const timerId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 3)
        }, 5000)


        return () => { clearInterval(timerId); }

    }, [])


    const leftMove = () => {
        if (index == 0) {
            setIndex(2)
        }
        else {
            setIndex((index - 1) % 2)
        }
    }

    const rightMove = () => {
        setIndex((index + 1) % 3)
    }

    return <div className='imageslider'>
        <div className='imageslider__container'>
            <div className='leftarrow'>
                <svg onClick={leftMove} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="arrow svg-inline--fa fa-angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path></svg>
            </div>
            <div className='card' >
                <img src={people[index].src} />
                <h3>{people[index].name}</h3>
                <span>{people[index].role}</span>
                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
            </div>
            <div className='rightarrow'>
                <svg onClick={rightMove} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="arrow svg-inline--fa fa-angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
            </div>
        </div>
        <div className='round__group'>
            <div className='round' onClick={() => setIndex(0)} style={index == 0 ? { background: "var(--bs-primary)" } : {}}></div>
            <div className='round' onClick={() => setIndex(1)} style={index == 1 ? { background: "var(--bs-primary)" } : {}}></div>
            <div className='round' onClick={() => setIndex(2)} style={index == 2 ? { background: "var(--bs-primary)" } : {}}></div>
        </div>
    </div>;
};

export default ImageSlider;
