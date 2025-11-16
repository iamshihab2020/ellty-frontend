import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import './PageSelector.css';

const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

  const handleAllPagesChange = () => {
    if (selectedPages.length === pages.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages([...pages]);
    }
  };

  const handlePageChange = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter(p => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const handleDone = () => {
    console.log('Selected pages:', selectedPages);
  };

  return (
    <div className="page-selector">
      <div className="selector-header" onClick={handleAllPagesChange} style={{cursor: 'pointer'}}>
        <span className="header-text">All pages</span>
        <Checkbox
          id="all-pages"
          checked={selectedPages.length === pages.length}
        />
      </div>

      <div className="divider"></div>

      <div className="pages-list">
        {pages.map((page) => (
          <div key={page} className="page-item" onClick={() => handlePageChange(page)}>
            <span className="page-text">{page}</span>
            <Checkbox
              id={page}
              checked={selectedPages.includes(page)}
            />
          </div>
        ))}
      </div>

      <div className="divider divider-bottom"></div>

      <Button onClick={handleDone}>Done</Button>
    </div>
  );
};

export default PageSelector;
