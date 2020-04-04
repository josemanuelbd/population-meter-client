import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  target?: 'modal' | 'sidebar';
}

const Portal: React.FC<Props> = ({ children, target = 'modal' }: Props) => {
  const portalRoot = document.getElementById(`${ target }-root`);
  const rootElemRef = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    if (portalRoot) {
      portalRoot.appendChild(rootElemRef.current);
    }

    return () => {
      rootElemRef.current.remove();
    };
  }, []);

  if (!portalRoot) {
    return null;
  }

  return createPortal(children, rootElemRef.current);
};

export default Portal;
