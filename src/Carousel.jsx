import {useState} from "react";
import {FaQuoteRight} from "react-icons/fa";
import {FiChevronRight, FiChevronLeft} from "react-icons/fi";

const Carousel = ({shortList, list, longList}) => {
    const [people, setPeople] = useState(shortList);
    const prevSlide = () => {};
    const nextSlide = () => {};

    return <section className='section-center'>
        {
            people.map((person) => {
                const {id, image, name, title, quote} = person
                return <article className='section' key={id}>
                    <img src={image} alt={name} className='person-img'/>
                    <h5 className='name'>{name}</h5>
                    <p className='title'>{title}</p>
                    <p className='text'>{quote}</p>
                    <FaQuoteRight />
                    <button type='button' className='prev' onClick={prevSlide}>
                        <FiChevronLeft />
                    </button>
                    <button type='button' className='next' onClick={nextSlide}>
                        <FiChevronRight />
                    </button>
                </article>
            })
        }
    </section>
};

export default Carousel;