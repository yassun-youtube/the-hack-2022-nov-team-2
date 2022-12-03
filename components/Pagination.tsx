import React, { FC } from "react";

type PaginationProps = {
  page: number;
  setPage: (i: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <div className="flex justify-center">
      <div className="btn-group">
        {[...Array(11)].map((_, i) => (
          <button
            key={i}
            className="btn btn-sm bg-pokeBlend3"
            onClick={() => setPage(i)}
            disabled={page === i}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
