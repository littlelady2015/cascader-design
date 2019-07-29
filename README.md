# cascader 级联组件

### 接口设计
#####  cascader                                                                 
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|options|可选项数据源|Array|[]| 
|placeholder|输入框占位文本|String|'请选择' |
|expandTrigger|菜单展开方式|String|'click'|
|notFoundContent|当下拉列表为空时显示的内容|String|'Not Found'|
|onChange|选择完成时的回调|Function((value) => void)|-|
|blur|移除焦点|Function((e) => void)|-|
|focus|获取焦点|Function(e) => void|-|
