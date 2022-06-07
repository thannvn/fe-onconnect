import { useState } from 'react';

function useChangePageSize() {
  const [pageSize, setPageSize] = useState<number>(10);

  const changePageSize = (size: number) => {
    setPageSize(size);
  };

  return { pageSize, changePageSize };
}

export default useChangePageSize;
