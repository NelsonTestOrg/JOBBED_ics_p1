import React, { Component } from 'react';
import "./landing.css";
import backgrImage from "../assets/images/bg3.jpg";
import CommonButton from "../components/commonButton";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function FirstSection() {
    const rem = {
        textDecoration: "none"
    }
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.8)), url(${backgrImage})`,
        marginTop: "7rem",
        height: "fit-content",
        WebkitBackgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexWrap: "wrap",
        // backgroundAttachment: "fixed"
    }
    const specialBtns = {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        marginLeft: ".5rem",
        height: "3rem"
    }
    const headers = {
        fontSize: "5vw"
    }
    return (
        <div className="first-section" style={divStyle} >
            <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                className="page-head">
                <h1>HOME</h1>
            </motion.div>
            <div className="descriptionText w-100">
                <motion.h1
                    initial={{ x: 2000 }}
                    animate={{ x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    style={headers}>
                    Taking care of your home needs
                </motion.h1>
                <motion.h4
                    initial={{ x: 2000 }}
                    animate={{ x: 0 }}

                >
                    Finding someone to run your errands, get your engine fixed? We have someone for everyone.
                </motion.h4>
            </div>
            <motion.div
                initial={{ y: -2000 }}
                animate={{ y: 0 }}
                className="searchBar p-3 " style={{ width: "100vw", justifyContent: "center", textAlign: "center", margin: "4rem", display: "flex", flexWrap: "nowrap" }}>
                <motion.select
                    whileHover={{ scale: 1.05, x: -30 }}
                    name="search" id="" className='form-select form-select-lg mb-3' style={{ height: "fit-content", width: "50%" }}>
                    <option selected >What services are you looking for?</option>
                    <option value="1" >One</option>
                    <option value="2" >Two</option>
                    <option value="3" >Three</option>
                </motion.select>
                <Link to="/services" style={rem}>
                    <CommonButton variant="contained" color="primary" sx={specialBtns}>
                        Let's get connected
                    </CommonButton>
                </Link>

            </motion.div>

        </div>

    )
}

export default FirstSection;