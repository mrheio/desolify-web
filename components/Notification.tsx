const Notification = ({ style, content }: NotificationProps) => {
    const getClasses = () => {
        let classes = 'fixed bottom-4 left-4 p-2 rounded-md z-50';
        if (style === 'success') {
            classes = classes + ' bg-green-500';
        }
        if (style === 'error') {
            classes = classes + ' bg-error';
        }
        if (style === 'warning') {
            classes = classes + ' bg-yellow-500';
        }
        if (style === 'info') {
            classes = classes + ' bg-primary-500';
        }
        return `${classes} ${content ? 'block' : 'hidden'}`;
    };

    return <div className={getClasses()}>{content}</div>;
};

type NotificationProps = {
    style: 'success' | 'error' | 'warning' | 'info' | null;
    content?: string | null;
};

export default Notification;
