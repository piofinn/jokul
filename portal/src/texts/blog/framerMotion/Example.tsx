import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

const Example = () => {
    return (
        <div className="wrapper jkl-portal-paragraph">
            <div className="example-container">
                <motion.div whileHover={{ scale: 1.15 }} whileTap={{ rotate: 45, scale: 0.95 }} />
            </div>
        </div>
    );
};

export default Example;
