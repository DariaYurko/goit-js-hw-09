function r(e,a){const s=JSON.stringify(a);localStorage.setItem(e,s)}const t={email:"",message:""},l=document.querySelector(".feedback-form"),m="feedback-form-state";l.addEventListener("submit",e=>{e.preventDefault();let a=l.elements.email.value,s=l.elements.message.value;a=a.trim(),s=s.trim(),a===""||s===""?alert("Fill please all fields"):(console.log(t),localStorage.removeItem(m),t.email="",t.message="",l.reset()),console.log(t)});l.addEventListener("input",e=>{let a=l.elements.email.value,s=l.elements.message.value;a=a.trim(),s=s.trim(),t.email=a,t.message=s,r(m,t)});const o=localStorage.getItem(m);if(o!==null){const e=JSON.parse(o);l.elements.email.value=e.email,l.elements.message.value=e.message,t.email=e.email,t.message=e.message}
//# sourceMappingURL=2-form-4d58866d.js.map
