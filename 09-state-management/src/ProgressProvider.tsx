import {ActionDispatch, createContext, ReactNode, useContext, useReducer} from "react";

export const ProgressContext = createContext(0);
export const SetProgressContext =
    createContext<ActionDispatch<[currentAction: ActionType]> | null>(null);

type ActionType = {
    action: string,
    progress: number
}

function reducer(prevState: number, currentAction: ActionType) {
    if (currentAction.action === "change") {
        return currentAction.progress;
    } else {
        return prevState;
    }
}

export function ProgressProvider({children}: { children: ReactNode }) {
    //const [progress, setProgress] = useState(0);
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <ProgressContext value={state}>
            <SetProgressContext value={dispatch}>
                {children}
            </SetProgressContext>
        </ProgressContext>
    );
}

export function useProgress(): [number, ActionDispatch<[currentAction: ActionType]>] {
    const progress = useContext(ProgressContext);
    const setProgress =
        useContext(SetProgressContext)!;
    return [progress, setProgress];
}
