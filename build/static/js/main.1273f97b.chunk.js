(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(e,t,n){e.exports={root:"app_root__15E-r",editor:"app_editor__3J4Vn",result:"app_result__LxRy7"}},2:function(e,t,n){e.exports={imageDiv:"editor_imageDiv__fieMZ",inputDiv:"editor_inputDiv__16Dfi",input:"editor_input__3Zmo_",imageUploadDiv:"editor_imageUploadDiv__1vzsk",imagePreview:"editor_imagePreview__3BIwW",code:"editor_code__3gwL7",run:"editor_run__29z7e",submit:"editor_submit__3bnfk",toogle:"editor_toogle__bVyCH",active:"editor_active__3TyLe",normal:"editor_normal__pEoXK",heading:"editor_heading__2M6tR"}},37:function(e,t,n){},5:function(e,t,n){e.exports={item:"Result_item__2kNc8",label:"Result_label__3pNWB",input:"Result_input__x3rvq",show:"Result_show__1jExy"}},65:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),c=n.n(i),o=n(8),s=n.n(o),r=(n(37),n(9)),l=n(10),u=n(12),d=n(11),p=n(13),m=n.n(p),j=n(29),h="INPUT_CHANGE",b="OUTPUT_CHANGE",g="SUBMITTING",v=n(6),f=n(14),_=n.n(f),O=n(2),x=n.n(O);n(60),n(61),n(62);n(63),n(64);var N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={lang:"cpp17",mode:"clike",value:"#include <iostream>\nusing namespace std;\n\nint main() {\n    int x=10;\n    cin>>x;\n    cout<<x;\n}\n        ",file:"",imageURL:""},e.submitHandler=function(){e.props.submitting();var t={code:e.state.value,input:e.props.input,lang:e.state.lang};_.a.post("/api/codeCompile",t).then((function(t){e.props.outputChange(t.data.output.output)})).catch((function(e){}))},e.modeToggleHandler=function(t){"cpp17"===t?e.setState({mode:"clike",lang:"cpp17"}):"java"===t?e.setState({mode:"clike",lang:"java"}):"python"===t&&e.setState({mode:"python",lang:"python3"})},e.handleImageUpload=function(){var t=new FormData;t.append("image",e.state.file),_.a.post("/api/imageUpload",t).then((function(t){e.setState({imageURL:t.data.imageURL})})).catch((function(e){return console.log(e)}))},e.handleImageToText=function(){_.a.post("/api/imageToText",{imageURL:e.state.imageURL}).then((function(t){e.setState({value:t.data.text})})).catch((function(e){}))},e.DownloadFile=function(){var t=document.createElement("a"),n=new Blob([e.state.value],{type:"text/plain"});t.href=URL.createObjectURL(n),t.download="myFile.cpp",document.body.appendChild(t),t.click()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:x.a.run,children:[Object(a.jsx)("div",{className:x.a.heading,children:"Source Code"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:x.a.submit,onClick:function(){return e.submitHandler()},children:"Run"}),Object(a.jsx)("button",{className:x.a.submit,onClick:function(){return e.DownloadFile()},children:"Save"})]}),Object(a.jsx)("div",{className:x.a.toogle,children:Object(a.jsx)("div",{className:"cpp17"===this.state.lang?x.a.active:x.a.normal,onClick:function(){return e.modeToggleHandler("cpp17")},children:"C++"})})]}),Object(a.jsxs)("div",{className:x.a.imageDiv,children:[Object(a.jsxs)("div",{className:x.a.inputDiv,children:[Object(a.jsx)("input",{className:x.a.input,type:"file",accept:"image/x-png,image/jpg,image/jpeg",onChange:function(t){e.setState({file:t.target.files[0]})}}),Object(a.jsx)("button",{className:x.a.submit,onClick:function(){return e.handleImageUpload()},style:{marginTop:"10px"},children:"Upload"})]}),Object(a.jsxs)("div",{className:x.a.imageUploadDiv,children:[""!==this.state.imageURL?Object(a.jsx)("img",{src:this.state.imageURL,className:x.a.imagePreview}):"",""!==this.state.imageURL?Object(a.jsx)("button",{className:x.a.submit,onClick:function(){return e.handleImageToText()},style:{marginTop:"10px"},children:"Convert"}):""]})]}),Object(a.jsx)(j.Controlled,{className:x.a.code,value:this.state.value,onBeforeChange:function(t,n,a){e.setState({value:a})},options:{mode:this.state.mode,theme:"dracula",lineNumbers:!0,indentUnit:4,indentWithTabs:!0},autoCursor:!0,onChange:function(e,t,n){}})]})}}]),n}(i.Component),y=Object(v.b)((function(e){return{input:e.code.input}}),(function(e){return{outputChange:function(t){return e(function(e){return{type:b,output:e}}(t))},submitting:function(){return e({type:g})}}}))(N),C=n(5),U=n.n(C),w=function(){var e=Object(v.c)(),t=Object(v.d)((function(e){return e.code})),n=t.input,i=t.output;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:U.a.show}),Object(a.jsxs)("div",{className:U.a.item,children:[Object(a.jsxs)("div",{className:U.a.label,children:["INPUT",Object(a.jsx)("p",{style:{fontSize:"1rem",margin:0,color:"#888fb5"},children:"Go ahead test your code here!"})]}),Object(a.jsx)("textarea",{className:U.a.input,onChange:function(t){e(function(e){return{type:h,input:e}}(t.target.value))},value:n,placeholder:"Input....",spellCheck:"false"})]}),Object(a.jsxs)("div",{className:U.a.item,children:[Object(a.jsxs)("div",{className:U.a.label,children:["OUTPUT",Object(a.jsx)("p",{style:{fontSize:"1rem",margin:0,color:"#888fb5"},children:"Output of your code"})]}),Object(a.jsx)("textarea",{style:{resize:"both"},className:U.a.input,value:i,placeholder:"Output Will Be Here",spellCheck:"false"})]})]})},k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:m.a.root,children:[Object(a.jsx)("div",{className:m.a.editor,children:Object(a.jsx)(y,{})}),Object(a.jsx)("div",{className:m.a.result,children:Object(a.jsx)(w,{})})]})}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(31),R=n(4),D=n(7),L={input:null,output:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(D.a)(Object(D.a)({},e),{},{input:t.input});case b:return Object(D.a)(Object(D.a)({},e),{},{output:t.output});case g:return Object(D.a)(Object(D.a)({},e),{},{output:"Compiling...."});default:return e}},I=Object(R.c)({code:S}),B=Object(T.a)({reducer:I});s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v.a,{store:B,children:Object(a.jsx)(k,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.1273f97b.chunk.js.map