import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

export const ProgressContext = createContext(0);
export const SetProgressContext =
    createContext<Dispatch<SetStateAction<number>> | null>(null);

export function ProgressProvider({children}: {children: ReactNode}) {
    const [progress, setProgress] = useState(0)
    return (
        <ProgressContext value={progress}>
            <SetProgressContext value={setProgress}>
                {children}
            </SetProgressContext>
        </ProgressContext>
    );
}

export function useProgress(): [number, Dispatch<SetStateAction<number>>] {
    const progress = useContext(ProgressContext);
    const setProgress =
        useContext(SetProgressContext)!;
    return [progress, setProgress];
}
