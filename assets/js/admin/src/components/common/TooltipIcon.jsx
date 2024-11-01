import React, { useRef, useEffect } from 'react';

const TooltipIcon = (props) => {
  const tooltipRef = useRef(null);

  useEffect(() => {
    const tooltip = new window.bootstrap.Tooltip(tooltipRef.current, {
      container: '.waContainer .container-fluid',
      trigger: 'hover',
      placement: props.placement
  });

  return () => {
    tooltip.dispose();
  };
  }, []);

  return <i ref={tooltipRef} className="bi bi-question-circle fs-6" data-bs-toggle="tooltip" title={ props.text } />
};

TooltipIcon.defaultProps = {
  placement: 'auto'
}

export default TooltipIcon;