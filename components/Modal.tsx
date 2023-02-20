import React from 'react'
import styles from '../styles/Modal.module.css'

interface ModalProps {
    visible: boolean
    newName: string
    newSlug: string
    newDesc: string
    setNewName: any
    setNewSlug: any
    setNewDesc: any
    closeModal: any
    changeProfile: any
}

const Modal: React.FC<ModalProps> = ({
    visible,
    newName,
    newSlug,
    newDesc,
    setNewName,
    setNewSlug,
    setNewDesc,
    closeModal,
    changeProfile,
}) => {
    const rootClasses = [styles.modal]

    if (visible) {
        rootClasses.push(styles.open)
    }

    return (
        <div className={rootClasses.join(' ')}>
            {/* <div onClick={(event) => event.stopPropagation()}> */}
            <div className={styles.modal_active}>
                <h1 className={styles.modal_header}>Редактировать профиль</h1>
                <div className={styles.modal_form}>
                    {!newName ? (
                        <div className={styles.modal_label_error}>Имя не может быть пустым</div>
                    ) : (
                        <div className={styles.modal_label}>Имя</div>
                    )}
                    <input
                        className={styles.modal_input}
                        placeholder={'Имя'}
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    {!newSlug ? (
                        <div className={styles.modal_label_error}>
                            Адрес профиля не может быть пустым
                        </div>
                    ) : (
                        <div className={styles.modal_label}>Адрес профиля</div>
                    )}
                    <div style={{ display: 'flex' }}>
                        <input
                            className={styles.modal_input_example}
                            placeholder={'example.com/'}
                            disabled
                        />
                        <input
                            className={styles.modal_input_address}
                            placeholder={'Адрес профиля'}
                            value={newSlug}
                            onChange={(e) => setNewSlug(e.target.value)}
                        />
                    </div>
                    <div className={styles.modal_label}>Описание</div>
                    <textarea
                        placeholder="Описание"
                        className={styles.modal_textarea}
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                    />
                </div>
                <div className={styles.btns}>
                    <button onClick={closeModal} className={styles.cancel_btn}>
                        Отмена
                    </button>
                    <button
                        onClick={changeProfile}
                        className={styles.save_btn}
                        disabled={!newName || !newSlug}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Modal
