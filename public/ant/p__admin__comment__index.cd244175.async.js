(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{LVb3:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var d=l(a("Vl3Y"));a("IzEo");var r=l(a("bx4M")),o=l(a("p0pE"));a("/zsF");var i=l(a("PArb")),u=l(a("2Taf")),s=l(a("vZ4D")),c=l(a("l4Ni")),f=l(a("ujKo")),p=l(a("MhPg")),m=n(a("q1tI")),h=a("y1Nh"),v=a("MuoO"),g=l(a("wd/R")),b=l(a("OUpD")),y=l(a("LaW7")),M=a("Y2fQ"),C=l(a("rhDX")),E=function(e,t,a,n){var l,d=arguments.length,r=d<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(d<3?l(r):d>3?l(t,a,r):l(t,a))||r);return d>3&&r&&Object.defineProperty(t,a,r),r},w=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},V=["\u221a","\xd7"],k=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,c.default)(this,(0,f.default)(t).apply(this,arguments)),e.state={updateModalVisible:!1,selectedRows:[],formValues:{},updateFormValues:{id:0,content:"",is_audited:1}},e.columns=[{title:(0,M.formatMessage)({id:"Content"}),dataIndex:"content",render:function(e,t){return m.default.createElement("a",{href:"/article/".concat(t.article.id,"#comment-").concat(t.id),target:"_blank",rel:"noopener noreferrer"},m.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))}},{title:(0,M.formatMessage)({id:"Article"}),dataIndex:"article.title"},{title:(0,M.formatMessage)({id:"User"}),dataIndex:"socialite_user.name"},{title:(0,M.formatMessage)({id:"Audited"}),dataIndex:"is_audited",filters:[{text:V[0],value:"0"},{text:V[1],value:"1"}],render:function(e){return 1===e?V[0]:V[1]}},{title:(0,M.formatMessage)({id:"Status"}),width:80,dataIndex:"deleted_at",filters:[{text:V[0],value:"0"},{text:V[1],value:"1"}],render:function(e){return null===e?V[0]:V[1]}},{title:(0,M.formatMessage)({id:"Created_at"}),width:115,dataIndex:"created_at",sorter:!0,render:function(e){return m.default.createElement("span",null,(0,g.default)(e).format("YYYY-MM-DD"))}},{title:(0,M.formatMessage)({id:"Handle"}),width:110,render:function(t,a){return null===a.deleted_at?m.default.createElement(m.Fragment,null,m.default.createElement("a",{onClick:function(){return e.handleUpdateModalVisible(!0,a)}},(0,M.formatMessage)({id:"Edit"})),m.default.createElement(i.default,{type:"vertical"}),m.default.createElement("a",{onClick:function(){return e.handleDestroy(a)}},(0,M.formatMessage)({id:"Delete"}))):m.default.createElement(m.Fragment,null,m.default.createElement("a",{onClick:function(){return e.handleUpdateModalVisible(!0,a)}},(0,M.formatMessage)({id:"Edit"})),m.default.createElement(i.default,{type:"vertical"}),m.default.createElement("a",{onClick:function(){return e.handleForceDelete(a)}},(0,M.formatMessage)({id:"Force Delete"})),m.default.createElement(i.default,{type:"vertical"}),m.default.createElement("a",{onClick:function(){return e.handleRestore(a)}},(0,M.formatMessage)({id:"Restore"})))}}],e.handleStandardTableChange=function(t,a,n){var l=e.props.dispatch,d=e.state.formValues,r=Object.keys(a).reduce(function(e,t){var n=(0,o.default)({},e);return n[t]=w(a[t]),n},{}),i=(0,o.default)({currentPage:t.current,pageSize:t.pageSize},d,r);n.field&&(i.sorter="".concat(n.field,"_").concat(n.order)),l({type:"adminComment/fetch",payload:i})},e.handleMenuClick=function(t){var a=e.props.dispatch,n=e.state.selectedRows;if(n)switch(t.key){case"remove":a({type:"adminComment/destroy",payload:{key:n.map(function(e){return e.id})},callback:function(){e.setState({selectedRows:[]})}});break;default:break}},e.handleSelectRows=function(t){e.setState({selectedRows:t})},e.handleUpdateModalVisible=function(t,a){e.setState({updateModalVisible:!!t,updateFormValues:a||{id:0,content:"",is_audited:1}})},e.handleUpdate=function(t){var a=e.props.dispatch;a({type:"adminComment/update",payload:t}),e.handleUpdateModalVisible()},e.handleDestroy=function(t){var a=e.props.dispatch;a({type:"adminComment/destroy",payload:t})},e.handleForceDelete=function(t){var a=e.props.dispatch;a({type:"adminComment/forceDelete",payload:t})},e.handleRestore=function(t){var a=e.props.dispatch;a({type:"adminComment/restore",payload:t})},e}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"adminComment/fetch"})}},{key:"render",value:function(){var e=this.props,t=e.adminComment.data,a=e.loading,n=this.state,l=n.selectedRows,d=n.updateModalVisible,o=n.updateFormValues,i={handleUpdateModalVisible:this.handleUpdateModalVisible,handleUpdate:this.handleUpdate};return m.default.createElement(h.PageHeaderWrapper,null,m.default.createElement(r.default,{bordered:!1},m.default.createElement("div",{className:C.default.tableList},m.default.createElement("div",{className:C.default.tableListOperator}),m.default.createElement(y.default,{selectedRows:l,loading:a,data:t,columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange}))),m.default.createElement(b.default,Object.assign({},i,{updateModalVisible:d,updateFormValues:o})))}}]),t}(m.Component);k=E([(0,v.connect)(function(e){var t=e.adminComment,a=e.loading;return{adminComment:t,loading:a.models.adminComment}})],k);var D=d.default.create()(k);t.default=D},LaW7:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var d=l(a("wCAj")),r=l(a("Y/ft")),o=l(a("2Taf")),i=l(a("vZ4D")),u=l(a("l4Ni")),s=l(a("ujKo")),c=l(a("MhPg")),f=l(a("p0pE")),p=n(a("q1tI")),m=l(a("O7M1"));function h(e){if(!e)return[];var t=[];return e.forEach(function(e){e.needTotal&&t.push((0,f.default)({},e,{total:0}))}),t}var v=function(e){function t(){var e;return(0,o.default)(this,t),e=(0,u.default)(this,(0,s.default)(t).apply(this,arguments)),e.handleTableChange=function(t,a,n){var l=e.props.onChange;if(l){for(var d=arguments.length,r=new Array(d>3?d-3:0),o=3;o<d;o++)r[o-3]=arguments[o];l.apply(void 0,[t,a,n].concat(r))}},e}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.rowKey,n=(0,r.default)(e,["data","rowKey"]),l=t||{},o=l.list,i=void 0===o?[]:o,u=l.pagination,s=void 0!==u&&u,c=!!s&&(0,f.default)({showSizeChanger:!0,showQuickJumper:!0},s);return p.default.createElement("div",{className:m.default.standardTable},p.default.createElement(d.default,Object.assign({rowKey:a||"key",dataSource:i,pagination:c,onChange:this.handleTableChange},n)))}}],[{key:"getDerivedStateFromProps",value:function(e){if(0===e.selectedRows.length){var t=h(e.columns);return{selectedRowKeys:[],needTotalList:t}}return null}}]),t}(p.Component),g=v;t.default=g},O7M1:function(e,t,a){e.exports={standardTable:"antd-pro-pages-admin-comment-index-components-standard-table-index-standardTable",tableAlert:"antd-pro-pages-admin-comment-index-components-standard-table-index-tableAlert"}},OUpD:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7Kak");var l=n(a("9yH6"));a("5NDa");var d=n(a("5rEg"));a("2qtc");var r=n(a("kLXV"));a("y8nQ");var o=n(a("Vl3Y")),i=n(a("q1tI")),u=a("Y2fQ"),s=o.default.Item,c=function(e){var t=e.updateModalVisible,a=e.form,n=e.handleUpdate,o=e.handleUpdateModalVisible,c=e.updateFormValues,f=function(){a.validateFields(function(e,t){e||(a.resetFields(),n(t))})};return i.default.createElement(r.default,{destroyOnClose:!0,title:(0,u.formatMessage)({id:"Edit"}),visible:t,onOk:f,onCancel:function(){return o()}},a.getFieldDecorator("id",{rules:[{required:!0}],initialValue:c.id})(i.default.createElement(d.default,{type:"hidden"})),i.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,u.formatMessage)({id:"Content"})},a.getFieldDecorator("content",{rules:[{required:!0}],initialValue:c.content})(i.default.createElement(d.default,null))),i.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:(0,u.formatMessage)({id:"Audited"})},a.getFieldDecorator("is_audited",{rules:[{required:!0}],initialValue:c.is_audited})(i.default.createElement(l.default.Group,null,i.default.createElement(l.default,{value:1},(0,u.formatMessage)({id:"Yes"})),i.default.createElement(l.default,{value:0},(0,u.formatMessage)({id:"No"}))))))},f=o.default.create()(c);t.default=f}}]);