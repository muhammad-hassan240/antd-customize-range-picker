import React, { useState } from "react"
import { DatePicker, Space } from "antd"

import "./style.scss"

const { RangePicker } = DatePicker

const AntdRangePicker = ({ onChange, onOk }) => {
    return (
        <div className="date-picker-space">
            <Space direction="vertical">
                <RangePicker
                    size="middle"
                    allowClear={false}
                    suffixIcon={false}
                    onChange={onChange}
                    onOk={onOk}
                />
            </Space>
        </div>
    )
}

export default AntdRangePicker
