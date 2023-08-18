import React, { FC } from 'react';
import Modal from 'react-modal';

import { AccessRights } from './AccessRights';

import { Parcel } from './Parcel';
import Altar from './Altar';
import Reservoirs from './Reservoirs';

import styles from '../../styles/components/realm-details/realm-details.module.css';

type RealmDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const RealmDetails: FC<RealmDetailsProps> = ({ isOpen, onClose }) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className="Modal"
      overlayClassName="ModalOverlay"
      contentLabel="Realm #18763"
    >
      <div className={styles.realmDetails}>
        <div className={styles.realmDetailsBackground} />

        <button
          onClick={closeModal}
          className={styles.realmDetails__closeButton}
        />
        <div className={styles.realmDetails__heder}>
          <h1>REALM #18763</h1>
        </div>

        <div className={styles.realmDetails_content}>
          <AccessRights />

          <div className={styles.realmDetails_content__wrapper}>
            <Altar />
            <Reservoirs />
            <Parcel />
          </div>
        </div>
      </div>
    </Modal>
  );
};
