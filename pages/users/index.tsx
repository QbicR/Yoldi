import React from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'

import styles from '../../styles/UsersList.module.css'
import { fetcher } from '@/utils/fetcher'
import { UserType } from '@/types/types'
import Spinner from '@/components/UI/spinner/Spinner'

const UsersList: React.FC = () => {
    const { push } = useRouter()

    const { data: users } = useSWR<UserType[]>(
        'https://frontend-test-api.yoldi.agency/api/user',
        fetcher,
    )

    if (!users) {
        return <Spinner />
    }

    return (
        <div className={styles.users_page}>
            <div className={styles.contaiter}>
                <h1>Список аккаунтов</h1>
                <div className={styles.users_list}>
                    {users?.map((user) => (
                        <div
                            className={styles.user_item}
                            key={user.slug}
                            onClick={() => push(`/users/${user.slug}`)}
                        >
                            <div
                                className={styles.user_item_icon}
                                style={{ backgroundImage: `url(${user?.image?.url})` }}
                            >
                                {!user?.image?.url && user?.name[0]}
                            </div>
                            <div className={styles.user_name}>{user.name}</div>
                            <div className={styles.user_email}>{user.email}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UsersList
