import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
      {/* Previous */}
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={`px-4 py-2 rounded-lg border transition
          ${
            page === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-600 hover:text-white"
          }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;

        return (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`w-10 h-10 rounded-lg border transition
              ${
                page === pageNumber
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-100"
              }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className={`px-4 py-2 rounded-lg border transition
          ${
            page === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-600 hover:text-white"
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;