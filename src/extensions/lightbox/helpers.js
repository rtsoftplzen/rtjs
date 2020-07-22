let overflowSettingBackup

export const handlePageOverflow = (state) => {
    if (state === 'on'){
        overflowSettingBackup = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden'
    } else if (state === 'off' && overflowSettingBackup){
        document.body.style.overflow = overflowSettingBackup
    }
}