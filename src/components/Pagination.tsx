// components/Pagination.tsx
"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  baseUrl = "/shop",
  onPageChange 
}: PaginationProps) {
  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePageClick = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* Previous Button */}
      <Link
        href={currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : "#"}
        onClick={(e) => {
          if (currentPage <= 1) e.preventDefault();
          if (onPageChange && currentPage > 1) handlePageClick(currentPage - 1);
        }}
        className={`flex items-center justify-center w-10 h-10 rounded border ${
          currentPage > 1
            ? "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
            : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        <span className="sr-only">Previous</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      {/* First Page + Ellipsis */}
      {pageNumbers[0] > 1 && (
        <>
          <Link
            href={`${baseUrl}?page=1`}
            onClick={() => onPageChange && handlePageClick(1)}
            className="flex items-center justify-center w-10 h-10 rounded border bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            1
          </Link>
          {pageNumbers[0] > 2 && (
            <span className="flex items-center justify-center w-10 h-10 text-gray-500">...</span>
          )}
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`${baseUrl}?page=${page}`}
          onClick={() => onPageChange && handlePageClick(page)}
          className={`flex items-center justify-center w-10 h-10 rounded border ${
            page === currentPage
              ? "bg-pink-600 border-pink-600 text-white"
              : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Last Page + Ellipsis */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="flex items-center justify-center w-10 h-10 text-gray-500">...</span>
          )}
          <Link
            href={`${baseUrl}?page=${totalPages}`}
            onClick={() => onPageChange && handlePageClick(totalPages)}
            className="flex items-center justify-center w-10 h-10 rounded border bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            {totalPages}
          </Link>
        </>
      )}

      {/* Next Button */}
      <Link
        href={currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : "#"}
        onClick={(e) => {
          if (currentPage >= totalPages) e.preventDefault();
          if (onPageChange && currentPage < totalPages) handlePageClick(currentPage + 1);
        }}
        className={`flex items-center justify-center w-10 h-10 rounded border ${
          currentPage < totalPages
            ? "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
            : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        <span className="sr-only">Next</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}