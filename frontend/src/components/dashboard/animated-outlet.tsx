import { motion } from "motion/react"
import { Outlet } from "react-router"

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -20,
    },
}

const pageTransition = {
    duration: 0.3,
}

export default function AnimatedOutlet() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full h-full"
        >
            <Outlet />
        </motion.div>
    )
}