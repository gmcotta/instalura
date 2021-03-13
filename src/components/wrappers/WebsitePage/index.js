import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';

export const WebsitePageContext = createContext({
  openModalCadastrar: () => {},
  closeModalCadastrar: () => {},
});

export default function WebsitePageWrapper({
  children, seoProps, pageBoxProps, menuProps,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <WebsitePageContext.Provider value={{
      openModalCadastrar: () => { openModal(); },
      closeModalCadastrar: () => { closeModal(); },
    }}
    >
      <SEO {...seoProps} />
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        {...pageBoxProps}
      >
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {(modalProps) => (
            <FormCadastro modalProps={modalProps} onClose={closeModal} />
          )}
        </Modal>
        {menuProps.showMenu && <Menu onCadastrarClick={openModal} />}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    showMenu: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    showMenu: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
