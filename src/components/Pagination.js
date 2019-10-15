import React from "react";
import "./Pagination.css";

const Pagination = ({currentPage, itemsPerPage, totalItems}) => {
    // round number of pages up
    const numPages = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({length: numPages}, (v, i) => ++i);

    return (
        <nav className="pagination" aria-label="Page navigation">
            <ul className="pagination-list">
                <li className="pagination-list-item">
                    <a className="page-link" aria-label="previous page">
                        <span aria-hidden="true">«</span>
                    </a>
                </li>

                {pages.map((page, ind) => (
                    <li
                        className={`pagination-list-item${currentPage === page ? " active" : ""}`}
                        key={ind}
                    >
                        <a className="page-link">{page}</a>
                    </li>
                ))}

                <li className="pagination-list-item">
                    <a className="page-link" aria-label="next page">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
