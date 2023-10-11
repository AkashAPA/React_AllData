// src/components/Navigation.js
import React from 'react';
import Styles from './CarSeller.module.css';

const Navigation = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 10;
    const halfMaxButtonsToShow = Math.floor(maxButtonsToShow / 2);

    let startPage = Math.max(1, currentPage - halfMaxButtonsToShow);
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    if (totalPages > maxButtonsToShow) {
      if (endPage === totalPages) {
        startPage = totalPages - maxButtonsToShow + 1;
      } else if (startPage === 1) {
        endPage = maxButtonsToShow;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`btn btn-outline-primary ${i === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className={Styles.navigation}>
      <button
        className="btn btn-primary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {renderPageButtons()}
      <button
        className="btn btn-primary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
