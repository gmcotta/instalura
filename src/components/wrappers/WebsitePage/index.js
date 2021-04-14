import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';
import { WebsitePageContext } from './context';
import LoggedHeader from '../../commons/LoggedHeader';

export default function WebsitePageWrapper({
  children, seoProps, pageBoxProps, menuProps, messages,
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
      getCMSContent: (cmsKey) => get(messages, cmsKey),
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
        {menuProps.showLoggedMenu && <LoggedHeader />}
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
    showLoggedMenu: false,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    showMenu: PropTypes.bool,
    showLoggedMenu: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
