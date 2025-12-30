import { BsArrowUpCircleFill } from "react-icons/bs"
import { useEffect, useRef } from 'react';
import { scrollToTop } from '../utils/scrollsToTop';
import './BtnTop.css'

function BtnTop() {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onScroll = () => {
      if (window.scrollY > 30) {
        btn.classList.add('showBtnVoltar');
      } else {
        btn.classList.remove('showBtnVoltar');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = () => {
    scrollToTop(5000);
  };

  return (    
    <div 
        id="area__imgVoltar" 
        className="area__imgVoltar" 
        ref={btnRef}
    >
        <BsArrowUpCircleFill 
            className="img__voltar"
            onClick={handleClick}
        />

    </div>
  );
}

export default BtnTop;
