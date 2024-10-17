import { FormEvent } from "react";
import { useRatingContext } from "../../context/RatingContext"
import styles from "./RatingBox.module.css"

type RatingBoxProps = {
    setIsSubmitted : React.Dispatch<React.SetStateAction<boolean>>
}
const RatingBox = ({setIsSubmitted} : RatingBoxProps) => {
    const {rating, setRating} = useRatingContext();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true)
    }
    const RatingClick = (e: HTMLDivElement) => {
        const ratingValue = Number(e.innerText);
        setRating( ratingValue);
        console.log(rating)
        e.classList.toggle(styles.containerClicked);
    }
  return (
    <div className={styles.ratingContainer}>
        <div className={styles.starContainer}>
            <img src="../../../../images/icon-star.svg" alt="star"/>
        </div>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering.
            </p>
        <form action=""className={styles.ratingForm} onSubmit={handleSubmit}>
            <div onClick={e => RatingClick(e.currentTarget )}>1</div>
            <div onClick={e => RatingClick(e.currentTarget )}>2</div>
            <div onClick={e => RatingClick(e.currentTarget )}>3</div>
            <div onClick={e => RatingClick(e.currentTarget )}>4</div>
            <div onClick={e => RatingClick(e.currentTarget )}>5</div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default RatingBox