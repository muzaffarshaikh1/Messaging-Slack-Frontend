import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogDescription, DialogTitle, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react"

export const useConfirm = ({ title, message }) => {
    const [promise, setPromise] = useState(null);

    async function confirmation() {
        return new Promise((resolve) => {
            setPromise({ resolve });
        });
    }
    const handleClose = () => {
        setPromise(null);
    }

    const handleConfirm = () => {
        promise?.resolve(true);
        handleClose();
    }

    const ConfirmDialog = () => {
        return (
            <Dialog open={promise != null}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>{message}</DialogDescription>
                    <DialogFooter>
                        <Button onClick={handleClose} variant="secondary">Cancel</Button>
                        <Button onClick={handleConfirm}>Confirm</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return { ConfirmDialog, confirmation }
}