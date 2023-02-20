import React from 'react'
import styles from './AuthButton.module.css'

interface AuthButtonProps {
    text: string
    disabled: boolean
    onClick: () => void
    loading: boolean
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
    return (
        <button className={styles.auth_btn} {...props}>
            {!props.loading ? (
                props.text
            ) : (
                <img
                    className={styles.spinner}
                    src="https://img.icons8.com/ios-filled/35/ffffff/iphone-spinner--v1.png"
                />
            )}
        </button>
    )
}

export default AuthButton
