import '@/components/header/styles.scss';
import Search from '@/components/search/Search';

type HeaderType = {
  title: string;
  onSearch: (query: string) => void;
};

function Header(props: HeaderType) {
  const { title, onSearch } = props;

  return (
    <header>
      <h1>{title}</h1>
      <div className='searchbar'>
        <Search placeholderText='Search TV shows' onSearch={(query) => onSearch(query)} />
      </div>
    </header>
  );
}

export default Header;
