import React from "react";
import styles from  './style.less'

console.log('jt', styles)

const Mask = ({ style, children, ...props }) => {
    return <div style={style} className="demo-mask-wrap" {...props}>
        {children}
    </div>
}

export default Mask