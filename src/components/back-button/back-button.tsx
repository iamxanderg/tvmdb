import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button id='go-back-btn' role='button' aria-label='Go Back' onClick={() => navigate(-1)} className='goback-btn'>
      <MdArrowBackIosNew title='' />
      <span>GO BACK</span>
    </button>
  );
}
