export default [
    {
        name: "组件",
        name_en: "Component",
        router: "",
        icon: "el-icon-time",
        children: [
            {name: "按钮", name_en: "Button", router: "/button"},
            {name: "图标", name_en: "Icon", router: "/icon"},
            {name: "色彩", name_en: "Color", router: "/color"},
            { name: "布局", name_en: "Layout", router: "/layout"},
            { name: "布局容器", name_en: "Container", router: "/Container"},
        ]
    },
    {
        name: "表单",
        name_en: "Form",
        router: "",
        icon: "el-icon-time",
        children: [
            { name: "单选框", name_en: "Radio", router: "/radio" },
            { name: "多选框", name_en: "Checkbox", router: "/checkbox" },
            { name: "输入框", name_en: "Input", router: "/input" },
            { name: "计数器", name_en: "InputNumber", router: "/inputNumber" },
            { name: "选择器", name_en: "Select", router: "/select" },
            { name: "级联选择器", name_en: "Cascader", router: "/cascader" },
            { name: "开关", name_en: "Switch", router: "/switch" },
            { name: "滑块", name_en: "Slider", router: "/slider" },
            { name: "时间选择器", name_en: "TimePicker", router: "/TimePicker" },
            { name: "日期选择器", name_en: "DatePicker", router: "/datePicker" },
            { name: "上传", name_en: "Upload", router: "/upload" },
            { name: "评分", name_en: "Rate", router: "/rate" },
            { name: "颜色选择器", name_en: "ColorPicker", router: "/colorPicker" },
            { name: "穿梭框", name_en: "Transfer", router: "/transfer" },
            { name: "表单", name_en: "Form", router: "/form" },
        ]
    },
    {
        name: "提示",
        name_en: "Notice",
        router: "",
        icon: "el-icon-time",
        children: [
            { name: "告警", name_en: "Alert", router: "/alert" },
            { name: "加载", name_en: "Loading", router: "/loading" },
            { name: "消息提示", name_en: "Message", router: "/message" },
            { name: "弹框", name_en: "MessageBox ", router: "/messageBox" },
            { name: "通知", name_en: "Notification ", router: "/notification" },
        ]
    },
    {
        name: "关于",
        name_en: "About",
        router: "/about",
        icon: "el-icon-time",
        children: [
            
        ]
    }
]

