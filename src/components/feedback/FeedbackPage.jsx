import React from 'react'
import clsx from 'clsx'
import { Link } from "react-router-dom";

const ItemLayout = ({ children, className }) => {
    return <div className={clsx('custom-bg p-4 rounded-xl flex items-center justify-center space-y-2 text-white', className)}>
        {children}
    </div>
}

const FeedbackPage = () => {
    return (
        <div>

        </div>
    )
}

export default FeedbackPage
