import React from "react";
import Mask from '../component/Mask'

export default {
    title: '业务组件/Mask',
    component: Mask
}

export const common = () => <Mask />

export const customStyle = () => <Mask style={{ height: 200, width: 200, background: 'green' }} />

export const child = () => <Mask><div>jttest</div></Mask>