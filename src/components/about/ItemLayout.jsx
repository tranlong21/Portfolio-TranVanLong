import React from 'react';
import clsx from 'clsx'
import { motion } from 'framer-motion';



const ItemLayout = ({ children, className }) => {
    return <motion.div 
    
    initial={{scale:0}}
    whileInView={{scale: 1}}
    transition={{duration: 0.5}}

    
    className={clsx('custom-bg p-4 rounded-xl flex items-center justify-center space-y-2 text-white', className)}>
        {children}
    </motion.div>
}

export default ItemLayout;