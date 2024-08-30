// Helper function to determine cursor style based on resizing direction
export function determineCursorStyle (direction){
    switch (direction) {
      case 'right':
      case 'left':
        return 'ew-resize'; 
      case 'bottom':
      case 'top':
        return 'ns-resize';
      case 'right bottom':
      case 'left top':
        return 'nwse-resize'; 
      case 'right top':
      case 'left bottom':
        return 'nesw-resize'; 
      default:
        return 'default'; 
    }
  };
  