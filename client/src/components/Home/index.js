import { Search } from "../Search";
import { Card } from "../Card";
import { Subscription } from "../Subscription";
import { motion, useScroll } from "framer-motion";

export function Home() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
                delay: 0.1
            }
        }
    };

    return (
        <>
            <motion.div variants={container} initial="hidden" animate="show">
                <Search />
                <Card />
                <Subscription />
            </motion.div>
        </>
    );
}