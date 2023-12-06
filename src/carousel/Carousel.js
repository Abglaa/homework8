import React, { Children, cloneElement, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Carousel.css'

const PAGE_WIDTH = 450

export const Carousel = ({ children }) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => Math.min(currentOffset + PAGE_WIDTH, 0))
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const maxOffset = -PAGE_WIDTH * (pages.length - 1)
            return Math.max(currentOffset - PAGE_WIDTH, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child, index) => {
                return cloneElement(child, {
                    key: index,
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    }, [children])

    return (
        <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
            <div className="window">
                <div
                    className="all-pages-container"
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
        </div>
    )
}
