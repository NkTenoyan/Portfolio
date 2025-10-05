import { motion } from 'framer-motion'
import React from 'react'

function Button({children, onClick, type = "", variant = "primary"}) {

  return (
    <motion.button
        className={`btn ${variant}`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type={type}
    >
        {children}
    </motion.button>
  )
}

export default Button;