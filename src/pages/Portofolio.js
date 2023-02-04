import React, { useContext } from 'react';
// import images
import prnv from '../img/home/test.jpeg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
import { CursorContext } from '../context/CursorContext';
import Portfolio from './Work';

const Portofolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col'>
          <motion.div
            style={{marginTop:200}}
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
            <center>
            <h1 className='h1'>
              photographer <br /> & film maker
            </h1>

            <p className='text-[26px] lg:text-[26px] font-primary mb-4 lg:mb-8'>
              YDS Canada
            </p>
            <Link to={'/contact'} className='btn mb-[30px]'>
              Jay Swaminarayan
            </Link>
            </center>
          </motion.div>
          {/* image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40 overflow-hidden'
            >
              <motion.img
                style={{ height: 800, marginRight:50, marginTop:130}}
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={prnv}
                alt=''
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portofolio;
