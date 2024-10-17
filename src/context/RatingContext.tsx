import { createContext, useContext, useState } from "react";

type RatingContextProviderProps = {
    children: React.ReactNode
};

type RatingContext = {
    rating : number,
    setRating : React.Dispatch<React.SetStateAction<number>>
};

const RatingContext = createContext({} as RatingContext);

export function useRatingContext() {
    return useContext(RatingContext);
}
export function RatingContextProvider({children} : RatingContextProviderProps) {
    const [rating, setRating] = useState<number>(0);
    return <RatingContext.Provider value={{rating, setRating}}>
        {children}
    </RatingContext.Provider>
}