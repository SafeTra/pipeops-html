import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from '@react-spring/web';
import { success, close_png, icon_close } from '../../assets';


const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.func,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '30px',
  boxShadow: 24,
  p: 4,
};

const SuccessModal = ({ children, open, onClose }) => {
  // const generatePdf = async () => {
  //   const elementToCapture = document.getElementById('element-to-capture');

  //   if (elementToCapture) {
  //     const canvas = await html2canvas(elementToCapture);
  //     const imgData = canvas.toDataURL('image/png');

  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, 'PNG', 10, 10, 180, 150);
  //     pdf.save('generated-pdf.pdf');
  //   }
  // };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='flex items-center justify-center flex-col gap-6'>
              <div>
                <div className="flex justify-end self-end mr-[-7rem] mb-6 bg-Black font-extrabold">
                  <button className="cursor-pointer" onClick={onClose}>
                    <img src={icon_close} alt="" width='20px' />
                  </button>
                </div>
                <img src={success}alt="" width='100px' />
              </div>
              {children}
              {/* <button onClick={generatePdf}></button> */}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

SuccessModal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessModal;
