import React from 'react';
import propTypes from 'prop-types';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
// import RecipeCards from './Components/RecipeCards';

export default function Recipes(props) {
  const { history } = props;
  const { location: { pathname } } = history;
  return (
    <div>
      <Header
        currentPage={ pathname === '/foods' ? 'Foods' : 'Drinks' }
        history={ history }
        isSearchBar
      />
      <RecipeCards />
      <Footer
        history={ history }
      />
    </div>
  );
}

Recipes.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.string.isRequired,
    }).isRequired,
    push: propTypes.func.isRequired,
  }).isRequired,
};
