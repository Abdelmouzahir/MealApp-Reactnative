import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

export default function FavoritesProvider({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);
    
    function addFavorite(id) {
        setFavoriteMealIds((prev) => [...prev, id]);
    }
    function removeFavorite(id) {
        setFavoriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
    }
    
    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}
