import CSS from "./index.module.css"


export const Notification = (props: { success: boolean, message: string }) => {

    const { success, message } = props

    if (success) {
        return (
            <div className={CSS.Fixed}>
                <div className={CSS.success}>
                    <p>{message}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={CSS.Fixed}>
                <div className={CSS.error}>
                    <p>{message}</p>
                </div>
            </div>
        )
    }
}

export default Notification