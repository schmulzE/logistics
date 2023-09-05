import { useLayoutEffect, useRef } from 'react';
import  ReactDOMServer from 'react-dom/server';
import './Cursor.css';
import { gsap } from 'gsap';
import {GrClose} from 'react-icons/gr'

const Cursor = () => {
  let cursorRef = useRef<HTMLDivElement>(null);
  
  
  useLayoutEffect(() => {      
    const cursor = {
      element: (cursorRef as any).current,
      states: {
        click: {
          backgroundColor : '#39ff14',
          height: 30,
          width: 30,
          zIndex: -100
        },
        default: {
          backgroundColor : '#39ff14',
          height: 4,
          width: 4,
          zIndex: 100
        },
        icon: {
          backgroundColor : '#39ff14',
          height: 110,
          width: 110,
        },
        label: {
          backgroundColor : '#39ff14',
          height: 110,
          width: 110,
        },
        invert: {
          backgroundColor: '#000',
          height: 4,
          width: 4,
        }
      },
    };
  // Initial position, default state and events.
  function init() {
    gsap.set(cursor.element, {
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
    });
    updateCursor('default');
    document.onmousemove = handleMouseMove;
  }
  
  // Set new position and apply props.
  function handleMouseMove(event: any) {
    gsap.to(cursor.element, { left: event.clientX, top: event.clientY, duration: 0.3});
    const state = event.target?.attributes['data-cursor']?.value || 'default';
    const label = event.target?.attributes['data-cursor-label']?.value || '';
    const iconUrl = event.target?.attributes['data-cursor-icon']?.value || null;
    updateCursor(state, label, iconUrl);
  }
  
  // Apply props and update inner html.
  type State = keyof typeof cursor.states
  function updateCursor(state: State, label?:string, iconUrl?: string) {
    gsap.to(cursor.element, cursor.states[state] || cursor.states['default']);
    if(cursor.element !== null ){
      cursor.element.className = `has-${state}-state`;
      // const materialIcon = `<span className="material-icons">${iconUrl}</span>`;
      const materialIcon = ReactDOMServer.renderToString(<GrClose size='20'/>) ;
      cursor.element.innerHTML = iconUrl ? materialIcon : label;
    }
  }
  
  init();
  
  }, [])
  return (
    <div id="adaptive-cursor" ref={cursorRef} className='hidden md:hidden lg:block xl:block'>
    </div>
  )
}

export default Cursor
