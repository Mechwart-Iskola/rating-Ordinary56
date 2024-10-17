import { useState } from 'react'
import './App.css'
import { RatingContextProvider } from './context/RatingContext';
import SubmittedPage from './components/SubmittedPage/SubmittedPage';
import RatingBox from './components/RatingBox/RatingBox';

function App() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  return (
    <>
    <RatingContextProvider>
      {isSubmitted ? <SubmittedPage/> : <RatingBox setIsSubmitted={setIsSubmitted}/>}
    </RatingContextProvider>
    </>
  )
}

export default App
