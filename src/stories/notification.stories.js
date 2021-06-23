import { useRef, useState } from 'react';
import Button from '../lib/components/Button';
import Notification from '../lib/components/Notification';
import Flex from '../lib/components/Flex';

export const argTypes = {
    placement: {
        description: 'Notification placement',
        control: {
            type: null,
            options: ['large', 'small'],
        },
        table: {
            category: 'Notification Group',
            type: {
                summary: 'top-start|top|top-end|bottom-start|bottom|bottom-end',
            },
            defaultValue: { summary: 'bottom' },
        },
    },
    limit: {
        description: 'Limit the number of displayed notifications',
        control: {
            type: null,
        },
        table: {
            type: {
                summary: 'number',
            },
            category: 'Notification Group',
        },
    },
    type: {
        table: {
            category: 'Notification',
        },
        control: {
            type: null,
        },
    },
    closeBtn: {
        control: null,
        table: {
            category: 'Notification',
        },
    },
    autoDismiss: {
        control: null,
        table: {
            category: 'Notification',
        },
    },
    onClosed: {
        control: {
            type: null,
        },
        table: {
            category: 'Events',
        },
    },
    onOpened: {
        control: {
            type: null,
        },
        table: {
            category: 'Events',
        },
    },
};

/* -------- ALL PROPS ---------------- */
export const AllProps = () => {
    const idRef = useRef(0);
    const [notificationList, setNotificationList] = useState([]);

    function handleClick(type) {
        const newNotification = {
            id: idRef.current,
            type: type,
            header: type,
            body: 'Lorem ipsum dolor sit amet consectetur',
        };
        idRef.current += 1;

        setNotificationList((prevState) => [...prevState, newNotification]);
    }

    function handleClosed(id) {
        setNotificationList((prevState) => prevState.filter((n) => n.id !== id));
    }

    return (
        <>
            <Flex justify="between">
                <Button onClick={() => handleClick('info')} color="info">
                    Notification
                </Button>
                <Button onClick={() => handleClick('success')} color="success">
                    Notification
                </Button>
                <Button onClick={() => handleClick('error')} color="error">
                    Notification
                </Button>
                <Button onClick={() => handleClick('warning')} color="warning">
                    Notification
                </Button>
            </Flex>

            <Notification.Group placement="top-start" limit={4}>
                {notificationList.map((n) => (
                    <Notification type={n.type} key={n.id} onClosed={() => handleClosed(n.id)}>
                        <Notification.Header>{n.header}</Notification.Header>
                        <Notification.Body>{n.body}</Notification.Body>
                    </Notification>
                ))}
            </Notification.Group>
        </>
    );
};

/* ============== PLACEMENT ============== */
export const Placement = (args) => {
    const idRef = useRef(0);
    const [notificationList, setNotificationList] = useState([]);
    const [position, setPosition] = useState('bottom-end');

    function handleClick(position) {
        const newNotification = {
            id: idRef.current,
            type: 'info',
            header: 'Information',
            body: 'Lorem ipsum dolor sit amet consectetur',
        };
        idRef.current += 1;

        // replace notification to trigger new animation
        setNotificationList([newNotification]);
        setPosition(position);
    }

    function handleClosed(id) {
        setNotificationList((prevState) => prevState.filter((n) => n.id !== id));
    }

    return (
        <>
            <Flex cols="3">
                <Button onClick={() => handleClick('top-start')} color="info" btnStyle="outline">
                    Top Start
                </Button>
                <Button onClick={() => handleClick('top')} color="info" btnStyle="outline">
                    Top
                </Button>
                <Button onClick={() => handleClick('top-end')} color="info" btnStyle="outline">
                    Top End
                </Button>
                <Button onClick={() => handleClick('bottom-start')} color="info" btnStyle="outline">
                    Bottom Start
                </Button>
                <Button onClick={() => handleClick('bottom')} color="info" btnStyle="outline">
                    Bottom
                </Button>
                <Button onClick={() => handleClick('bottom-end')} color="info" btnStyle="outline">
                    Bottom End
                </Button>
            </Flex>

            <Notification.Group placement={position} limit={1}>
                {notificationList.map((n) => (
                    <Notification type={n.type} key={n.id} onClosed={() => handleClosed(n.id)}>
                        <Notification.Header>{n.header}</Notification.Header>
                        <Notification.Body>{n.body}</Notification.Body>
                    </Notification>
                ))}
            </Notification.Group>
        </>
    );
};

Placement.parameters = {
    docs: {
        source: {
            code: `
<Notification.Group placement="bottom-start">
    {notificationList.map((n) => (
        <Notification type={n.type} key={n.id} onClosed={() => handleClosed(n.id)}>
            <Notification.Header>{n.header}</Notification.Header>
            <Notification.Body>{n.body}</Notification.Body>
        </Notification>
    ))}
</Notification.Group>
            `, // shows event handlers correcly in the docs
        },
    },
};

/* ============== PLACEMENT ============== */
export const Limit = (args) => {
    const idRef = useRef(0);
    const [notificationList, setNotificationList] = useState([]);

    function handleClick() {
        const newNotification = {
            id: idRef.current,
            type: 'success',
            header: 'Success',
            body: 'Lorem ipsum dolor sit amet consectetur',
        };

        idRef.current += 1;

        setNotificationList((prevState) => [...prevState, newNotification]);
    }

    function handleClosed(id) {
        setNotificationList((prevState) => prevState.filter((n) => n.id !== id));
    }

    return (
        <>
            <Button onClick={handleClick} color="success" btnStyle="outline">
                {notificationList.length} Notification(s)
            </Button>

            <Notification.Group placement="bottom-end" limit={1}>
                {notificationList.map((n) => (
                    <Notification
                        type={n.type}
                        key={n.id}
                        onClosed={() => handleClosed(n.id)}
                        autoDismiss={1000}
                    >
                        <Notification.Header>{n.header}</Notification.Header>
                        <Notification.Body>{n.body}</Notification.Body>
                    </Notification>
                ))}
            </Notification.Group>
        </>
    );
};

Limit.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};
