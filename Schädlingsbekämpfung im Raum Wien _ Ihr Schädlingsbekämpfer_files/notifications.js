/**
 * @desc display custom user notifications
 * @author Dominik Kressler
 * @version 1.2.0
 */
var Notification=function(){var e=document.createElement("notifications");return e.classList.add("notificationArea"),document.body.appendChild(e),this.container=e,this};Notification.prototype.add=function(e){var t=J.merge({id:"",classNames:"",message:"",saveState:!1,remove:!0,discard:!1},e),i=document.createElement("notification");i.id=t.id;var n=document.createElement("note-content");n.classList.add("noteContent"),i.setAttribute("saveState",t.saveState),i.className="notification "+t.classNames,i.appendChild(n),"string"==typeof t.message?n.innerHTML=t.message:n.appendChild(t.message);var s=document.createElement("close");return s.classList.add("close"),s.innerHTML="&times;",i.appendChild(s),s.addEventListener("click",function(e){var n=this.parentElement;n.classList.add("hide"),1==t.remove&&n.addEventListener("transitionend",function(){this.remove()}),"true"==n.getAttribute("saveState")?sessionStorage.setItem("note-"+i.id,"discarded"):sessionStorage.setItem("note-"+i.id,"")}),this.container.appendChild(i),setTimeout(function(){i.classList.add("transitionIn")},300),"discarded"==sessionStorage.getItem("note-"+t.id)?s.click():t.discard&&setTimeout(function(){s.click()},t.discard+300),this},Notification.prototype.close=function(e){document.getElementById(e).querySelector(".close").click()},notification=new Notification;