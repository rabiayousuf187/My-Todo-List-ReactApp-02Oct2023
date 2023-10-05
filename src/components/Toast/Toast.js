import React from 'react'

const Toast = () => {
    return (
        <div>
            <div className="p-3 bg-success my-2 rounded">
                <Toast>
                    <ToastHeader>
                        Reactstrap
                    </ToastHeader>
                    <ToastBody>
                        This is a toast on a success background — check it out!
                    </ToastBody>
                </Toast>
            </div>

        </div>
    )
}

export default Toast
