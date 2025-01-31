import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../types/types';
import { NameSpace } from '../../const';
import { changeFavoriteStatusAction, fetchFavoriteOffersAction } from '../api-actions';
import { toast } from 'react-toastify';

type FavoritesProcess = {
  favoriteOffers: OfferType[];
  isFavoriteLoading: boolean;
}

const initialState: FavoritesProcess = {
  favoriteOffers: [],
  isFavoriteLoading: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isFavoriteLoading = false;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          const favoriteOfferIndex = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
          state.favoriteOffers.splice(favoriteOfferIndex, 1);
        }
      })
      .addCase(changeFavoriteStatusAction.rejected, () => {
        toast.error('Conflict while processing the request. Please check the data and try again.');
      });
  }
});
