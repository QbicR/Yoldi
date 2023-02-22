import React from 'react'
import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.spinner_page}>
            <div className={styles.spinner_container}>
                <img
                    className={styles.spinner}
                    src="https://img.icons8.com/ios/80/838383/iphone-spinner--v1.png"
                />
            </div>
        </div>
    )
}

export default Spinner
