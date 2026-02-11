type HeaderState = { isHidden: boolean };
type Listener = (state: HeaderState) => void;

let isHidden = false;
const listeners = new Set<Listener>();

export const headerStore = {
    setHidden(hidden: boolean) {
        if (isHidden === hidden) return;
        isHidden = hidden;
        listeners.forEach(l => l({ isHidden }));
    },
    subscribe(listener: Listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    },
    getSnapshot() {
        return isHidden;
    }
};
