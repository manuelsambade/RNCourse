import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavoriteToList = (id) => {
    setFavoriteIds((prev) => [...prev, id]);
  };

  const removeFavoriteFromList = (id) => {
    setFavoriteIds((prev) => prev.filter((i) => id !== i));
  };

  const storeValue = {
    ids: favoriteIds,
    addFavorite: addFavoriteToList,
    removeFavorite: removeFavoriteFromList,
  };

  return (
    <FavoritesContext.Provider value={storeValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
