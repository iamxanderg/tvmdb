/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import './styles.scss';

type SearchElement = {
  onSearch: (event: string) => void;
  placeholderText: string;
  dataTestId?: string;
};

export default function Search(props: SearchElement) {
  const { onSearch, placeholderText, dataTestId = 'search-testid' } = props;
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleOnSearch();
      }
    },
    [inputValue],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOnClear = () => {
    setInputValue('');
  };

  const handleOnSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="search">
      <div className="search-container">
        <span className="search-icon">
          <BsSearch title="" />
        </span>
        <input
          id="search-field-input"
          aria-label="Search Field"
          placeholder={placeholderText}
          value={inputValue}
          onChange={(event) => handleOnChange(event)}
          data-testid={dataTestId}
        />
        {inputValue.length > 0 && (
          <button
            id="reset-search-btn"
            aria-label="Reset Search"
            onClick={() => handleOnClear()}
            className="search-icon reset-icon-button"
          >
            <IoCloseCircle title="reset search" />
          </button>
        )}
      </div>
      <button
        id="search-tvshows-btn"
        aria-label="Search TV Shows"
        onClick={() => handleOnSearch()}
        className="search-button"
      >
        Search
      </button>
    </div>
  );
}
