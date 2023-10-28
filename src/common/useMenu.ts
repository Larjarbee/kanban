import * as React from 'react';

export default function useMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloses = () => {
    setAnchorEl(null);
  };

  // const handleCloses = () => {
  //   setAnchorEl(null);
  // };

  return { open, handleCloses, handleClick, anchorEl };
}
