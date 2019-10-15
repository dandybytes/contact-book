import React from "react";
import {connect} from "react-redux";
import {setCurrentPage} from "../actions/actionsPagination";
import "./Pagination.css";

const Pagination = ({currentPage, itemsPerPage, totalItems, setCurrentPage}) => {
    // round number of pages up
    const numPages = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({length: numPages}, (v, i) => ++i);

    return (
        <nav className="pagination" aria-label="Page navigation">
            <ul className="pagination-list">
                <li className="pagination-list-item">
                    <a
                        onClick={() =>
                            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
                        }
                        className="page-link"
                        aria-label="previous page"
                    >
                        <span aria-hidden="true">«</span>
                    </a>
                </li>

                {pages.map((page, ind) => (
                    <li
                        className={`pagination-list-item${currentPage === page ? " active" : ""}`}
                        key={ind}
                    >
                        <a onClick={() => setCurrentPage(page)} className="page-link">
                            {page}
                        </a>
                    </li>
                ))}

                <li className="pagination-list-item">
                    <a
                        onClick={() =>
                            setCurrentPage(
                                totalItems > currentPage * itemsPerPage
                                    ? currentPage + 1
                                    : currentPage
                            )
                        }
                        className="page-link"
                        aria-label="next page"
                    >
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default connect(null, {setCurrentPage})(Pagination); //prettier-ignore
