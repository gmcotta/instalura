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

export default function WebsitePageWrapper({ children, seoProps }) {
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
      >
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {(modalProps) => (
            <FormCadastro modalProps={modalProps} onClose={closeModal} />
          )}
        </Modal>
        <Menu onCadastrarClick={openModal} />
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
