import './Checkbox.css';

const Checkbox = ({ checked, label, id }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        readOnly
        className="checkbox-input"
      />
      <label htmlFor={id} className="checkbox-label">
        <span className={`checkbox-box ${checked ? 'checked' : ''}`}>
          {checked && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="checkmark">
              <path d="M2 7.5L5.5 11L12 3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
        {label && <span className="checkbox-text">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
