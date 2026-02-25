import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const toast = useToast();

interface Notify {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
    warning: (message: string) => void;
}

const notify: Notify = {
    success(message: string) {
        toast.success(message);
    },
    error(message: string) {
        toast.error(message);
    },
    info(message: string) {
        toast.info(message);
    },
    warning(message: string) {
        toast.warning(message);
    }
};

export default notify;