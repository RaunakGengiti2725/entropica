import React from 'react';

type SplineViewerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  url?: string;
};

export function SplineViewer(props: SplineViewerProps) {
  return React.createElement('spline-viewer', props as any);
}


