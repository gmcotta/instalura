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
import FormCreatePost from '../../patterns/FormCreatePost';

export default function WebsitePageWrapper({
  children, seoProps, pageBoxProps, menuProps, footerProps, messages,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openCreatePostModal() {
    setIsCreatePostModalOpen(true);
  }

  function closeCreatePostModal() {
    setIsCreatePostModalOpen(false);
  }

  return (
    <WebsitePageContext.Provider value={{
      openModalCadastrar: () => { openModal(); },
      closeModalCadastrar: () => { closeModal(); },
      openModalCreatePost: () => { openCreatePostModal(); },
      closeModalCreatePost: () => { closeCreatePostModal(); },
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
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          motionVariants={{
            opened: {
              x: 0,
            },
            closed: {
              x: '100%',
            },
          }}
          motionTransition={{
            duration: 0.2,
          }}
          motionAnimate={isModalOpen ? 'opened' : 'closed'}
        >
          {(modalProps) => (
            <FormCadastro modalProps={modalProps} onClose={closeModal} />
          )}
        </Modal>
        <Modal
          isOpen={isCreatePostModalOpen}
          onClose={closeCreatePostModal}
          motionVariants={{
            opened: {
              opacity: 1,
            },
            closed: {
              opacity: 0,
            },
          }}
          motionTransition={{
            duration: 0.2,
          }}
          motionAnimate={isCreatePostModalOpen ? 'opened' : 'closed'}
          justifyContent="center"
          alignItems="center"
        >
          {(modalProps) => (
            <FormCreatePost modalProps={modalProps} onClose={closeCreatePostModal} />
          )}
        </Modal>
        {menuProps.showMenu && <Menu onCadastrarClick={openModal} />}
        {menuProps.showLoggedMenu && <LoggedHeader onCreatePostClick={openCreatePostModal} />}
        {children}
        {footerProps.showFooter && <Footer />}
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
  footerProps: {
    showFooter: true,
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
    backgroundColor: PropTypes.string,
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
  }),
  footerProps: PropTypes.shape({
    showFooter: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
